"use client";

import { Toaster } from "@/components/ui/sonner";
import { AmbientOrbs, GridOverlay, ParticlesBackground } from "@/components/site/Background";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { CompanyStrip, ExperienceTimeline } from "@/components/site/Experience";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Pipeline } from "@/components/site/Pipeline";
import { Metrics } from "@/components/site/Metrics";
import { Services } from "@/components/site/Services";
import { TechMarquee } from "@/components/site/Marquee";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridOverlay />
      <AmbientOrbs />
      <ParticlesBackground />
      <Nav />
      <main>
        <Hero />
        <CompanyStrip />
        <About />
        <Skills />
        <Pipeline />
        <ExperienceTimeline />
        <Metrics />
        <Services />
        <TechMarquee />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
