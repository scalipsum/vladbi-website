import CallToAction from '@/components/blocks/CallToAction';
import GetStarted from '@/components/blocks/GetStarted';
import Hero from '@/components/blocks/Hero';

export default async function Home() {
	return (
		<div>
			<Hero />
			<GetStarted />
			<CallToAction />
		</div>
	);
}
