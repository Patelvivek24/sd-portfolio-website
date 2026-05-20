import { Section } from "./Section";
import { Calendar, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's <span className="text-gradient">automate something</span></>}
      intro="Book a consultation or send a project brief — I'll respond within 24 hours."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Left channels */}
        <div className="space-y-4">
          {[
            { Icon: Calendar, label: "Book a 30-min call", value: "calendly.com/aiarchitect", tint: "#06B6D4" },
            { Icon: Linkedin, label: "Connect on LinkedIn", value: "/in/aiarchitect", tint: "#3B82F6" },
            { Icon: Mail,     label: "Email", value: "hello@aiarchitect.dev", tint: "#8B5CF6" },
            { Icon: MessageCircle, label: "WhatsApp", value: "+00 000 000 000", tint: "#06B6D4" },
          ].map((c) => (
            <a key={c.label} href="#"
               className="glass border-gradient group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-xl glass-strong"
                   style={{ boxShadow: `0 0 22px ${c.tint}55` }}>
                <c.Icon className="h-5 w-5" style={{ color: c.tint }} />
              </div>
              <div>
                <div className="font-display text-sm font-semibold">{c.label}</div>
                <div className="font-mono text-xs text-muted-foreground">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              toast.success("Message sent — I'll be in touch soon.");
              (e.target as HTMLFormElement).reset();
            }, 900);
          }}
          className="glass border-gradient relative overflow-hidden rounded-3xl p-6 md:p-8"
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl opacity-50"
               style={{ background: "var(--gradient-glow)" }} />
          <div className="relative grid gap-4 md:grid-cols-2">
            <Field name="name" label="Name" placeholder="Ada Lovelace" />
            <Field name="email" label="Email" placeholder="ada@company.com" type="email" />
            <Field name="company" label="Company" placeholder="Acme Inc." className="md:col-span-2" />
            <div className="md:col-span-2">
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Project Brief
              </label>
              <textarea
                required
                rows={5}
                placeholder="What would you like to automate?"
                className="mt-2 w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-[var(--accent-cyan)] focus:bg-white/[0.06] focus:shadow-[0_0_24px_rgba(6,182,212,0.25)]"
                style={{ borderColor: "var(--glass-border)" }}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={sending}
            className="relative mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send Brief"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  name, label, placeholder, type = "text", className = "",
}: { name: string; label: string; placeholder: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-[var(--accent-cyan)] focus:bg-white/[0.06] focus:shadow-[0_0_24px_rgba(6,182,212,0.25)]"
        style={{ borderColor: "var(--glass-border)" }}
      />
    </div>
  );
}