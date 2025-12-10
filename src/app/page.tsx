import CallToAction from '@/components/blocks/CallToAction';
import GetStarted from '@/components/blocks/GetStarted';
import Hero from '@/components/blocks/Hero';
import ContentLayout from '@/components/layout/ContentLayout';

export default async function Home() {
	return (
		<>
			<ContentLayout>
				<Hero />
				<GetStarted />
			</ContentLayout>
			<CallToAction
				title="Our journey begins"
				subtitle="Right here. Right now."
				className="mt-16"
			/>
		</>
	);
}
