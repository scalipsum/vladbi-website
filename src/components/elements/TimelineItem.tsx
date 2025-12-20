import { cn } from '@/lib/utils';
import { FaChevronCircleDown } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa6';

interface TimelineItemProps {
	children: React.ReactNode;
	active?: boolean;
	className?: string;
}

export default function TimelineItem({
	children,
	active = false,
	className,
}: TimelineItemProps) {
	return (
		<div
			className={cn(
				'flex flex-row gap-6 md:gap-8 mx-auto ml-1 sm:ml-8 md:ml-0',
				className,
			)}
		>
			<div className="md:mt-1.5 mb-6">
				{active ? (
					<FaCircle className="text-brand -ml-1" size="20" />
				) : (
					<FaChevronCircleDown
						className="text-gray-500 -ml-1"
						size="20"
					/>
				)}
				<div
					className={cn(
						'h-full w-1.5 rounded-full ml-0.5 mt-5',
						active ? 'bg-brand' : 'bg-gray-500',
					)}
				/>
			</div>
			<div className="flex flex-col-reverse md:flex-row justify-between md:gap-24 gap-6">
				{children}
			</div>
		</div>
	);
}
