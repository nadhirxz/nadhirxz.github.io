import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';

const project: Project = {
	id: 'safe',
	title: 'safe',
	description: 'A Node.js command-line utility for encrypting text and files with AES.',
	image: 'safe.png',
	date: 'Nov 2021',
	technologies: ['Node.js', 'JavaScript'],
	code: 'https://github.com/nadhirxz/safe',
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}