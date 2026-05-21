import { Badge } from "@/components/Badge";
import { Award, Briefcase } from "lucide-react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./journey.module.scss";

type JourneyBadge =
    | { type: "current"; label: string }
    | { type: "achievement"; label: string };

type JourneyEntry = {
    dateRange: string;
    title: string;
    company: string;
    highlights: string[];
    isCurrent?: boolean;
    badges?: JourneyBadge[];
};

const journeyEntries: JourneyEntry[] = [
    {
        dateRange: "February 2026 – Present",
        title: "Head of Engineering",
        company: "Neophoenix.ai",
        isCurrent: true,
        badges: [{ type: "current", label: "Current" }],
        highlights: [
            "Setting AI product strategy and owning full-cycle execution from concept to revenue.",
            "Building flagship RAG pipelines, GenAI products, and enterprise AI strategy.",
            "Architecting revenue-first AI ventures across the portfolio.",
        ],
    },
    {
        dateRange: "October 2025 – Present",
        title: "Project Manager",
        company: "Inventam Tech Solution",
        isCurrent: true,
        badges: [{ type: "current", label: "Current" }],
        highlights: [
            "Managed end-to-end software delivery with agile workflows, quality assurance, and deployment coordination.",
            "Led cross-functional collaboration between engineering, QA, design, and client stakeholder teams.",
            "Transformed client requirements into scalable project plans, sprint tasks, and delivery strategies.",
        ],
    },
    {
        dateRange: "October 2022 – Present",
        title: "Full-Stack Developer",
        company: "Inventam Tech Solution",
        isCurrent: true,
        badges: [{ type: "current", label: "Current" }],
        highlights: [
            "Built scalable backend systems and APIs for startups and fast-growing digital teams.",
            "Developed dashboards and cloud-ready applications focused on performance, reliability, and business growth.",
        ],
    },
    {
        dateRange: "October 2023 – April 2026",
        title: "Technical Lead",
        company: "Inventam Tech Solution",
        highlights: [
            "Built Lang Chain-based tools for data extraction, reasoning, and workflow orchestration",
            "Implemented custom API automation for SaaS & enterprise clients",
            "Created multi-agent solutions for internal and external processes",
        ],
    },
    {
        dateRange: "June 2019 – July 2022",
        title: "Full-Stack Developer",
        company: "Technobliss",
        highlights: [
            "Developed and maintained full-stack applications using PHP, Laravel, and modern JS frameworks",
            "Improved application performance and reduced error rates through optimized backend logic",
            "Worked on DB design, schema optimisation, and secure data handling",
        ],
    },
    {
        dateRange: "December 2018 – May 2019",
        title: "Software Developer",
        company: "Success Innovative Technologies",
        highlights: [
            "Worked closely with senior developers to understand project architecture and coding standards",
            "Built backend modules using CodeIgniter for client-based web applications",
        ],
    },
];

function EntryBadge({ badge }: { badge: JourneyBadge }) {
    if (badge.type === "current") {
        return (
            <span className={`${styles.metaBadge} ${styles.metaBadgeCurrent}`}>
                {badge.label}
            </span>
        );
    }

    return (
        <span className={`${styles.metaBadge} ${styles.metaBadgeAchievement}`}>
            <Award size={12} aria-hidden />
            {badge.label}
        </span>
    );
}

function JourneyCard({ entry }: { entry: JourneyEntry }) {
    const dateClass = entry.isCurrent
        ? `${styles.dateBadge} ${styles.dateBadgeActive}`
        : styles.dateBadge;

    return (
        <article className={styles.card}>
            <div className={styles.cardMeta}>
                <span className={dateClass}>{entry.dateRange}</span>
                {entry.badges?.map((badge) => (
                    <EntryBadge key={badge.label} badge={badge} />
                ))}
            </div>
            <h3 className={styles.cardTitle}>{entry.title}</h3>
            <p className={styles.cardCompany}>{entry.company}</p>
            <ul className={styles.highlightList} role="list">
                {entry.highlights.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    );
}

export function CareerJourney() {
    return (
        <section className={styles.journey} aria-labelledby="career-journey-heading">
            <Container className={styles.inner}>
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} xl={8}>
                        <header className={styles.header}>
                            <Badge items={["Career Journey"]} />
                            <h2 id="career-journey-heading" className={styles.heading}>
                                A Decade of{" "}
                                <span className={styles.headingAccent}>Building & Leading</span>
                            </h2>
                        </header>
                    </Col>
                </Row>

                <div className={styles.timeline}>
                    <div className={styles.timelineLine} aria-hidden />
                    {journeyEntries.map((entry) => (
                        <div key={`${entry.company}-${entry.dateRange}`} className={styles.timelineItem}>
                            <div className={styles.timelineMarker} aria-hidden>
                                <Briefcase size={18} strokeWidth={1.75} />
                            </div>
                            <JourneyCard entry={entry} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
