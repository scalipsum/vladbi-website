'use client';

import Text from '@/components/ui/text';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import posthog from 'posthog-js';
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
		<section id="get-started" className="mt-6 md:mt-16 mb-0 md:mb-12">
			<TightContentLayout className="overflow-y-hidden px-1">
				{/* Section title */}
				<div className="flex justify-center">
					<div className="inline-block">
						<Text type="h2">How we start</Text>
						<div className="h-1.5 bg-brand rounded-full w-full self-center mt-2.5" />
					</div>
				</div>

				{/*  Timeline */}
				<div>
					<AnimatedStep>
						<TimelineItem className="md:mt-20 mt-12" active>
							<div className="flex-1">
								<Text type="h3">1. Book an intro call</Text>
								<Text className="mt-4">
									Simple questions around your project,
									guidance on the best technical approach,
									first-look estimates & timeline (30 mins).
								</Text>
								<Button asChild className="mt-6">
									<Link
										href="/book-a-call"
										onClick={() =>
											posthog.capture(
												'quiz_cta_clicked',
												{
													button_text: 'Book a call',
													source: 'book_a_call_timeline',
													step: 1,
												},
											)
										}
										className="!pr-4"
									>
										<ChevronRight className="w-4 h-4" />
										Book a call
									</Link>
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
									2. Receive a Proposal
								</Text>
								<Text className="mt-6">
									Written details about the project, solutions
									for the challanges that we'll face,
									timeline, cost, terms & conditions.
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

					<AnimatedStep>
						<TimelineItem className="mt-16 md:mt-20">
							<div className="flex-1">
								<Text
									type="h3"
									className="text-gray-600 dark:text-gray-200"
								>
									3. Get started
								</Text>
								<Text className="mt-8">
									A typical MVP build takes between 4-6 weeks,
									depending on complexity. My intention is to
									always launch a product fast, but to never
									compromise the quality of it.
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
				</div>
			</TightContentLayout>
		</section>
	);
}
