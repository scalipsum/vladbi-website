'use client';

import Text from '@/components/ui/text';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import TimelineItem from '../elements/TimelineItem';
import TightContentLayout from '../layout/TightContentLayout';
import { Button } from '../ui/button';

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
		<section id="get-started" className="mt-40">
			<TightContentLayout className="overflow-y-hidden px-1">
				{/* Section title */}
				<div className="flex justify-center">
					<div className="inline-block">
						<Text type="h2">We start small</Text>
						<div className="h-1.5 bg-brand rounded-full w-full self-center mt-2.5" />
					</div>
				</div>

				{/*  Timeline */}
				<div>
					<AnimatedStep>
						<TimelineItem className="md:mt-16 mt-10" active>
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
							<div className="h-48 w-72 rounded-md bg-gray-300 md:flex-1" />
						</TimelineItem>
					</AnimatedStep>

					<AnimatedStep>
						<TimelineItem className="mt-14 md:mt-24">
							<div className="flex-1">
								<Text
									type="h3"
									className="text-gray-600 dark:text-gray-200"
								>
									2. Book a Free Discovery Call
								</Text>
								<Text className="mt-6">
									To clarify in a more meaningful way what the
									project is about and to define what success
									looks like.
								</Text>
							</div>
							<div className="h-48 w-72 rounded-md bg-gray-300 md:flex-1" />
						</TimelineItem>
					</AnimatedStep>

					<AnimatedStep>
						<TimelineItem className="mt-14 md:mt-24">
							<div className="flex-1">
								<Text
									type="h3"
									className="text-gray-600 dark:text-gray-200"
								>
									3. We agree & start working
								</Text>
								<Text className="mt-8">
									After the call, we'll send you a doc. that
									outlines what we've talked, time estimates
									and cost. Once signed, we begin.
								</Text>
							</div>
							<div className="h-48 w-72 rounded-md bg-gray-300 md:flex-1" />
						</TimelineItem>
					</AnimatedStep>
				</div>
			</TightContentLayout>
		</section>
	);
}
