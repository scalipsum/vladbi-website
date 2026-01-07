import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import BrandStripes from '../elements/BrandStripes';
import ContentLayout from './ContentLayout';

interface SecondaryHeaderProps {
	title: string;
	subTitle?: string;
	className?: string;
	backgroundUrl?: string;
	textColor?: string;
	additionalContent?: React.ReactNode;
}
export default function SecondaryHeader({
	title,
	subTitle,
	className,
	backgroundUrl,
	textColor = 'brand',
	additionalContent,
}: SecondaryHeaderProps) {
	return (
		<div
			className={cn(
				'relative max-w-[1920px] relative mx-auto h-70 lg:h-90 border-b border-slate-100 dark:border-slate-700 w-full rounded-b-[36px] lg:rounded-bl-[280px] lg:rounded-br-[330px]',
				backgroundUrl
					? 'bg-cover bg-center bg-no-repeat'
					: 'bg-background shadow-lg dark:shadow-gray-900/50 shadow-slate-200/60',
				className,
			)}
			style={
				backgroundUrl
					? { backgroundImage: `url(${backgroundUrl})` }
					: undefined
			}
		>
			{backgroundUrl && (
				<div className="absolute z-0 inset-0 bg-slate-900 opacity-60 rounded-b-[36px] lg:rounded-bl-[280px] lg:rounded-br-[330px]" />
			)}
			<div className="max-w-[1920px] relative mx-auto h-full relative z-10">
				<BrandStripes className="hidden lg:block absolute !-top-16 z-0 right-0 top-0" />
				<ContentLayout className="flex items-center justify-center">
					<div className="inline-block mt-30 lg:mt-36 text-center">
						<Text type="h2" className={`text-${textColor}`}>
							{title}
						</Text>
						<div
							className={`h-1.5 bg-${textColor} rounded-full w-full self-center mt-2.5`}
						/>
						{subTitle && (
							<Text className={`mt-4 text-${textColor}`}>
								{subTitle}
							</Text>
						)}
						{additionalContent}
					</div>
				</ContentLayout>
			</div>
		</div>
	);
}
