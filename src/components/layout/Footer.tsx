'use client';

import Text from '@/components/ui/text';
import Link from 'next/link';
import posthog from 'posthog-js';
import { FaYoutube } from 'react-icons/fa6';
import Logo from '../ui/Logo';
import ContentLayout from './ContentLayout';

export default function Footer() {
	const column1Links = {
		'My Services': '/services',
		"Products I've built": '/products',
		Blog: '/blog',
		'My story': '/blog/my-story',
	};
	const column2Links = {
		'How I build Web and Mobile Apps': '/services/saas-products',
		'How I build AI Automation': '/services/ai-automation',
	};
	const column3Links = {
		'Take the project quiz': '/quiz',
	};

	const handleFooterLinkClick = (
		label: string,
		href: string,
		section: string,
	) => {
		posthog.capture('footer_link_clicked', {
			link_label: label,
			destination: href,
			footer_section: section,
		});
	};

	const handleYoutubeClick = () => {
		posthog.capture('youtube_link_clicked', {
			source: 'footer',
			destination: 'youtube.com/@vladbi',
		});
	};

	return (
		<footer className="bg-brand-600 text-white flex-0.5">
			<ContentLayout className="pb-0 pt-0 pt-16 md:pb-24 pb-12 flex md:flex-row flex-col items-start justify-between">
				<div>
					<Link href="/" className="flex items-center space-x-2">
						<Logo width={25} height={29} className="text-white" />
						<Text className="font-extrabold font-main text-white">
							VladBi
						</Text>
					</Link>
					<Link
						href="youtube.com/@vladbi"
						className="transition duration-150 ease-in-out text-slate-400 hover:text-white"
						onClick={handleYoutubeClick}
					>
						<Text className="flex items-center gap-1.5 mt-4 font-sans !text-sm">
							As seen on
							<span className="flex gap-1 items-center">
								<FaYoutube />
								YouTube
							</span>
						</Text>
					</Link>

					<Text className="!text-sm mt-20 font-sans text-slate-400 hidden md:block">
						© {new Date().getFullYear()} Vlad Bibire
					</Text>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 justify-between w-full md:max-w-2/3 max-w-full mt-12 md:mt-0 gap-10 sm:gap-16">
					<div>
						<Text className="!text-sm ml-0.25 mb-4">Resources</Text>
						<ul className="flex flex-col gap-4">
							{Object.entries(column1Links).map(
								([label, href]) => (
									<li key={href} className="leading-[0px]">
										<a
											className="transition duration-150 ease-in-out text-slate-400 hover:text-white focus-visible:text-white rounded-md px-1 py-0.5"
											target="_blank"
											href="https://youtube.com/@vladbi/"
											rel="noopener noreferrer"
											onClick={() =>
												handleFooterLinkClick(
													label,
													href,
													'resources',
												)
											}
										>
											<Text className="!text-sm">
												{label}
											</Text>
										</a>
									</li>
								),
							)}
						</ul>
					</div>
					<div>
						<Text className="!text-sm ml-0.25 mb-4">
							My Process
						</Text>
						<ul className="flex flex-col gap-4">
							{Object.entries(column2Links).map(
								([label, href]) => (
									<li key={href} className="leading-[0px]">
										<Link
											href={href}
											className="transition duration-150 ease-in-out text-slate-400 hover:text-white focus-visible:text-white rounded-md px-1 py-0.5"
											onClick={() =>
												handleFooterLinkClick(
													label,
													href,
													'my_process',
												)
											}
										>
											<Text className="!text-sm">
												{label}
											</Text>
										</Link>
									</li>
								),
							)}
						</ul>
					</div>
					<div>
						<Text className="!text-sm ml-0.25 mb-4">
							Let's work together
						</Text>
						<ul className="flex flex-col gap-4">
							{Object.entries(column3Links).map(
								([label, href]) => (
									<li key={href} className="leading-[0px]">
										<Link
											href={href}
											className="transition duration-150 ease-in-out text-slate-400 hover:text-white focus-visible:text-white rounded-md px-1 py-0.5"
											onClick={() =>
												handleFooterLinkClick(
													label,
													href,
													'work_together',
												)
											}
										>
											<Text className="!text-sm">
												{label}
											</Text>
										</Link>
									</li>
								),
							)}
						</ul>
					</div>
				</div>
				<Text className="!text-sm mt-16 font-sans text-slate-400 md:hidden">
					© {new Date().getFullYear()} Vlad Bibire
				</Text>
			</ContentLayout>
		</footer>
	);
}
