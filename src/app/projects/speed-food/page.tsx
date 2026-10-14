import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';

const project: Project = {
	id: 'speed-food',
	title: 'Speed Food',
	description: 'A food-ordering website for a university residence, backed by a PHP server and MySQL database.',
	image: 'speedfood.png',
	date: 'Dec 2017',
	technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'jQuery'],
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}