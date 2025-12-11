'use client';
import Text from '@/components/ui/text';
import YouTube from 'react-youtube';
import PatternSection from './PatternSection';

export default function Youtube() {
	return (
		<PatternSection
			className="flex flex-col items-center py-16"
			patternClassName="opacity-[6%]"
		>
			<Text type="h2" className="text-center">
				As seen on YouTube
			</Text>
			<YouTube
				className="mt-10"
				videoId="mkt0qoyb-gg"
				opts={{
					height: '500',
					width: '800',
					playerVars: {
						autoplay: 0,
					},
				}}
			/>
		</PatternSection>
	);
}
