import TightContentLayout from '@/components/layout/TightContentLayout';
import Text from '@/components/ui/text';

interface QuoteProps {
	quote: string;
	name: string;
	profession: string;
	avatar: string;
}

export default function Quote({ quote, name, profession, avatar }: QuoteProps) {
	return (
		<section className="mt-16 md:mt-32">
			<TightContentLayout className="text-center px-2">
				<Text type="h2">Trusted by great people</Text>

				<div className="relative mt-16">
					{/* Opening quote mark */}
					<span
						className="font-sans absolute -top-10 left-0 md:-top-14 md:-left-4 text-[80px] md:text-[120px] leading-none font-main font-extrabold text-brand dark:text-brand-200 select-none pointer-events-none"
						aria-hidden="true"
					>
						&ldquo;
					</span>

					{/* Quote text */}
					<blockquote className="font-cormorant italic text-3xl md:text-4xl text-foreground leading-normal">
						{quote}
					</blockquote>

					{/* Closing quote mark */}
					<span
						className="font-sans absolute -bottom-20 right-0 md:-bottom-22 -right-2 text-[80px] md:text-[120px] leading-none font-main font-extrabold text-brand dark:text-brand-200 select-none pointer-events-none"
						aria-hidden="true"
					>
						&rdquo;
					</span>
				</div>

				{/* Author info */}
				<div className="flex items-center justify-center gap-4 mt-10 md:mt-14">
					<img
						src={avatar}
						alt={name}
						className="size-14 md:size-16 rounded-full object-cover"
					/>
					<div className="text-left">
						<p className="font-main font-bold text-lg text-foreground">
							{name}
						</p>
						<p className="text-muted-foreground">{profession}</p>
					</div>
				</div>
			</TightContentLayout>
		</section>
	);
}
