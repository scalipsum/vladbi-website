import PostCard from '@/components/elements/BlogCard';
import ContentLayout from '@/components/layout/ContentLayout';
import Text from '@/components/ui/text';
import { getAllPosts } from '@/lib/notion';

export default async function Home() {
	const posts = await getAllPosts();

	return (
		<div>
			<Text type="h1" className="text-center mb-8 mt-16">
				Blog
			</Text>
			<ContentLayout>
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
		</div>
	);
}
