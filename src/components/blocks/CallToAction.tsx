import Text from '@/components/ui/text';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function CallToAction() {
	return (
		<div className="bg-brand py-8 mt-16">
			<Text type="h2" className="text-center text-white">
				Our journey begins
			</Text>
			<Text className="mt-6 text-center text-white">
				Right here. Right now.
			</Text>
			<div className="flex justify-center">
				<Button variant="secondary" asChild className="mt-8">
					<Link href="/blog">Take the project quiz</Link>
				</Button>
			</div>
		</div>
	);
}
