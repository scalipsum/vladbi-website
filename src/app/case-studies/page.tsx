import AutomationPreviewCard from '@/components/elements/AutomationPreviewCard';
import SaasPreviewCard from '@/components/elements/SaasPreviewCard';
import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';

export default function Projects() {
	return (
		<div>
			<Header title="Case studies" subTitle="Vision turned reality" />
			<ContentLayout className="pb-40">
				<div className="flex flex-col gap-14 pt-4 mt-8">
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
					<SaasPreviewCard
						title="Gaston"
						subtitle="Restaurant Payment System"
						description="
							Page layouts look better with something in each
							section. Web page designers, content writers like
							this.
						"
						href="#get-started"
						backgroundImageUrl="https://images.unsplash.com/photo-1575672401987-c8f1debabfd7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						previewImageUrl="https://images.unsplash.com/photo-1765416589470-0ab68a9368e9?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
				</div>

				<div className="flex flex-col gap-14 pt-4 mt-14">
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
				</div>
			</ContentLayout>
		</div>
	);
}
