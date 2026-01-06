import { generateOGImage } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Services | VladBi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return generateOGImage({
		title: 'Services',
		subtitle: 'Experts in building',
		description: 'SaaS Products and AI Automation solutions.',
	});
}
