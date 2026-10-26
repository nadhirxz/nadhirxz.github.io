'use client';

import posthog from 'posthog-js';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { logPortfolioInteraction, type PortfolioInteraction } from '@/lib/posthog-portfolio-logger';

type TrackedExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	event: PortfolioInteraction;
	properties: Record<string, string>;
	children: ReactNode;
};

export default function TrackedExternalLink({ event, properties, children, onClick, ...linkProps }: TrackedExternalLinkProps) {
	return (
		<a
			{...linkProps}
			onClick={clickEvent => {
				posthog.capture(event, properties);
				logPortfolioInteraction(event, properties);
				onClick?.(clickEvent);
			}}
		>
			{children}
		</a>
	);
}
