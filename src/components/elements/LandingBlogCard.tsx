import { Card, CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/text';
import { Post, getWordCount } from '@/lib/notion';
import { calculateReadingTime, cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface LandingBlogCardProps {
	post: Post;
	className?: string;
}

export default function LandingBlogCard({
	post,
	className,
}: LandingBlogCardProps) {
	const wordCount = post.content ? getWordCount(post.content) : 0;
	const readingTime = calculateReadingTime(wordCount);

	return (
		<Card
			className={cn(
				'pt-16 pb-8 pr-6 min-w-[700px] max-w-[900px] ml-20',
				className,
			)}
		>
			<Link
				href={`/blog/${post.slug}`}
				className="absolute inset-0 z-10"
				aria-label={post.title}
			/>
			<CardHeader className="flex">
				{/* Left side */}
				<div className="w-1/2" />

				<div className="absolute bottom-4 left-4 z-20 flex items-center gap-4">
					<div className="flex items-center gap-1.5">
						<Clock className="h-4 w-4" />
						<span>{readingTime}</span>
					</div>
					<div className="flex items-center gap-1.5">
						<Calendar className="h-4 w-4" />
						<span>
							{format(new Date(post.date), 'MMM d, yyyy')}
						</span>
					</div>
				</div>
				<div className="max-w-1/2 aspect-[16/10] w-full overflow-hidden rounded-lg absolute -left-20">
					{post.coverImage ? (
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					) : (
						<div className="absolute inset-0 bg-muted/80" />
					)}
				</div>
				{/* Right side */}
				<div className="text-left w-1/2 self-end relative">
					<Text type="h2">{post.title}</Text>
					<Text className="line-clamp-3 mt-7 !text-lg">
						{post.description}
					</Text>
					<div className="flex justify-end mt-16">
						<Button asChild className="mt-8">
							<Link href="#get-started">Read more</Link>
						</Button>
					</div>
				</div>
			</CardHeader>

			{/* <Badge
								variant="secondary"
								className="backdrop-blur-sm bg-background/80 shadow-sm"
							>
								{post.category}
							</Badge> */}

			{/* <div className="flex items-center gap-4 text-sm text-muted-foreground"> */}
			{/* <div className="flex items-center gap-1.5">
						<Calendar className="h-4 w-4" />
						<span>
							{format(new Date(post.date), 'MMM d, yyyy')}
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						<Clock className="h-4 w-4" />
						<span>{readingTime}</span>
					</div> */}
			{/* </div> */}

			{/* <CardContent>
				{post.author && (
					<p className="text-sm text-muted-foreground">
						By {post.author}
					</p>
				)}
			</CardContent> */}
			{/* {post.tags && post.tags.length > 0 && (
				<CardFooter>
					<div className="flex gap-2 flex-wrap">
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
