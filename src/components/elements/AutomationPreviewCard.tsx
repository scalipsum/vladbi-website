import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Link from 'next/link';
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
	return (
		<Card className={cn('px-8 py-6 mt-8 w-full', className)}>
			<div>
				<Link
					href={href}
					className="absolute inset-0 z-10"
					aria-label={title}
				/>
				<div className="flex flex-row items-center">
					<div className="w-1/3 flex flex-col items-start">
						<Text type="h3">{title}</Text>
						<Text className="mt-2 text-brand">{subtitle}</Text>
					</div>
					<div className="w-1/3 flex justify-center ml-4">
						<Text>{description}</Text>
					</div>
					<div className="w-1/3 flex justify-end">
						<Button asChild className="self-end">
							<Link href={href}>{ctaText}</Link>
						</Button>
					</div>
				</div>
			</div>
		</Card>
	);
}
