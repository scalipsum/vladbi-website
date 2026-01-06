export interface FontData {
	name: string;
	data: ArrayBuffer;
	weight: 400 | 500 | 600 | 700 | 800;
	style: 'normal' | 'italic';
}

let cachedInterBold: ArrayBuffer | null = null;
let cachedInterExtraBold: ArrayBuffer | null = null;

export async function loadInterBold(): Promise<FontData> {
	if (!cachedInterBold) {
		// Using Inter font from Google Fonts (requesting TTF via user-agent)
		const cssResponse = await fetch(
			'https://fonts.googleapis.com/css2?family=Inter:wght@700',
			{
				headers: {
					// This user-agent triggers Google to return TTF URLs
					'User-Agent':
						'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
				},
			},
		);
		const css = await cssResponse.text();
		const fontUrl = css.match(
			/src: url\(([^)]+)\) format\('truetype'\)/,
		)?.[1];
		if (!fontUrl) {
			throw new Error('Could not find font URL in CSS response');
		}
		const fontResponse = await fetch(fontUrl);
		cachedInterBold = await fontResponse.arrayBuffer();
	}

	return {
		name: 'Inter',
		data: cachedInterBold,
		weight: 700,
		style: 'normal',
	};
}

export async function loadInterExtraBold(): Promise<FontData> {
	if (!cachedInterExtraBold) {
		const cssResponse = await fetch(
			'https://fonts.googleapis.com/css2?family=Inter:wght@800',
			{
				headers: {
					'User-Agent':
						'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
				},
			},
		);
		const css = await cssResponse.text();
		const fontUrl = css.match(
			/src: url\(([^)]+)\) format\('truetype'\)/,
		)?.[1];
		if (!fontUrl) {
			throw new Error('Could not find font URL in CSS response');
		}
		const fontResponse = await fetch(fontUrl);
		cachedInterExtraBold = await fontResponse.arrayBuffer();
	}

	return {
		name: 'Inter',
		data: cachedInterExtraBold,
		weight: 800,
		style: 'normal',
	};
}

export async function loadOGFonts(): Promise<FontData[]> {
	const [interBold, interExtraBold] = await Promise.all([
		loadInterBold(),
		loadInterExtraBold(),
	]);

	return [interBold, interExtraBold];
}
