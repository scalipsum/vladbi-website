'use client';

import XPattern from '@/assets/img/x-pattern.svg';
import { cn } from '@/lib/utils';

interface PatternSectionProps {
	children: React.ReactNode;
	className?: string;
	patternClassName?: string;
}

export default function PatternSection({
	children,
	className,
	patternClassName,
}: PatternSectionProps) {
	return (
		<section className={cn('relative py-10', className)}>
			<div
				className={cn(
					'w-full h-full absolute top-0 right-0 bottom-0 left-0 z-0 opacity-40',
					patternClassName,
				)}
				style={{ backgroundImage: `url(${XPattern.src || XPattern})` }}
			/>
			<div className="relative z-10 w-full px-4">{children}</div>
		</section>
	);
}
