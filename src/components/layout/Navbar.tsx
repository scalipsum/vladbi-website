import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';

export default function Navbar() {
	return (
		<header className="border-b">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex">
						<Link
							href="/"
							className="flex items-center text-xl font-bold text-foreground"
						>
							My Blog
						</Link>
					</div>
					<div className="flex items-center">
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</header>
	);
}
