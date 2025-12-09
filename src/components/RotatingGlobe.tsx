'use client';

import globeLottie from '@/assets/lottie/globe.json';
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
		<div className={className}>
			<Lottie
				lottieRef={lottieRef}
				animationData={globeLottie}
				loop={true}
				style={{ height: size, width: size, rotate: '15deg' }}
			/>
		</div>
	);
}
