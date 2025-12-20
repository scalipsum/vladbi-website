import { cn } from '@/lib/utils';

interface TextProps {
	type?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
	className?: string;
	children?: React.ReactNode;
}

export const textSize = {
	h1: 'text-4xl lg:text-5xl xl:text-6xl',
	h2: 'text-3xl lg:text-4xl',
	h3: 'text-2xl',
	p: 'text-lg xl:text-xl',
	span: 'text-base',
};

export default function Text({ type, children, className }: TextProps) {
	switch (type) {
		case 'h1':
			return (
				<h1
					className={cn(
						'font-main font-extrabold tracking-tight text-brand',
						textSize['h1'],
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
						'font-main font-extrabold tracking-tight text-brand',
						textSize['h2'],
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
						'font-main font-extrabold tracking-tight text-brand',
						textSize['h3'],
						className,
					)}
				>
					{children}
				</h3>
			);
		case 'span':
			return (
				<span
					className={cn(
						'font-sans tracking-tight',
						textSize['span'],
						className,
					)}
				>
					{children}
				</span>
			);

		default:
			return (
				<p
					className={cn(
						'font-sans tracking-tight',
						textSize['p'],
						className,
					)}
				>
					{children}
				</p>
			);
	}
}
