import MainLayout from '@/components/layout/MainLayout';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Metadata, Viewport } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({
	weight: ['500', '600'], // medium, semibold
	subsets: ['latin'],
	variable: '--font-nunito-sans',
});
const nunito = Nunito({
	weight: ['700', '800'], // bold, extrabold
	subsets: ['latin'],
	variable: '--font-nunito',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site.com';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Gesturs - The Notion Blog',
		template: `%s | Gesturs`,
	},
	description: 'A blog built with Next.js and Notion',
	openGraph: {
		title: 'Gesturs - The Notion Blog',
		description: 'A blog built with Next.js and Notion',
		url: siteUrl,
		siteName: 'Gesturs',
		images: [
			{
				url: `${siteUrl}/opengraph-image.png`,
				width: 1200,
				height: 630,
				alt: 'Gesturs - The Notion Blog',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Gesturs - The Notion Blog',
		description: 'A blog built with Next.js and Notion',
		images: [`${siteUrl}/opengraph-image.png`],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	manifest: `${siteUrl}/site.webmanifest`,
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn(nunitoSans.className, nunito.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<MainLayout>{children}</MainLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
