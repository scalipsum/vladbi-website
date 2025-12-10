import { cn } from '@/lib/utils';
import { FaLock, FaLockOpen } from 'react-icons/fa6';

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
		<div className={cn('flex flex-row gap-8', className)}>
			<div className="mt-2 mb-6">
				{active ? (
					<FaLockOpen className="text-brand -ml-1" size="20" />
				) : (
					<FaLock className="text-brand-200 -ml-1" size="20" />
					// <div
					// 	className={cn(
					// 		'w-3 h-3 bg-brand rounded-full border-2 border-brand',
					// 		active
					// 			? 'bg-brand border-brand'
					// 			: 'bg-background border-brand-200',
					// 	)}
					// />
				)}
				<div
					className={cn(
						'h-full w-1.5 rounded-full ml-0.5 mt-5',
						active ? 'bg-brand' : 'bg-brand-200',
					)}
				/>
			</div>
			{children}
		</div>
	);
}
