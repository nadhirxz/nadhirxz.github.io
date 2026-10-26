'use client';

import posthog from 'posthog-js';

export type PortfolioInteraction = 'resume_opened' | 'project_link_opened' | 'social_link_opened' | 'nav_link_clicked';

const interactionMessages: Record<PortfolioInteraction, string> = {
	resume_opened: 'Portfolio resume opened',
	project_link_opened: 'Portfolio project resource opened',
	social_link_opened: 'Portfolio social destination opened',
	nav_link_clicked: 'Portfolio navigation link clicked',
};

export function logPortfolioInteraction(interaction: PortfolioInteraction, attributes: Record<string, string>) {
	posthog.logger.info(interactionMessages[interaction], {
		interaction,
		...attributes,
	});
}
