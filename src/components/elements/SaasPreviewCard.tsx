'use client';

import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import posthog from 'posthog-js';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface Stat {
	value: string;
	label: string;
}

interface SaasPreviewCardProps {
	title: string;
	subtitle: string;
	description: string;
	backgroundImageUrl: string;
	previewImageUrl: string;
	href: string;
	className?: string;
	stats?: Stat[];
}

export default function SaasPreviewCard({
	title,
	subtitle,
	description,
	backgroundImageUrl,
	previewImageUrl,
	href,
	className,
	stats,
}: SaasPreviewCardProps) {
	const imageWidth = 220;
	const imageHeight = 280;

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
				'px-8 md:px-12 py-10 md:py-12 mt-8 bg-cover bg-center bg-no-repeat w-full overflow-visible min-h-[400px]',
				className,
			)}
			style={{ backgroundImage: `url(${backgroundImageUrl})` }}
		>
			<div className="absolute z-0 inset-0 bg-slate-800 opacity-75 rounded-lg" />
			<Link
				href={href}
				className="absolute inset-0 z-20"
				aria-label={title}
				onClick={handleCardClick}
			/>

			<div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
				<div className="md:text-left text-center md:max-w-[50%]">
					<Text
						type="h3"
						className="text-white text-2xl md:text-3xl font-semibold leading-tight"
					>
						{description}
					</Text>

					<Text className="mt-4 text-white/80 text-base">
						{subtitle}
					</Text>

					{stats && stats.length > 0 && (
						<div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
							{stats.map((stat, index) => (
								<div
									key={stat.label}
									className="flex items-center"
								>
									<div className="text-center px-4 first:pl-0">
										<Text className="font-main !text-lg text-white font-extrabold">
											{stat.value}
										</Text>
										<Text className="text-white/60 !text-base">
											{stat.label}
										</Text>
									</div>
									{index < stats.length - 1 && (
										<div className="w-px h-10 bg-white/30" />
									)}
								</div>
							))}
						</div>
					)}

					<Button
						asChild
						className="mt-8 bg-white text-slate-900 hover:bg-white/90"
						variant="secondary"
					>
						<Link
							href={href}
							onClick={handleCardClick}
							className="flex items-center gap-1"
						>
							See how I built it
							<ChevronRight className="w-4 h-4" />
						</Link>
					</Button>
				</div>

				{/* Mobile image */}
				{/* <Image
					src={previewImageUrl}
					alt={`${title} preview`}
					width={imageWidth}
					height={imageHeight}
					className="md:hidden hidden block mx-auto rounded-lg object-cover"
				/> */}

				{/* Desktop image */}
				<Image
					src={previewImageUrl}
					alt={`${title} preview`}
					width={imageWidth}
					height={imageHeight}
					className="absolute rounded-lg object-cover hidden md:block right-18 -bottom-18 shadow-xl"
				/>
			</div>
		</Card>
	);
}
