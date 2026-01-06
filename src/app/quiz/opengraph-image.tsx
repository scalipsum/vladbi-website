import { generateOGImage } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Product Quiz | VladBi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return generateOGImage({
		title: 'Your Product Quiz',
		subtitle: 'Get Started',
		description: 'The beginning of a long-term partnership.',
	});
}
