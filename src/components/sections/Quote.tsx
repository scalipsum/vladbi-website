'use client';

import TightContentLayout from '@/components/layout/TightContentLayout';
import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import posthog from 'posthog-js';
import { useEffect, useRef, useState } from 'react';

interface QuoteProps {
	quote: string;
	name: string;
	profession: string;
	professionLink?: {
		label: string;
		url: string;
	};
	avatar: string;
	hiddenTitle?: boolean;
	noAnimation?: boolean;
	className?: string;
}

export default function Quote({
	quote,
	name,
	profession,
	professionLink,
	avatar,
	hiddenTitle,
	noAnimation,
	className,
}: QuoteProps) {
	const startIndex = Math.floor(quote.length / 2);
	const [displayedText, setDisplayedText] = useState(
		quote.slice(0, startIndex),
	);
	const [hasAnimated, setHasAnimated] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting && !hasAnimated) {
					setHasAnimated(true);
					let currentIndex = startIndex;
					const interval = setInterval(() => {
						if (currentIndex <= quote.length) {
							setDisplayedText(quote.slice(0, currentIndex));
							currentIndex++;
						} else {
							clearInterval(interval);
						}
					}, 30);
				}
			},
			{ threshold: 0.3 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, [quote, hasAnimated, startIndex]);

	return (
		<motion.section
			ref={sectionRef}
			className={cn('mt-16 md:mt-40', className)}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<TightContentLayout className="text-center px-4 md:px-32">
				{!hiddenTitle && <Text type="h2">Trusted by great people</Text>}

				<div className="relative mt-16">
					{/* Opening quote mark */}
					<span
						className="font-sans absolute -top-10 -left-2 md:-top-12 md:-left-12 text-[80px] md:text-[100px] leading-none font-main font-extrabold text-brand dark:text-brand-200 select-none pointer-events-none"
						aria-hidden="true"
					>
						&ldquo;
					</span>

					{/* Quote text */}
					<blockquote className="font-cormorant italic text-[28px] md:text-3xl text-black dark:text-foreground leading-normal">
						{noAnimation ? quote : displayedText}
					</blockquote>

					{/* Closing quote mark */}
					<span
						className="font-sans absolute -bottom-20 md:-bottom-22 -right-2 text-[80px] md:text-[100px] leading-none font-main font-extrabold text-brand dark:text-brand-200 select-none pointer-events-none"
						aria-hidden="true"
					>
						&rdquo;
					</span>
				</div>

				{/* Author info */}
				<div className="flex items-center justify-center gap-4 mt-10 md:mt-14">
					<img
						src={avatar}
						alt={name}
						className="size-14 md:size-16 rounded-full object-cover"
					/>
					<div className="text-left">
						<p className="font-main font-bold text-lg text-foreground">
							{name}
						</p>
						<p className="text-muted-foreground">
							{profession}
							{professionLink && (
								<a
									className="transition underline underline-offset-4 duration-150 ease-in-out hover:text-white focus-visible:text-white rounded-md px-1 py-0.5"
									target="_blank"
									href={professionLink.url}
									rel="noopener noreferrer"
									onClick={() => {
										posthog.capture('3sc_link_clicked', {
											source: 'duncan_quote',
											destination: '3sidedcube.com',
										});
									}}
								>
									<Text type="span">
										{professionLink.label}
									</Text>
								</a>
							)}
						</p>
					</div>
				</div>
				{/* </Card> */}
			</TightContentLayout>
		</motion.section>
	);
}
