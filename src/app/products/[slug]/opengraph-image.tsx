import { generateOGImage, generateOGImageWithCover } from '@/lib/og';
import { getProductsFromCache } from '@/lib/notion';

export const alt = 'Product | VladBi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
	const products = await getProductsFromCache();
	return products.map((product) => ({ slug: product.slug }));
}

export default async function Image({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const products = await getProductsFromCache();
	const product = products.find((p) => p.slug === slug);

	if (!product) {
		return generateOGImage({
			title: 'Product Not Found',
		});
	}

	return generateOGImageWithCover({
		title: product.title,
		subtitle: product.category || 'Product',
		description: product.description,
		coverImage: product.coverImage,
	});
}
