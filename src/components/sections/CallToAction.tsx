'use client';

import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import posthog from 'posthog-js';
import { Button } from '../ui/button';
import PatternSection from './PatternSection';

interface CallToActionProps {
	title?: string;
	subtitle?: string;
	className?: string;
	buttonText?: string;
	href?: string;
}

export default function CallToAction({
	title = 'Hello',
	subtitle,
	className,
	buttonText = '> Book a call',
	href,
}: CallToActionProps) {
	const handleCtaClick = () => {
		posthog.capture('cta_button_clicked', {
			button_text: buttonText,
			cta_title: title,
			destination: href ?? '/blog',
		});
	};

	return (
		<PatternSection
			className={cn('bg-brand-500', !subtitle && 'py-18', className)}
		>
			<Text type="h2" className="text-center text-white">
				{title}
			</Text>
			{subtitle && (
				<Text className="mt-5 text-center text-white">{subtitle}</Text>
			)}
			<div className="flex justify-center">
				<Button
					variant="secondary"
					asChild
					className={cn('mt-8', !subtitle && 'mt-9')}
				>
					<Link href={href ?? '/blog'} onClick={handleCtaClick}>
						{buttonText}
					</Link>
				</Button>
			</div>
		</PatternSection>
	);
}
