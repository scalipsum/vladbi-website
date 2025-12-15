import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import BrandStripes from '../elements/BrandStripes';
import ContentLayout from './ContentLayout';

interface SecondaryHeaderProps {
	title: string;
	subTitle: string;
	className?: string;
}
export default function SecondaryHeader({
	title,
	subTitle,
	className,
}: SecondaryHeaderProps) {
	return (
		<div
			className={cn(
				'relative max-w-[1920px] relative mx-auto h-82 w-full shadow-lg rounded-bl-[280px] rounded-br-[300px] shadow-slate-200/60 dark:shadow-slate-800/60 mb-24 bg-background',
				className,
			)}
		>
			<div className="max-w-[1920px] relative mx-auto">
				<BrandStripes className="absolute !-top-24 z-0 right-0 top-0" />
				<ContentLayout>
					<div className="inline-block mt-36">
						<Text type="h2">{title}</Text>
						<Text className="mt-4 text-brand">{subTitle}</Text>
						<div className="h-1.5 bg-brand rounded-full w-full self-center mt-2.5" />
					</div>
				</ContentLayout>
			</div>
		</div>
	);
}
