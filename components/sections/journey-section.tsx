"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { education, experience, journeyPoints } from "@/data/portfolio";

export function JourneySection() {
  return (
    <AnimatedSection id="journey">
      <SectionHeading
        eyebrow="Experience & Journey"
        title="Always shipping, always leveling up."
        description="Hands-on product work backed by a depth-first approach to learning and system design."
      />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Experience + Education timeline */}
        <div className="relative rounded-3xl border border-border/70 bg-card/55 p-6 sm:p-8">
          <div className="space-y-5">
            {experience.map((item, index) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-border/60 bg-background/70 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="rounded-full border border-border/70 bg-background p-2 text-primary">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="font-display text-lg font-semibold">
                        {item.role}{" "}
                        <span className="text-primary">@ {item.org}</span>
                      </h3>
                      <span className="text-xs font-medium text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                    <ul className="mt-3 space-y-1.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="rounded-2xl border border-border/60 bg-background/70 p-5"
            >
              <div className="flex items-start gap-3">
                <span className="rounded-full border border-border/70 bg-background p-2 text-primary">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
                    <span className="text-xs font-medium text-muted-foreground">
                      {education.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{education.org}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Currently exploring */}
        <div className="rounded-3xl border border-border/70 bg-card/55 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Currently exploring
          </div>
          <div className="mt-5 flex flex-col gap-3">
            {journeyPoints.map((item, index) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="rounded-xl border border-border/60 bg-background/70 px-4 py-3 text-sm font-medium"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
