import AutomationPreviewCard from '@/components/elements/AutomationPreviewCard';
import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';
import TightContentLayout from '@/components/layout/TightContentLayout';
import Quote from '@/components/sections/Quote';
import { BUCKET_URL } from '@/lib/utils';
import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vladbi.com';

export const metadata: Metadata = {
	title: 'Services',
	description: 'Expert in building SaaS Products & AI Automation.',
	openGraph: {
		title: 'Services | VladBi',
		description: 'Expert in building SaaS Products & AI Automation.',
		type: 'website',
		url: `${siteUrl}/products`,
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Services | VladBi',
		description: 'Expert in building SaaS Products & AI Automation.',
	},
};

export default async function Services() {
	return (
		<div>
			<Header title="Services" subTitle="Expert in building products." />
			<ContentLayout>
				<AutomationPreviewCard
					title="SaaS Products"
					subtitle="Web and Mobile Apps"
					description="Products built to produce revenue."
					ctaText="View the process"
					href="/services/saas-products"
					className="mt-4 dark:border-brand-500 border-slate-300 border-b-0"
				/>
				<AutomationPreviewCard
					title="AI Automation"
					subtitle="Workflows and Tools"
					description="Repetitive work, fully automated."
					ctaText="View the process"
					href="/services/ai-automation"
					className="md:mt-12 mt-16 dark:border-brand-500 border-slate-300 border-b-0"
				/>
			</ContentLayout>
			<TightContentLayout>
				<Quote
					quote="Vlad is an extremely creative and motivated individual. He is very reliable and ensures that all his work is completed to high standards."
					name="Skip Barden"
					profession="Professional Creative"
					avatar={`${BUCKET_URL}/website/testimonials/skip.jpeg`}
					hiddenTitle
					noAnimation
					className="mb-12 !mt-6"
				/>
			</TightContentLayout>
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
