import PostCard from '@/components/elements/BlogCard';
import Text from '@/components/ui/text';
import { getAllPosts } from '@/lib/notion';

export default async function MyStory() {
	const blogPosts = await getAllPosts();
	const latestBlog = blogPosts[1];

	return (
		<section className="mt-14 pb-14 flex flex-col items-center">
			<Text type="h2" className="text-center">
				My story
			</Text>
			<PostCard post={latestBlog} className="mt-12 w-full" />
		</section>
	);
}
