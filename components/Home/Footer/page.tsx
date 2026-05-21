import { Mail } from "lucide-react";
import Container from "react-bootstrap/Container";
import styles from "./footer.module.scss";

type IconProps = {
    size?: number;
};

function LinkedInIcon({ size = 18 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function GitHubIcon({ size = 18 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-.88.28-1.9 0-2.78 0 0-1-.35-3.5 1.3A12.34 12.34 0 0 0 8 3c-2.34 0-3.5 1.3-3.5 1.3-.28.88-.32 1.9 0 2.78-.72 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
] as const;

const ventureLinks = [
    { label: "Neophoenix.ai", href: "https://neophoenix.ai" },
    { label: "Inventam Tech Solution", href: "https://inventam.com" },
    { label: "LedgerX.cloud", href: "https://ledgerx.cloud" },
    { label: "DripDash.ai", href: "https://dripdash.ai" },
    { label: "Vectalk.ai", href: "https://vectalk.ai" },
] as const;

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hareendesai",
        icon: <LinkedInIcon />,
    },
    {
        label: "GitHub",
        href: "https://github.com/hareendesai",
        icon: <GitHubIcon />,
    },
    {
        label: "Email",
        href: "mailto:hareen@neophoenix.ai",
        icon: <Mail size={18} strokeWidth={1.75} aria-hidden />,
    },
] as const;

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.inner}>
                <div className={styles.columns}>
                    <div className={styles.brandColumn}>
                        <p className={styles.logo}>
                            HD<span className={styles.logoAccent}>.</span>
                        </p>
                        <p className={styles.bio}>
                            CEO at Neophoenix.ai · CTO &amp; Co-founder at Inventam Tech
                            Solution. Building revenue-producing AI systems.
                        </p>
                    </div>

                    <nav className={styles.linkColumn} aria-label="Footer navigation">
                        <h3 className={styles.columnTitle}>Navigation</h3>
                        <ul className={styles.linkList} role="list">
                            {navigationLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a className={styles.link} href={href}>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className={styles.linkColumn} aria-label="Ventures">
                        <h3 className={styles.columnTitle}>Ventures</h3>
                        <ul className={styles.linkList} role="list">
                            {ventureLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        className={styles.link}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © 2026 Hareen Desai. All rights reserved.
                    </p>
                    <ul className={styles.socialList} role="list">
                        {socialLinks.map(({ label, href, icon }) => (
                            <li key={label}>
                                <a
                                    className={styles.socialLink}
                                    href={href}
                                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel={
                                        href.startsWith("mailto:")
                                            ? undefined
                                            : "noopener noreferrer"
                                    }
                                    aria-label={label}
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
}
