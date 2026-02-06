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
			className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full pr-5 pl-4 py-4 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
				overCta
					? 'bg-white text-black'
					: 'bg-brand-500 text-white'
			}`}
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
