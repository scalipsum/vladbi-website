import { getBlogPostsFromCache, BlogPost } from '@/lib/notion';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site.com';

	const posts = await getBlogPostsFromCache();
	const postUrls = posts.map((post: BlogPost) => ({
		url: `${siteUrl}/blog/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: 'weekly' as const,
		priority: 0.8,
	}));

	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: 'daily' as const,
			priority: 1,
		},
		...postUrls,
	];
}
