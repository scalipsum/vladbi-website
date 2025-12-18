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

	const mainNavLinks = {
		Services: '/services',
		Products: '/products',
		Blog: '/blog',
		'My story': '/my-story',
	};

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
							{Object.entries(mainNavLinks).map(
								([label, href]) => (
									<NavigationMenuItem key={href}>
										<NavigationMenuLink asChild>
											<Link href={href}>
												<Text className="font-main !text-lg">
													{label}
												</Text>
											</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>
								),
							)}
						</NavigationMenuList>
					</NavigationMenu>

					{/* Right side - Product Quiz Button and Theme Toggle */}
					<div className="flex items-center space-x-4">
						<Button asChild className="-mt-1 pt-1" size="sm">
							<Link href="/quiz">Product Quiz</Link>
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
									<Menu className="size-6" />
									<Text className="text-base font-medium font-main">
										menu
									</Text>
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-80 px-2">
								<div className="flex flex-col space-y-4 mt-3">
									<Link
										href="/"
										className="flex items-center justify-center space-x-2 mb-8"
									>
										<Logo
											color="currentColor"
											width={32}
											height={38}
											className="text-brand"
										/>
										<Text className="text-lg font-main font-bold text-brand">
											Vladbi
										</Text>
									</Link>

									{Object.entries(mainNavLinks).map(
										([label, href]) => (
											<Link
												key={href}
												href={href}
												className="block px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors text-center"
											>
												<Text className="font-main font-bold text-brand">
													{label}
												</Text>
											</Link>
										),
									)}

									<Button asChild>
										<Link href="/quiz">
											Start Product Quiz
										</Link>
									</Button>
									<div className="flex justify-center py-2">
										<ThemeToggle />
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</nav>
			</div>
		</header>
	);
}
