import XPattern from '@/assets/img/x-pattern.svg';
import { cn } from '@/lib/utils';

interface PatternSectionProps {
	children: React.ReactNode;
	className?: string;
}

export default function PatternSection({
	children,
	className,
}: PatternSectionProps) {
	return (
		<section className={cn('relative py-10', className)}>
			<div
				className="w-full h-full absolute top-0 right-0 bottom-0 left-0 z-0 opacity-50"
				style={{ backgroundImage: `url(${XPattern.src || XPattern})` }}
			/>
			{children}
		</section>
	);
}
