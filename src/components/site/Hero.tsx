import { motion } from "motion/react";
import { ArrowRight, Calendar, Activity, Cpu, Workflow, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 md:pt-44 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]" />
            </span>
            AI Automation Architect
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Building <span className="text-gradient">AI Automation Systems</span> That Replace Manual Work
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            I build AI-powered automation systems, intelligent workflows, and scalable full-stack
            applications using n8n, LangChain, LLM integrations, and multi-agent architectures that
            reduce operational effort and accelerate business growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact"
               className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
               style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              <Calendar className="h-4 w-4" />
              Book Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#pipeline"
               className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-[var(--accent-cyan)]">
              Explore My Work
            </a>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center">
            {[
              { v: "80%", l: "Manual work cut" },
              { v: "20+", l: "Workflows shipped" },
              { v: "5+ yrs", l: "Engineering" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-3">
                <div className="font-display text-xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: AI visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative"
        >
          <HeroOrchestration />
        </motion.div>
      </div>
    </section>
  );
}

function HeroOrchestration() {
  return (
    <div className="relative h-[520px] w-full">
      {/* Big glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-60"
           style={{ background: "var(--gradient-glow)" }} />

      {/* Connection SVG */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 520" fill="none">
        <defs>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        {[
          "M120 110 C 200 160, 250 220, 350 200",
          "M120 110 C 180 200, 220 320, 130 380",
          "M350 200 C 420 270, 380 340, 300 400",
          "M130 380 C 200 420, 250 420, 300 400",
          "M250 60  C 280 130, 320 170, 350 200",
        ].map((d, i) => (
          <path key={i} d={d} stroke="url(#line)" strokeWidth="1.5" className="data-flow" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </svg>

      {/* Floating nodes */}
      <FloatNode className="left-4 top-8" delay={0}>
        <Cpu className="h-4 w-4 text-[var(--accent-cyan)]" /> LLM Router
      </FloatNode>
      <FloatNode className="right-6 top-32" delay={0.4} variant="violet">
        <Workflow className="h-4 w-4 text-[var(--accent-violet)]" /> n8n Pipeline
      </FloatNode>
      <FloatNode className="left-2 bottom-40" delay={0.8}>
        <Activity className="h-4 w-4 text-[var(--accent-blue)]" /> Agent Mesh
      </FloatNode>
      <FloatNode className="right-4 bottom-8" delay={1.2} variant="cyan">
        <Zap className="h-4 w-4 text-[var(--accent-cyan)]" /> Auto-Trigger
      </FloatNode>

      {/* Center dashboard card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="glass-strong border-gradient relative overflow-hidden rounded-2xl p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono uppercase text-muted-foreground">orchestrator.live</span>
            <span className="inline-flex items-center gap-1 text-[var(--accent-cyan)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)] pulse-glow" />
              online
            </span>
          </div>
          <div className="mt-4 space-y-2 font-mono text-[11px] leading-relaxed">
            <Line c="text-[var(--accent-cyan)]">$ agent.invoke("summarize_lead")</Line>
            <Line c="text-muted-foreground">→ routing via LangChain…</Line>
            <Line c="text-muted-foreground">→ tool: crm.fetch ✓</Line>
            <Line c="text-muted-foreground">→ tool: openai.chat ✓</Line>
            <Line c="text-[var(--accent-blue)]">✓ pushed to n8n / 142ms</Line>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[42, 78, 61].map((v, i) => (
              <div key={i} className="rounded-md bg-white/5 p-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {["calls", "ops/s", "tokens"][i]}
                </div>
                <div className="font-display text-sm font-semibold text-foreground">{v}k</div>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full" style={{ width: `${v}%`, background: "var(--gradient-primary)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FloatNode({
  children, className = "", delay = 0, variant = "blue",
}: { children: React.ReactNode; className?: string; delay?: number; variant?: "blue" | "violet" | "cyan" }) {
  const ring =
    variant === "violet" ? "rgba(139,92,246,0.4)" :
    variant === "cyan" ? "rgba(6,182,212,0.4)" :
    "rgba(59,130,246,0.4)";
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute ${className}`}
    >
      <div className="glass-strong inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium"
           style={{ boxShadow: `0 0 24px ${ring}` }}>
        {children}
      </div>
    </motion.div>
  );
}

function Line({ children, c }: { children: React.ReactNode; c: string }) {
  return <div className={c}>{children}</div>;
}