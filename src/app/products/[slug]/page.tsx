import { BlockRender } from '@/components/elements/BlockRender';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import TightContentLayout from '@/components/layout/TightContentLayout';
import { Badge } from '@/components/ui/badge';
import { getProductsFromCache } from '@/lib/notion';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ProductPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const products = await getProductsFromCache();

	return products.map((product) => ({
		slug: product.slug,
	}));
}

export async function generateMetadata({
	params,
}: ProductPageProps): Promise<Metadata> {
	const { slug } = await params;
	const products = await getProductsFromCache();
	const product = products.find((p) => p.slug === slug);

	if (!product) {
		return {
			title: 'Product Not Found',
		};
	}

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vladbi.com';

	return {
		title: product.title,
		description: product.description,
		openGraph: {
			title: product.title,
			description: product.description,
			type: 'website',
			url: `${siteUrl}/products/${product.slug}`,
			images: [
				{
					url: product.coverImage || `${siteUrl}/opengraph-image.png`,
					width: 1200,
					height: 630,
					alt: product.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: product.title,
			description: product.description,
			images: [
				{
					url: product.coverImage || `${siteUrl}/opengraph-image.png`,
					alt: product.title,
				},
			],
		},
	};
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { slug } = await params;
	const products = await getProductsFromCache();
	const product = products.find((p) => p.slug === slug);

	if (!product) {
		notFound();
	}

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vladbi.com';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: product.title,
		description: product.description,
		image: product.coverImage || `${siteUrl}/opengraph-image.png`,
		dateCreated: new Date(product.date).toISOString(),
		category: product.category,
		url: `${siteUrl}/products/${product.slug}`,
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<article>
				<ServicePageLayout
					title={product.title}
					subTitle={product.subTitle}
					ctaSubtitle="Turn your vision into reality"
					headerBackgroundUrl={product.coverImage}
					headerTextColor="white"
					layoutClassName="relative overflow-visible mt-0 mb-0 pb-0"
					additionalHeaderContent={
						<>
							{product.category && (
								<Badge
									variant="secondary"
									className="mt-4 bg-white text-black"
								>
									{product.category}
								</Badge>
							)}
						</>
					}
				>
					{product.verticalImage && (
						<div className="pt-4 bg-background lg:bg-transparent lg:mt-0 lg:absolute lg:-top-40 lg:-right-22 overflow-visible z-20">
							<Image
								src={product.verticalImage}
								alt={`${product.title} - Vertical View`}
								width={280}
								height={380}
								className="rounded-lg object-cover mx-auto"
							/>
						</div>
					)}

					<TightContentLayout className="relative !overflow-visible bg-background px-1 lg:px-8 py-12 pb-20 rounded-md">
						{product.blocks && product.blocks.length > 0 && (
							<BlockRender
								blocks={product.blocks}
								config={{
									className: {
										h1: 'text-4xl font-main font-extrabold mb-8 text-brand text-center',
										h2: 'text-3xl font-main  mb-3 font-extrabold text-brand',
										h3: 'text-2xl font-main  mb-3 font-bold text-brand',
										paragraph:
											'text-lg leading-relaxed mb-3.5 text-foreground font-sans',
										quote: 'border-b-4 font-sans font-bold border-l-0 border-brand-100 dark:border-brand-500 my-6 text-brand text-2xl bg-slate-100 dark:bg-slate-900 dark:text-white py-5 text-center rounded-md',
										columnList: 'my-8',
										image: 'rounded-lg my-6',
									},
								}}
							/>
						)}
					</TightContentLayout>
				</ServicePageLayout>
			</article>
		</>
	);
}
