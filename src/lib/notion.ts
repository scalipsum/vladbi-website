import { Client } from '@notionhq/client';
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/';
import dotenv from 'dotenv';
import { revalidateTag, unstable_cache } from 'next/cache';
import { NotionToMarkdown } from 'notion-to-md';
import path from 'path';

if (!process.env.VERCEL && !process.env.NOTION_TOKEN) {
	dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
}

const notionToken = process.env.NOTION_TOKEN!;
const blogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID!;
const productsDatabaseId = process.env.NOTION_PRODUCTS_DATABASE_ID!;

export const notion = new Client({ auth: notionToken });
export const n2m = new NotionToMarkdown({ notionClient: notion });

export interface BlogPost {
	id: string;
	title: string;
	slug: string;
	coverImage?: string;
	description: string;
	date: string;
	content: string;
	author?: string;
	authorAvatar?: string;
	tags?: string[];
	category?: string;
	blocks?: BlockObjectResponse[];
}

export interface Product {
	id: string;
	title: string;
	slug: string;
	coverImage?: string;
	verticalImage?: string;
	subTitle: string;
	description: string;
	date: string;
	category?: string;
	blocks?: BlockObjectResponse[];
}

export async function getDatabaseStructure() {
	const database = await notion.databases.retrieve({
		database_id: blogDatabaseId,
	});
	return database;
}

export function getWordCount(content: string): number {
	const cleanText = content
		.replace(/[^\w\s]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
	return cleanText.split(' ').length;
}

/**
 * Recursively fetches all blocks and their children from a Notion page
 * @param blockId The page or block ID to fetch blocks from
 * @returns Array of blocks with nested children
 */
async function fetchBlocksRecursively(
	blockId: string,
): Promise<BlockObjectResponse[]> {
	const blocks: BlockObjectResponse[] = [];

	try {
		const response = await notion.blocks.children.list({
			block_id: blockId,
			page_size: 100,
		});

		for (const block of response.results as BlockObjectResponse[]) {
			// Recursively fetch children for nested blocks (columns, toggles, etc.)
			if (block.has_children) {
				const children = await fetchBlocksRecursively(block.id);
				// Store children in the block object
				(block as any).children = children;
			}

			blocks.push(block);
		}
	} catch (error) {
		console.error('Error fetching blocks:', error);
	}

	return blocks;
}

// Cached function to fetch all published posts
export const getBlogPostsFromCache = unstable_cache(
	async (): Promise<BlogPost[]> => {
		console.log('Fetching posts from Notion...');
		const posts = await fetchPublishedItems(blogDatabaseId);

		const allPosts = [];

		for (const post of posts) {
			const postDetails = await getBlogPostFromNotion(post.id);
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
	},
);

// Cached function to fetch all published products
export const getProductsFromCache = unstable_cache(
	async (): Promise<Product[]> => {
		console.log('Fetching products from Notion...');
		const products = await fetchPublishedItems(productsDatabaseId);

		const allProducts = [];

		for (const product of products) {
			const productDetails = await getProductFromNotion(product.id);
			if (productDetails) {
				allProducts.push(productDetails);
			}
		}

		console.log(`Successfully fetched ${allProducts.length} products.`);
		return allProducts;
	},
	['products'],
	{
		tags: ['products'],
		revalidate: false, // Only manual revalidation
	},
);

// Helper function to fetch latest product by category (not cached directly)
async function fetchLatestProductByCategory(
	category: string,
): Promise<Product | null> {
	console.log(`Fetching latest ${category} product from Notion...`);

	const response = await notion.databases.query({
		database_id: productsDatabaseId,
		filter: {
			and: [
				{
					property: 'Status',
					status: {
						equals: 'Published',
					},
				},
				{
					property: 'Category',
					select: {
						equals: category,
					},
				},
			],
		},
		sorts: [
			{
				property: 'Published Date',
				direction: 'descending',
			},
		],
		page_size: 1,
	});

	if (response.results.length === 0) {
		console.log(`No published ${category} products found.`);
		return null;
	}

	const product = response.results[0] as PageObjectResponse;
	const productDetails = await getProductFromNotion(product.id);

	if (productDetails) {
		console.log(
			`Successfully fetched latest ${category} product: ${productDetails.title}`,
		);
	}

	return productDetails;
}

// Cached functions for specific categories
export const getLatestSaasProduct = unstable_cache(
	async () => fetchLatestProductByCategory('SaaS'),
	['latest-saas-product'],
	{
		tags: ['latest-saas-product'],
		revalidate: false,
	},
);

export const getLatestAutomationProduct = unstable_cache(
	async () => fetchLatestProductByCategory('Automation'),
	['latest-automation-product'],
	{
		tags: ['latest-automation-product'],
		revalidate: false,
	},
);

// Generic function to fetch published items from any database
export async function fetchPublishedItems(databaseId: string) {
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			and: [
				{
					property: 'Status',
					status: {
						equals: 'Published',
					},
				},
			],
		},
		sorts: [
			{
				property: 'Published Date',
				direction: 'descending',
			},
		],
	});

	return response.results as PageObjectResponse[];
}

