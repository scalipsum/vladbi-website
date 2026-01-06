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
			subTitle="The process of building one."
			layoutClassName="max-w-2xl"
			ctaTitle="See What's Possible"
			ctaSubtitle="See Ideas turned to Real Products"
			ctaButtonText="View Products"
			ctaHref="/products"
		>
			<div className="flex flex-col items-center gap-8">
				<Card className="w-full p-8 text-left mt-1" noHover>
					<Text type="h3" className="mb-2">
						1. Discovery
					</Text>
					<Text>Brainstorm session where we:</Text>
					<ul className="mt-2">
						<Text type="li">· Understand the repetitive work</Text>
						<Text type="li">
							· Decide the steps to execute the work
						</Text>
						<Text type="li">· Choose success metrics</Text>
					</ul>
				</Card>

				<WaveLine height={70} width={70} className="text-brand" />

				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						{`2. Development`}
					</Text>
					<Text>The chunck of work where we:</Text>
					<ul className="mt-2">
						<Text type="li">· Build the automation</Text>
						<Text type="li">· Live Demo it to you</Text>
						<Text type="li">
							· Tweak the direction, if necessary
						</Text>
					</ul>
				</Card>

				<WaveLine height={70} width={70} className="text-brand" />

				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						3. Testing & Going Live
					</Text>
					<Text>Final phase where you can:</Text>
					<ul className="mt-2">
						<Text type="li">· Test the automation yourself</Text>
						<Text type="li">
							· Watch the work be done automatically
						</Text>
					</ul>
				</Card>
				<Button asChild className="mt-10 mb-0 mx-auto !px-6">
					<Link href="/services/saas-products">
						Looking for SaaS Products?
						<FaChevronRight />
					</Link>
				</Button>
			</div>
		</ServicePageLayout>
	);
}
