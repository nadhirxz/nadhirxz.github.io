import Image from 'next/image';
import TrackedExternalLink from '@/components/tracked-external-link';
import styles from './project-page.module.css';

export type Project = {
	id: string;
	title: string;
	description: string;
	image: string;
	date: string;
	technologies: string[];
	services?: { label: string; desc: string }[];
	scope?: string[];
	code?: string;
	demo?: string;
	npm?: string;
	children?: React.ReactNode;
	extraLinks?: { label: string; url: string }[];
};

export default function ProjectPage({ project }: { project: Project }) {
	return (
		<section className={styles.content}>
			<header className={styles.projectHeader}>
				<h1>{project.title}</h1>
				<p>{project.date}</p>
			</header>
			<div className={styles.hero}>
				<Image
					src={`/projects/${project.image}`}
					alt={`${project.title} project screenshot`}
					style={{ borderRadius: '5px', border: '1px solid var(--pico-muted-border-color)' }}
					fill
					sizes="(max-width: 800px) 100vw, 768px"
				/>
			</div>
			<p className={styles.description}>{project.description}</p>
			{!!project.services && (
				<section className={styles.services} aria-labelledby="services-title">
					<h2 id="services-title">Services</h2>
					{project.services.map((service, index) => (
						<div key={index}>
							<h3>{service.label}</h3>
							<p>{service.desc}</p>
						</div>
					))}
				</section>
			)}
			<section className={styles.technologies} aria-labelledby="technologies-title">
				<h2 id="technologies-title">Technologies</h2>
				<p className={styles.technologiesList}>{project.technologies.join(', ')}</p>
			</section>
			{!!project.scope && (
				<section className={styles.scope} aria-labelledby="scope-title">
					<h2 id="scope-title">Scope</h2>
					<ul className={styles.scopeList}>
						{project.scope.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}
			{!!project.children ? project.children : null}
			<nav className={styles.projectLinks} aria-label="Project links">
				{project.code && (
					<TrackedExternalLink
						className="underline"
						href={project.code}
						target="_blank"
						rel="noopener noreferrer"
						event="project_link_opened"
						properties={{ project_id: project.id, link_type: 'code' }}
					>
						Code
					</TrackedExternalLink>
				)}
				{project.demo && (
					<TrackedExternalLink
						className="underline"
						href={project.demo}
						target="_blank"
						rel="noopener noreferrer"
						event="project_link_opened"
						properties={{ project_id: project.id, link_type: 'demo' }}
					>
						Demo
					</TrackedExternalLink>
				)}
				{project.npm && (
					<TrackedExternalLink
						className="underline"
						href={project.npm}
						target="_blank"
						rel="noopener noreferrer"
						event="project_link_opened"
						properties={{ project_id: project.id, link_type: 'npm' }}
					>
						NPM
					</TrackedExternalLink>
				)}
				{project.extraLinks &&
					project.extraLinks.map(link => (
						<TrackedExternalLink
							className="underline"
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							key={link.url}
							event="project_link_opened"
							properties={{ project_id: project.id, link_type: 'extra', link_label: link.label }}
						>
							{link.label}
						</TrackedExternalLink>
					))}
			</nav>
		</section>
	);
}
