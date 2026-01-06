import { generateOGImage, generateOGImageWithCover } from '@/lib/og';
import { getBlogPostsFromCache } from '@/lib/notion';

export const alt = 'Blog Post | VladBi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
	const posts = await getBlogPostsFromCache();
	return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const posts = await getBlogPostsFromCache();
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		return generateOGImage({
			title: 'Post Not Found',
		});
	}

	return generateOGImageWithCover({
		title: post.title,
		subtitle: post.category || 'Blog',
		description: post.description,
		coverImage: post.coverImage,
	});
}
