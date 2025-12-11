'use client';

import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '../elements/ThemeToggle';
import { Button } from '../ui/button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

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
			<div className="mx-auto max-w-6xl px-4 pt-6">
				<nav
					className={cn(
						'flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 bg-background',
						// 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80',
						// 'border border-gray-200/20 dark:border-gray-700/20',
						// 'shadow-lg shadow-gray-900/5 dark:shadow-gray-900/20',
						isScrolled &&
							'shadow-xl shadow-gray-900/10 dark:shadow-gray-900/30',
					)}
				>
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<div className="w-10 h-10 relative">
							<Image
								src="/assets/img/logo.svg"
								alt="VB Logo"
								width={40}
								height={40}
								className="w-full h-full"
							/>
						</div>
						<span className="text-xl font-bold text-foreground hidden sm:block">
							Vladbi
						</span>
					</Link>

					{/* Navigation Items */}
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent hover:bg-gray-100/50 dark:hover:bg-gray-800/50 px-4 py-2 rounded-full text-foreground font-medium">
									Services
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid gap-3 p-6 w-80">
										<NavigationMenuLink asChild>
											<Link
												href="/services/web-development"
												className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											>
												<div className="text-sm font-medium leading-none">
													Web Development
												</div>
												<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
													Custom web applications and
													modern frontend solutions
												</p>
											</Link>
										</NavigationMenuLink>
										<NavigationMenuLink asChild>
											<Link
												href="/services/consulting"
												className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											>
												<div className="text-sm font-medium leading-none">
													Consulting
												</div>
												<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
													Technical consultation and
													project planning
												</p>
											</Link>
										</NavigationMenuLink>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/projects"
										className="bg-transparent hover:bg-gray-100/50 dark:hover:bg-gray-800/50 px-4 py-2 rounded-full text-foreground font-medium transition-colors"
									>
										Projects
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/blog"
										className="bg-transparent hover:bg-gray-100/50 dark:hover:bg-gray-800/50 px-4 py-2 rounded-full text-foreground font-medium transition-colors"
									>
										Blog
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/my-story"
										className="bg-transparent hover:bg-gray-100/50 dark:hover:bg-gray-800/50 px-4 py-2 rounded-full text-foreground font-medium transition-colors"
									>
										My story
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					{/* Right side - Project Quiz Button and Theme Toggle */}
					<div className="flex items-center space-x-4">
						<Button asChild>
							<Link href="/project-quiz">Project Quiz</Link>
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
										<div className="w-8 h-8 relative">
											<Image
												src="/assets/img/logo.svg"
												alt="VB Logo"
												width={32}
												height={32}
												className="w-full h-full"
											/>
										</div>
										<span className="text-lg font-bold text-foreground">
											Vladbi
										</span>
									</Link>

									<div className="space-y-2">
										<div className="text-sm font-medium text-muted-foreground px-3 py-2">
											Services
										</div>
										<Link
											href="/services/web-development"
											className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors"
										>
											Web Development
										</Link>
										<Link
											href="/services/consulting"
											className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors"
										>
											Consulting
										</Link>
									</div>

									<Link
										href="/projects"
										className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors font-medium"
									>
										Projects
									</Link>
									<Link
										href="/blog"
										className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors font-medium"
									>
										Blog
									</Link>
									<Link
										href="/my-story"
										className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors font-medium"
									>
										My story
									</Link>

									<Button
										asChild
										className="mt-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
									>
										<Link href="/project-quiz">
											Project Quiz
										</Link>
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
