import AutomationPreviewCard from '@/components/elements/AutomationPreviewCard';
import SaasPreviewCard from '@/components/elements/SaasPreviewCard';
import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';
import { getProductsFromCache } from '@/lib/notion';

export default async function Projects() {
	const products = await getProductsFromCache();

	return (
		<div className="pb-32">
			<Header title="Products" subTitle="Vision turned reality" />
			<ContentLayout>
				<div className="flex flex-col mt-24">
					{products.map((product, index) => {
						if (product.category === 'Automation') {
							return (
								<AutomationPreviewCard
									key={product.id}
									title={product.title}
									subtitle={product.subTitle}
									description={product.description}
									href={`/products/${product.slug}`}
									className={index !== 0 ? 'mt-28' : ''}
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
								className={index !== 0 ? 'mt-54' : ''}
							/>
						);
					})}
				</div>
			</ContentLayout>
		</div>
	);
}
