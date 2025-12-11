import ContentLayout from '@/components/layout/ContentLayout';
import CallToAction from '@/components/sections/CallToAction';
import GetStarted from '@/components/sections/GetStarted';
import Hero from '@/components/sections/Hero';
import LatestAutomation from '@/components/sections/LatestAutomation';
import LatestSaas from '@/components/sections/LatestSaas';
import MyStory from '@/components/sections/MyStory';
import Youtube from '@/components/sections/Youtube';

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
				className="mt-10"
			/>
			<Youtube />
			<ContentLayout>
				<LatestAutomation />
				<LatestSaas />
				<MyStory />
			</ContentLayout>
		</>
	);
}
