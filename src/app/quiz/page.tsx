import QuizIframeCard from '@/components/elements/QuizIframeCard';
import Header from '@/components/layout/Header';
import TightContentLayout from '@/components/layout/TightContentLayout';

export default function Quiz() {
	return (
		<div className="pb-24">
			<Header
				title="Your Product Quiz"
				subTitle="The beginning of a long-term partnership."
			/>
			<TightContentLayout className="px-4 md:px-0">
				<QuizIframeCard
					src="https://app.youform.com/forms/rqkp9ydg"
					className="md:h-[670px] h-[600px]"
				/>
			</TightContentLayout>
		</div>
	);
}
