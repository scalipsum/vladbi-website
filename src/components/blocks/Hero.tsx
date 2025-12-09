'use client';

import Person from '@/assets/img/person.webp';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RotatingGlobe from '../RotatingGlobe';
import Stripes from '../Stripes';

export default function Hero() {
	const [globeSize, setGlobeSize] = useState(700);
	useEffect(() => {
		const updateGlobeSize = () => {
			if (window.innerWidth < 1024) {
				setGlobeSize(500);
			} else if (window.innerWidth < 1280) {
				setGlobeSize(600);
			} else {
				setGlobeSize(700);
			}
		};
		updateGlobeSize();
		window.addEventListener('resize', updateGlobeSize);
		return () => window.removeEventListener('resize', updateGlobeSize);
	}, []);

	return (
		<section
			id="hero"
			className="flex flex-col md:flex-row items-center justify-between"
		>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
				className="w-full md:max-w-1/2 z-10 pt-16 md:pt-0 flex flex-col items-center md:items-start"
			>
				<h1 className="text-4xl lg:text-5xl xl:text-6xl font-main font-extrabold tracking-tight text-brand text-center md:text-left">
					We build SaaS ideas <br /> that Scale globally
				</h1>
				<p className="font-sans tracking-tight text-xl mt-8 text-center md:text-left">
					Handling full technical execution. Then <br /> automate
					processes to maximize your revenue.
				</p>
				<Button asChild className="mt-8">
					<Link href="/blog">Get Started</Link>
				</Button>
			</motion.div>

			<div className="relative">
				<RotatingGlobe
					className="absolute -right-6 lg:right-12 xl:right-12 opacity-100 z-0 -top-4"
					size={globeSize}
				/>
				<Image
					src={Person}
					alt="Vladbi Silhouette"
					width={573}
					height={813}
					className="relative w-[300px] lg:w-[350px] xl:w-[430px] lg:mr-12 z-20 mt-10 md:mt-20"
				/>
				<Stripes className="absolute md:top-0 z-0 right-0 left-32 md:left-24 lg:left-auto top-16" />
			</div>
		</section>
	);
}
