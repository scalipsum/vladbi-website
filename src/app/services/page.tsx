import AutomationPreviewCard from '@/components/elements/AutomationPreviewCard';
import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';

export default async function Services() {
	return (
		<div>
			<Header title="Services" subTitle="Experts in building" />
			<ContentLayout>
				<AutomationPreviewCard
					title="SaaS Products"
					subtitle="Web and Mobile Apps"
					description="Products built to produce revenue."
					ctaText="View the process"
					href="/services/saas-products"
					className="mt-6 dark:border-brand-600"
				/>
				<AutomationPreviewCard
					title="AI Automation"
					subtitle="Workflows and Tools"
					description="Repetitive work, fully automated."
					ctaText="View the process"
					className="mt-12 dark:border-brand-600"
					href="/services/ai-automation"
				/>
			</ContentLayout>
			{/* <CallToAction
				title="Curious to see my work?"
				subtitle="I've written about it."
				buttonText="View Case Studies"
				href="/products"
				className="md:mt-32 mt-20"
			/> */}
		</div>
	);
}
