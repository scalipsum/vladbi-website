'use client';

import Text from '@/components/ui/text';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import TimelineItem from '../elements/TimelineItem';
import TightContentLayout from '../layout/TightContentLayout';
import { Button } from '../ui/button';

const BUCKET_URL =
	'https://bgefmqefmboheirzxqvu.supabase.co/storage/v1/object/public/vladbi/website/landing';

const stepVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1] as const,
		},
	},
};

function AnimatedStep({ children }: { children: React.ReactNode }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			variants={stepVariants}
		>
			{children}
		</motion.div>
	);
}

export default function GetStarted() {
	return (
		<section id="get-started" className="mt-16 mb-12">
			<TightContentLayout className="overflow-y-hidden px-1">
				{/* Section title */}
				<div className="flex justify-center">
					<div className="inline-block">
						<Text type="h2">How we work</Text>
						<div className="h-1.5 bg-brand rounded-full w-full self-center mt-2.5" />
					</div>
				</div>

				{/*  Timeline */}
				<div>
					<AnimatedStep>
						<TimelineItem className="md:mt-20 mt-12" active>
							<div className="flex-1">
								<Text type="h3">1. Take the product quiz</Text>
								<Text className="mt-4">
									Simple questions around your project to have
									basic understanding about what you're trying
									to build.
								</Text>
								<Button asChild className="mt-6">
									<Link href="/quiz">Take the quiz</Link>
								</Button>
							</div>
							<Image
								src={`${BUCKET_URL}/project-quiz.webp`}
								alt="Product quiz illustration"
								width={288}
								height={192}
								className="h-52 w-72 rounded-md object-cover object-top md:flex-1 border border-slate-200"
							/>
						</TimelineItem>
					</AnimatedStep>

					<AnimatedStep>
						<TimelineItem className="mt-16 md:mt-20">
							<div className="flex-1">
								<Text
									type="h3"
									className="text-gray-600 dark:text-gray-200"
								>
									2. We have a Discovery Call
								</Text>
								<Text className="mt-6">
									To clarify in a more meaningful way what the
									project is about. Then we define what
									success looks like in our collaboration.
								</Text>
							</div>
							<Image
								src={`${BUCKET_URL}/OG%202%20copy.webp`}
								alt="Discovery call illustration"
								width={288}
								height={192}
								className="h-52 w-72 rounded-md object-cover object-bottom md:flex-1"
							/>
						</TimelineItem>
					</AnimatedStep>

					<AnimatedStep>
						<TimelineItem className="mt-16 md:mt-20">
							<div className="flex-1">
								<Text
									type="h3"
									className="text-gray-600 dark:text-gray-200"
								>
									3. We agree & Start working
								</Text>
								<Text className="mt-8">
									After the call, we'll send you a proposal
									which outlines the project, time estimates
									and cost. Once signed, we begin.
								</Text>
							</div>
							<Image
								src={`${BUCKET_URL}/646%20(3).png`}
								alt="Sign and start working illustration"
								width={288}
								height={192}
								className="h-52 w-72 rounded-md object-cover object-middle md:flex-1 border border-slate-200 bg-white"
							/>
						</TimelineItem>
					</AnimatedStep>
				</div>
			</TightContentLayout>
		</section>
	);
}
