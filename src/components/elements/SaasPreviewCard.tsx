'use client';

import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import posthog from 'posthog-js';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface AutomationPreviewCardProps {
	title: string;
	subtitle: string;
	description: string;
	backgroundImageUrl: string;
	previewImageUrl: string;
	href: string;
	className?: string;
}

export default function SaasPreviewCard({
	title,
	subtitle,
	description,
	backgroundImageUrl,
	previewImageUrl,
	href,
	className,
}: AutomationPreviewCardProps) {
	const gastonWidth = 360;
	const gastonHeight = 470;

	const handleCardClick = () => {
		posthog.capture('product_card_clicked', {
			product_title: title,
			product_subtitle: subtitle,
			destination: href,
		});
	};

	return (
		<Card
			className={cn(
				'px-12 py-12 mt-8 bg-cover bg-center bg-no-repeat w-full overflow-visible min-h-[350px]',
				className,
			)}
			style={{ backgroundImage: `url(${backgroundImageUrl})` }}
		>
			<div className="absolute z-0 inset-0 bg-slate-800 opacity-60 rounded-lg" />
			<Link
				href={href}
				className="absolute inset-0 z-20"
				aria-label={title}
				onClick={handleCardClick}
			/>
			<div className="relative z-10">
				<div className="md:text-left text-center">
					<Text type="h3" className="text-white">
						{title}
					</Text>
					<Text className="mt-1 text-white">{subtitle}</Text>
					<Image
						src={previewImageUrl}
						alt={`${title} preview`}
						width={
							title === 'Gaston' ? gastonWidth : gastonWidth / 1.5
						}
						height={
							title === 'Gaston'
								? gastonHeight
								: gastonHeight / 1.5
						}
						className={cn(
							'md:hidden block mx-auto mt-5',
							title === 'Gaston' ? '' : '',
						)}
					/>

					<Text className="mt-6 md:w-1/3 w-full text-white">
						{description}
					</Text>
					<Button
						asChild
						className="self-end mt-10"
						variant="secondary"
					>
						<Link href={href} onClick={handleCardClick}>
							View case study
						</Link>
					</Button>
				</div>
				<Image
					src={previewImageUrl}
					alt={`${title} preview`}
					width={gastonWidth / 1.7}
					height={gastonHeight / 1.7}
					className={cn(
						'absolute rounded-lg object-fill hidden md:block',
						'right-20 -bottom-10',
					)}
				/>
			</div>
		</Card>
	);
}
