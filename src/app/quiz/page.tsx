import NotionIframeCard from '@/components/elements/NotionIframeCard';
import Header from '@/components/layout/Header';
import TightContentLayout from '@/components/layout/TightContentLayout';

export default function Quiz() {
	return (
		<div className="pb-16">
			<Header
				title="Your Product Quiz"
				subTitle="Some details and we'll get in touch."
			/>
			<TightContentLayout className="lg:w-3xl mt-8">
				<NotionIframeCard
					src="https://untk.notion.site/ebd//2cc816a1b40880ba9dabd28100f1cb73"
					height="850px"
				/>
			</TightContentLayout>
		</div>
	);
}
