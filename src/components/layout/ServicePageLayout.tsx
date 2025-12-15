import SquarePattern from '@/assets/img/square-pattern.svg';
import ContentLayout from '@/components/layout/ContentLayout';
import SecondaryHeader from '@/components/layout/SecondaryHeader';
import CallToAction from '@/components/sections/CallToAction';

interface ServicePageLayoutProps {
	children: React.ReactNode;
	title: string;
	subTitle: string;
}

export default function ServicePageLayout({
	children,
	title,
	subTitle,
}: ServicePageLayoutProps) {
	return (
		<div className="relative">
			<div className="relative z-10">
				<SecondaryHeader title={title} subTitle={subTitle} />
				<ContentLayout>{children}</ContentLayout>
			</div>
			{/* Pattern */}
			<div
				className="w-full h-full absolute top-0 right-0 bottom-0 left-0 z-0 opacity-5"
				style={{
					backgroundImage: `url(${
						SquarePattern.src || SquarePattern
					})`,
				}}
			/>
			<CallToAction
				title="Let's get started"
				subtitle="Bring your idea to life."
				className="mt-32"
			/>
		</div>
	);
}
