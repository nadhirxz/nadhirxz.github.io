import type { Metadata } from 'next';
import ProjectPage, { type Project } from '@/components/project-page';

const project: Project = {
	id: 'meta-z',
	title: 'Meta-Z',
	description: 'A web marketplace for the MetaVerse Z multiplayer game, with wallet connectivity, NFT trading, and in-game purchases.',
	image: 'meta-z.png',
	date: '2022',
	technologies: ['Next.js', 'Typescript', 'Tailwind CSS', 'Ethers.js', 'MetaMask', 'Ethereum', 'Solidity'],
	scope: [
		'Developed the Web3 frontend, including wallet connectivity and marketplace interactions',
		'Implemented smart contracts for NFT trading and in-game purchases',
		'Built backend functionality to support the platform',
	],
	demo: 'https://meta-z-demo.vercel.app',
	extraLinks: [{ label: 'Smart Contracts', url: 'https://github.com/MetaVerseZ/contracts' }],
};

export const metadata: Metadata = {
	title: `${project.title} | Nadhir Ferdji`,
	description: project.description,
};

export default function Page() {
	return <ProjectPage project={project} />;
}
