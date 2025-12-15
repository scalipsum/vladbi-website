import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';
import PatternSection from './PatternSection';

interface CallToActionProps {
	title?: string;
	subtitle?: string;
	className?: string;
	buttonText?: string;
	href?: string;
}

export default async function CallToAction({
	title = 'Hello',
	subtitle,
	className,
	buttonText = 'Take the project quiz',
	href = '/blog',
}: CallToActionProps) {
	return (
		<PatternSection className={cn('bg-brand-500', className)}>
			<Text type="h2" className="text-center text-white">
				{title}
			</Text>
			{subtitle && (
				<Text className="mt-5 text-center text-white">{subtitle}</Text>
			)}
			<div className="flex justify-center">
				<Button variant="secondary" asChild className="mt-8">
					<Link href={href}>{buttonText}</Link>
				</Button>
			</div>
		</PatternSection>
	);
}
