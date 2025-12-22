'use client';

import { cn } from '@/lib/utils';
import { Card } from '../ui/card';

interface QuizIframeCardProps {
	src: string;
	height?: string;
	className?: string;
}

export default function QuizIframeCard({
	src,
	height = '820px',
	className = '',
}: QuizIframeCardProps) {
	return (
		<Card
			className="w-full overflow-y-hidden border-0 !border-brand-500 shadow-brand-500"
			noHover
		>
			<iframe
				src={src}
				width="100%"
				allowFullScreen={false}
				className={cn('-mb-8 md:-mb-20', className)}
			></iframe>
		</Card>
	);
}
