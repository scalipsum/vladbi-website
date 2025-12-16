import Text from '@/components/ui/text';
import SaasPreviewCard from '../elements/SaasPreviewCard';

export default async function LatestSaas() {
	return (
		<section className="mt-48">
			<Text type="h2">Latest SaaS product</Text>

			<SaasPreviewCard
				title="IQMeals"
				subtitle="Personal AI Meal Planner"
				description="
							Page layouts look better with something in each
							section. Web page designers, content writers like
							this.
						"
				href="#get-started"
				backgroundImageUrl="https://images.unsplash.com/photo-1575672401987-c8f1debabfd7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				previewImageUrl="https://images.unsplash.com/photo-1765416589470-0ab68a9368e9?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
		</section>
	);
}
