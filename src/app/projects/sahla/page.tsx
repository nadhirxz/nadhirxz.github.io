import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';

const project: Project = {
	id: 'sahla-server',
	title: 'Sahla Server',
	description:
		'Sahla is an on-demand ride and transport platform connecting customers with local drivers. Alongside everyday passenger trips, it lets customers request utility vehicles such as vans and tow trucks for larger or more specialized transport needs. Real-time driver coordination, mapping, and route planning help connect each request with an appropriate vehicle.',
	image: 'sahla.png',
	date: '2022',
	technologies: ['Node.js', 'JavaScript', 'Express.js', 'Socket.IO', 'Redis', 'PostgreSQL', 'MongoDB', 'Google Maps', 'OpenStreetMap', 'OSRM', 'AWS'],
	scope: [
		'Developed real-time backend services connecting customers with drivers',
		'Integrated mapping and routing services, including deployed OSRM graphs',
	],
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}