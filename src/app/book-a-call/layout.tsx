import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Book a Call',
	description: 'Have an idea? Let\'s build it together. Book a discovery call.',
};

export default function BookACallLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
