import { Section } from "./Section";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Re-architected our ops stack with a fleet of AI agents. We retired 60% of manual triage in a single quarter.",
    name: "Priya R.", role: "COO, SaaS Platform",
  },
  {
    quote:
      "Brought engineering rigor to AI experiments — turned prototypes into reliable production pipelines.",
    name: "Daniel M.", role: "CTO, Enterprise Automation",
  },
  {
    quote:
      "Best technical leader I've worked with. Multi-agent workflows shipped, monitored, and actually maintainable.",
    name: "Hannah K.", role: "VP Product, AI Startup",
  },
];

export function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title={<>Trusted by <span className="text-gradient">operators and engineers</span></>}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass border-gradient relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1"
          >
            <Quote className="h-6 w-6 text-[var(--accent-cyan)]" />
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full glass-strong font-display text-sm">
                {t.name.split(" ").map((w) => w[0]).join("")}
              </span>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}