'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
							<Link href={href} className='muted' aria-current={pathname === href ? 'page' : undefined} onClick={pathname === href ? event => event.preventDefault() : undefined}>
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
