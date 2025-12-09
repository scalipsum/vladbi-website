'use client';

import BabyStripe from '@/assets/img/baby-stripe.svg';
import BlueStripe from '@/assets/img/blue-stripe.svg';
import RedStripe from '@/assets/img/red-stripe.svg';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface StripesProps {
	className?: string;
	height?: string;
	width?: string;
}
export default function Stripes({
	className,
	height = 'h-[322px] lg:h-[422px]',
	width = 'w-[100px] lg:w-[340px]',
}: StripesProps) {
	return (
		<div className={className}>
			<div className={cn('relative', height, width)}>
				<div className="absolute left-0 w-[100px] lg:w-[200px] h-full">
					<Image
						src={RedStripe}
						alt="Red Stripe"
						fill
						className="object-cover object-left"
					/>
				</div>
				<div className="absolute left-[40px] w-[100px] lg:w-[200px] h-full">
					<Image
						src={BabyStripe}
						alt="Baby Stripe"
						fill
						className="object-cover object-left"
					/>
				</div>
				<div className="absolute left-[55px] w-[100px] lg:w-[200px] h-full">
					<Image
						src={BlueStripe}
						alt="Blue Stripe"
						fill
						className="object-cover object-left"
					/>
				</div>
			</div>
		</div>
	);
}
