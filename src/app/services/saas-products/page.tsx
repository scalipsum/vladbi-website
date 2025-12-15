import SecondaryHeader from '@/components/layout/SecondaryHeader';
import CallToAction from '@/components/sections/CallToAction';

export default async function SaasProducts() {
	return (
		<div>
			<SecondaryHeader
				title="Building SaaS"
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
