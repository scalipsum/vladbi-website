import PostCard from '@/components/elements/BlogCard';
import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';
import CallToAction from '@/components/sections/CallToAction';
import { getAllPosts } from '@/lib/notion';

export default async function Home() {
	const posts = await getAllPosts();

	return (
		<div>
			<Header title="Blog" subTitle="Real thoughts. No AI." />
			<ContentLayout className="mt-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{posts.map((post) => (
						<PostCard
							key={post.id}
							post={post}
							className="min-w-[400px]"
						/>
					))}
				</div>
			</ContentLayout>
			<CallToAction
				title="Let's get started"
				subtitle="Bring your idea to life."
				className="mt-24"
			/>
		</div>
	);
}
