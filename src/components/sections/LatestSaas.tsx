import Text from '@/components/ui/text';
import { getLatestAutomationProduct, getLatestSaasProduct } from '@/lib/notion';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';
import AutomationPreviewCard from '../elements/AutomationPreviewCard';
import SaasPreviewCard from '../elements/SaasPreviewCard';
import { Button } from '../ui/button';

export default async function LatestSaas() {
	const latestSaasProduct = await getLatestSaasProduct();
	const latestAutomationProduct = await getLatestAutomationProduct();

	return (
		<section>
			<Text type="h2" className="text-center">
				Building products people love
			</Text>

			{latestSaasProduct && (
				<SaasPreviewCard
					title={latestSaasProduct.title}
					subtitle={latestSaasProduct.subTitle}
					description={latestSaasProduct.description}
					href={`/products/${latestSaasProduct.slug}`}
					backgroundImageUrl={latestSaasProduct.coverImage ?? ''}
					previewImageUrl={latestSaasProduct.verticalImage ?? ''}
					className="mt-8 md:mt-28"
				/>
			)}

			{latestAutomationProduct && (
				<AutomationPreviewCard
					title={latestAutomationProduct.title}
					subtitle={latestAutomationProduct.subTitle}
					description={latestAutomationProduct.description}
					href={`/products/${latestAutomationProduct.slug}`}
				/>
			)}

			<div className="w-full flex justify-center mt-20">
				<Button asChild className="!px-6">
					<Link href={'/products'}>
						View All Products
						<FaChevronRight />
					</Link>
				</Button>
			</div>
		</section>
	);
}
