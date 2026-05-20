import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id, eyebrow, title, intro, children, className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          {eyebrow && (
            <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
              {eyebrow}
            </div>
          )}
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{intro}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}