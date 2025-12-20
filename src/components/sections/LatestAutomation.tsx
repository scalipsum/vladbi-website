import Text from '@/components/ui/text';
import { getLatestAutomationProduct } from '@/lib/notion';
import AutomationPreviewCard from '../elements/AutomationPreviewCard';

export default async function LatestAutomation() {
	const latestAutomationProduct = await getLatestAutomationProduct();

	if (!latestAutomationProduct) {
		return (
			<section className="md:mt-32">
				<Text type="h2">Latest automation product</Text>
				<Text className="mt-8">
					No automation products available yet.
				</Text>
			</section>
		);
	}

	return (
		<section className="md:mt-32 mt-16">
			<Text type="h2" className="text-center md:text-left">
				Latest automation
			</Text>

			<AutomationPreviewCard
				title={latestAutomationProduct.title}
				subtitle={latestAutomationProduct.subTitle}
				description={latestAutomationProduct.description}
				href={`/products/${latestAutomationProduct.slug}`}
			/>
		</section>
	);
}
