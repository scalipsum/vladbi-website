import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Text from '@/components/ui/text';
import WaveLine from '@/components/ui/wave-line';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

export default async function SaasProducts() {
	return (
		<ServicePageLayout
			title="SaaS Products"
			subTitle="Products built to produce revenue."
			ctaTitle="Looking for AI Automation?"
			ctaButtonText="View our process"
			ctaHref="/services/ai-automation"
			layoutClassName="max-w-2xl"
		>
			<div className="flex flex-col items-center gap-8">
				<Card className="w-full p-8 text-left mt-1" noHover>
					<Text type="h3" className="mb-2">
						1. Discovery
					</Text>
					<Text>Brainstorm session where we do:</Text>
					<ul className="mt-2">
						<Text type="li">· In-depth project understanding</Text>
						<Text type="li">· Product Market Fit</Text>
						<Text type="li">· Competitor Analysis</Text>
					</ul>
				</Card>

				<WaveLine height={70} width={70} className="text-brand" />

				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						2. Minimal Design
					</Text>
					<Text>
						Setting the tone on your project's visual identity.
					</Text>
				</Card>

				<WaveLine height={70} width={70} className="text-brand" />

				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						3. Development
					</Text>
					<Text>The big chunck of work. You can expect to see :</Text>
					<ul className="mt-2">
						<Text type="li">· Working functionality</Text>
						<Text type="li">· Direction decisions</Text>
						<Text type="li">· Live Demo calls</Text>
					</ul>
				</Card>

				<WaveLine height={70} width={70} className="text-brand" />

				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						4. Testing & Going Live
					</Text>
					<Text>Final phase where you can:</Text>
					<ul className="mt-2">
						<Text type="li">
							· Install the product on your device
						</Text>
						<Text type="li">· Report findings</Text>
						<Text type="li">· Launch it to the world</Text>
					</ul>
				</Card>
				<Button asChild className="mt-10 mb-0 mx-auto !px-6">
					<Link href="/products">
						View Case Studies
						<FaChevronRight />
					</Link>
				</Button>
			</div>
		</ServicePageLayout>
	);
}
