'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface WorkItem {
	id: number;
	type: 'mobile' | 'desktop';
	gradient: string;
	label: string;
}

const workItems: WorkItem[] = [
	{
		id: 1,
		type: 'mobile',
		gradient: 'from-violet-500 to-purple-600',
		label: 'App 1',
	},
	{
		id: 2,
		type: 'desktop',
		gradient: 'from-cyan-400 to-blue-500',
		label: 'Web 1',
	},
	{
		id: 3,
		type: 'mobile',
		gradient: 'from-orange-400 to-red-500',
		label: 'App 2',
	},
	{
		id: 4,
		type: 'desktop',
		gradient: 'from-emerald-400 to-teal-500',
		label: 'Web 2',
	},
	{
		id: 5,
		type: 'mobile',
		gradient: 'from-pink-400 to-rose-500',
		label: 'App 3',
	},
	{
		id: 6,
		type: 'desktop',
		gradient: 'from-amber-400 to-orange-500',
		label: 'Web 3',
	},
	{
		id: 7,
		type: 'mobile',
		gradient: 'from-indigo-400 to-violet-500',
		label: 'App 4',
	},
	{
		id: 8,
		type: 'desktop',
		gradient: 'from-lime-400 to-green-500',
		label: 'Web 4',
	},
];

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
	const isMobile = item.type === 'mobile';

	return (
		<Link href="/products">
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: index * 0.05, duration: 0.3 }}
				className={`
					relative flex-shrink-0 rounded-2xl overflow-hidden
					bg-gradient-to-br ${item.gradient}
					${
						isMobile
							? 'w-[140px] h-[280px] md:w-[180px] md:h-[360px]'
							: 'w-[420px] h-[280px] md:w-[540px] md:h-[360px]'
					}
					cursor-pointer
					transition-transform duration-500 ease-out hover:scale-105
				`}
			>
				{/* Simulated UI elements */}
				<div className="absolute inset-0 p-3 md:p-4 flex flex-col">
					{/* Status bar for mobile */}
					{isMobile && (
						<div className="flex justify-between items-center mb-2">
							<div className="w-8 h-1.5 bg-white/40 rounded-full" />
							<div className="w-4 h-1.5 bg-white/40 rounded-full" />
						</div>
					)}

					{/* Header bar */}
					<div className="flex items-center gap-2 mb-3">
						<div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/30" />
						<div className="flex-1">
							<div className="w-16 md:w-24 h-2 bg-white/40 rounded-full mb-1" />
							<div className="w-10 md:w-16 h-1.5 bg-white/20 rounded-full" />
						</div>
						{!isMobile && (
							<div className="flex gap-1">
								<div className="w-2 h-2 rounded-full bg-white/30" />
								<div className="w-2 h-2 rounded-full bg-white/30" />
								<div className="w-2 h-2 rounded-full bg-white/30" />
							</div>
						)}
					</div>

					{/* Content area */}
					<div className="flex-1 flex flex-col gap-2">
						{isMobile ? (
							<>
								<div className="w-full h-20 md:h-28 rounded-xl bg-white/20" />
								<div className="w-full h-3 bg-white/30 rounded-full" />
								<div className="w-3/4 h-3 bg-white/20 rounded-full" />
								<div className="mt-auto flex gap-2">
									<div className="flex-1 h-8 rounded-lg bg-white/30" />
									<div className="w-8 h-8 rounded-lg bg-white/20" />
								</div>
							</>
						) : (
							<div className="flex gap-3 h-full">
								<div className="w-1/3 h-full rounded-xl bg-white/20 flex flex-col gap-2 p-2">
									<div className="w-full h-3 bg-white/30 rounded-full" />
									<div className="w-2/3 h-3 bg-white/20 rounded-full" />
									<div className="w-4/5 h-3 bg-white/20 rounded-full" />
								</div>
								<div className="flex-1 flex flex-col gap-2">
									<div className="w-full flex-1 rounded-xl bg-white/25" />
									<div className="flex gap-2">
										<div className="flex-1 h-8 rounded-lg bg-white/20" />
										<div className="flex-1 h-8 rounded-lg bg-white/30" />
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</Link>
	);
}

function MarqueeRow({
	items,
	direction = 'left',
	speed = 30,
}: {
	items: WorkItem[];
	direction?: 'left' | 'right';
	speed?: number;
}) {
	const [duplicatedItems, setDuplicatedItems] = useState<WorkItem[]>([]);

	useEffect(() => {
		// Duplicate items enough times to fill the screen and allow seamless loop
		setDuplicatedItems([...items, ...items, ...items, ...items]);
	}, [items]);

	return (
		<div className="group relative overflow-hidden py-4">
			{/* Strong gradient shadows for disappearing effect */}
			<div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background from-25% to-transparent z-10 pointer-events-none -ml-4" />
			<div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background from-25% to-transparent z-10 pointer-events-none -mr-4" />

			<div
				className={`flex gap-4 md:gap-6 ${
					direction === 'left'
						? 'animate-marquee-left'
						: 'animate-marquee-right'
				} group-hover:[animation-duration:90s]`}
				style={{ animationDuration: `${speed}s` }}
			>
				{duplicatedItems.map((item, index) => (
					<WorkCard
						key={`${item.id}-${index}`}
						item={item}
						index={index % items.length}
					/>
				))}
			</div>
		</div>
	);
}

export default function WorkShowcase() {
	return (
		<section className="mt-16">
			<MarqueeRow items={workItems} direction="left" speed={30} />
		</section>
	);
}
