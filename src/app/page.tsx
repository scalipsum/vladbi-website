import Hero from '@/components/blocks/Hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
	return (
		<div>
			<Hero />

			<div className="max-w-2xl mx-auto text-center mb-12">
				<Button asChild className="mt-8">
					<Link href="/blog">View Blog</Link>
				</Button>
			</div>
		</div>
	);
}
