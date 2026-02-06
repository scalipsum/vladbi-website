'use client';

import { getCalApi } from '@calcom/embed-react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function useCalEmbed({ enabled = true }: { enabled?: boolean } = {}) {
	const { resolvedTheme } = useTheme();

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
				theme: resolvedTheme === 'dark' ? 'dark' : 'light',
				cssVarsPerTheme: {
					light: { 'cal-brand': '#043E6D' },
					dark: { 'cal-brand': '#3da9fc' },
				},
				hideEventTypeDetails: false,
				layout: 'month_view',
			});
		})();
	}, [enabled, resolvedTheme]);
}
