'use client';

import Cal from '@calcom/embed-react';
// import QuizIframeCard from '@/components/elements/QuizIframeCard';
import Header from '@/components/layout/Header';
import TightContentLayout from '@/components/layout/TightContentLayout';
import { Card } from '@/components/ui/card';
import { useCalEmbed } from '@/hooks/use-cal-embed';

export default function Quiz() {
	useCalEmbed();

	return (
		<div className="pb-24">
			<Header
				title="Book a call"
				subTitle="Have an idea? Let's discuss it together."
			/>
			<TightContentLayout className="px-4 md:px-0">
				{/* <QuizIframeCard
					src="https://app.youform.com/forms/rqkp9ydg"
					className="md:h-[670px] h-[600px]"
				/> */}
				<Card
					className="w-full overflow-y-hidden mb-24 !shadow-none"
					noHover
				>
					<Cal
						namespace="project-discovery"
						calLink="vladbi/project-discovery"
						className="md:-mb-24 -mb-6"
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
				</Card>
			</TightContentLayout>
		</div>
	);
}
