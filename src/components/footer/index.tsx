import links from '@/lib/links';
import { EmailIcon, GitHubIcon, LinkedInIcon, XIcon } from '@/lib/icons';
import TrackedExternalLink from '@/components/tracked-external-link';
import styles from './footer.module.css';

const year = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Nadhir © {year}</p>
			<nav aria-label="Social links">
				<ul className={styles.socialLinks}>
					{Object.entries(links).map(([key, href]) => {
						const label = key === 'contact' ? 'Email' : key === 'x' ? 'X' : key.charAt(0).toUpperCase() + key.slice(1);
						return (
							<li key={key}>
								<TrackedExternalLink
									aria-label={label}
									href={href}
									target={key === 'contact' ? undefined : '_blank'}
									rel={key === 'contact' ? undefined : 'noopener noreferrer'}
									event="social_link_opened"
									properties={{ destination: key }}
								>
									{key === 'github' && <GitHubIcon className={styles.socialIcon} width={18} height={18} />}
									{key === 'linkedin' && <LinkedInIcon className={styles.socialIcon} width={24} height={24} />}
									{key === 'x' && <XIcon className={styles.socialIcon} width={18} height={18} />}
									{key === 'contact' && <EmailIcon className={styles.socialIcon} width={24} height={24} />}
								</TrackedExternalLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</footer>
	);
}