type CacheType = 'blog-posts' | 'products';

export async function refreshCacheData(type: CacheType): Promise<{
	success: boolean;
	message: string;
	count?: number;
}> {
	try {
		const isBlogPosts = type === 'blog-posts';
		const itemName = isBlogPosts ? 'posts' : 'products';
		const databaseId = isBlogPosts ? blogDatabaseId : productsDatabaseId;
		const getItemFunction = isBlogPosts
			? getBlogPostFromNotion
			: getProductFromNotion;

		revalidateTag(type);

		if (type === 'products') {
			revalidateTag('latest-saas-product');
			revalidateTag('latest-automation-product');
		}

		const items = await fetchPublishedItems(databaseId);
		const allItems = [];

		for (const item of items) {
			const itemDetails = await getItemFunction(item.id);
			if (itemDetails) {
				allItems.push(itemDetails);
			}
		}
		return {
			success: true,
			message: `Successfully refreshed cache with ${allItems.length} ${itemName}`,
			count: allItems.length,
		};
	} catch (error) {
		console.error('Error refreshing cache:', error);
		return {
			success: false,
			message:
				error instanceof Error
					? error.message
					: 'Unknown error occurred',
		};
	}
}

export async function getBlogPostFromNotion(
	pageId: string,
): Promise<BlogPost | null> {
	try {
		const page = (await notion.pages.retrieve({
			page_id: pageId,
		})) as PageObjectResponse;

		// Fetch blocks for direct rendering
		const blocks = await fetchBlocksRecursively(pageId);

		// Keep markdown conversion for backward compatibility (can be removed later)
		const mdBlocks = await n2m.pageToMarkdown(pageId);
		const { parent: contentString } = n2m.toMarkdownString(mdBlocks);

		// Get first paragraph for description (excluding empty lines)
		const paragraphs = contentString
			.split('\n')
			.filter((line: string) => line.trim().length > 0);
		const firstParagraph = paragraphs[0] || '';
		const description =
			firstParagraph.slice(0, 160) +
			(firstParagraph.length > 160 ? '...' : '');

		const properties = page.properties as any;

		const authorPageId = properties.Author.relation[0].id;
		const authorResponse = (await notion.pages.retrieve({
			page_id: authorPageId,
		})) as PageObjectResponse;
		const authorProps = authorResponse.properties as any;
		const author = authorProps.Name.title[0].plain_text ?? undefined;
		const authorAvatar = authorProps.Avatar.files[0].file.url ?? undefined;

		const post: BlogPost = {
			id: page.id,
			title: properties.Title.title[0]?.plain_text || 'Untitled',
			slug:
				properties.Title.title[0]?.plain_text
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '-') // Replace any non-alphanumeric chars with dash
					.replace(/^-+|-+$/g, '') || 'untitled', // Remove leading/trailing dashes
			coverImage:
				// @ts-expect-error-next-line
				page?.cover?.file?.url ?? page?.cover?.external?.url ?? null,
			description,
			date:
				properties['Published Date']?.date?.start ||
				new Date().toISOString(),
			content: contentString,
			author,
			authorAvatar,
			tags:
				properties.Tags?.multi_select?.map((tag: any) => tag.name) ||
				[],
			category: properties.Category?.select?.name,
			blocks,
		};

		return post;
	} catch (error) {
		console.error('Error getting post:', error);
		return null;
	}
}

export async function getProductFromNotion(
	pageId: string,
): Promise<Product | null> {
	try {
		const page = (await notion.pages.retrieve({
			page_id: pageId,
		})) as PageObjectResponse;

		const properties = page.properties as any;

		// Fetch blocks for the product page
		const blocks = await fetchBlocksRecursively(pageId);

		const product: Product = {
			id: page.id,
			title: properties.Title.title[0]?.plain_text || 'Untitled',
			slug:
				properties.Title.title[0]?.plain_text
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '-') // Replace any non-alphanumeric chars with dash
					.replace(/^-+|-+$/g, '') || 'untitled', // Remove leading/trailing dashes
			coverImage:
				// @ts-expect-error-next-line
				page?.cover?.file?.url ?? page?.cover?.external?.url ?? null,
			verticalImage:
				properties['Vertical Image']?.files?.[0]?.file?.url ?? null,
			subTitle: properties.Subtitle?.rich_text?.[0]?.plain_text || '',
			description:
				properties.Description?.rich_text?.[0]?.plain_text || '',
			date:
				properties['Published Date']?.date?.start ||
				new Date().toISOString(),
			category: properties.Category?.select?.name,
			blocks,
		};

		return product;
	} catch (error) {
		console.error('Error getting product:', error);
		return null;
	}
}
