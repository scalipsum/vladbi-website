'use client';

import { cn } from '@/lib/utils';
import posthog from 'posthog-js';
import { useRef } from 'react';
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
	const hasTrackedRef = useRef(false);

	// Track quiz page view when iframe loads
	const handleIframeLoad = () => {
		if (!hasTrackedRef.current) {
			posthog.capture('quiz_page_viewed', {
				quiz_url: src,
			});
			hasTrackedRef.current = true;
		}
	};

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
				onLoad={handleIframeLoad}
			></iframe>
		</Card>
	);
}
