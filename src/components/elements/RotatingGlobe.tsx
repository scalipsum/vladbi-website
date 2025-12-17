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
	rotate?: string;
}

export default function RotatingGlobe({
	className,
	size = 500,
	rotate = '15deg',
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
			{theme.resolvedTheme === 'dark' || theme.theme === 'dark' ? (
				<Lottie
					lottieRef={lottieRef}
					animationData={darkGlobeLottie}
					loop={true}
					style={{ height: size, width: size, rotate }}
				/>
			) : (
				<Lottie
					lottieRef={lottieRef}
					animationData={globeLottie}
					loop={true}
					style={{ height: size, width: size, rotate }}
				/>
			)}
		</motion.div>
	);
}
