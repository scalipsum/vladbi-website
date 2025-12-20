import ContentLayout from '@/components/layout/ContentLayout';
import CallToAction from '@/components/sections/CallToAction';
import GetStarted from '@/components/sections/GetStarted';
import Hero from '@/components/sections/Hero';
import LatestAutomation from '@/components/sections/LatestAutomation';
import LatestSaas from '@/components/sections/LatestSaas';
import MyStory from '@/components/sections/MyStory';
import Youtube from '@/components/sections/Youtube';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
	return (
		<div className="pt-20">
			<ContentLayout>
				<Hero />
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
				<div className="w-full flex justify-center mt-10 md:mt-14">
					<Button asChild>
						<Link href="/products">
							View all projects
							<ChevronRight className="size-4" strokeWidth={4} />
						</Link>
					</Button>
				</div>
				<MyStory />
			</ContentLayout>
			<CallToAction
				title="Let's get started"
				subtitle="Bring your idea to life."
				className="mt-16 md:mt-32"
				buttonText="View our services"
				href="/services"
			/>
		</div>
	);
}
