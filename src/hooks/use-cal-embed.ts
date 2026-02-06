'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export function useCalEmbed({ enabled = true }: { enabled?: boolean } = {}) {
	useEffect(() => {
		if (!enabled) return;
		(async function () {
			const cal = await getCalApi({ namespace: 'project-discovery' });
			cal('floatingButton', {
				calLink: 'vladbi/project-discovery',
				config: {
					layout: 'month_view',
					useSlotsViewOnSmallScreen: 'true',
				},
				buttonText: 'Book a call',
				buttonColor: '#043e6d',
			});
			cal('ui', {
				cssVarsPerTheme: {
					light: { 'cal-brand': '#292929' },
					dark: { 'cal-brand': '#3da9fc' },
				},
				hideEventTypeDetails: false,
				layout: 'month_view',
			});
		})();
	}, []);
}
