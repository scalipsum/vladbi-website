import { BlockRender } from '@/components/elements/BlockRender';
import { Badge } from '@/components/ui/badge';
import { getProductsFromCache } from '@/lib/notion';
import { format } from 'date-fns';
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

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site.com';

	return {
		title: product.title,
		description: product.description,
		alternates: {
			canonical: `${siteUrl}/products/${product.slug}`,
		},
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

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site.com';

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
			<article className="max-w-3xl mx-auto prose dark:prose-invert">
				{product.coverImage && (
					<div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
						<Image
							src={product.coverImage}
							alt={product.title}
							fill
							className="object-cover"
							priority
						/>
					</div>
				)}

				<header className="mb-8">
					<div className="flex items-center gap-4 text-muted-foreground mb-4">
						<time>
							{format(new Date(product.date), 'MMMM d, yyyy')}
						</time>
					</div>

					<h1 className="text-4xl font-bold mb-4 text-foreground">
						{product.title}
					</h1>

					{product.subTitle && (
						<p className="text-xl text-muted-foreground mb-4">
							{product.subTitle}
						</p>
					)}

					<div className="flex gap-4 mb-4">
						{product.category && (
							<Badge variant="secondary">
								{product.category}
							</Badge>
						)}
					</div>
				</header>

				{product.verticalImage && (
					<div className="relative w-full max-w-md mx-auto mb-8">
						<Image
							src={product.verticalImage}
							alt={`${product.title} - Vertical View`}
							width={400}
							height={600}
							className="rounded-lg object-cover"
						/>
					</div>
				)}

				<div className="max-w-none">
					<div className="mb-8">
						<p className="text-lg leading-relaxed">
							{product.description}
						</p>
					</div>

					{/* Render Notion blocks if available */}
					{product.blocks && product.blocks.length > 0 && (
						<BlockRender
							blocks={product.blocks}
							config={{
								className: {
									h1: 'text-4xl font-bold mb-4 text-foreground',
									h2: 'text-2xl font-bold mb-3 text-foreground',
									h3: 'text-xl font-semibold mb-2 text-foreground',
									paragraph:
										'text-base leading-relaxed mb-4 text-foreground',
									quote: 'border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic my-6 text-muted-foreground',
									columnList: 'my-8',
									image: 'rounded-lg my-6',
								},
							}}
						/>
					)}
				</div>
			</article>
		</>
	);
}
