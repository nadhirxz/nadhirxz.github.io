import type { Metadata } from 'next';
import { Manrope, Noto_Serif } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/providers/theme-provider';
import styles from './layout.module.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Script from 'next/script';

const displayFont = Noto_Serif({
	variable: '--font-display',
	subsets: ['latin'],
	weight: ['500', '600'],
});

const headingFont = Manrope({
	variable: '--font-heading',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Nadhir Ferdji | Software Engineer',
	description: 'Software engineer focused on full-stack JavaScript and TypeScript, developer experience, scalable systems, and DevOps infrastructure.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en" className={`${displayFont.variable} ${headingFont.variable}`} suppressHydrationWarning>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
					<Script async defer src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL} data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID} />
				)}
			</head>
			<body>
				<ThemeProvider>
					<Header />
					<main className="container">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
