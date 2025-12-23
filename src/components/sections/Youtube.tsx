'use client';

import Text from '@/components/ui/text';
import { FaYoutube } from 'react-icons/fa';
import YouTube from 'react-youtube';

export default function Youtube() {
	return (
		<div className="mt-32">
			<Text type="h2" className="flex items-center justify-center gap-3">
				As seen on
				<span className="flex gap-2 items-center">
					<FaYoutube />
					YouTube
				</span>
			</Text>
			<YouTube
				className="md:mt-10 mt-8"
				iframeClassName="rounded-lg w-full h-[550px]"
				videoId="hjKga8CPHMc"
				opts={{ playerVars: { autoplay: 0 } }}
			/>
		</div>
	);
}
