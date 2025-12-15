'use client';

import Text from '@/components/ui/text';
import { useEffect, useState } from 'react';
import BrandStripes from '../elements/BrandStripes';
import RotatingGlobe from '../elements/RotatingGlobe';

interface HeaderProps {
	title: string;
	subTitle: string;
}
export default function Header({ title, subTitle }: HeaderProps) {
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
		<div className="relative h-82 w-full flex flex-col items-center justify-center max-w-[1920px] mx-auto">
			<RotatingGlobe
				className="absolute -left-48 -top-64 opacity-100 z-0"
				size={globeSize}
				rotate="10deg"
			/>
			<BrandStripes className="absolute !-top-24 z-0 right-0 top-0" />
			<div className="inline-block mt-32">
				<Text type="h2">{title}</Text>
				<div className="h-1.5 bg-brand rounded-full w-full self-center mt-2.5" />
			</div>
			<Text className="mt-4">{subTitle}</Text>
		</div>
	);
}
