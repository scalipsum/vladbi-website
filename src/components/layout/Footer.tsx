import Text from '@/components/ui/text';
import Link from 'next/link';
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
	return (
		<footer className="bg-brand-600 text-white">
			<ContentLayout className="pb-0 pt-0 pt-16 pb-24 flex items-start justify-between">
				<div>
					<Link href="/" className="flex items-center space-x-2">
						<Logo width={25} height={29} className="text-white" />
						<Text className="font-extrabold font-main text-white">
							Vladbi
						</Text>
					</Link>
					<Link
						href="youtube.com/@vladbi"
						className="transition duration-150 ease-in-out text-slate-400 hover:text-white"
					>
						<Text className="flex items-center gap-1.5 mt-4 font-sans !text-sm">
							As seen on
							<span className="flex gap-1 items-center">
								<FaYoutube />
								YouTube
							</span>
						</Text>
					</Link>

					<Text className="!text-sm mt-20 font-sans text-slate-400">
						© {new Date().getFullYear()} Vlad Bibire
					</Text>
				</div>
				<div className="grid grid-col-1 md:grid-col-3">
					<Text className="!text-sm ml-0.25 mb-4">Resources</Text>
					<ul className="flex flex-col gap-4">
						{Object.entries(column1Links).map(([label, href]) => (
							<li key={href} className="leading-[0px]">
								<Link
									href={href}
									className="transition duration-150 ease-in-out text-slate-400 hover:text-white focus-visible:text-white rounded-md px-1 py-0.5"
								>
									<Text className="!text-sm">{label}</Text>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<Text className="!text-sm ml-0.25 mb-4">My Process</Text>
					<ul className="flex flex-col gap-4">
						{Object.entries(column2Links).map(([label, href]) => (
							<li key={href} className="leading-[0px]">
								<Link
									href={href}
									className="transition duration-150 ease-in-out text-slate-400 hover:text-white focus-visible:text-white rounded-md px-1 py-0.5"
								>
									<Text className="!text-sm">{label}</Text>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<Text className="!text-sm ml-0.25 mb-4">
						Let's work together
					</Text>
					<ul className="flex flex-col gap-4">
						{Object.entries(column3Links).map(([label, href]) => (
							<li key={href} className="leading-[0px]">
								<Link
									href={href}
									className="transition duration-150 ease-in-out text-slate-400 hover:text-white focus-visible:text-white rounded-md px-1 py-0.5"
								>
									<Text className="!text-sm">{label}</Text>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</ContentLayout>
		</footer>
	);
}
