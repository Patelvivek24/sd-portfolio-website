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
        dateRange: "Jan 2024 – Present",
        title: "Chief Executive Officer",
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
        dateRange: "Jan 2019 – Present",
        title: "CTO & Co-Founder",
        company: "Inventam Tech Solution",
        isCurrent: true,
        badges: [{ type: "current", label: "Current" }],
        highlights: [
            "Leading engineering teams to deliver scalable digital outcomes across 7+ years.",
            "Established cloud partnerships with AWS, Docker, and Vercel for enterprise infrastructure.",
            "Architecting multi-tenant SaaS platforms and DevOps pipelines at production scale.",
        ],
    },
    {
        dateRange: "Jun 2018 – Jan 2019",
        title: "Senior Consultant",
        company: "Narola Infotech",
        highlights: [
            "Developed innovative solutions for complex client business problems.",
            "Provided strategic technology consulting across web and mobile domains.",
        ],
    },
    {
        dateRange: "Dec 2015 – May 2018",
        title: "Sr. Software Engineer",
        company: "IT Codes",
        badges: [{ type: "achievement", label: "Constant Learner 2017" }],
        highlights: [
            "Scaled from Software Engineer to Senior role through rapid technical growth.",
            'Awarded "Constant Learner 2017" in recognition of outstanding professional development.',
            "Delivered full-stack solutions across enterprise client projects.",
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
