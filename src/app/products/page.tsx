import AutomationPreviewCard from '@/components/elements/AutomationPreviewCard';
import SaasPreviewCard from '@/components/elements/SaasPreviewCard';
import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';
import { getProductsFromCache } from '@/lib/notion';
import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vladbi.com';

export const metadata: Metadata = {
	title: 'Products | Vlad Bibire',
	description:
		'Vision turned reality. Browse all products including automation and SaaS solutions.',
	openGraph: {
		title: 'Products | Vlad Bibire',
		description:
			'Vision turned reality. Browse all products including automation and SaaS solutions.',
		type: 'website',
		url: `${siteUrl}/products`,
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Products | Vlad Bibire',
		description:
			'Vision turned reality. Browse all products including automation and SaaS solutions.',
	},
};

export default async function Projects() {
	const products = await getProductsFromCache();
	console.log(products[0].verticalImage);

	return (
		<div className="lg:pb-32 pb-24">
			<Header title="Products" subTitle="Vision turned reality" />
			<ContentLayout>
				<div className="flex flex-col lg:mt-24 md:mt-16 mt-6">
					{products.map((product, index) => {
						if (product.category === 'Automation') {
							return (
								<AutomationPreviewCard
									key={product.id}
									title={product.title}
									subtitle={product.subTitle}
									description={product.description}
									href={`/products/${product.slug}`}
									className={
										index !== 0 ? 'lg:mt-28 mt-24' : ''
									}
								/>
							);
						}
						return (
							<SaasPreviewCard
								key={product.id}
								title={product.title}
								subtitle={product.subTitle}
								description={product.description}
								href={`/products/${product.slug}`}
								backgroundImageUrl={product.coverImage ?? ''}
								previewImageUrl={product.verticalImage ?? ''}
								className={
									index !== 0 ? 'lg:mt-50 md:mt-44 mt-24' : ''
								}
							/>
						);
					})}
				</div>
			</ContentLayout>
		</div>
	);
}
