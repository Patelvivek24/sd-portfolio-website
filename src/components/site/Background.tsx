import { useEffect, useRef } from "react";

export function ParticlesBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.4,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(125,211,252,0.6)";
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.strokeStyle = `rgba(59,130,246,${0.18 * (1 - d / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-60"
      aria-hidden
    />
  );
}

export function AmbientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden>
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full orb"
           style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35), transparent 60%)" }} />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full orb"
           style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3), transparent 60%)", animationDelay: "-4s" }} />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full orb"
           style={{ background: "radial-gradient(circle, rgba(6,182,212,0.25), transparent 60%)", animationDelay: "-8s" }} />
    </div>
  );
}

export function GridOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-30 grid-bg grid-bg-fade opacity-50" aria-hidden />
  );
}