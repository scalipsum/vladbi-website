import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
	return (
		<div className="max-w-2xl mx-auto text-center mb-12">
			<h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-brand-500">
				Landing Page
			</h1>
			<Button asChild className="mt-8">
				<Link href="/blog">View Blog</Link>
			</Button>
		</div>
	);
}
