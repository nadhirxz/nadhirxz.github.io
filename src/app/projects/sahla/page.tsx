import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';
import Image from 'next/image';
import ImgClient0 from '@/../public/projects/sahla/client/screen-0.webp';
import ImgClient1 from '@/../public/projects/sahla/client/screen-1.webp';
import ImgClient2 from '@/../public/projects/sahla/client/screen-2.webp';
import ImgClient3 from '@/../public/projects/sahla/client/screen-3.webp';
import ImgClient4 from '@/../public/projects/sahla/client/screen-4.webp';
import ImgClient5 from '@/../public/projects/sahla/client/screen-5.webp';
import ImgClient6 from '@/../public/projects/sahla/client/screen-6.webp';
import ImgClient7 from '@/../public/projects/sahla/client/screen-7.webp';
import ImgDriver2 from '@/../public/projects/sahla/driver/screen-2.webp';
import ImgDriver3 from '@/../public/projects/sahla/driver/screen-3.webp';
import ImgDriver4 from '@/../public/projects/sahla/driver/screen-4.webp';
import ImgDriver5 from '@/../public/projects/sahla/driver/screen-5.webp';
import ImgDriver6 from '@/../public/projects/sahla/driver/screen-6.webp';
import ImgDriver7 from '@/../public/projects/sahla/driver/screen-7.webp';
import System from '@/../public/projects/sahla/system.svg';

const Extra = (): React.ReactNode => (
	<>
		<section>
			<Image src={System} alt="Sahla system architecture" style={{ width: '100%', height: 'auto', padding: '25px', borderRadius: '5px', backgroundColor: '#121212', border: '1px solid var(--color-border)' }} />
		</section>
		<section>
			<iframe
				width="100%"
				height="520"
				src="https://www.youtube.com/embed/lKkVUPahzJY"
				title="TRK Project Demo"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }}
			></iframe>
		</section>
		<section>
			<h2 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>Customer App</h2>
			<div
				style={{
					display: 'flex',
					maxWidth: '98%',
					margin: '0 auto 0.6rem auto',
					gap: '0.5rem',
					marginBottom: '1rem',
				}}
			>
				<Image src={ImgClient0} alt="Sahla screenshot 0" style={{ width: '50%', height: 'auto' }} />
				<Image src={ImgClient1} alt="Sahla screenshot 1" style={{ width: '50%', height: 'auto' }} />
			</div>
			<div
				style={{
					display: 'flex',
					maxWidth: '98%',
					margin: '0 auto 0.6rem auto',
					gap: '0.5rem',
				}}
			>
				<Image src={ImgClient2} alt="Sahla screenshot 2" style={{ width: '50%', height: 'auto' }} />
				<Image src={ImgClient3} alt="Sahla screenshot 3" style={{ width: '50%', height: 'auto' }} />
			</div>
			<div
				style={{
					display: 'flex',
					maxWidth: '98%',
					margin: '0 auto 0.6rem auto',
					gap: '0.5rem',
				}}
			>
				<Image src={ImgClient4} alt="Sahla screenshot 4" style={{ width: '50%', height: 'auto' }} />

				<Image src={ImgClient5} alt="Sahla screenshot 5" style={{ width: '50%', height: 'auto' }} />
			</div>
			<div
				style={{
					display: 'flex',
					maxWidth: '98%',
					margin: '0 auto 0.6rem auto',
					gap: '0.5rem',
				}}
			>
				<Image src={ImgClient6} alt="Sahla screenshot 6" style={{ width: '50%', height: 'auto', margin: '0 auto' }} />
				<Image src={ImgClient7} alt="Sahla screenshot 7" style={{ width: '50%', height: 'auto', margin: '0 auto' }} />
			</div>
		</section>

		<section>
			<h2 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}> Driver App </h2>
			<div
				style={{
					display: 'flex',
					maxWidth: '98%',
					margin: '0 auto 0.6rem auto',
					gap: '0.5rem',
				}}
			>
				<Image src={ImgDriver2} alt="Sahla screenshot 2" style={{ width: '50%', height: 'auto' }} />
				<Image src={ImgDriver3} alt="Sahla screenshot 3" style={{ width: '50%', height: 'auto' }} />
			</div>
			<div
				style={{
					display: 'flex',
					maxWidth: '98%',
					margin: '0 auto 0.6rem auto',
					gap: '0.5rem',
				}}
			>
				<Image src={ImgDriver4} alt="Sahla screenshot 4" style={{ width: '50%', height: 'auto' }} />
				<Image src={ImgDriver5} alt="Sahla screenshot 5" style={{ width: '50%', height: 'auto' }} />
			</div>
			<div
				style={{
					display: 'flex',
					maxWidth: '98%',
					margin: '0 auto 0.6rem auto',
					gap: '0.5rem',
				}}
			>
				<Image src={ImgDriver6} alt="Sahla screenshot 6" style={{ width: '50%', height: 'auto' }} />
				<Image src={ImgDriver7} alt="Sahla screenshot 7" style={{ width: '50%', height: 'auto' }} />
			</div>
		</section>
	</>
);

const project: Project = {
	id: 'sahla',
	title: 'Sahla',
	description:
		'Sahla is an on-demand ride and transport platform connecting customers with local drivers. Alongside everyday passenger trips, it lets customers request utility vehicles such as vans and tow trucks for larger or more specialized transport needs. Real-time driver coordination, mapping, and route planning help connect each request with an appropriate vehicle.',
	image: 'sahla.png',
	date: '2022',
	technologies: ['Node.js', 'JavaScript', 'Express.js', 'Socket.IO', 'Redis', 'PostgreSQL', 'MongoDB', 'Google Maps', 'OpenStreetMap', 'OSRM', 'AWS'],
	scope: ['Developed real-time backend services connecting customers with drivers', 'Integrated mapping and routing services, including deployed OSRM graphs'],
	children: <Extra />,
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}
