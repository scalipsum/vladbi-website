import Text from '@/components/ui/text';
import AutomationPreviewCard from '../elements/AutomationPreviewCard';

export default async function LatestAutomation() {
	return (
		<section className="mt-32">
			<Text type="h2">Latest automation project</Text>

			<AutomationPreviewCard
				title="Blog Posting AI Agent"
				subtitle="For an SEO Agency"
				description="
							Page layouts look better with something in each
							section. Web page designers, content writers like
							this.
						"
				href="#get-started"
			/>
		</section>
	);
}
