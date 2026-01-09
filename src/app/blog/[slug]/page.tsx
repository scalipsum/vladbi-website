import { BlockRender } from '@/components/elements/BlockRender';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import TightContentLayout from '@/components/layout/TightContentLayout';
import AllProducts from '@/components/sections/AllProducts';
import Text from '@/components/ui/text';
import { getBlogPostsFromCache, getWordCount } from '@/lib/notion';
import { calculateReadingTime } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';
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

	const wordCount = post?.content ? getWordCount(post.content) : 0;
	const readingTime = calculateReadingTime(wordCount);

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
				<ServicePageLayout
					title={post.title}
					ctaTitle={
						post.slug === 'my-story'
							? 'Tell me about your project'
							: 'View My Work'
					}
					ctaSubtitle={
						post.slug === 'my-story'
							? "And let's build your vision."
							: 'Great ideas turned into Real Products'
					}
					ctaButtonText={
						post.slug === 'my-story'
							? 'Take the product quiz'
							: 'View Case Studies'
					}
					ctaHref={post.slug === 'my-story' ? '/quiz' : '/products'}
					headerBackgroundUrl={post.coverImage}
					headerTextColor="white"
					layoutClassName="relative overflow-visible mt-0 mb-0 pb-0"
					hiddenPattern
					additionalHeaderContent={
						<div className="mt-4">
							<div className="flex items-center gap-4 text-sm text-white mt-2">
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
										<span>{post.author}</span>
									</div>
								)}
								<div className="flex items-center gap-1.5">
									<Calendar className="h-4 w-4" />
									<span>
										{format(
											new Date(post.date),
											'MMM d, yyyy',
										)}
									</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Clock className="h-4 w-4" />
									<span>{readingTime}</span>
								</div>
							</div>
						</div>
					}
				>
					<TightContentLayout className="relative !overflow-visible bg-background px-1 lg:px-8 pt-12 pb-20 rounded-md">
						{post.blocks && post.blocks.length > 0 && (
							<BlockRender
								blocks={post.blocks}
								config={{
									className: {
										h1: 'text-3xl md:text-4xl font-main font-extrabold md:mb-8 text-brand text-center',
										h2: 'text-2xl md:text-3xl font-main md:mb-3 font-extrabold text-brand text-center md:text-left',
										h3: 'text-2xl font-main mb-3 font-bold text-brand text-center md:text-left',
										paragraph:
											'text-lg leading-relaxed mb-3.5 text-foreground font-sans',
										quote: 'border-b-4 font-sans font-bold border-l-0 border-brand-100 dark:border-brand-500 my-6 text-brand text-2xl bg-slate-100 dark:bg-slate-900 dark:text-white py-5 text-center rounded-md',
										columnList: 'my-8',
										image: 'rounded-lg my-6',
									},
								}}
							/>
						)}

						{post.slug === 'my-story' && (
							<>
								{/* <Quote
								quote="It"
								name="Duncan Cook"
								profession="Founder & CEO of 3 Sided Cube"
								avatar="https://media.licdn.com/dms/image/v2/C4D03AQF6ystn7ykm8g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1611665635503?e=1769644800&v=beta&t=2ttN1_5SgJvxBLWKDTR_0LT0lAfkx-lkyals-jAu910"
								noAnimation
								hiddenTitle
								className="!mt-0 mb-6"
							/> */}
								<Text
									type="h3"
									className="mt-16 md:mt-24 !text-3xl text-center md:text-left"
								>
									Some of my work
								</Text>
								<AllProducts className="md:mt-14 mt-2 md:gap-32 gap-10" />
							</>
						)}
					</TightContentLayout>
				</ServicePageLayout>
			</article>
		</>
	);
}
