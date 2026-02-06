import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { Card } from '@/components/ui/card';
import Text from '@/components/ui/text';
import WaveLine from '@/components/ui/wave-line';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'AI Automation',
	description:
		'AI automation process. Repetitive work, fully automated.',
};

export default async function AiAutomationProducts() {
	return (
		<ServicePageLayout
			title="AI Automation"
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
					<Text>Brainstorm session where we:</Text>
					<ul className="mt-2">
						<Text type="li">Understand the repetitive work</Text>
						<Text type="li">
							Decide the steps to execute the work
						</Text>
						<Text type="li">Choose success metrics</Text>
					</ul>
				</Card>

				<WaveLine height={70} width={70} className="text-brand" />

				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						2. Fast Development
					</Text>
					<Text>The part where we:</Text>
					<ul className="mt-2">
						<Text type="li">Build the automation</Text>
						<Text type="li">Live Demo it to you</Text>
						<Text type="li">Tweak the direction, if necessary</Text>
					</ul>
				</Card>

				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						3. Testing & Going Live
					</Text>
					<Text>Final phase where you can:</Text>
					<ul className="mt-2">
						<Text type="li">Use the automation yourself</Text>
						<Text type="li">Launch it live</Text>
					</ul>
				</Card>

				<WaveLine height={70} width={70} className="text-brand" />
				<Card className="w-full p-8 text-left" noHover>
					<Text type="h3" className="mb-2">
						4. Support & Improvement
					</Text>
					<Text>After launch phase where we:</Text>
					<ul className="mt-2">
						<Text type="li">
							Jump on any issues that may appear
						</Text>
						<Text type="li">Develop the automation further</Text>
					</ul>
				</Card>
			</div>
		</ServicePageLayout>
	);
}
