import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Text from '@/components/ui/text';
import WaveLine from '@/components/ui/wave-line';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

export default async function AiAutomationProducts() {
	return (
		<ServicePageLayout
			title="AI Automation"
			subTitle="From idea to launch. The full process."
			ctaTitle="Looking for SaaS Products?"
			ctaButtonText="View our process"
			ctaHref="/services/saas-products"
			layoutClassName="max-w-2xl"
		>
			<div className="flex flex-col items-center gap-8">
				<Card className="w-full p-8 text-left mt-1">
					<Text type="h3">1. Discovery</Text>
					<Text className="text-gray-600 mt-1">
						This is a text inside a card.
					</Text>
				</Card>

				<WaveLine height={70} width={70} className="text-brand" />

				<Card className="w-full p-8 text-left">
					<Text type="h3">2. Design</Text>
					<Text className="text-gray-600 mt-1">
						This is a text inside a card.
					</Text>
				</Card>

				<Card className="w-full p-8 text-left">
					<Text type="h3">3. Development</Text>
					<Text className="text-gray-600 mt-1">
						This is a text inside a card.
					</Text>
				</Card>
				<Button asChild className="mt-10 mb-0 mx-auto !px-6">
					<Link href="/products">
						View Products
						<FaChevronRight />
					</Link>
				</Button>
			</div>
		</ServicePageLayout>
	);
}
