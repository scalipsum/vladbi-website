import Text from '@/components/ui/text';
import Link from 'next/link';
import { Button } from '../ui/button';
import PatternSection from './PatternSection';

interface CallToActionProps {
	title?: string;
	subtitle?: string;
	className?: string;
}

export default function CallToAction({
	title = 'Hello',
	subtitle = 'How are you?',
	className,
}: CallToActionProps) {
	return (
		<PatternSection className="bg-brand-500 dark:bg-brand-200 mt-10">
			<div className="relative z-10">
				<Text type="h2" className="text-center text-white">
					{title}
				</Text>
				<Text className="mt-5 text-center text-white">{subtitle}</Text>
				<div className="flex justify-center">
					<Button variant="secondary" asChild className="mt-8">
						<Link href="/blog">Take the project quiz</Link>
					</Button>
				</div>
			</div>
		</PatternSection>
	);
}
