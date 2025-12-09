'use client';

import darkGlobeLottie from '@/assets/lottie/dark-globe.json';
import globeLottie from '@/assets/lottie/globe.json';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

interface RotatingGlobeProps {
	className?: string;
	size?: number;
}

export default function RotatingGlobe({
	className,
	size = 500,
}: RotatingGlobeProps) {
	const lottieRef = useRef(null);
	const theme = useTheme();

	useEffect(() => {
		// @ts-expect-error-next-line
		lottieRef.current?.setSpeed(0.5);
	}, []);

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
		>
			{theme.theme === 'dark' ? (
				<Lottie
					lottieRef={lottieRef}
					animationData={darkGlobeLottie}
					loop={true}
					style={{ height: size, width: size, rotate: '15deg' }}
				/>
			) : (
				<Lottie
					lottieRef={lottieRef}
					animationData={globeLottie}
					loop={true}
					style={{ height: size, width: size, rotate: '15deg' }}
				/>
			)}
		</motion.div>
	);
}
