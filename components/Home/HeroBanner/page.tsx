import { Badge, BadgeTrendingUpIcon } from "@/components/Badge";
import { Button } from "@/components/Button";
import { StatCounter } from "@/components/StatCounter";
import { ExternalLink } from "lucide-react";
import styles from "./hero.module.scss";

const stats = [
  { value: "10+", label: "Years Building" },
  { value: "4+", label: "AI Ventures" },
  { value: "3+", label: "Cloud Partners" },
  { value: "∞", label: "Teams Led" },
] as const;

export function HeroBanner() {
  return (
    <main className={styles.hero}>
      {/* <div className={styles.gridBg} aria-hidden /> */}

      <div className={styles.inner}>
        <Badge
          icon={<BadgeTrendingUpIcon />}
          items={["CEO", "AI Product Strategist", "Tech Founder"]}
        />

        <h1 className={styles.title}>
          <span className={styles.titleFirst}>Shailee</span>{" "}
          <span className={styles.titleLast}>Desai</span>
        </h1>

        <p className={styles.subtitle}>
          CEO · Neophoenix.ai
          <span className={styles.subtitleSlash}>/</span>
          CTO &amp; Co-founder · Inventam
          <span className={styles.subtitleSlash}>/</span>
          AI Product Architect
        </p>

        <p className={styles.description}>
          Driving AI strategy and execution at{" "}
          <a
            className={styles.link}
            href="https://neophoenix.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neophoenix.ai
          </a>
          . Building revenue-producing AI systems — RAG pipelines, GenAI
          products, and intelligent enterprise solutions — with{" "}
          <a
            className={styles.link}
            href="https://inventam.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inventam Tech Solution
          </a>
          .
        </p>

        <div className={styles.ctas}>
          <Button
            href="https://neophoenix.ai"
            target="_blank"
            rel="noopener noreferrer"
            icon={<ExternalLink size={18} aria-hidden />}
          >
            View Ventures
          </Button>
          <Button variant="secondary" href="#contact">
            Get in Touch
          </Button>
        </div>

        <ul className={styles.stats} role="list">
          {stats.map((item, index) => (
            <li key={item.label} className={styles.statCard}>
              <StatCounter value={item.value} delay={index * 120} />
              <span className={styles.statLabel}>{item.label}</span>
            </li>
          ))}
        </ul>

        <div id="contact" className={styles.contactAnchor} tabIndex={-1} />
      </div>
    </main>
  );
}
