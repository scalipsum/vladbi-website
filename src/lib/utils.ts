import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const BUCKET_URL =
	'https://bgefmqefmboheirzxqvu.supabase.co/storage/v1/object/public/vladbi';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function calculateReadingTime(wordCount: number): string {
	const WORDS_PER_MINUTE = 225; // Average adult reading speed
	const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
	return `${minutes} min read`;
}
