import { cn } from '@/lib/utils';

interface TextProps {
	type?: 'h1' | 'h2' | 'h3' | 'p';
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
		case 'h3':
			return (
				<h3
					className={cn(
						'text-xl lg:text-2xl font-main font-extrabold tracking-tight text-brand',
						className,
					)}
				>
					{children}
				</h3>
			);

		default:
			return (
				<p
					className={cn(
						'font-sans tracking-tight text-lg xl:text-xl',
						className,
					)}
				>
					{children}
				</p>
			);
	}
}
