import TrackedExternalLink from '@/components/tracked-external-link';
import styles from './page.module.css';

export default function Home() {
	return (
		<section className={styles.intro} aria-labelledby="intro-title">
			<h1 className={styles['intro-title']}>Nadhir Ferdji</h1>
			<p style={{ paddingBottom: '0.75rem' }}>Full-stack Software &amp; DevOps Engineer building scalable, real-time systems with TypeScript.</p>
			<TrackedExternalLink href="/CV - Nadhir Ferdji.pdf" target="_blank" rel="noopener noreferrer" event="resume_opened" properties={{ source: 'home' }}>
				Resume
			</TrackedExternalLink>
		</section>
	);
}
