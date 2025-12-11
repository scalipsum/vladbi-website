import Text from '@/components/ui/text';
import AutomationPreviewCard from '../elements/AutomationPreviewCard';

export default function LatestAutomation() {
	return (
		<section className="mt-14 pb-14">
			<Text type="h2">Latest automation</Text>

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
