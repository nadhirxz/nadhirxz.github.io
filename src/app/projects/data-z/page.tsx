import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';
import Image from 'next/image';
import Img1 from '@/../public/projects/data-z/1.png';
import Img2 from '@/../public/projects/data-z/2.png';
import Img3 from '@/../public/projects/data-z/3.png';
import Img41 from '@/../public/projects/data-z/4-1.png';
import Img42 from '@/../public/projects/data-z/4-2.png';
import Img43 from '@/../public/projects/data-z/4-3.png';
import Img44 from '@/../public/projects/data-z/4-4.png';
import Img45 from '@/../public/projects/data-z/4-5.png';
import Img46 from '@/../public/projects/data-z/4-6.png';

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
			<Image src={Img1} alt="DataZ screenshot 1" style={{ borderRadius: '5px', border: '1px solid var(--pico-muted-border-color)' }} />
			<Image src={Img2} alt="DataZ screenshot 2" style={{ borderRadius: '5px', border: '1px solid var(--pico-muted-border-color)' }} />
			<Image src={Img3} alt="DataZ screenshot 3" style={{ borderRadius: '5px', border: '1px solid var(--pico-muted-border-color)' }} />
		</div>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				maxWidth: '90%',
				margin: '0 auto 2rem auto',
				gap: '0px',
			}}
		>
			<Image
				src={Img41}
				alt="DataZ screenshot 4-1"
				style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px', border: '1px solid var(--pico-muted-border-color)', borderBlockEnd: 'none' }}
			/>
			<Image src={Img42} alt="DataZ screenshot 4-2" style={{ border: '1px solid var(--pico-muted-border-color)', borderBlockStart: 'none', borderBlockEnd: 'none' }} />
			<Image src={Img43} alt="DataZ screenshot 4-3" style={{ border: '1px solid var(--pico-muted-border-color)', borderBlockStart: 'none', borderBlockEnd: 'none' }} />
			<Image src={Img44} alt="DataZ screenshot 4-4" style={{ border: '1px solid var(--pico-muted-border-color)', borderBlockStart: 'none', borderBlockEnd: 'none' }} />
			<Image src={Img45} alt="DataZ screenshot 4-5" style={{ border: '1px solid var(--pico-muted-border-color)', borderBlockStart: 'none', borderBlockEnd: 'none' }} />
			<Image
				src={Img46}
				alt="DataZ screenshot 4-6"
				style={{ borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', border: '1px solid var(--pico-muted-border-color)', borderBlockStart: 'none' }}
			/>
		</div>
	</section>
);

const project: Project = {
	id: 'data-z',
	title: 'DataZ',
	description:
		'DataZ is an innovative data ecosystem designed to unlock the value of data by connecting businesses with diverse datasets and tailored data solutions. The platform facilitates secure data transactions while offering essential services such as anonymization, dataset discovery, data preprocessing, and custom analytics. By transforming raw data into valuable insights, DataZ empowers businesses to make informed decisions, protect data privacy, and unlock new opportunities for growth.',
	image: 'data-z.png',
	date: 'Nov 2023',
	technologies: ['Node.js', 'TypeScript', 'Express.js', 'Prisma', 'PostgreSQL', 'React', 'Tailwind CSS', 'Stripe', 'Azure Blob Storage'],
	scope: [
		'Developed the entire backend, including APIs and business logic.',
		'Designed system architecture and database schemas.',
		'Integrated Azure Blob Storage for dataset management.',
		'Implemented Stripe payment integration.',
		'Contributed to frontend development, building selected UI components and integrating them with backend services.',
	],
	services: [
		{
			label: 'Anonymization',
			desc: 'Involves removing or masking sensitive information within datasets to protect individual privacy. This process helps maintain data confidentiality and supports compliance with data protection requirements when datasets are prepared for sharing, purchasing, or selling.',
		},
		{
			label: 'Dataset Marketplace',
			desc: 'Provides a platform where datasets from various industries are organized and made available for browsing, purchasing, and exchange. Users can explore different data categories and find relevant datasets for research, business operations, or analytical purposes.',
		},
		{
			label: 'Data Preprocessing, Custom Insights & Analysis',
			desc: 'Involves cleaning, organizing, and transforming raw datasets into structured formats suitable for further use. Additional analysis can identify patterns, uncover trends, and generate meaningful findings based on specific business requirements.',
		},
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
