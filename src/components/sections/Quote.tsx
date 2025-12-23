'use client';

import TightContentLayout from '@/components/layout/TightContentLayout';
import Text from '@/components/ui/text';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface QuoteProps {
	quote: string;
	name: string;
	profession: string;
	avatar: string;
}

export default function Quote({ quote, name, profession, avatar }: QuoteProps) {
	const startIndex = Math.floor(quote.length * 3 / 4);
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
			className="mt-16 md:mt-40"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<TightContentLayout className="text-center px-2 md:px-32">
				<Text type="h2">Trusted by great people</Text>

				<div className="relative mt-16">
					{/* Opening quote mark */}
					<span
						className="font-sans absolute -top-10 left-0 md:-top-12 md:-left-12 text-[80px] md:text-[100px] leading-none font-main font-extrabold text-brand dark:text-brand-200 select-none pointer-events-none"
						aria-hidden="true"
					>
						&ldquo;
					</span>

					{/* Quote text */}
					<blockquote className="font-cormorant italic text-3xl text-foreground leading-normal">
						{displayedText}
					</blockquote>

					{/* Closing quote mark */}
					<span
						className="font-sans absolute -bottom-20 right-0 md:-bottom-22 -right-2 text-[80px] md:text-[100px] leading-none font-main font-extrabold text-brand dark:text-brand-200 select-none pointer-events-none"
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
						<p className="text-muted-foreground">{profession}</p>
					</div>
				</div>
				{/* </Card> */}
			</TightContentLayout>
		</motion.section>
	);
}
