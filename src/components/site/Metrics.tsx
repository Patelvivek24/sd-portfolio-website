import { Section } from "./Section";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { v: 80, suffix: "%", l: "Reduction in Manual Operations" },
  { v: 20, suffix: "+", l: "Automation Workflows Deployed" },
  { v: 10, suffix: "+", l: "Enterprise Systems Built" },
  { v: 5,  suffix: "+", l: "Years Engineering Experience" },
  { v: 12, suffix: "+", l: "Industries Served" },
  { v: 100, suffix: "%", l: "Full-Stack + AI Focus" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, to, mv]);
  return (
    <span className="font-display text-4xl font-bold text-gradient md:text-5xl">
      <motion.span ref={ref}>{rounded}</motion.span>{suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <Section
      eyebrow="Impact"
      title={<>Measurable <span className="text-gradient">outcomes</span></>}
      intro="Numbers from systems shipped across startups, agencies, and enterprise teams."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass border-gradient relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-40 pulse-glow"
                 style={{ background: "var(--gradient-glow)" }} />
            <Counter to={s.v} suffix={s.suffix} />
            <div className="mt-3 text-sm text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}