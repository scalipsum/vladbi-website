import Text from '@/components/ui/text';
import Link from 'next/link';
import ContentLayout from './ContentLayout';

export default function Footer() {
	const column1Links = {
		'My Services': '/services',
		"Products I've built": '/products',
		Blog: '/blog',
		'My story': '/blog/my-story',
	};
	const column2Links = {
		'How I build SaaS': '/services/saas-products',
		'How I build AI Automation': '/services/ai-automation',
	};
	const column3Links = {
		'Take the project quiz': '/quiz',
	};
	return (
		<footer className="bg-brand-600 text-white">
			<ContentLayout className="pb-0 pt-0 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
				<div></div>
				<div>
					<Text className="!text-sm ml-0.25 mb-4">Resources</Text>
					<ul className="flex flex-col gap-4">
						{Object.entries(column1Links).map(([label, href]) => (
							<li key={href} className="leading-none">
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
							<li key={href}>
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
							<li key={href}>
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
