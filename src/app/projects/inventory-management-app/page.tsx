import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';

const project: Project = {
	id: 'inventory-management-app',
	title: 'Inventory Management App',
	description: 'A desktop application for tracking inventory and processing point-of-sale transactions.',
	image: 'inventory-manager.png',
	date: 'Oct 2021',
	technologies: ['Electron', 'React', 'TypeScript', 'Tailwind CSS'],
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}
