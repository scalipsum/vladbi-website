import { cn } from '@/lib/utils';
import Image from 'next/image';

interface StripesProps {
	className?: string;
	height?: string;
	width?: string;
}
export default function Stripes({
	className,
	height = 'h-[422px]',
	width = 'w-[340px]',
}: StripesProps) {
	return (
		<div className={className}>
			<div className={cn('relative', height, width)}>
				<div className="absolute left-0 w-[200px] h-full">
					<Image
						src="/img/red-stripe.svg"
						alt="Red Stripe"
						fill
						className="object-cover object-left"
					/>
				</div>
				<div className="absolute left-[75px] w-[200px] h-full">
					<Image
						src="/img/baby-stripe.svg"
						alt="Baby Stripe"
						fill
						className="object-cover object-left"
					/>
				</div>
				<div className="absolute left-[135px] w-[200px] h-full">
					<Image
						src="/img/blue-stripe.svg"
						alt="Blue Stripe"
						fill
						className="object-cover object-left"
					/>
				</div>
			</div>
		</div>
	);
}
