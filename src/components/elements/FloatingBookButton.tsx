'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const AVATAR_URL =
	'https://bgefmqefmboheirzxqvu.supabase.co/storage/v1/object/public/vladbi/website/blog/test%20avatar%202.jpg';

export default function FloatingBookButton() {
	const pathname = usePathname();
	const buttonRef = useRef<HTMLAnchorElement>(null);
	const [overCta, setOverCta] = useState(false);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > 100);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const button = buttonRef.current;
		if (!button) return;

		const check = () => {
			const buttonRect = button.getBoundingClientRect();
			const ctaSections = document.querySelectorAll('[data-cta-section]');
			let overlapping = false;

			for (const section of ctaSections) {
				const sectionRect = section.getBoundingClientRect();
				if (
					buttonRect.bottom > sectionRect.top &&
					buttonRect.top < sectionRect.bottom
				) {
					overlapping = true;
					break;
				}
			}

			setOverCta(overlapping);
		};

		window.addEventListener('scroll', check, { passive: true });
		check();

		return () => window.removeEventListener('scroll', check);
	}, []);

	if (pathname === '/book-a-call') return null;

	return (
		<Link
			ref={buttonRef}
			href="/book-a-call"
			className={`fixed md:bottom-6 md:right-6 bottom-2 right-3 z-50 flex items-center gap-2.5 rounded-full md:pr-5 md:pl-4 pl-3 pr-4 md:py-3 py-2 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
				overCta ? 'bg-black text-white' : 'bg-brand-500 text-white'
			} ${visible ? 'animate-toast-in' : 'animate-toast-out'}`}
		>
			<Image
				src={AVATAR_URL}
				alt="Vlad"
				width={36}
				height={36}
				className="rounded-full"
			/>
			<span className="font-sans text-sm md:text-[15px]">
				Schedule a free call
			</span>
		</Link>
	);
}
