import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TightContentLayoutProps {
	children: ReactNode;
	className?: string;
}

export default function TightContentLayout({
	children,
	className,
}: TightContentLayoutProps) {
	return (
		<div
			className={cn(
				'mx-auto w-full sm:w-lg md:w-3xl lg:w-4xl',
				className,
			)}
		>
			{children}
		</div>
	);
}
