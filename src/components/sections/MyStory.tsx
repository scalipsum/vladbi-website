import Text from '@/components/ui/text';
import { getAllPosts } from '@/lib/notion';
import LandingBlogCard from '../elements/LandingBlogCard';

export default async function MyStory() {
	const blogPosts = await getAllPosts();
	const latestBlog = blogPosts[1];

	return (
		<section className="mt-34 flex flex-col items-center">
			<Text type="h2" className="text-center">
				My story
			</Text>
			<LandingBlogCard post={latestBlog} className="mt-12" />
		</section>
	);
}
