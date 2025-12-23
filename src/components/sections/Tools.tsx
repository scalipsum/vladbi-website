'use client';

import Text from '@/components/ui/text';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

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
	{ name: 'Bun', icon: 'bun', color: 'CBAB7D', darkColor: 'FBF0DF' },
	{ name: 'ClickUp', icon: 'clickup', color: '7B68EE', darkColor: '7B68EE' },
];

export default function Tools() {
	return (
		<section className="mt-16 md:mt-24">
			<Text type="h2" className="text-center">
				Using modern tools to move fast
			</Text>
			<div className="grid grid-cols-5 w-fit mx-auto gap-3 md:gap-6 mt-8 md:mt-12">
				{tools.map((tool, index) => (
					<Tooltip key={tool.name}>
						<TooltipTrigger asChild>
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									delay: index * 0.05,
									duration: 0.5,
								}}
								className="size-24 md:size-32 flex items-center justify-center rounded-2xl bg-brand-100/50 dark:bg-brand-500/20 shadow-md transition-transform duration-200 hover:scale-105 cursor-default"
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
							</motion.div>
						</TooltipTrigger>
						<TooltipContent>{tool.name}</TooltipContent>
					</Tooltip>
				))}
			</div>
		</section>
	);
}
