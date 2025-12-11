import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface MainLayoutProps {
	children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />
			<main className="pt-24">{children}</main>
			<Footer />
		</div>
	);
}
