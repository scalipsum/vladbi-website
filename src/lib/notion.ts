import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { PageObjectResponse } from "@notionhq/client/";
import { unstable_cache } from "next/cache";
import { revalidateTag } from "next/cache";
import dotenv from "dotenv";
import path from "path";

if (!process.env.VERCEL && !process.env.NOTION_TOKEN) {
  dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
}

const notionToken = process.env.NOTION_TOKEN!;
const databaseId = process.env.NOTION_DATABASE_ID!;

export const notion = new Client({ auth: notionToken });
export const n2m = new NotionToMarkdown({ notionClient: notion });

export interface Post {
  id: string;
  title: string;
  slug: string;
  coverImage?: string;
  description: string;
  date: string;
  content: string;
  author?: string;
  tags?: string[];
  category?: string;
}

export async function getDatabaseStructure() {
  const database = await notion.databases.retrieve({
    database_id: databaseId,
  });
  return database;
}

export function getWordCount(content: string): number {
  const cleanText = content
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleanText.split(" ").length;
}

// Cached function to fetch all published posts
const getCachedPosts = unstable_cache(
  async (): Promise<Post[]> => {
    console.log("Fetching posts from Notion...");
    const posts = await fetchPublishedPosts();
    
    const allPosts = [];
    
    for (const post of posts) {
      const postDetails = await getPostFromNotion(post.id);
      if (postDetails) {
        allPosts.push(postDetails);
      }
    }
    
    console.log(`Successfully fetched ${allPosts.length} posts.`);
    return allPosts;
  },
  ['blog-posts'],
  {
    tags: ['blog-posts'],
    revalidate: false, // Only manual revalidation
  }
);

export async function getPostsFromCache(): Promise<Post[]> {
  try {
    return await getCachedPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function fetchPublishedPosts() {
  const posts = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "Status",
          status: {
            equals: "Published",
          },
        },
      ],
    },
    sorts: [
      {
        property: "Published Date",
        direction: "descending",
      },
    ],
  });

  return posts.results as PageObjectResponse[];
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPostsFromCache();
  const post = posts.find((p) => p.slug === slug);
  return post || null;
}

export async function refreshPostsCache(): Promise<{
  success: boolean;
  message: string;
  count?: number;
}> {
  try {
    console.log("Refreshing posts cache...");
    
    // Trigger revalidation of the cached posts
    revalidateTag('blog-posts');
    
    // Fetch fresh data to get count
    const posts = await fetchPublishedPosts();
    const allPosts = [];
    
    for (const post of posts) {
      const postDetails = await getPostFromNotion(post.id);
      if (postDetails) {
        allPosts.push(postDetails);
      }
    }

    console.log(`Successfully refreshed cache with ${allPosts.length} posts.`);
    return {
      success: true,
      message: `Successfully refreshed cache with ${allPosts.length} posts`,
      count: allPosts.length,
    };
  } catch (error) {
    console.error("Error refreshing cache:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

export async function getPostFromNotion(pageId: string): Promise<Post | null> {
  try {
    const page = (await notion.pages.retrieve({
      page_id: pageId,
    })) as PageObjectResponse;
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const { parent: contentString } = n2m.toMarkdownString(mdBlocks);

    // Get first paragraph for description (excluding empty lines)
    const paragraphs = contentString
      .split("\n")
      .filter((line: string) => line.trim().length > 0);
    const firstParagraph = paragraphs[0] || "";
    const description =
      firstParagraph.slice(0, 160) + (firstParagraph.length > 160 ? "..." : "");

    const properties = page.properties as any;
    const post: Post = {
      id: page.id,
      title: properties.Title.title[0]?.plain_text || "Untitled",
      slug:
        properties.Title.title[0]?.plain_text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-") // Replace any non-alphanumeric chars with dash
          .replace(/^-+|-+$/g, "") || "untitled", // Remove leading/trailing dashes
      coverImage: properties["Featured Image"]?.url || undefined,
      description,
      date:
        properties["Published Date"]?.date?.start || new Date().toISOString(),
      content: contentString,
      author: properties.Author?.people[0]?.name,
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      category: properties.Category?.select?.name,
    };

    return post;
  } catch (error) {
    console.error("Error getting post:", error);
    return null;
  }
}
