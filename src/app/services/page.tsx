import AutomationPreviewCard from '@/components/elements/AutomationPreviewCard';
import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';
import CallToAction from '@/components/sections/CallToAction';

export default async function Services() {
	return (
		<div>
			<Header title="Services" subTitle="Experts in building" />
			<ContentLayout>
				<AutomationPreviewCard
					title="Digital Products"
					subtitle="Web and Mobile Apps"
					description="The products I build are online businesses that include a recurring revenue model."
					ctaText="View the process"
					href="/services/saas-products"
					className="mt-6 dark:border-brand-600"
				/>
				<AutomationPreviewCard
					title="AI Automation"
					subtitle="Workflows and Tools"
					description="Simple systems that make repetitive work run on autopilot and save countless hours."
					ctaText="View the process"
					className="mt-12 dark:border-brand-600"
					href="/services/ai-automation"
				/>
			</ContentLayout>
			<CallToAction
				title="Let's get started"
				subtitle="Bring your idea to life."
				className="md:mt-32 mt-20"
			/>
		</div>
	);
}
