import { Section } from "./Section";
import { motion } from "motion/react";
import { Bot, Server, Layout, Cloud, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Cat = { title: string; Icon: LucideIcon; items: string[]; glow: string };

const cats: Cat[] = [
  { title: "AI & Automation", Icon: Bot, glow: "rgba(6,182,212,0.4)",
    items: ["n8n", "LangChain", "AI Agents", "Multi-Agent Systems", "OpenAI APIs", "LLM Integrations", "Workflow Automation", "RAG Systems", "Prompt Engineering"] },
  { title: "Backend Engineering", Icon: Server, glow: "rgba(59,130,246,0.4)",
    items: ["Node.js", "Laravel", "PHP", "REST APIs", "Authentication", "Database Design", "Webhooks", "Cloud Functions"] },
  { title: "Frontend", Icon: Layout, glow: "rgba(139,92,246,0.4)",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Dashboard UI", "Responsive Design"] },
  { title: "DevOps & Infrastructure", Icon: Cloud, glow: "rgba(6,182,212,0.4)",
    items: ["Docker", "VPS Deployment", "CI/CD", "Cloud Hosting", "Git", "Linux"] },
  { title: "Leadership", Icon: Users, glow: "rgba(139,92,246,0.4)",
    items: ["Agile/Scrum", "Team Leadership", "Sprint Planning", "Project Delivery", "Client Communication", "System Architecture"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title={<>A full-stack <span className="text-gradient">AI engineering toolkit</span></>}
      intro="Five disciplines, one outcome — intelligent systems that ship to production and scale with the business."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cats.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative"
          >
            <div className="glass border-gradient relative h-full overflow-hidden rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                   style={{ background: `radial-gradient(circle, ${c.glow}, transparent 70%)` }} />
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl glass-strong"
                     style={{ boxShadow: `0 0 20px ${c.glow}` }}>
                  <c.Icon className="h-5 w-5 text-foreground" />
                </div>
                <div className="font-display text-lg font-semibold">{c.title}</div>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.items.map((it) => (
                  <span key={it}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] font-mono text-muted-foreground transition-colors hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}