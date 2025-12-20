'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Card } from '../ui/card';

interface NotionIframeCardProps {
	src: string;
	height?: string;
	className?: string;
}

export default function NotionIframeCard({
	src,
	height = '820px',
	className = '',
}: NotionIframeCardProps) {
	const { theme } = useTheme();
	return (
		<Card
			className="w-full overflow-hidden shadow-blue-400 dark:shadow-brand-600"
			noHover
		>
			<iframe
				key={theme}
				src={src}
				width="100%"
				height={height}
				allowFullScreen={false}
				className={cn('-mt-32', className)}
			/>
		</Card>
	);
}
