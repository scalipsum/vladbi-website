import {
	BlogPost,
	Product,
	getBlogPostsFromCache,
	getProductsFromCache,
} from '@/lib/notion';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vladbi.com';

	// Fetch dynamic content
	const posts = await getBlogPostsFromCache();
	const products = await getProductsFromCache();

	// Generate blog post URLs
	const postUrls = posts.map((post: BlogPost) => ({
		url: `${siteUrl}/blog/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: 'weekly' as const,
		priority: 0.8,
	}));

	// Generate product URLs
	const productUrls = products.map((product: Product) => ({
		url: `${siteUrl}/products/${product.slug}`,
		lastModified: new Date(product.date),
		changeFrequency: 'weekly' as const,
		priority: 0.8,
	}));

	// Define static routes
	const staticRoutes = [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: 'daily' as const,
			priority: 1,
		},
		{
			url: `${siteUrl}/services`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.9,
		},
		{
			url: `${siteUrl}/products`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.9,
		},
		{
			url: `${siteUrl}/book-a-call`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.6,
		},
		{
			url: `${siteUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'daily' as const,
			priority: 0.9,
		},
		{
			url: `${siteUrl}/services/saas-products`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${siteUrl}/services/ai-automation`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
	];

	return [...staticRoutes, ...postUrls, ...productUrls];
}
