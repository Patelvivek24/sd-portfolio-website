import type { Metadata, Viewport } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "AI Automation Architect — Intelligent Systems & Multi-Agent Workflows",
  description:
    "AI Automation Architect & Full-Stack Engineering Leader designing n8n, LangChain, and multi-agent systems that replace manual work and scale operations.",
  authors: [{ name: "Lovable" }],
  openGraph: {
    title: "AI Automation Architect — Intelligent Systems & Multi-Agent Workflows",
    description:
      "Premium AI automation, multi-agent architecture, and full-stack engineering for ambitious teams.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Architect — Intelligent Systems & Multi-Agent Workflows",
    description:
      "Premium AI automation, multi-agent architecture, and full-stack engineering for ambitious teams.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
