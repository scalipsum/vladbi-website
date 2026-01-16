'use client';

import { BUCKET_URL } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import posthog from 'posthog-js';
import { useEffect, useRef, useState } from 'react';

interface WorkItem {
	id: number;
	type: 'mobile' | 'desktop';
	imagePath: string;
	label: string;
}

const workItems: WorkItem[] = [
	{
		id: 1,
		type: 'desktop',
		imagePath: '/website/carousel/gaston-1.png',
		label: 'Gaston Desktop',
	},
	{
		id: 2,
		type: 'mobile',
		imagePath: '/website/carousel/gaston-1-mobile.png',
		label: 'Gaston Mobile',
	},
	{
		id: 3,
		type: 'desktop',
		imagePath: '/website/carousel/iqm-desktop-1.png',
		label: 'IQM Desktop',
	},
	{
		id: 4,
		type: 'mobile',
		imagePath: '/website/carousel/iqm-mobile-1.png',
		label: 'IQM Mobile',
	},
	{
		id: 5,
		type: 'desktop',
		imagePath: '/website/carousel/gaston-desktop-2.png',
		label: 'Gaston Desktop',
	},
	{
		id: 6,
		type: 'mobile',
		imagePath: '/website/carousel/gaston-mobile-2.png',
		label: 'Gaston Mobile',
	},
	{
		id: 7,
		type: 'desktop',
		imagePath: '/website/carousel/iqm-desktop-2.png',
		label: 'IQM Desktop',
	},
	{
		id: 8,
		type: 'mobile',
		imagePath: '/website/carousel/iqm-mobile-2.png',
		label: 'IQM Mobile',
	},
	{
		id: 9,
		type: 'desktop',
		imagePath: '/website/carousel/gaston-desktop-3.png',
		label: 'Gaston Desktop',
	},
	{
		id: 10,
		type: 'mobile',
		imagePath: '/website/carousel/gaston-mobile-3.png',
		label: 'Gaston Mobile',
	},
	{
		id: 11,
		type: 'desktop',
		imagePath: '/website/carousel/iqm-desktop-3.png',
		label: 'IQM Desktop',
	},
	{
		id: 12,
		type: 'mobile',
		imagePath: '/website/carousel/iqm-mobile-3.png',
		label: 'IQM Mobile',
	},
];

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
	const isMobile = item.type === 'mobile';

	const handleClick = () => {
		posthog.capture('work_showcase_clicked', {
			item_label: item.label,
			item_type: item.type,
			destination: '/products',
		});
	};

	return (
		<Link href="/products" onClick={handleClick}>
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: index * 0.05, duration: 0.5 }}
				className={`
					relative flex-shrink-0
					${
						isMobile
							? 'w-[160px] h-[360px] md:w-[200px] md:h-[440px] mr-12 md:mr-24 -mt-8'
							: 'w-[450px] h-[300px] md:w-[580px] md:h-[387px]'
					}
					cursor-pointer
					transition-transform duration-500 ease-out hover:scale-105
				`}
			>
				<Image
					src={`${BUCKET_URL}${item.imagePath}`}
					alt={item.label}
					fill
					className="object-contain"
					sizes={
						isMobile
							? '(max-width: 768px) 160px, 200px'
							: '(max-width: 768px) 450px, 580px'
					}
				/>
			</motion.div>
		</Link>
	);
}

function MarqueeRow({
	items,
	direction = 'left',
}: {
	items: WorkItem[];
	direction?: 'left' | 'right';
}) {
	const marqueeRef = useRef<HTMLDivElement>(null);
	const firstSetRef = useRef<HTMLDivElement>(null);
	const [marqueeDistance, setMarqueeDistance] = useState<number | null>(null);

	useEffect(() => {
		const measureWidth = () => {
			if (firstSetRef.current) {
				const width = firstSetRef.current.offsetWidth;
				setMarqueeDistance(width);
			}
		};

		measureWidth();
		window.addEventListener('resize', measureWidth);
		return () => window.removeEventListener('resize', measureWidth);
	}, [items]);

	const handleMouseEnter = () => {
		const el = marqueeRef.current;
		if (!el) return;
		const animations = el.getAnimations();
		animations.forEach((anim) => {
			anim.playbackRate = 0.8;
		});
	};

	const handleMouseLeave = () => {
		const el = marqueeRef.current;
		if (!el) return;
		const animations = el.getAnimations();
		animations.forEach((anim) => {
			anim.playbackRate = 1;
		});
	};

	return (
		<div
			className="relative overflow-hidden pt-8"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				ref={marqueeRef}
				className={`flex ${
					direction === 'left'
						? 'animate-marquee-left'
						: 'animate-marquee-right'
				}`}
				style={
					marqueeDistance
						? ({
								'--marquee-distance': `${marqueeDistance}px`,
						  } as React.CSSProperties)
						: undefined
				}
			>
				{/* First set - used for measurement */}
				<div ref={firstSetRef} className="flex gap-4 md:gap-6 shrink-0">
					{items.map((item, index) => (
						<WorkCard
							key={`first-${item.id}`}
							item={item}
							index={index}
						/>
					))}
				</div>
				{/* Second set - for seamless loop */}
				<div className="flex gap-4 md:gap-6 shrink-0">
					{items.map((item, index) => (
						<WorkCard
							key={`second-${item.id}`}
							item={item}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default function WorkShowcase() {
	return (
		<section className="mt-8 md:mt-20" id="showcase">
			<MarqueeRow items={workItems} direction="left" />
		</section>
	);
}
