import SquarePattern from '@/assets/img/square-pattern.svg';
import ContentLayout from '@/components/layout/ContentLayout';
import CallToAction from '@/components/sections/CallToAction';
import { cn } from '@/lib/utils';
import SecondaryHeader from './SecondaryHeader';

interface ServicePageLayoutProps {
	children: React.ReactNode;
	title: string;
	subTitle?: string;
	ctaTitle?: string;
	ctaSubtitle?: string;
	ctaButtonText?: string;
	ctaHref?: string;
	hiddenPattern?: boolean;
	hiddenCta?: boolean;
	layoutClassName?: string;
	headerBackgroundUrl?: string;
	headerTextColor?: string;
	additionalHeaderContent?: React.ReactNode;
}

export default function ServicePageLayout({
	children,
	title,
	subTitle,
	ctaTitle = "Let's get started",
	ctaSubtitle,
	ctaButtonText = 'Take the product quiz',
	ctaHref = '/quiz',
	hiddenPattern,
	hiddenCta,
	layoutClassName,
	headerBackgroundUrl,
	headerTextColor,
	additionalHeaderContent,
}: ServicePageLayoutProps) {
	return (
		<div className="relative">
			<div className="relative z-10">
				<SecondaryHeader
					title={title}
					subTitle={subTitle}
					backgroundUrl={headerBackgroundUrl}
					textColor={headerTextColor}
					additionalContent={additionalHeaderContent}
				/>
				<ContentLayout className={cn('mt-12 mb-20', layoutClassName)}>
					{children}
				</ContentLayout>
			</div>
			{/* Pattern */}
			{!hiddenPattern && (
				<div
					className="w-full h-full absolute top-0 right-0 bottom-0 left-0 z-0 opacity-[4%] dark:invert"
					style={{
						backgroundImage: `url(${
							SquarePattern.src || SquarePattern
						})`,
					}}
				/>
			)}
			{!hiddenCta && (
				<CallToAction
					title={ctaTitle}
					subtitle={ctaSubtitle}
					href={ctaHref}
					buttonText={ctaButtonText}
				/>
			)}
		</div>
	);
}
