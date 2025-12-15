import Text from '@/components/ui/text';
import BrandStripes from '../elements/BrandStripes';
import ContentLayout from './ContentLayout';

interface SecondaryHeaderProps {
	title: string;
	subTitle: string;
}
export default function SecondaryHeader({
	title,
	subTitle,
}: SecondaryHeaderProps) {
	return (
		<div className="relative max-w-[1920px] relative mx-auto h-82 w-full shadow-lg rounded-b-[290px] shadow-slate-200/60  mb-24">
			<div className="max-w-[1920px] relative mx-auto">
				<BrandStripes className="absolute !-top-24 z-0 right-0 top-0" />
				<ContentLayout>
					<div className="inline-block mt-32">
						<Text type="h2">{title}</Text>
						<Text className="mt-4 text-brand">{subTitle}</Text>
						<div className="h-1.5 bg-brand rounded-full w-full self-center mt-2.5" />
					</div>
				</ContentLayout>
			</div>
		</div>
	);
}
