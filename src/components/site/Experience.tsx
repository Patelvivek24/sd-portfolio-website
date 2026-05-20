import { Section } from "./Section";
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const companies = [
  { name: "Neophoenix.ai", role: "Head of Engineering", years: "Present" },
  { name: "Inventam Tech Solution", role: "Technical Lead", years: "2y" },
  { name: "Technobliss", role: "Full-Stack Developer", years: "2y" },
  { name: "Crest Infosystems", role: "Software Engineer", years: "1y" },
];

export function CompanyStrip() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trusted experience across
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((c) => (
            <div key={c.name} className="glass group relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-[var(--accent-cyan)]">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                   style={{ background: "var(--gradient-glow)" }} />
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg glass-strong">
                  <Briefcase className="h-4 w-4 text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.role} · {c.years}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const timeline = [
  {
    role: "Head of Engineering",
    company: "Neophoenix.ai",
    points: ["AI system architecture", "Engineering leadership", "Automation infrastructure"],
  },
  {
    role: "Technical Lead",
    company: "Inventam",
    points: ["Multi-agent systems", "LangChain integrations", "AI workflows"],
  },
  {
    role: "Full-Stack Developer",
    company: "Technobliss",
    points: ["Backend systems", "API engineering", "Scalable web applications"],
  },
];

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A track record of <span className="text-gradient">shipping intelligent systems</span></>}
      intro="From hands-on engineering to leading teams that build AI-first products end to end."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px md:left-1/2 md:block"
             style={{ background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.6), rgba(139,92,246,0.6), transparent)" }} />
        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className={`hidden md:block ${i % 2 === 0 ? "text-right" : ""}`} />
              <div className="relative">
                <span className="absolute -left-1 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block"
                      style={{ background: "var(--gradient-primary)", boxShadow: "0 0 16px rgba(59,130,246,0.8)" }} />
                <div className="glass border-gradient rounded-2xl p-6 transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="font-display text-lg font-semibold">{t.role}</div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-cyan)]">{t.company}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[var(--accent-cyan)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}