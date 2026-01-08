import { getProductsFromCache } from '@/lib/notion';
import { cn } from '@/lib/utils';
import AutomationPreviewCard from '../elements/AutomationPreviewCard';
import SaasPreviewCard from '../elements/SaasPreviewCard';

interface AllProductsProps {
	className?: string;
}
export default async function AllProducts({ className }: AllProductsProps) {
	const products = await getProductsFromCache();

	return (
		<div className={cn('flex flex-col md:gap-44 gap-10', className)}>
			{products.map((product, index) => {
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
	);
}
