import ContentLayout from '@/components/layout/ContentLayout';
import CallToAction from '@/components/sections/CallToAction';
import GetStarted from '@/components/sections/GetStarted';
import Hero from '@/components/sections/Hero';
import LatestAutomation from '@/components/sections/LatestAutomation';
import LatestSaas from '@/components/sections/LatestSaas';
import MyStory from '@/components/sections/MyStory';
import Quote from '@/components/sections/Quote';
import Tools from '@/components/sections/Tools';
import WorkShowcase from '@/components/sections/WorkShowcase';
import Youtube from '@/components/sections/Youtube';

export default async function Home() {
	return (
		<div className="pt-20">
			<ContentLayout className="overflow-y-hidden pb-0">
				<Hero />
			</ContentLayout>
			<WorkShowcase />
			<Tools />
			<Quote
				quote="Vlad was quick, professional and well-priced. I'm extremely happy with the website updates he made. Thanks, Vlad :) Look forward to working with you again soon."
				name="Barnaby Davies"
				profession="Business Owner of EastGuidesWest Tourism Consultancy"
				avatar="https://media.licdn.com/dms/image/v2/C4D03AQF1RDe565sjaQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517043188756?e=1767830400&v=beta&t=rVV7MDrr2G9D42JmfwUQXpCOsQ_lJIBrCongLCl-6O8"
			/>
			<ContentLayout>
				<GetStarted />
			</ContentLayout>
			<CallToAction
				title="Our journey begins"
				subtitle="Right here. Right now."
				className="mt-5 md:mt-10"
			/>
			<Youtube />
			<ContentLayout>
				<LatestAutomation />
				<LatestSaas />
				{/* <div className="w-full flex justify-center mt-10 md:mt-16">
					<Button asChild>
						<Link href="/products">
							View all projects
							<ChevronRight className="size-4" strokeWidth={4} />
						</Link>
					</Button>
				</div> */}
				<MyStory />
			</ContentLayout>
			<CallToAction
				title="Let's get started"
				subtitle="Bring your idea to life."
				className="mt-20 md:mt-32"
				buttonText="View our services"
				href="/services"
			/>
		</div>
	);
}
