import { Section } from "./Section";
import { motion } from "motion/react";
import { Bot, Network, LayoutDashboard, Workflow, PlugZap, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type S = { title: string; desc: string; Icon: LucideIcon; tint: string };
const services: S[] = [
  { title: "AI Automation Systems", desc: "Build intelligent business workflows using AI.", Icon: Bot, tint: "#06B6D4" },
  { title: "Multi-Agent Architecture", desc: "Design autonomous collaborative AI systems.", Icon: Network, tint: "#8B5CF6" },
  { title: "Custom SaaS Development", desc: "Build scalable platforms & dashboards.", Icon: LayoutDashboard, tint: "#3B82F6" },
  { title: "Enterprise Workflow Automation", desc: "Automate operations, approvals, support, CRM, and internal processes.", Icon: Workflow, tint: "#06B6D4" },
  { title: "AI API Integrations", desc: "Connect OpenAI, Claude, Gemini, LangChain, and custom models.", Icon: PlugZap, tint: "#8B5CF6" },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>What I <span className="text-gradient">build for teams</span></>}
      intro="Engagements span discovery, architecture, build, and ongoing optimization of AI systems."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.a
            href="#contact"
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group glass border-gradient relative block overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                 style={{ background: `radial-gradient(circle, ${s.tint}55, transparent 70%)` }} />
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl glass-strong"
                   style={{ boxShadow: `0 0 22px ${s.tint}55` }}>
                <s.Icon className="h-5 w-5" style={{ color: s.tint }} />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}