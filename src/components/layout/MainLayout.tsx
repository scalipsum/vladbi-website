import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface MainLayoutProps {
	children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="h-screen bg-background min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-1 overflow-x-hidden">{children}</main>
			<Footer />
		</div>
	);
}
