import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { Card } from '@/components/ui/card';
import Text from '@/components/ui/text';
import WaveLine from '@/components/ui/wave-line';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'MVP Development',
	description:
		'Web and mobile app development process. From discovery to launch.',
};

export default async function MvpDevelopment() {
	return (
		<ServicePageLayout
			title="SaaS Products"
			subTitle="The process behind success."
			layoutClassName="max-w-2xl pb-0"
			ctaTitle="View My Work"
			ctaSubtitle="Ideas like yours are turned into Real Products"
			ctaButtonText="View Case Studies"
			ctaHref="/products"
		>
			<div className="flex flex-col items-center gap-8">
				<Card className="w-full p-8 text-left mt-1" noHover>
					<Text type="h3" className="mb-2">
						1. Discovery
					</Text>
					<Text>Brainstorm session where we do:</Text>
					<ul className="mt-2">
						<Text type="li">In-depth project understanding</Text>
						<Text type="li">Product Market Fit</Text>
						<Text type="li">Competitor Analysis</Text>
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

				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						3. Fast Development
					</Text>
					<Text>You can expect to see :</Text>
					<ul className="mt-2">
						<Text type="li">Working functionality</Text>
						<Text type="li">Live Demos</Text>
						<Text type="li">Decision making</Text>
					</ul>
				</Card>

				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						4. Testing & Going Live
					</Text>
					<Text>Final phase where you can:</Text>
					<ul className="mt-2">
						<Text type="li">
							Install the product on your device
						</Text>
						<Text type="li">Report findings</Text>
						<Text type="li">Launch it live</Text>
					</ul>
				</Card>
				<WaveLine height={70} width={70} className="text-brand" />
				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						5. Support & Improvement
					</Text>
					<Text>After launch phase where we:</Text>
					<ul className="mt-2">
						<Text type="li">
							Keep your product updated & secured
						</Text>
						<Text type="li">
							Jump on any issues that may appear
						</Text>
						<Text type="li">Develop new features</Text>
					</ul>
				</Card>
			</div>
		</ServicePageLayout>
	);
}
