import { cn } from '@/lib/utils';

interface TextProps {
	type?: 'h1' | 'h2' | 'p';
	className?: string;
	children?: React.ReactNode;
}

export default function Text({ type, children, className }: TextProps) {
	switch (type) {
		case 'h1':
			return (
				<h1
					className={cn(
						'text-4xl lg:text-5xl xl:text-6xl font-main font-extrabold tracking-tight text-brand',
						className,
					)}
				>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2
					className={cn(
						'text-3xl lg:text-4xl font-main font-extrabold tracking-tight text-brand',
						className,
					)}
				>
					{children}
				</h2>
			);
		default:
			return (
				<p
					className={cn(
						'font-sans tracking-tight text-xl',
						className,
					)}
				>
					{children}
				</p>
			);
	}
}
