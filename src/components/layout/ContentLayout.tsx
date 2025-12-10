import { ReactNode } from 'react';

interface ContentLayoutProps {
	children: ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 overflow-x-hidden">
			{children}
		</div>
	);
}
