'use client';

import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import posthog from 'posthog-js';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface AutomationPreviewCardProps {
	title: string;
	subtitle: string;
	description: string;
	href: string;
	className?: string;
	ctaText?: string;
}

export default function AutomationPreviewCard({
	title,
	subtitle,
	description,
	href,
	className,
	ctaText = 'View case study',
}: AutomationPreviewCardProps) {
	const handleCardClick = () => {
		posthog.capture('service_card_clicked', {
			card_title: title,
			card_subtitle: subtitle,
			destination: href,
			cta_text: ctaText,
		});
	};

	return (
		<Card className={cn('px-8 py-6 mt-8 w-full min-h-36', className)}>
			<div>
				<Link
					href={href}
					className="absolute inset-0 z-10"
					aria-label={title}
					onClick={handleCardClick}
				/>
				<div className="flex md:flex-row flex-col items-center">
					<div className="md:w-1/3 w-full flex flex-col md:items-start items-center !text-black">
						<Text type="h3">{title}</Text>
						<Text className="mt-1 text-brand">{subtitle}</Text>
					</div>
					<div className="md:w-1/3 w-full flex justify-center ml-4 mt-4 md:mt-0">
						<Text>{description}</Text>
					</div>
					<div className="md:w-1/3 w-full flex md:justify-end justify-center mt-6 md:mt-0">
						<Button asChild className="h-10 px-4">
							<Link href={href} onClick={handleCardClick}>
								{ctaText}
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</Card>
	);
}
