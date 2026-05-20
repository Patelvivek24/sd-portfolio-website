import { Badge } from "@/components/Badge";
import { Brain, Layers, Target, Users } from "lucide-react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./profile.module.scss";

const featureCards = [
    {
        icon: Target,
        title: "AI Product Strategy",
        description:
            "Translating complex AI capabilities into market-ready products that drive measurable revenue and enterprise adoption.",
    },
    {
        icon: Layers,
        title: "Revenue-Producing AI",
        description:
            "Architecting RAG pipelines, GenAI systems, and data governance platforms that deliver direct business value.",
    },
    {
        icon: Users,
        title: "Tech Leadership",
        description:
            "7+ years leading cross-functional engineering teams to deliver scalable, production-grade digital outcomes.",
    },
    {
        icon: Brain,
        title: "Lifelong Learner",
        description:
            "IIM Ahmedabad & IIT Roorkee executive alumnus. Continuously investing in technical and strategic leadership depth.",
    },
] as const;

export function ExecutiveProfile() {
    return (
        <section className={styles.profile} aria-labelledby="executive-profile-heading">
            <Container className={styles.inner}>
                <div>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={10} xl={8}>
                            <header className={styles.header}>
                                <Badge items={["Executive Profile"]} />
                                <h2 id="executive-profile-heading" className={styles.heading}>
                                    Building the Future of{" "}
                                    <span className={styles.headingAccent}>Enterprise AI</span>
                                </h2>
                            </header>
                        </Col>
                    </Row>

                    <Row className="g-4 g-lg-5">
                        <Col md={6}>
                            <article className={styles.column}>
                                <h3 className={styles.roleTitle}>
                                    <span className={styles.roleLine} aria-hidden />
                                    CEO · Neophoenix.ai
                                </h3>
                                <p className={styles.paragraph}>
                                    As <strong>Chief Executive Officer</strong> of{" "}
                                    <a
                                        className={styles.link}
                                        href="https://neophoenix.ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Neophoenix.ai
                                    </a>
                                    , I set AI product strategy and own end-to-end execution — from
                                    concept to revenue. My mandate is clear: build AI systems that work
                                    in production and generate measurable business outcomes.
                                </p>
                                <p className={styles.paragraph}>
                                    The Neophoenix portfolio centres on{" "}
                                    <strong>Retrieval-Augmented Generation (RAG)</strong>,{" "}
                                    <strong>Generative AI applications</strong>, and intelligent data
                                    governance — solving real enterprise pain points rather than
                                    chasing hype.
                                </p>
                                <p className={styles.paragraph}>
                                    I operate at the intersection of product vision, engineering
                                    rigour, and go-to-market execution. Every initiative is measured
                                    against one question:{" "}
                                    <em className={styles.emphasis}>
                                        <strong>does it produce revenue?</strong>
                                    </em>
                                </p>
                            </article>
                        </Col>

                        <Col md={6}>
                            <article className={styles.column}>
                                <h3 className={styles.roleTitle}>
                                    <span className={styles.roleLine} aria-hidden />
                                    CTO &amp; Co-founder · Inventam Tech Solution
                                </h3>
                                <p className={styles.paragraph}>
                                    Over <strong>7+ years</strong> at{" "}
                                    <a
                                        className={styles.link}
                                        href="https://inventam.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Inventam Tech Solution
                                    </a>
                                    , I built and scaled engineering teams that consistently deliver
                                    digital outcomes for enterprise clients. My role spans architecture
                                    decisions, team structure, and technical strategy.
                                </p>
                                <p className={styles.paragraph}>
                                    Through deep partnerships with <strong>AWS</strong>,{" "}
                                    <strong>Docker</strong>, and <strong>Vercel</strong>, the Inventam
                                    platform delivers cloud-native, DevOps-first infrastructure and
                                    scalable SaaS products at enterprise grade.
                                </p>
                                <p className={styles.paragraph}>
                                    My technical leadership philosophy: hire for ownership, build for
                                    scale, and ship for impact — with zero tolerance for solutions
                                    that cannot survive production load.
                                </p>
                            </article>
                        </Col>
                    </Row>
                </div>

                <Row as="ul" role="list" className={`${styles.cards} g-4`}>
                    {featureCards.map(({ icon: Icon, title, description }) => (
                        <Col as="li" key={title} xs={12} md={6} lg={3}>
                            <article className={styles.card}>
                                <span className={styles.cardIconWrap} aria-hidden>
                                    <Icon className={styles.cardIcon} size={20} aria-hidden />
                                </span>
                                <h4 className={styles.cardTitle}>{title}</h4>
                                <p className={styles.cardText}>{description}</p>
                            </article>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
