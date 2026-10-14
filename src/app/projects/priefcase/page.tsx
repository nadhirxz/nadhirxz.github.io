import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';

const project: Project = {
	id: 'priefcase',
	title: 'Priefcase',
	description:
		'Priefcase is a blockchain-based document management prototype created for DevFest Algiers 2022. It explores bringing administrative paperwork into one platform, where users can securely retrieve and share documents using encryption and smart contracts. The project also automates document processing by using OCR to extract text and AI-based analysis to classify documents.',
	image: 'priefcase.png',
	date: 'Dec 2022',
	technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Ethers.js', 'Solidity', 'MetaMask'],
	scope: ['Developed the backend services supporting the platform', 'Implemented the blockchain layer, including the smart contracts and wallet integration'],
	demo: 'https://devpost.com/software/ddd-y321ex',
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}
