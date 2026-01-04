'use client';

import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const tools = [
	// Row 1
	{
		name: 'Supabase',
		icon: 'supabase',
		color: '3FCF8E',
		darkColor: '3FCF8E',
	},
	{
		name: 'React Native',
		icon: 'react',
		color: '61DAFB',
		darkColor: '61DAFB',
	},
	{
		name: 'Next.js',
		icon: 'nextdotjs',
		color: '000000',
		darkColor: 'FFFFFF',
	},
	{ name: 'Stripe', icon: 'stripe', color: '635BFF', darkColor: '635BFF' },
	{
		name: 'RevenueCat',
		icon: 'revenuecat',
		color: 'F25A5A',
		darkColor: 'F25A5A',
	},
	// Row 2
	{ name: 'Cursor', icon: 'cursor', color: '000000', darkColor: 'FFFFFF' },
	{
		name: 'Claude Code',
		icon: 'anthropic',
		color: 'D97757',
		darkColor: 'D97757',
	},
	{ name: 'Vercel', icon: 'vercel', color: '000000', darkColor: 'FFFFFF' },
	{ name: 'Figma', icon: 'figma', color: 'F24E1E', darkColor: 'F24E1E' },
	{ name: 'PostHog', icon: 'posthog', color: 'F9BD2B', darkColor: 'F9BD2B' },
	{ name: 'Resend', icon: 'resend', color: '000000', darkColor: 'FFFFFF' },
	{ name: 'Expo', icon: 'expo', color: '000020', darkColor: 'FFFFFF' },
	{
		name: 'Tailwind',
		icon: 'tailwindcss',
		color: '06B6D4',
		darkColor: '06B6D4',
	},
	// Row 3
	{ name: 'Bun', icon: 'bun', color: 'FF6164', darkColor: 'FBF0DF' },
	{ name: 'ClickUp', icon: 'clickup', color: '7B68EE', darkColor: '7B68EE' },
];

export default function Tools() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });
	const [highlightedIndex, setHighlightedIndex] = useState<number | null>(
		null,
	);

	useEffect(() => {
		if (!isInView) return;
		let lastIndex = -1;
		const interval = setInterval(() => {
			const offset = Math.floor(Math.random() * (tools.length - 1)) + 1;
			const randomIndex = (lastIndex + offset) % tools.length;
			lastIndex = randomIndex;
			setHighlightedIndex(randomIndex);

			setTimeout(() => {
				setHighlightedIndex(null);
			}, 500);
		}, 1200);

		return () => clearInterval(interval);
	}, [isInView]);

	return (
		<section ref={sectionRef} className="mt-16 md:mt-40">
			<Text type="h2" className="text-center">
				Prototyping fast using modern tools
			</Text>
			<div className="grid md:grid-cols-5 w-fit mx-auto gap-3 md:gap-6 mt-8 md:mt-12 grid-cols-3">
				{tools.map((tool, index) => (
					<motion.div
						key={tool.name}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={
							isInView
								? { opacity: 1, scale: 1 }
								: { opacity: 0, scale: 0.8 }
						}
						transition={{
							delay: 0.4 + index * 0.04,
							duration: 0.5,
							ease: [0.22, 1, 0.36, 1],
						}}
						className={cn(
							'size-24 md:size-32 flex flex-col items-center justify-center rounded-2xl bg-brand-100/50 dark:bg-brand-600 shadow-md transition-all duration-400 hover:scale-113 cursor-default',
							highlightedIndex === index && 'scale-113',
						)}
					>
						<img
							src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color}`}
							alt={tool.name}
							className="size-8 md:size-11 dark:hidden"
						/>
						<img
							src={`https://cdn.simpleicons.org/${tool.icon}/${tool.darkColor}`}
							alt={tool.name}
							className="size-8 md:size-11 hidden dark:block"
						/>
						<Text type="span" className="mt-2.5 text-sm">
							{tool.name}
						</Text>
					</motion.div>
				))}
			</div>
		</section>
	);
}
