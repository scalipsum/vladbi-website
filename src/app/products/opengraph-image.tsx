import { generateOGImage } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Products | VladBi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return generateOGImage({
		title: 'Products',
		subtitle: 'Case Studies',
		description:
			'Vision turned reality. Browse all products including automation and SaaS solutions.',
	});
}
