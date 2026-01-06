import { generateOGImage } from '@/lib/og';

export const alt = 'AI Automation Services | VladBi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return generateOGImage({
		title: 'AI Automation',
		subtitle: 'Workflows and Tools',
		description: 'Repetitive work, fully automated.',
	});
}
