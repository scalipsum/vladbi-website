import { generateOGImage } from '@/lib/og';

export const alt = 'VladBi - Building SaaS for mission-driven startups';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return generateOGImage({
		title: 'Building SaaS for mission-driven startups',
		description:
			'Your technical partner to design, build and launch products that scale globally.',
	});
}
