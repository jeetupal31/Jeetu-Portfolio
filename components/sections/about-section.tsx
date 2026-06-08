"use client";

import { BrainCircuit, Layers, MonitorSmartphone, ServerCog } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

const focusAreas = [
  {
    title: "Problem Solving",
    description: "Strong focus on DSA patterns and interview-level problem solving.",
    icon: BrainCircuit,
  },
  {
    title: "System Design",
    description: "Learning scalable architecture tradeoffs and resilient service design.",
    icon: Layers,
  },
  {
    title: "Backend Engineering",
    description: "Building reliable APIs, data flows, and event-driven services.",
    icon: ServerCog,
  },
  {
    title: "Frontend Craft",
    description: "Delivering clean, accessible interfaces with premium interactions.",
    icon: MonitorSmartphone,
  },
];

export function AboutSection() {
  return (
    <AnimatedSection id="about">
      <SectionHeading
        eyebrow="About Me"
        title="I build real-time systems that hold up in production."
        description="Full Stack Developer specializing in low-latency, real-time web applications — and currently shipping features as a Full Stack Intern at Otulia."
      />

      <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
        <article className="glass-panel rounded-3xl p-7 sm:p-8">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            My core strength sits at the intersection of backend depth and frontend
            clarity: I design WebSocket and Redis pub/sub pipelines, build secure REST
            APIs with JWT and role-based access, and ship to AWS with Docker and CI/CD.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;ve shipped a real-time crypto trading platform, a collaborative
            whiteboard, and a visual AI workflow engine — and I keep sharpening DSA,
            system design, and real-world architecture along the way.
          </p>
        </article>

        <div className="grid gap-4">
          {focusAreas.map((area) => (
            <article key={area.title} className="glass-panel rounded-2xl p-5">
              <area.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
