import Text from '@/components/ui/text';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export default function LatestAutomation() {
	return (
		<section className="mt-14 pb-14">
			<Text type="h2">Latest automation</Text>

			<Card className="px-8 py-6 mt-8">
				<Link
					href={`/blog/hello`}
					className="absolute inset-0 z-10"
					aria-label="Title"
				/>
				<div className="flex flex-row items-center">
					<div className="w-1/3 flex flex-col items-start">
						<Text type="h3">Blog Posting AI Agent</Text>
						<Text className="mt-2">For an SEO Agency</Text>
					</div>
					<div className="w-1/3 flex justify-center ml-4">
						<Text>
							Page layouts look better with something in each
							section. Web page designers, content writers like
							this.
						</Text>
					</div>
					<div className="w-1/3 flex justify-end">
						<Button asChild className="self-end">
							<Link href="#get-started">View project</Link>
						</Button>
					</div>
				</div>
			</Card>
		</section>
	);
}
