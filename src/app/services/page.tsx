import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';
import CallToAction from '@/components/sections/CallToAction';

export default async function Services() {
	return (
		<>
			<ContentLayout>
				<Header title="Services" subTitle="Expert in 2 things" />
				<CallToAction
					title="Let's get started"
					subtitle="Bring your idea to life."
					className="mt-32"
				/>
			</ContentLayout>
		</>
	);
}
