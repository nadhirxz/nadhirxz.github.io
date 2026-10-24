import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';

const projects = [
	{ id: 'magnet2torrent', title: 'magnet2torrent', image: 'magnet2torrent.png' },
	{ id: 'aplox', title: 'Aplox', image: 'aplox/cover.webp' },
	{ id: 'meta-z', title: 'Meta-Z', image: 'meta-z.png' },
	{ id: 'trk', title: 'TRK', image: 'trk.png' },
	{ id: 'priefcase', title: 'Priefcase', image: 'priefcase.png' },
	{ id: 'data-z', title: 'DataZ', image: 'data-z.png' },
	{ id: 'sahla', title: 'Sahla', image: 'sahla.png' },
	{ id: 'inventory-management-app', title: 'Inventory Management App', image: 'inventory-manager.png' },
	{ id: 'safe', title: 'safe', image: 'safe.png' },
	{ id: 'ur-crypter', title: 'ur-crypter', image: 'ur-crypter.jpg' },
	{ id: 'speed-food', title: 'Speed Food', image: 'speedfood.png' },
];

export const metadata: Metadata = {
	title: 'Projects | Nadhir Ferdji',
	description: 'Selected software, web, and infrastructure projects by Nadhir Ferdji.',
};

export default function ProjectsPage() {
	return (
		<section className={styles.content} aria-labelledby="projects-title">
			<h1 id="projects-title" className={styles.title}>
				Projects
			</h1>
			<p className={styles.description}>
				A selection of projects built through professional work, freelance, or just for fun.
			</p>
			<div className={styles.projectCards}>
				{projects.map(project => (
					<div className={styles.project} key={project.id}>
						<Link className={styles.projectLink} href={`/projects/${project.id}`}>
							<div className={styles.imageFrame}>
								<Image src={`/projects/${project.image}`} alt={`${project.title} project screenshot`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 480px" />
							</div>
							<h2 className={styles.projectTitle}>{project.title}</h2>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
