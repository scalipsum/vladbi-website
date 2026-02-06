'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const AVATAR_URL =
	'https://bgefmqefmboheirzxqvu.supabase.co/storage/v1/object/public/vladbi/website/blog/test%20avatar%202.jpg';

export default function FloatingBookButton() {
	const pathname = usePathname();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > 100);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	if (pathname === '/book-a-call') return null;

	return (
		<Link
			href="/book-a-call"
			className={`fixed md:bottom-6 md:right-6 bottom-0 right-2 z-50 flex items-center gap-2.5 rounded-full md:pr-5 md:pl-4 pl-3 pr-4 md:py-3 py-2 shadow-xl shadow-gray-900/10 dark:shadow-gray-900/40 backdrop-blur-md bg-background/70 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700/20 border-slate-200 transition-all duration-300 hover:scale-105 active:scale-95 ${visible ? 'animate-toast-in' : 'animate-toast-out'}`}
		>
			<Image
				src={AVATAR_URL}
				alt="Vlad"
				width={36}
				height={36}
				className="rounded-full"
			/>
			<span className="font-sans text-sm md:text-[15px] text-brand font-extrabold">
				Book a free call
			</span>
		</Link>
	);
}
