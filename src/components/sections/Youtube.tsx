'use client';

import Text from '@/components/ui/text';
import { FaYoutube } from 'react-icons/fa';
import YouTube from 'react-youtube';
import TightContentLayout from '../layout/TightContentLayout';
import PatternSection from './PatternSection';

export default function Youtube() {
	return (
		<PatternSection
			className="flex flex-col items-center py-20"
			patternClassName="opacity-5 dark:invert"
		>
			<TightContentLayout>
				<Text
					type="h2"
					className="flex items-center justify-center gap-3"
				>
					As seen on
					<span className="flex gap-2 items-center">
						<FaYoutube />
						YouTube
					</span>
				</Text>
				<YouTube
					className="mt-10"
					iframeClassName="rounded-lg w-full aspect-[16/10]"
					videoId="hjKga8CPHMc"
					opts={{ playerVars: { autoplay: 0 } }}
				/>
			</TightContentLayout>
		</PatternSection>
	);
}
