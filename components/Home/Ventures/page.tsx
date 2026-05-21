import { Badge } from "@/components/Badge";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./ventures.module.scss";

type VentureBadgeVariant = "flagship" | "beta" | "internal";

type Venture = {
    title: string;
    description: string;
    tags: string[];
    href?: string;
    featured?: boolean;
    badge?: { label: string; variant: VentureBadgeVariant };
    visitLabel?: string;
};

const ventures: Venture[] = [
    {
        title: "Neophoenix.ai",
        description:
            "Flagship AI venture delivering enterprise RAG pipelines, GenAI products, and revenue-first AI strategy — from concept through production scale.",
        tags: ["RAG", "GenAI", "AI Strategy", "Data Governance", "Revenue-First"],
        href: "https://neophoenix.ai",
        featured: true,
        badge: { label: "Flagship", variant: "flagship" },
        visitLabel: "Visit Neophoenix.ai",
    },
    {
        title: "Inventam Tech Solution",
        description:
            "Cloud-native engineering and DevOps-first delivery for enterprise clients — built on deep partnerships with AWS, Docker, and Vercel.",
        tags: ["AWS", "Docker", "Vercel", "DevOps", "Cloud"],
        href: "https://inventam.com",
    },
    {
        title: "LedgerX.cloud",
        description:
            "Cloud-native ERP and edge-computing platform designed for distributed enterprise operations at scale.",
        tags: ["ERP", "Edge Computing", "Cloud-native"],
    },
    {
        title: "DripDash.ai",
        description:
            "Internal AI automation platform for workflow orchestration — streamlining operations across the venture portfolio.",
        tags: ["AI", "Automation", "Workflows"],
        badge: { label: "Internal Use", variant: "internal" },
    },
    {
        title: "Vectalk.ai",
        description:
            "Collaborative AI workspace powered by NLP — enabling teams to work smarter with context-aware intelligence.",
        tags: ["AI", "NLP", "Collaboration"],
        badge: { label: "Beta", variant: "beta" },
    },
];

function VentureCardBadge({
    label,
    variant,
}: {
    label: string;
    variant: VentureBadgeVariant;
}) {
    const variantClass =
        variant === "flagship"
            ? styles.cardBadgeFlagship
            : variant === "beta"
              ? styles.cardBadgeBeta
              : styles.cardBadgeInternal;

    return (
        <span className={`${styles.cardBadge} ${variantClass}`}>{label}</span>
    );
}

function VentureCard({ venture }: { venture: Venture }) {
    const { title, description, tags, href, featured, badge, visitLabel } = venture;
    const cardClass = featured ? styles.cardFeatured : styles.card;

    const headerContent = (
        <div className={styles.cardHeader}>
            <div className={styles.cardTitleRow}>
                <h3 className={styles.cardTitle}>{title}</h3>
                {badge ? (
                    <VentureCardBadge label={badge.label} variant={badge.variant} />
                ) : null}
            </div>
            {href ? (
                <a
                    className={styles.cardExternal}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${title}`}
                >
                    <ExternalLink size={18} aria-hidden />
                </a>
            ) : null}
        </div>
    );

    return (
        <article className={cardClass}>
            {href ? (
                <a
                    className={styles.cardLinkOverlay}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${title}`}
                    tabIndex={-1}
                />
            ) : null}
            {headerContent}
            <p className={styles.cardDescription}>{description}</p>
            <ul className={styles.tagList} role="list">
                {tags.map((tag) => (
                    <li key={tag}>
                        <span className={styles.tag}>{tag}</span>
                    </li>
                ))}
            </ul>
            {visitLabel && href ? (
                <a
                    className={styles.visitLink}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {visitLabel}
                    <ArrowUpRight size={16} aria-hidden />
                </a>
            ) : null}
        </article>
    );
}

export function Ventures() {
    const featured = ventures.find((v) => v.featured)!;
    const topRight = ventures[1];
    const bottomRow = ventures.slice(2);

    return (
        <section className={styles.ventures} aria-labelledby="ventures-heading">
            <Container className={styles.inner}>
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} xl={8}>
                        <header className={styles.header}>
                            <Badge items={["Ventures"]} />
                            <h2 id="ventures-heading" className={styles.heading}>
                                AI Ventures &{" "}
                                <span className={styles.headingAccent}>Strategic Products</span>
                            </h2>
                            <p className={styles.subheading}>
                                A portfolio built on one principle: AI that produces revenue. Every
                                venture is designed to solve real enterprise problems at scale.
                            </p>
                        </header>
                    </Col>
                </Row>

                <div className={styles.grid}>
                    <VentureCard venture={featured} />
                    <VentureCard venture={topRight} />
                    {bottomRow.map((venture) => (
                        <VentureCard key={venture.title} venture={venture} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
