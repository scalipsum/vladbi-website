import Text from '@/components/ui/text';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface AutomationPreviewCardProps {
	title: string;
	subtitle: string;
	description: string;
	backgroundImageUrl: string;
	previewImageUrl: string;
	href: string;
}

export default function SaasPreviewCard({
	title,
	subtitle,
	description,
	backgroundImageUrl,
	previewImageUrl,
	href,
}: AutomationPreviewCardProps) {
	return (
		<Card
			className="px-12 py-12 mt-8 bg-cover bg-center bg-no-repeat w-full"
			style={{ backgroundImage: `url(${backgroundImageUrl})` }}
		>
			<div className="absolute z-0 inset-0 bg-gray-800 opacity-75 rounded-lg" />
			<Link
				href={href}
				className="absolute inset-0 z-20"
				aria-label={title}
			/>
			<div className="relative z-10">
				<div className="text-left">
					<Text type="h3" className="text-white">
						{title}
					</Text>
					<Text className="mt-1 text-white">{subtitle}</Text>
					<Text className="mt-6 w-1/3 text-white">{description}</Text>
					<Button
						asChild
						className="self-end mt-6"
						variant="secondary"
					>
						<Link href={href}>View case study</Link>
					</Button>
				</div>
				<div
					className="w-90 h-140 absolute -top-30 right-8 rounded-lg bg-center bg-no-repeat bg-cover"
					style={{ backgroundImage: `url(${previewImageUrl})` }}
				/>
			</div>
		</Card>
	);
}
