import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import RotatingGlobe from '../RotatingGlobe';
import Stripes from '../Stripes';

export default async function Hero() {
	return (
		<section
			id="hero"
			className="flex flex-row items-center justify-between"
		>
			<div className="max-w-1/2 z-10">
				<h1 className="text-6xl font-main font-extrabold tracking-tight text-brand-500">
					I build AI SaaS <br /> products that Scale
				</h1>
				<p className="font-sans tracking-tight text-xl mt-8">
					Handling full technical execution. Then <br /> automate
					processes to maximize your revenue.
				</p>
				<Button asChild className="mt-8">
					<Link href="/blog">Get Started</Link>
				</Button>
			</div>
			<div className="relative">
				<RotatingGlobe
					className="absolute top-0 right-10 opacity-100 z-0"
					size={700}
				/>

				<Image
					src="/img/person.png"
					alt="Vladbi Silhouette"
					width={573}
					height={813}
					className="relative w-[430px] mr-20 z-20 mt-20"
				/>

				<Stripes className="absolute top-0 right-0 z-0" />
			</div>
		</section>
	);
}
