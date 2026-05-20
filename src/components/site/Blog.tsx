import { Section } from "./Section";
import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  { title: "Building Multi-Agent AI Systems", tag: "Architecture", time: "8 min" },
  { title: "n8n Automation at Scale", tag: "Automation", time: "6 min" },
  { title: "AI Workflow Architecture", tag: "Systems", time: "10 min" },
  { title: "LangChain Production Systems", tag: "Engineering", time: "7 min" },
  { title: "Enterprise AI Automation", tag: "Strategy", time: "9 min" },
];

const grads = [
  "linear-gradient(135deg,#3B82F6,#06B6D4)",
  "linear-gradient(135deg,#8B5CF6,#3B82F6)",
  "linear-gradient(135deg,#06B6D4,#8B5CF6)",
  "linear-gradient(135deg,#3B82F6,#8B5CF6)",
  "linear-gradient(135deg,#06B6D4,#3B82F6)",
];

export function Blog() {
  return (
    <Section
      eyebrow="Insights"
      title={<>Notes from the <span className="text-gradient">automation field</span></>}
      intro="Lessons learned shipping AI-first systems for real teams."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <motion.a
            href="#"
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group glass relative block overflow-hidden rounded-2xl transition-all hover:-translate-y-1"
          >
            <div className="relative h-40 overflow-hidden">
              <div className="absolute inset-0" style={{ background: grads[i % grads.length], opacity: 0.6 }} />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/80">{p.tag}</div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="flex items-start justify-between gap-3 font-display text-base font-semibold">
                {p.title}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </h3>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {p.time} read
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}