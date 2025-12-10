'use client';

import Text from '@/components/ui/text';
import Link from 'next/link';
import TimelineItem from '../TimelineItem';
import { Button } from '../ui/button';

export default function GetStarted() {
	return (
		<section id="get-started" className="mt-10 px-4 md:px-24 lg:px-48">
			{/* Section title */}
			<div className="flex justify-center">
				<div className="inline-block">
					<Text type="h2">Get Started</Text>
					<div className="h-1.5 bg-brand rounded-full w-full self-center mt-2.5" />
				</div>
			</div>

			{/*  Timeline */}
			<TimelineItem className="mt-16" active>
				<div className="flex flex-row justify-between  gap-24">
					<div className="flex-1">
						<Text type="h3">1. Take the project quiz</Text>
						<Text className="mt-4">
							Simple questions around your project to have basic
							understanding about what you’re trying to build.
						</Text>
						<Button asChild className="mt-6">
							<Link href="/blog">Take the quiz</Link>
						</Button>
					</div>
					<div className="h-48 w-72 rounded-md bg-gray-300 flex-1" />
				</div>
			</TimelineItem>

			<TimelineItem className="mt-14">
				<div className="flex flex-row justify-between  gap-24">
					<div className="flex-1">
						<Text type="h3" className="text-brand-200">
							2. We join a discovery call
						</Text>
						<Text className="mt-6">
							To clarify in a more meaningful way what the project
							is about and to define what success looks like in
							our collaboration.
						</Text>
					</div>
					<div className="h-48 w-72 rounded-md bg-gray-300 flex-1" />
				</div>
			</TimelineItem>

			<TimelineItem className="mt-14">
				<div className="flex flex-row justify-between  gap-24">
					<div className="flex-1">
						<Text type="h3" className="text-brand-200">
							3. We agree & start working
						</Text>
						<Text className="mt-6">
							After the call, I’ll send you a doc. which outlines
							what we’ve talked about, time estimates and cost.
							Once signed, we begin.
						</Text>
					</div>
					<div className="h-48 w-72 rounded-md bg-gray-300 flex-1" />
				</div>
			</TimelineItem>
		</section>
	);
}
