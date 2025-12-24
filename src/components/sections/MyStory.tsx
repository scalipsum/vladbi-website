import Text from '@/components/ui/text';
import { getBlogPostsFromCache } from '@/lib/notion';
import LandingBlogCard from '../elements/LandingBlogCard';

export default async function MyStory() {
	const blogPosts = await getBlogPostsFromCache();
	const latestBlog = blogPosts[0];
	return (
		<section className="flex flex-col items-center md:mt-40 mt-24">
			<Text type="h2" className="ml-8">
				Trained by industry leaders
			</Text>
			{!latestBlog ? (
				<Text className="mt-8">No blog post available.</Text>
			) : (
				<LandingBlogCard post={latestBlog} className="md:mt-8 mt-24" />
			)}
		</section>
	);
}
