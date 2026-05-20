import { Section } from "./Section";
import { motion } from "motion/react";
import { Bot, Boxes, GitBranch, Network, Sparkles, Workflow, Server, Code2 } from "lucide-react";

const chips = [
  "AI Workflow Automation",
  "Multi-Agent Systems",
  "n8n Architecture",
  "LangChain",
  "LLM Applications",
  "Enterprise Automation",
  "Full-Stack Engineering",
];

const floatIcons = [
  { Icon: Bot, x: "-top-4 -left-4", color: "text-[var(--accent-cyan)]" },
  { Icon: Workflow, x: "-top-6 right-2", color: "text-[var(--accent-violet)]" },
  { Icon: Network, x: "bottom-6 -left-6", color: "text-[var(--accent-blue)]" },
  { Icon: GitBranch, x: "bottom-2 -right-4", color: "text-[var(--accent-cyan)]" },
  { Icon: Server, x: "top-1/2 -right-8", color: "text-[var(--accent-violet)]" },
  { Icon: Code2, x: "top-1/3 -left-8", color: "text-[var(--accent-blue)]" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineering <span className="text-gradient">Intelligent Automation Ecosystems</span></>}
    >
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
        {/* Portrait */}
        <div className="relative mx-auto h-[420px] w-full max-w-sm">
          {floatIcons.map(({ Icon, x, color }, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className={`absolute ${x} z-10`}
            >
              <div className="glass-strong grid h-10 w-10 place-items-center rounded-xl">
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
            </motion.div>
          ))}
          <div className="relative h-full w-full overflow-hidden rounded-3xl border-gradient glass-strong">
            <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative">
                <div className="absolute inset-0 -m-6 rounded-full blur-2xl"
                     style={{ background: "var(--gradient-primary)", opacity: 0.5 }} />
                <div className="relative grid h-44 w-44 place-items-center rounded-full glass-strong border-gradient">
                  <Sparkles className="h-12 w-12 text-[var(--accent-cyan)]" />
                </div>
                <div className="mt-6 text-center">
                  <div className="font-display text-lg font-semibold">AI Architect</div>
                  <div className="font-mono text-xs text-muted-foreground">automation.engineer</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 right-3 glass-strong flex items-center justify-between rounded-xl px-3 py-2 text-[11px] font-mono">
              <span className="text-muted-foreground">uptime</span>
              <span className="text-[var(--accent-cyan)]">99.98%</span>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="text-base text-muted-foreground md:text-lg">
            I specialize in building AI automation ecosystems that help businesses eliminate
            repetitive operations and scale intelligently.
          </p>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            With experience spanning full-stack development, engineering leadership, AI workflow
            orchestration, and enterprise automation, I design systems that connect APIs, LLMs,
            databases, SaaS platforms, and intelligent agents into unified automation pipelines.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-foreground transition-all hover:-translate-y-0.5 hover:text-[var(--accent-cyan)]"
              >
                <Boxes className="h-3 w-3 text-[var(--accent-cyan)]" />
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}