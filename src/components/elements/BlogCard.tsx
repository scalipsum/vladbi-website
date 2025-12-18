import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/text';
import { BlogPost, getWordCount } from '@/lib/notion';
import { calculateReadingTime, cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
	post: BlogPost;
	className?: string;
}

export default function BlogCard({ post, className }: PostCardProps) {
	const wordCount = post.content ? getWordCount(post.content) : 0;
	const readingTime = calculateReadingTime(wordCount);

	return (
		<Card
			className={cn(
				'group relative overflow-hidden transition-all bg-card/50 text-left pb-2 border-0',
				className,
			)}
		>
			<Link
				href={`/blog/${post.slug}`}
				className="absolute inset-0 z-10"
				aria-label={post.title}
			/>
			<div className="relative aspect-[16/9] h-[300px] w-full overflow-hidden rounded-t-lg">
				{post.coverImage ? (
					<Image
						src={post.coverImage}
						alt={post.title}
						fill
						className="object-cover"
					/>
				) : (
					<div className="absolute inset-0 bg-muted/80" />
				)}
				{post.category && (
					<div className="absolute top-4 left-4 z-20">
						<Badge
							variant="secondary"
							className="backdrop-blur-sm bg-background/80 shadow-sm"
						>
							{post.category}
						</Badge>
					</div>
				)}
			</div>
			<CardHeader className="py-5 pb-4">
				<div className="group-hover:pr-8 transition-all duration-300">
					<Text type="h3">{post.title}</Text>
					<ArrowUpRight className="absolute top-[7.5rem] right-6 h-6 w-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white dark:text-black" />
				</div>

				<div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
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
							{format(new Date(post.date), 'MMM d, yyyy')}
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						<Clock className="h-4 w-4" />
						<span>{readingTime}</span>
					</div>
				</div>
			</CardHeader>
			{/* {post.tags && post.tags.length > 0 && (
				<CardFooter className="mt-4 mb-4">
					<div className="-ml-2 flex gap-2 flex-wrap">
						{post.tags.map((tag) => (
							<Badge
								key={tag}
								variant="outline"
								className="bg-background/80"
							>
								{tag}
							</Badge>
						))}
					</div>
				</CardFooter>
			)} */}
		</Card>
	);
}
