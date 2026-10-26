'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';
import { logPortfolioInteraction } from '@/lib/posthog-portfolio-logger';
import ThemeToggle from '../theme-toggle';
import styles from './header.module.css';

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/skills', label: 'Skills' },
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<nav aria-label="Primary navigation">
				<ul className={styles.navigation}>
					{links.map(({ href, label }) => (
						<li key={href}>
							<Link href={href} className='muted' aria-current={pathname === href ? 'page' : undefined} onClick={event => {
								const properties = { label, href, from: pathname };
								posthog.capture('nav_link_clicked', properties);
								logPortfolioInteraction('nav_link_clicked', properties);
								if (pathname === href) event.preventDefault();
							}}>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<ThemeToggle />
		</header>
	);
}
