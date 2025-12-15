import SecondaryHeader from '@/components/layout/SecondaryHeader';
import CallToAction from '@/components/sections/CallToAction';

export default async function AiAutomationProducts() {
	return (
		<div>
			<SecondaryHeader
				title="AI Automation"
				subTitle="From idea to launch. The full process."
			/>
			<CallToAction
				title="Let's get started"
				subtitle="Bring your idea to life."
				className="mt-32"
			/>
		</div>
	);
}
