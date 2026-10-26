import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';
import Img1 from '@/../public/projects/priefcase/1.png';
import Img2 from '@/../public/projects/priefcase/2.png';
import Img3 from '@/../public/projects/priefcase/3.png';
import Img4 from '@/../public/projects/priefcase/4.png';
import Img5 from '@/../public/projects/priefcase/5.png';
import Img6 from '@/../public/projects/priefcase/6.png';
import Img7 from '@/../public/projects/priefcase/7.png';
import Img8 from '@/../public/projects/priefcase/8.png';
import Img9 from '@/../public/projects/priefcase/9.png';
import Img10 from '@/../public/projects/priefcase/10.png';
import Image from 'next/image';

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
			<Image src={Img1} alt="Priefcase screenshot 1" style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }} />
			<Image src={Img2} alt="Priefcase screenshot 2" style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }} />
			<Image src={Img3} alt="Priefcase screenshot 3" style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }} />
			<Image src={Img4} alt="Priefcase screenshot 4" style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }} />
			<Image src={Img5} alt="Priefcase screenshot 5" style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }} />
			<Image src={Img6} alt="Priefcase screenshot 6" style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }} />
			<Image src={Img7} alt="Priefcase screenshot 7" style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }} />
			<Image src={Img8} alt="Priefcase screenshot 8" style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }} />
			<Image src={Img9} alt="Priefcase screenshot 9" style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }} />
			<Image src={Img10} alt="Priefcase screenshot 10" style={{ borderRadius: '5px', border: '1px solid var(--color-border)' }} />
		</div>
	</section>
);

const project: Project = {
	id: 'priefcase',
	title: 'Priefcase',
	description:
		'Priefcase is a blockchain-based document management system. It explores bringing administrative paperwork into one platform, where users can securely retrieve and share documents using encryption and smart contracts. The project also automates document processing by using OCR to extract text and AI-based analysis to classify documents.',
	image: 'priefcase.png',
	date: 'Dec 2022',
	technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Ethers.js', 'Solidity', 'MetaMask'],
	scope: ['Developed the backend services supporting the platform', 'Implemented the blockchain layer, including the smart contracts and wallet integration'],
	demo: 'https://devpost.com/software/ddd-y321ex',
	children: <Extra />
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}
