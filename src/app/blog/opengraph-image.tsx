import { generateStaticOGImage } from '@/lib/og';

export const alt = 'Blog | VladBi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return generateStaticOGImage({
		title: 'Blog',
		description: 'Real thoughts. No AI.',
	});
}
