'use client';

import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import BrandStripes from '../elements/BrandStripes';
import RotatingGlobe from '../elements/RotatingGlobe';

interface HeaderProps {
	title: string;
	subTitle: string;
	className?: string;
}
export default function Header({ title, subTitle, className }: HeaderProps) {
	const [globeSize, setGlobeSize] = useState(700);
	useEffect(() => {
		const updateGlobeSize = () => {
			if (window.innerWidth < 1024) {
				setGlobeSize(500);
			} else if (window.innerWidth < 1280) {
				setGlobeSize(600);
			} else {
				setGlobeSize(600);
			}
		};
		updateGlobeSize();
		window.addEventListener('resize', updateGlobeSize);
		return () => window.removeEventListener('resize', updateGlobeSize);
	}, []);

	return (
		<div
			className={cn(
				'relative h-82 w-full flex flex-col items-center justify-center max-w-[1920px] mx-auto',
				className,
			)}
		>
			<RotatingGlobe
				className="absolute -left-36 -top-44 sm:-top-44 md:!-top-44 lg:!-top-54 opacity-100 z-0"
				size={globeSize}
				rotate="0deg"
			/>
			<BrandStripes className="absolute z-0 -right-8 -top-20  lg:-top-36" />
			<div className="bg-background mt-26 flex flex-col items-center z-20 px-16 rounded-t-3xl border border-t-4 md:border-0 border-brand-100 border-b-0 pt-5">
				<div className="inline-block">
					<Text type="h2">{title}</Text>
					<div className="h-1.5 bg-brand rounded-full w-full self-center mt-2.5" />
				</div>
				<Text className="mt-4">{subTitle}</Text>
			</div>
		</div>
	);
}
