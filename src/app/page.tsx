import ContentLayout from '@/components/layout/ContentLayout';
import CallToAction from '@/components/sections/CallToAction';
import GetStarted from '@/components/sections/GetStarted';
import Hero from '@/components/sections/Hero';
import LatestSaas from '@/components/sections/LatestSaas';
import MyStory from '@/components/sections/MyStory';
import PatternSection from '@/components/sections/PatternSection';
import Quote from '@/components/sections/Quote';
import Tools from '@/components/sections/Tools';
import WorkShowcase from '@/components/sections/WorkShowcase';

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
				className="mt-24 md:mt-40"
			/>
			<Tools />
			<ContentLayout className="pb-0 md:pb-12">
				<MyStory />
			</ContentLayout>

			<PatternSection
				className="flex flex-col items-center py-16 mt-16"
				patternClassName="opacity-5 dark:invert"
			>
				<ContentLayout>
					<LatestSaas />
				</ContentLayout>
			</PatternSection>

			{/* <Youtube />  */}

			<Quote
				quote="Vlad is an extremely creative and motivated individual. He is very reliable and ensures that all his work is completed to high standards."
				name="Skip Barden"
				profession="Professional Creative"
				avatar="https://media.licdn.com/dms/image/v2/C4D03AQHfuIFWaarDlA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1540464185282?e=1768435200&v=beta&t=diC3g_5NfFZ_GJrYvU-SaafXKYOkF_bmGihcdmZM8BU"
				hiddenTitle
				className="mb-24 !mt-16"
			/>

			<ContentLayout>
				<GetStarted />
			</ContentLayout>
			<CallToAction
				title="Find out more"
				subtitle="See how we build products for clients."
				className="mt-20 md:mt-0"
				buttonText="Explore my Services"
				href="/services"
			/>
		</div>
	);
}
