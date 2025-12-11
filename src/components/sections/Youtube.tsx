'use client';
import Text from '@/components/ui/text';
import YouTube from 'react-youtube';
import TightContentLayout from '../layout/TightContentLayout';
import PatternSection from './PatternSection';

export default function Youtube() {
	return (
		<PatternSection
			className="flex flex-col items-center py-16"
			patternClassName="opacity-5"
		>
			<TightContentLayout>
				<Text type="h2" className="text-center">
					As seen on YouTube
				</Text>
				<YouTube
					className="mt-10"
					iframeClassName="rounded-lg w-full aspect-video"
					videoId="mkt0qoyb-gg"
					opts={{ playerVars: { autoplay: 0 } }}
				/>
			</TightContentLayout>
		</PatternSection>
	);
}
