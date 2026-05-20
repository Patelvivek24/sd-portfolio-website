import { Sparkles, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t pt-12 pb-10" style={{ borderColor: "var(--glass-border)" }}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px"
           style={{ background: "var(--gradient-primary)", opacity: 0.6 }} />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-gradient-soft">aiarchitect</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Designing AI-first automation systems for ambitious teams. Built with engineering rigor,
            shipped to production, monitored at scale.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm">
            {["About","Skills","Pipeline","Experience","Services","Contact"].map((l) => (
              <li key={l}><a className="text-foreground/80 hover:text-foreground" href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Connect</div>
          <div className="mt-4 flex gap-3">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="glass grid h-10 w-10 place-items-center rounded-xl transition-all hover:-translate-y-1 hover:border-[var(--accent-cyan)]">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} aiarchitect — Engineering intelligent systems.
      </div>
    </footer>
  );
}