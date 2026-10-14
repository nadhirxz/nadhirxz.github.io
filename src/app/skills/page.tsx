import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import skills from '@/lib/skills';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'Skills | Nadhir Ferdji',
	description: 'Technical skills across software engineering, web development, QA, DevOps, and infrastructure.',
};

export default function SkillsPage() {
	return (
		<section className={styles.content} aria-labelledby="skills-title">
			<h1 id="skills-title" className={styles.title}>
				Skills
			</h1>
			<dl className={styles.skillList}>
				{skills.map(({ label, details }) => (
					<div className={styles.skillGroup} key={label}>
						<dt>{label}</dt>
						<dd>{details}</dd>
					</div>
				))}
			</dl>
		</section>
	);
}
