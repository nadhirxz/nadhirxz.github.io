import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';

const project: Project = {
	id: 'trk',
	title: 'TRK',
	description:
		'A fleet management system developed for Junction X Algiers 2023, bringing vehicle tracking and operational data together in one web application. It gives users live visibility into vehicle locations, tools to manage fleet information, and video streaming for added context during operations. The React interface pairs with a Node.js and Express backend, while MQTT and WebSockets support real-time communication and Leaflet displays vehicle locations on a map.',
	image: 'trk.png',
	date: 'Oct 2023',
	technologies: ['Node.js', 'TypeScript', 'Express.js', 'MQTT', 'WebSockets', 'Prisma', 'SQLite', 'React', 'Tailwind CSS', 'Leaflet'],
	code: 'https://github.com/L-Garage/JunctionXAlgiers2023',
	demo: 'https://www.youtube.com/watch?v=eSDSl2rSK74',
	scope: [
		'Developed the React frontend for real-time vehicle tracking and fleet management',
		'Implemented the Node.js and Express backend to handle operational data',
		'Integrated MQTT and WebSockets for real-time communication',
		'Utilized Leaflet to display vehicle locations on a map',
	],
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}
