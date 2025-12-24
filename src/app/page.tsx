import ContentLayout from '@/components/layout/ContentLayout';
import TightContentLayout from '@/components/layout/TightContentLayout';
import CallToAction from '@/components/sections/CallToAction';
import GetStarted from '@/components/sections/GetStarted';
import Hero from '@/components/sections/Hero';
import LatestSaas from '@/components/sections/LatestSaas';
import MyStory from '@/components/sections/MyStory';
import PatternSection from '@/components/sections/PatternSection';
import Quote from '@/components/sections/Quote';
import Tools from '@/components/sections/Tools';
import WorkShowcase from '@/components/sections/WorkShowcase';
import Youtube from '@/components/sections/Youtube';

export default async function Home() {
	return (
		<div className="pt-32">
			<ContentLayout className="overflow-y-hidden pb-0">
				<Hero />
			</ContentLayout>
			<WorkShowcase />
			<Quote
				quote="Vlad was quick, professional and well-priced. I'm extremely happy with the website updates he made. Thanks, Vlad :) Look forward to working with you again soon."
				name="Barnaby Davies"
				profession="Business Owner of EastGuidesWest Tourism Consultancy"
				avatar="https://media.licdn.com/dms/image/v2/C4D03AQF1RDe565sjaQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517043188756?e=1767830400&v=beta&t=rVV7MDrr2G9D42JmfwUQXpCOsQ_lJIBrCongLCl-6O8"
			/>
			<Tools />
			<ContentLayout>
				<LatestSaas />
			</ContentLayout>

			<PatternSection
				className="flex flex-col items-center md:py-20 md:pb-20 py-16 pb-8 mt-8"
				patternClassName="opacity-5 dark:invert"
			>
				<TightContentLayout>
					<MyStory />
					<Youtube />
				</TightContentLayout>
			</PatternSection>

			<ContentLayout>
				<GetStarted />
			</ContentLayout>
			<CallToAction
				title="Let's get started"
				subtitle="Bring your idea to life."
				className="mt-20 md:mt-0"
				href="/quiz"
			/>
		</div>
	);
}
