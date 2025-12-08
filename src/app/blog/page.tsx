import PostCard from '@/components/BlogCard';
import { getPostsFromCache } from '@/lib/notion';

export default async function Home() {
	const posts = await getPostsFromCache();
	console.log('Posts:', posts[0].coverImage);

	return (
		<div>
			<div className="max-w-2xl mx-auto text-center mb-12">
				<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
					Blog
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}
