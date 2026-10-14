import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';
import Image from 'next/image';
import Img0 from '@/../public/projects/aplox/screen-0.webp';
import Img1 from '@/../public/projects/aplox/screen-1.webp';
import Img2 from '@/../public/projects/aplox/screen-2.webp';
import Img3 from '@/../public/projects/aplox/screen-3.webp';
import Img4 from '@/../public/projects/aplox/screen-4.webp';
import Img5 from '@/../public/projects/aplox/screen-5.webp';
import Img6 from '@/../public/projects/aplox/screen-6.webp';

const Extra = (): React.ReactNode => (
	<section>
		<div
			style={{
				display: 'flex',
				maxWidth: '90%',
				margin: '0 auto 2rem auto',
				gap: '1.25rem',
				marginBottom: '3rem',
			}}
		>
			<Image src={Img0} alt="Aplox screenshot 0" style={{ width: '50%', height: 'auto' }} /> <Image src={Img1} alt="Aplox screenshot 1" style={{ width: '50%', height: 'auto' }} />
		</div>
		<div
			style={{
				display: 'flex',
				maxWidth: '90%',
				margin: '0 auto 2rem auto',
				gap: '1.25rem',
			}}
		>
			<Image src={Img3} alt="Aplox screenshot 3" style={{ width: '50%', height: 'auto' }} />
			<Image src={Img4} alt="Aplox screenshot 4" style={{ width: '50%', height: 'auto' }} />
		</div>
		<div
			style={{
				display: 'flex',
				maxWidth: '90%',
				margin: '0 auto 2rem auto',
				gap: '1.25rem',
			}}
		>
			<Image src={Img5} alt="Aplox screenshot 5" style={{ width: '50%', height: 'auto' }} />

			<Image src={Img6} alt="Aplox screenshot 6" style={{ width: '50%', height: 'auto' }} />
		</div>
		<div
			style={{
				display: 'flex',
				maxWidth: '90%',
				margin: '0 auto 2rem auto',
				gap: '1.25rem',
			}}
		>
			<Image src={Img2} alt="Aplox screenshot 2" style={{ width: '50%', height: 'auto', margin: '0 auto' }} />
		</div>
	</section>
);

const project: Project = {
	id: 'aplox',
	title: 'Aplox',
	description:
		"A platform where people come together through Open Innovation to solve problems and create new ideas. Whether you're a beginner or an expert, Aplox helps you connect with others, explore challenges, and work together to find solutions. It's a place where innovation happens!",
	image: 'aplox/cover.webp',
	date: '2023',
	technologies: ['Node.js', 'JavaScript', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Prisma', 'Next.js'],
	scope: ["Developed the platform's backend services and APIs", 'Managed infrastructure and DevOps workflows', 'Built the landing page'],
	children: <Extra />,
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project}></ProjectPage>;
}
