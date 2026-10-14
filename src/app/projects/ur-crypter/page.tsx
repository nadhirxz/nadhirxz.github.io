import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';

const project: Project = {
	id: 'ur-crypter',
	title: 'ur-crypter',
	description: 'A client-side utility for encrypting and decrypting data with JavaScript.',
	image: 'ur-crypter.jpg',
	date: 'Jul 2019',
	technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
	code: 'https://github.com/nadhirxz/ur-crypter',
	demo: 'https://nadhir.tech/ur-crypter',
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}