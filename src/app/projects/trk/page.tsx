import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';

const Extra = (): React.ReactNode => (
	<section>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				maxWidth: '90%',
				margin: '0 auto 2rem auto',
				gap: '1.25rem',
			}}
		>
			<iframe
				width="100%"
				height="480"
				src="https://www.youtube.com/embed/eSDSl2rSK74"
				title="TRK Project Demo"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				style={{ borderRadius: '5px', border: '1px solid var(--pico-muted-border-color)' }}
			></iframe>
			<iframe
				width="100%"
				height="480"
				src="https://www.youtube.com/embed/3uij9KSbuR8"
				title="TRK Project Demo 2"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				style={{ borderRadius: '5px', border: '1px solid var(--pico-muted-border-color)' }}
			></iframe>
		</div>
	</section>
);

const project: Project = {
	id: 'trk',
	title: 'TRK',
	description:
		'A drone fleet management system, bringing vehicle tracking and operational data together in one web application. It gives users live visibility into vehicle locations, tools to manage fleet information, and video streaming for added context during operations. The React interface pairs with a Node.js and Express backend, while MQTT and WebSockets support real-time communication and Leaflet displays vehicle locations on a map.',
	image: 'trk.png',
	date: 'Oct 2023',
	technologies: ['Node.js', 'TypeScript', 'Express.js', 'MQTT', 'WebSockets', 'Prisma', 'SQLite', 'React', 'Tailwind CSS', 'Leaflet'],
	scope: [
		'Developed the React frontend for real-time vehicle tracking and fleet management',
		'Implemented the Node.js and Express backend to handle operational data',
		'Integrated MQTT and WebSockets for real-time communication',
		'Utilized Leaflet to display vehicle locations on a map',
	],
	children: <Extra />,
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}
