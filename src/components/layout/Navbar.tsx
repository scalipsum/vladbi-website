'use client';

import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '../elements/ThemeToggle';
import { Button } from '../ui/button';
import Logo from '../ui/Logo';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '../ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Text from '../ui/text';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 w-full">
			<div className={cn('mx-auto max-w-7xl pt-2 transition')}>
				<nav
					className={cn(
						'flex items-center justify-between rounded-full pl-8 pr-4 py-2 transition-all duration-300 bg-background',
						isScrolled &&
							'shadow-xl shadow-gray-900/10 dark:shadow-gray-900/30 backdrop-blur-md bg-background/70 dark:bg-gray-900/80 border border-gray-200/20 dark:border-gray-700/20 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/20 border border-slate-200',
					)}
				>
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<Logo width={25} height={29} className="text-brand" />
						<Text className="font-extrabold font-main text-brand">
							Vladbi
						</Text>
					</Link>

					{/* Navigation Items */}
					<NavigationMenu className="hidden md:flex self-center ">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="/services">
										<Text className="font-main !text-lg">
											Services
										</Text>
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="/projects">
										<Text className="font-main !text-lg">
											Projects
										</Text>
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="/blog">
										<Text className="font-main !text-lg">
											Blog
										</Text>
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="/my-story">
										<Text className="font-main !text-lg">
											My story
										</Text>
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					{/* Right side - Project Quiz Button and Theme Toggle */}
					<div className="flex items-center space-x-4">
						<Button asChild className="-mt-1">
							<Link href="/quiz">Project Quiz</Link>
						</Button>
						<ThemeToggle />

						{/* Mobile Menu */}
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="sm"
									className="md:hidden"
								>
									<Menu className="h-5 w-5" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-80">
								<div className="flex flex-col space-y-4 mt-6">
									<Link
										href="/"
										className="flex items-center space-x-2 mb-6"
									>
										<Logo
											color="currentColor"
											width={32}
											height={38}
											className="text-black dark:text-white"
										/>
										<Text className="text-lg font-bold text-foreground">
											Vladbi
										</Text>
									</Link>

									<div>
										<Text className="text-sm font-medium text-muted-foreground px-3 py-2">
											Services
										</Text>
										<Link
											href="/services/web-development"
											className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors"
										>
											<Text>Web Development</Text>
										</Link>
										<Link
											href="/services/consulting"
											className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors"
										>
											<Text>Consulting</Text>
										</Link>
									</div>

									<Link
										href="/projects"
										className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors"
									>
										<Text>Projects</Text>
									</Link>
									<Link
										href="/blog"
										className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors"
									>
										<Text>Blog</Text>
										kj{' '}
									</Link>
									<Link
										href="/my-story"
										className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors"
									>
										<Text>My story</Text>
									</Link>

									<Button asChild>
										<Link href="/quiz">Project Quiz</Link>
									</Button>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</nav>
			</div>
		</header>
	);
}
