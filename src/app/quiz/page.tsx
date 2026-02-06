'use client';

import Cal from '@calcom/embed-react';
// import QuizIframeCard from '@/components/elements/QuizIframeCard';
import { useCalEmbed } from '@/hooks/use-cal-embed';
import Header from '@/components/layout/Header';
import TightContentLayout from '@/components/layout/TightContentLayout';

export default function Quiz() {
	useCalEmbed();

	return (
		<div className="pb-24">
			<Header
				title="Tell us about your idea"
				subTitle="Let's build it together."
			/>
			<TightContentLayout className="px-4 md:px-0">
				{/* <QuizIframeCard
					src="https://app.youform.com/forms/rqkp9ydg"
					className="md:h-[670px] h-[600px]"
				/> */}
				<Cal
					namespace="project-discovery"
					calLink="vladbi/project-discovery"
					style={{
						width: '100%',
						height: '100%',
						overflow: 'scroll',
					}}
					config={{
						layout: 'month_view',
						useSlotsViewOnSmallScreen: 'true',
					}}
				/>
			</TightContentLayout>
		</div>
	);
}
