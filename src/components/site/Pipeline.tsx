import { Section } from "./Section";
import { motion } from "motion/react";
import { Brain, Database, MessageSquare, Mail, FileSearch, Webhook } from "lucide-react";

type Node = { id: string; x: number; y: number; label: string; Icon: typeof Brain; tint: string };

const nodes: Node[] = [
  { id: "trigger", x: 60,  y: 80,  label: "Trigger",   Icon: Webhook,       tint: "#06B6D4" },
  { id: "rag",     x: 280, y: 40,  label: "RAG Lookup", Icon: FileSearch,   tint: "#3B82F6" },
  { id: "llm",     x: 520, y: 100, label: "LLM Agent",  Icon: Brain,        tint: "#8B5CF6" },
  { id: "db",      x: 280, y: 220, label: "Database",   Icon: Database,     tint: "#3B82F6" },
  { id: "notify",  x: 60,  y: 280, label: "Slack",      Icon: MessageSquare,tint: "#06B6D4" },
  { id: "email",   x: 520, y: 280, label: "Email Out",  Icon: Mail,         tint: "#8B5CF6" },
];

const edges: [string, string][] = [
  ["trigger", "rag"],
  ["rag", "llm"],
  ["llm", "db"],
  ["db", "notify"],
  ["llm", "email"],
  ["trigger", "db"],
];

function nodeById(id: string) { return nodes.find((n) => n.id === id)!; }

export function Pipeline() {
  return (
    <Section
      id="pipeline"
      eyebrow="AI Pipeline Engineering"
      title={<>Orchestrated <span className="text-gradient">multi-agent workflows</span></>}
      intro="A glimpse at how triggers, LLM agents, retrieval, and downstream systems wire together into one intelligent pipeline."
    >
      <div className="grid items-stretch gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Workflow canvas */}
        <div className="glass border-gradient relative overflow-hidden rounded-3xl p-4">
          <div className="flex items-center justify-between px-2 py-2 text-xs font-mono">
            <span className="text-muted-foreground">workflow/agent-orchestrator.json</span>
            <span className="inline-flex items-center gap-2 text-[var(--accent-cyan)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)] pulse-glow" />
              running
            </span>
          </div>
          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <svg viewBox="0 0 600 360" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="wf" x1="0" x2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              {edges.map(([a, b], i) => {
                const A = nodeById(a), B = nodeById(b);
                const ax = A.x + 70, ay = A.y + 26, bx = B.x + 10, by = B.y + 26;
                const cx = (ax + bx) / 2;
                const d = `M ${ax} ${ay} C ${cx} ${ay}, ${cx} ${by}, ${bx} ${by}`;
                return <path key={i} d={d} stroke="url(#wf)" strokeWidth="1.5" fill="none" className="data-flow" style={{ animationDelay: `${i * 0.2}s` }} />;
              })}
            </svg>
            {nodes.map((n) => (
              <div
                key={n.id}
                className="absolute"
                style={{ left: n.x, top: n.y }}
              >
                <div className="glass-strong flex w-[140px] items-center gap-2 rounded-xl border border-white/10 px-3 py-2"
                     style={{ boxShadow: `0 0 22px ${n.tint}55` }}>
                  <div className="grid h-7 w-7 place-items-center rounded-md" style={{ background: `${n.tint}22` }}>
                    <n.Icon className="h-4 w-4" style={{ color: n.tint }} />
                  </div>
                  <div className="text-xs font-medium">{n.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal log */}
        <div className="glass border-gradient relative flex flex-col rounded-3xl p-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-2 font-mono text-[11px] uppercase text-muted-foreground">~/agent.log</span>
          </div>
          <div className="mt-4 flex-1 space-y-1 font-mono text-[12px] leading-relaxed">
            {[
              ["text-[var(--accent-cyan)]", "[09:42:11] trigger.webhook → payload received"],
              ["text-muted-foreground",     "[09:42:11] rag.search('docs/policy') → 4 chunks"],
              ["text-muted-foreground",     "[09:42:12] llm.invoke(model=gpt-4o-mini)"],
              ["text-[var(--accent-blue)]", "[09:42:12] tool.crm.lookup({id:8821}) ✓"],
              ["text-[var(--accent-violet)]","[09:42:13] agent.decision → notify_owner=true"],
              ["text-muted-foreground",     "[09:42:13] db.upsert(events) ✓"],
              ["text-[var(--accent-cyan)]", "[09:42:13] slack.post(#ops) ✓"],
              ["text-[var(--accent-blue)]", "[09:42:13] email.send(client) ✓"],
              ["text-green-400",            "✓ pipeline complete · 1.41s"],
            ].map(([c, t], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.07 }}
                className={c as string}
              >
                {t as string}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}