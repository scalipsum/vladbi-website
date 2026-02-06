'use client';

import { getCalApi } from '@calcom/embed-react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function useCalEmbed() {
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
}
