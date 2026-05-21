import { Badge } from "@/components/Badge";
import { Brain, Layers, Target, Users } from "lucide-react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./profile.module.scss";

const featureCards = [
  {
    icon: Target,
    title: "AI Automation Strategy",
    description:
      "Designing intelligent automation systems that streamline operations, reduce manual effort, and improve business efficiency through scalable AI-driven workflows.",
  },
  {
    icon: Layers,
    title: "LLM & Multi-Agent Systems",
    description:
      "Building LangChain-powered applications, AI agents, and orchestration pipelines that integrate reasoning, automation, and enterprise workflows.",
  },
  {
    icon: Users,
    title: "Engineering Leadership",
    description:
      "Leading cross-functional engineering teams across full-stack development, automation architecture, Agile delivery, and production deployment.",
  },
  {
    icon: Brain,
    title: "Workflow Optimization",
    description:
      "Transforming unstable business processes into reliable automation pipelines using n8n, APIs, cloud infrastructure, and intelligent integrations.",
  },
] as const;

export function ExecutiveProfile() {
  return (
    <section
      className={styles.profile}
      aria-labelledby="executive-profile-heading"
    >
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
                  Head of Engineering · Neophoenix.ai
                </h3>
                <p className={styles.paragraph}>
                  As <strong>Head of Engineering</strong> of{" "}
                  <a
                    className={styles.link}
                    href="https://neophoenix.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Neophoenix.ai
                  </a>
                  , I lead the development of AI-powered automation systems that
                  replace repetitive operations with scalable, intelligent
                  workflows. My focus is building production-ready AI
                  infrastructure that delivers measurable operational efficiency
                  and long-term business value.
                </p>
                <p className={styles.paragraph}>
                  I specialize in{" "}
                  <strong>
                    LLM integrations, LangChain architectures, multi-agent
                    systems,{" "}
                  </strong>
                  and <strong>workflow automation, </strong>helping
                  organizations eliminate manual bottlenecks and transform
                  unstable processes into reliable automation pipelines.
                </p>
                <p className={styles.paragraph}>
                  From SaaS and fintech to CRM, customer support, and enterprise
                  operations, every solution is designed around one principle:{" "}
                  <em className={styles.emphasis}>
                    <strong>
                      automate everything that shouldn’t require creativity.
                    </strong>
                  </em>
                </p>
              </article>
            </Col>

            <Col md={6}>
              <article className={styles.column}>
                <h3 className={styles.roleTitle}>
                  <span className={styles.roleLine} aria-hidden />
                  Project Manager & Technical Lead · Inventam Tech Solution
                </h3>
                <p className={styles.paragraph}>
                  With over <strong>7+ years</strong> of{" "}
                  <strong>engineering experience</strong>, I’ve led
                  cross-functional teams delivering scalable software platforms,
                  AI automation systems, and cloud-ready enterprise
                  applications.
                </p>
                <p className={styles.paragraph}>
                  At{" "}
                  <a
                    className={styles.link}
                    href="https://inventam.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inventam Tech Solution{" "}
                  </a>
                  I oversee end-to-end project execution - translating business
                  requirements into structured technical workflows, sprint
                  plans, and production-grade systems. My role spans{" "}
                  <strong>
                    Technical Leadership, Automation Architecture, Client
                    Coordination,
                  </strong>{" "}
                  and <strong>Delivery Management.</strong>
                </p>
                <p className={styles.paragraph}>
                  I’ve built advanced n8n automations, AI workflow orchestration
                  systems, custom API integrations, and multi-agent solutions
                  that reduced manual operational effort by 60–80% while
                  improving scalability and reliability.
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
