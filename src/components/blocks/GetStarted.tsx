'use client';

import Text from '@/components/Text';

export default function GetStarted() {
	return (
		<section id="get-started" className="mt-8">
			{/* Section title */}
			<div className="flex-justify-center">
				<div className="inline-block">
					<Text type="h2">Get Started</Text>
					<div className="h-1.5 bg-brand rounded-full w-full self-center mt-2.5" />
				</div>
			</div>
		</section>
	);
}
