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

	if (!latestSaasProduct || !latestAutomationProduct) {
		return (
			<section className="mt-48">
				<Text type="h2">Latest digital product</Text>
				<Text className="mt-8">No digital products available yet.</Text>
			</section>
		);
	}

	return (
		<section>
			<Text type="h2" className="text-center">
				Building products people love
			</Text>

			<SaasPreviewCard
				title={latestSaasProduct.title}
				subtitle={latestSaasProduct.subTitle}
				description={latestSaasProduct.description}
				href={`/products/${latestSaasProduct.slug}`}
				backgroundImageUrl={latestSaasProduct.coverImage ?? ''}
				previewImageUrl={latestSaasProduct.verticalImage ?? ''}
				className="mt-8 md:mt-24"
			/>

			<AutomationPreviewCard
				title={latestAutomationProduct.title}
				subtitle={latestAutomationProduct.subTitle}
				description={latestAutomationProduct.description}
				href={`/products/${latestAutomationProduct.slug}`}
			/>

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
