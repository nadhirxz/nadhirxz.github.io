import type { Metadata } from 'next';
import { Manrope, Noto_Serif } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/providers/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
	description: 'Full-stack Software Engineer building scalable, real-time systems with TypeScript.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en" className={`${displayFont.variable} ${headingFont.variable}`} suppressHydrationWarning>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<ThemeProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
