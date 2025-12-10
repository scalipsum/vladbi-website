import XPattern from '@/assets/img/x-pattern.svg';
import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';

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
		<div
			className={cn(
				'bg-brand-500 dark:bg-brand-200 relative py-10',
				className,
			)}
		>
			<div
				className="w-full h-full absolute top-0 right-0 bottom-0 left-0 z-0 opacity-50"
				style={{ backgroundImage: `url(${XPattern.src || XPattern})` }}
			/>
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
		</div>
	);
}
