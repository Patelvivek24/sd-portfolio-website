import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 ${scrolled ? "glass-strong rounded-2xl border" : ""}`}
           style={scrolled ? { borderColor: "var(--glass-border)" } : undefined}>
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
            <Sparkles className="h-4 w-4 text-white" />
            <span className="absolute inset-0 rounded-lg blur-md opacity-60" style={{ background: "var(--gradient-primary)" }} />
          </span>
          <span className="text-gradient-soft">aiarchitect</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
               className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact"
           className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
           style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
          Book Call
        </a>
      </div>
    </header>
  );
}