'use client';

import { useCalEmbed } from '@/hooks/use-cal-embed';
import { usePathname } from 'next/navigation';

export default function CalEmbed() {
	const pathname = usePathname();
	const isQuizPage = pathname === '/quiz';

	useCalEmbed({ enabled: !isQuizPage });

	return null;
}
