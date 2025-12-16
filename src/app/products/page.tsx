import AutomationPreviewCard from '@/components/elements/AutomationPreviewCard';
import SaasPreviewCard from '@/components/elements/SaasPreviewCard';
import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';
import { getProductsFromCache } from '@/lib/notion';

export default async function Projects() {
	const products = await getProductsFromCache();

	return (
		<div>
			<Header title="Products" subTitle="Vision turned reality" />
			<ContentLayout className="pb-40">
				<div className="flex flex-col gap-14 pt-4 mt-8">
					{products.map((product) => {
						if (product.category === 'Automation') {
							return (
								<AutomationPreviewCard
									key={product.id}
									title={product.title}
									subtitle={product.subTitle}
									description={product.description}
									href={`/products/${product.slug}`}
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
							/>
						);
					})}
				</div>
			</ContentLayout>
		</div>
	);
}
