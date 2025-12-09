import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
	return (
		<div>
			<section
				id="hero"
				className="flex flex-row items-center justify-between bg-gray-800"
			>
				<div className="max-w-1/2">
					<h1 className="text-6xl font-main font-extrabold tracking-tight text-brand-500">
						I build SaaS <br /> products that Scale
					</h1>
					<p className="font-sans tracking-tight text-xl mt-8">
						Handling full technical execution. Then <br /> automate
						processes to maximize your revenue.
					</p>
					<Button asChild className="mt-8">
						<Link href="#get-started">Get Started</Link>
					</Button>
				</div>
				<div>
					<Image
						src="/img/person.png"
						alt="Vladbi Silhouette"
						width={573}
						height={813}
						className="w-[380px] mr-24 mt-24"
					/>
				</div>
			</section>

			<div className="max-w-2xl mx-auto text-center mb-12">
				<Button asChild className="mt-8">
					<Link href="/blog">View Blog</Link>
				</Button>
			</div>
		</div>
	);
}
