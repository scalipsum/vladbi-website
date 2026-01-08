import ContentLayout from '@/components/layout/ContentLayout';
import Header from '@/components/layout/Header';
import AllProducts from '@/components/sections/AllProducts';
import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vladbi.com';

export const metadata: Metadata = {
	title: 'Products',
	description: 'Case Studies of my work.',
	openGraph: {
		title: 'Products | VladBi',
		description: 'Case Studies of my work.',
		type: 'website',
		url: `${siteUrl}/products`,
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Products | VladBi',
		description: 'Case Studies of my work.',
	},
};

export default async function Projects() {
	return (
		<div className="lg:pb-32 pb-24">
			<Header title="Products" subTitle="Case Studies of my work." />
			<ContentLayout>
				<AllProducts className="lg:mt-24 md:mt-16 mt-0" />
			</ContentLayout>
		</div>
	);
}
