'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
// import QuizIframeCard from '@/components/elements/QuizIframeCard';
import Header from '@/components/layout/Header';
import TightContentLayout from '@/components/layout/TightContentLayout';

export default function Quiz() {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: 'project-discovery' });
			cal('ui', {
				theme: resolvedTheme === 'dark' ? 'dark' : 'light',
				cssVarsPerTheme: {
					light: { 'cal-brand': '#043E6D' },
					dark: { 'cal-brand': '#3da9fc' },
				},
				hideEventTypeDetails: false,
				layout: 'month_view',
			});
		})();
	}, [resolvedTheme]);

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
