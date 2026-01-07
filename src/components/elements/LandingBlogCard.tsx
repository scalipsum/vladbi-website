import { Card, CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/text';
import { BlogPost, getWordCount } from '@/lib/notion';
import { calculateReadingTime, cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface LandingBlogCardProps {
	post: BlogPost;
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
				'md:pt-16 pt-34 pb-8 md:pr-6 md:min-w-[700px] md:max-w-[900px] w-full md:w-auto md:ml-20 border-slate-300',
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
				<div className="md:w-1/2 w-0" />

				<div className="md:max-w-1/2 md:aspect-[16/10] md:w-auto md:h-auto w-[320px] h-[180px] md:w-full overflow-hidden rounded-lg absolute left-1/2 md:-left-20 -translate-x-1/2 md:translate-x-0 -top-16 md:top-auto">
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
				<div className="md:text-left md:w-1/2 text-center w-full md:self-end relative">
					<Text type="h2">{post.title}</Text>

					<div className="flex items-center flex-row justify-center md:justify-start gap-4 md:mt-10 mt-6">
						{post.author && (
							<div className="flex items-center justify-start gap-2">
								{post.authorAvatar && (
									<Image
										src={post.authorAvatar}
										alt={post.author}
										width={24}
										height={24}
										className="rounded-full"
									/>
								)}
								<Text type="span">{post.author}</Text>
							</div>
						)}

						<div className="items-center gap-1.5 flex">
							<Calendar className="h-4 w-4" />
							<Text type="span">
								{format(new Date(post.date), 'MMM d, yyyy')}
							</Text>
						</div>
					</div>

					<div className="flex items-center justify-center md:justify-start gap-1.5 md:mt-1.5 mt-3">
						<Clock className="h-4 w-4" />
						<Text type="span">{readingTime}</Text>
					</div>

					<div className="flex md:justify-end justify-center md:mt-10 mt-0">
						<Button asChild className="mt-8">
							<Link href="#get-started">Read more</Link>
						</Button>
					</div>
				</div>
			</CardHeader>
		</Card>
	);
}
