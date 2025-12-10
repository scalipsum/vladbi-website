import stripes from '@/assets/img/stripes.svg';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface StripesProps {
	className?: string;
	height?: string;
	width?: string;
}
export default function Stripes({
	className,
	height = 'h-[300px] lg:h-[422px]',
	width = 'w-[225px] lg:w-[340px]',
}: StripesProps) {
	return (
		<div className={cn(className, height, width)}>
			<Image
				src={stripes}
				alt="Vladbi Color Stripes"
				fill
				className="object-cover object-left"
			/>
		</div>
	);
}
