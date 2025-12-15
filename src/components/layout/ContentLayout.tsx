import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ContentLayoutProps {
	children: ReactNode;
	className?: string;
}

export default function ContentLayout({
	children,
	className,
}: ContentLayoutProps) {
	return (
		<div
			className={cn(
				'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 overflow-x-hidden',
				className,
			)}
		>
			{children}
		</div>
	);
}
