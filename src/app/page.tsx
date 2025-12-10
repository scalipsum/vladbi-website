import ContentLayout from '@/components/layout/ContentLayout';
import CallToAction from '@/components/sections/CallToAction';
import GetStarted from '@/components/sections/GetStarted';
import Hero from '@/components/sections/Hero';

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
