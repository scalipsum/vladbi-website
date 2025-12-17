import { BlockRender } from '@/components/elements/BlockRender';
import { Badge } from '@/components/ui/badge';
import { getBlogPostsFromCache } from '@/lib/notion';
import { getWordCountFromBlocks } from '@/lib/notion-blocks';
import { calculateReadingTime } from '@/lib/utils';
import { format } from 'date-fns';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface PostPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const posts = await getBlogPostsFromCache();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const posts = await getBlogPostsFromCache();
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		return {
			title: 'Post Not Found',
		};
	}

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vladbi.com';

	return {
		title: post.title,
		description: post.description,
		openGraph: {
			title: post.title,
			description: post.description,
			type: 'article',
			url: `${siteUrl}/posts/${post.slug}`,
			publishedTime: new Date(post.date).toISOString(),
			authors: post.author ? [post.author] : [],
			tags: post.tags,
			images: [
				{
					url: post.coverImage || `${siteUrl}/opengraph-image.png`,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.description,
			images: [
				{
					url: post.coverImage || `${siteUrl}/opengraph-image.png`,
					alt: post.title,
				},
			],
		},
	};
}

export default async function PostPage({ params }: PostPageProps) {
	const { slug } = await params;
	const posts = await getBlogPostsFromCache();
	const post = posts.find((p) => p.slug === slug);

	// Calculate word count from blocks
	const wordCount = post?.blocks ? getWordCountFromBlocks(post.blocks) : 0;

	if (!post) {
		notFound();
	}

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vladbi.com';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		image: post.coverImage || `${siteUrl}/opengraph-image.png`,
		datePublished: new Date(post.date).toISOString(),
		author: {
			'@type': 'Person',
			name: post.author || 'Guest Author',
		},
		publisher: {
			'@type': 'Organization',
			name: 'Your Site Name',
			logo: {
				'@type': 'ImageObject',
				url: `${siteUrl}/logo.png`,
			},
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${siteUrl}/posts/${post.slug}`,
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<article>
				{post.coverImage && (
					<div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover"
							priority
						/>
					</div>
				)}

				<header className="mb-8">
					<div className="flex items-center gap-4 text-muted-foreground mb-4">
						<time>
							{format(new Date(post.date), 'MMMM d, yyyy')}
						</time>
						{post.author && (
							<div className="flex items-center gap-2">
								{post.authorAvatar && (
									<Image
										src={post.authorAvatar}
										alt={post.author}
										width={24}
										height={24}
										className="rounded-full"
									/>
								)}
								<span>By {post.author}</span>
							</div>
						)}
						<span>{calculateReadingTime(wordCount)}</span>
						<span>{wordCount} words</span>
					</div>

					<h1 className="text-4xl font-bold mb-4 text-foreground">
						{post.title}
					</h1>

					<div className="flex gap-4 mb-4">
						{post.category && (
							<Badge variant="secondary">{post.category}</Badge>
						)}
						{post.tags &&
							post.tags.map((tag) => (
								<Badge key={tag} variant="outline">
									{tag}
								</Badge>
							))}
					</div>
				</header>

				<div className="max-w-none">
					{post.blocks && post.blocks.length > 0 && (
						<BlockRender
							blocks={post.blocks}
							config={{
								className: {
									h1: 'text-4xl font-bold mb-4 text-foreground',
									h2: 'text-2xl font-bold mb-3 text-foreground',
									h3: 'text-xl font-semibold mb-2 text-foreground',
									paragraph:
										'text-base leading-relaxed mb-4 text-foreground',
									quote: 'border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic my-6 text-muted-foreground',
									columnList: 'my-8',
									image: 'rounded-lg my-6',
								},
							}}
						/>
					)}
				</div>
			</article>
		</>
	);
}
