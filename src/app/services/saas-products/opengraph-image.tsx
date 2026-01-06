import { generateOGImage } from '@/lib/og';

export const alt = 'SaaS Products Services | VladBi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return generateOGImage({
		title: 'SaaS Products',
		subtitle: 'Web and Mobile Apps',
		description: 'Products built to produce revenue.',
	});
}
