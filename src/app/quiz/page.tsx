import QuizIframeCard from '@/components/elements/QuizIframeCard';
import Header from '@/components/layout/Header';
import TightContentLayout from '@/components/layout/TightContentLayout';

export default function Quiz() {
	return (
		<div className="pb-16">
			<Header
				title="Your Product Quiz"
				subTitle="Some details and we'll get in touch."
			/>
			<TightContentLayout className="px-4 md:px-0">
				<QuizIframeCard
					src="https://app.youform.com/forms/rqkp9ydg"
					className="h-[670px]"
				/>
			</TightContentLayout>
		</div>
	);
}
