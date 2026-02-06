'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AVATAR_URL =
	'https://bgefmqefmboheirzxqvu.supabase.co/storage/v1/object/public/vladbi/website/blog/test%20avatar%202.jpg';

export default function FloatingBookButton() {
	const pathname = usePathname();

	if (pathname === '/book-a-call') return null;

	return (
		<Link
			href="/book-a-call"
			className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-brand-500 pr-5 pl-4 py-4 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
		>
			<Image
				src={AVATAR_URL}
				alt="Vlad"
				width={36}
				height={36}
				className="rounded-full"
			/>
			<span className="font-main text-[15px]">Book a call</span>
		</Link>
	);
}
