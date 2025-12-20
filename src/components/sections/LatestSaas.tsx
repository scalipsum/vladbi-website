import Text from '@/components/ui/text';
import { getLatestSaasProduct } from '@/lib/notion';
import SaasPreviewCard from '../elements/SaasPreviewCard';

export default async function LatestSaas() {
	const latestSaasProduct = await getLatestSaasProduct();

	if (!latestSaasProduct) {
		return (
			<section className="mt-48">
				<Text type="h2">Latest SaaS product</Text>
				<Text className="mt-8">No SaaS products available yet.</Text>
			</section>
		);
	}

	return (
		<section className="md:mt-48 mt-24">
			<Text type="h2" className="text-center md:text-left">
				Latest SaaS product
			</Text>

			<SaasPreviewCard
				title={latestSaasProduct.title}
				subtitle={latestSaasProduct.subTitle}
				description={latestSaasProduct.description}
				href={`/products/${latestSaasProduct.slug}`}
				backgroundImageUrl={latestSaasProduct.coverImage ?? ''}
				previewImageUrl={latestSaasProduct.verticalImage ?? ''}
			/>
		</section>
	);
}
