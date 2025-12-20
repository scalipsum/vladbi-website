'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
	className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
	const { setTheme, resolvedTheme } = useTheme();
	const isDark = resolvedTheme === 'dark';

	return (
		<div
			className={cn(
				'flex w-18 h-10 p-1 rounded-full cursor-pointer transition-all duration-300',
				isDark
					? 'bg-zinc-950 border border-zinc-800'
					: 'bg-white border border-zinc-200',
				className,
			)}
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			role="button"
			tabIndex={0}
		>
			<div className="flex justify-between items-center w-full">
				<div
					className={cn(
						'flex justify-center items-center w-7 h-7 rounded-full transition-transform duration-300',
						isDark
							? 'transform translate-x-0 bg-slate-800'
							: 'transform translate-x-8.5 bg-slate-200',
					)}
				>
					{isDark ? (
						<Moon className="w-5 h-5 text-white" strokeWidth={2} />
					) : (
						<Sun
							className="w-5 h-5 text-brand-500"
							strokeWidth={2}
						/>
					)}
				</div>
				<div
					className={cn(
						'flex justify-center items-center w-7 h-7 rounded-full transition-transform duration-300',
						isDark
							? 'bg-transparent'
							: 'transform -translate-x-8.5',
					)}
				>
					{isDark ? (
						<Sun
							className="w-5 h-5 text-gray-500"
							strokeWidth={2}
						/>
					) : (
						<Moon
							className="w-5 h-5 text-brand-500"
							strokeWidth={1.5}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
