'use client';

import globeLottie from '@/assets/lottie/globe.json';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
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

	useEffect(() => {
		// @ts-expect-error-next-line
		lottieRef.current?.setSpeed(0.5);
	}, []);

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{
				opacity: 1,
				scale: 1,
				transition: { duration: 1 },
			}}
		>
			<Lottie
				lottieRef={lottieRef}
				animationData={globeLottie}
				loop={true}
				style={{ height: size, width: size, rotate: '15deg' }}
			/>
		</motion.div>
	);
}
