import Header from '@/components/layout/Header';
import TightContentLayout from '@/components/layout/TightContentLayout';
import { Card } from '@/components/ui/card';

export default function Quiz() {
	return (
		<div className="pb-32">
			<Header
				title="Product quiz"
				subTitle="Tell us what would you like to build."
			/>
			<TightContentLayout className="lg:w-3xl">
				<Card className="w-full overflow-hidden">
					<iframe
						src="https://untk.notion.site/ebd//2cc816a1b40880c99a97ebf1fb235a57"
						width="100%"
						height="800px"
						allowFullScreen={false}
						className="rounded-2xl -mt-24"
					/>
				</Card>
			</TightContentLayout>
		</div>
	);
}
