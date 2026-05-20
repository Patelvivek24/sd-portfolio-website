const stack = [
  "OpenAI", "LangChain", "n8n", "React", "Next.js",
  "Laravel", "Node.js", "PostgreSQL", "Docker", "AWS",
  "TypeScript", "Tailwind", "Redis", "Supabase", "Cloudflare",
];

export function TechMarquee() {
  const items = [...stack, ...stack];
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
            Tech stack
          </div>
        </div>
      </div>
      <div className="marquee-pause relative">
        <div className="marquee gap-6 px-6">
          {items.map((t, i) => (
            <div key={i}
                 className="glass shrink-0 rounded-2xl border px-6 py-4 transition-all hover:-translate-y-1 hover:border-[var(--accent-cyan)]"
                 style={{ borderColor: "var(--glass-border)" }}>
              <span className="font-display text-lg font-semibold text-gradient-soft transition-colors group-hover:text-foreground">
                {t}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24"
             style={{ background: "linear-gradient(90deg, var(--bg-deep), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24"
             style={{ background: "linear-gradient(270deg, var(--bg-deep), transparent)" }} />
      </div>
    </section>
  );
}