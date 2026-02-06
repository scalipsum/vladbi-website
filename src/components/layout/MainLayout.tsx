import { ReactNode } from 'react';
import CalEmbed from './CalEmbed';
import Footer from './Footer';
import Navbar from './Navbar';

interface MainLayoutProps {
	children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="h-screen bg-background min-h-screen flex flex-col">
			<CalEmbed />
			<Navbar />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
}
