import PostCard from '@/components/elements/BlogCard';
import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';
import CallToAction from '@/components/sections/CallToAction';
import { getBlogPostsFromCache } from '@/lib/notion';
import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vladbi.com';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Real thoughts. No AI. Browse all blog posts and articles.',
	openGraph: {
		title: 'Blog | Vladbi',
		description:
			'Real thoughts. No AI. Browse all blog posts and articles.',
		type: 'website',
		url: `${siteUrl}/blog`,
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Blog | Vladbi',
		description:
			'Real thoughts. No AI. Browse all blog posts and articles.',
	},
};

export default async function Home() {
	const posts = await getBlogPostsFromCache();

	return (
		<div>
			<Header title="Blog" subTitle="Real thoughts. No AI." />
			<ContentLayout>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-8">
					{posts.map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</div>
			</ContentLayout>
			<CallToAction
				title="View My Work"
				subtitle="See ideas turned to Real Products"
				buttonText="View Case Studies"
				href="/products"
				className="mt-24"
			/>
		</div>
	);
}
