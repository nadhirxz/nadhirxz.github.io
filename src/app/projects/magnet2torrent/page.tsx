import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';

const project: Project = {
	id: 'magnet2torrent',
	title: 'magnet2torrent',
	description: 'A lightweight Node.js command-line tool that converts magnet links into torrent files.',
	image: 'magnet2torrent.png',
	date: '2021',
	technologies: ['Node.js', 'JavaScript'],
	code: 'https://github.com/nadhirxz/magnet2torrent',
	npm: 'https://www.npmjs.com/package/m2t',
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}