import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<section className={styles.intro} aria-labelledby="intro-title">
			<h1 className={styles['intro-title']}>Nadhir Ferdji</h1>
			<p style={{ paddingBottom: '0.75rem' }}>Full-stack Software &amp; DevOps Engineer building scalable, real-time systems with TypeScript.</p>
			<Link href="/CV - Nadhir Ferdji.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
		</section>
	);
}
