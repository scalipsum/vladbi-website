import { generateOGImage } from '@/lib/og';

export const alt = 'VladBi - Building MVPs for mission-driven founders';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return generateOGImage({
		title: 'Building MVPs for mission-driven founders',
		description:
			'Your technical partner to build and launch products that scale globally.',
	});
}
