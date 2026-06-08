"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Github,
  Layers3,
  Linkedin,
  Sparkles,
  Trophy,
  Twitter,
} from "lucide-react";
import { resumeUrl, socialLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
  leetcode: Trophy,
  peerlist: Layers3,
};

export function HeroSection() {
  return (
    <section id="home" className="relative scroll-mt-24 pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-45" />
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Open to impactful opportunities
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.1 }}
              className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Jeetu Pal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.2 }}
              className="font-display text-2xl font-semibold text-primary sm:text-3xl"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.28 }}
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Building production-grade, real-time web applications. Open to Full
              Stack, Backend, and SDE roles.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full px-7">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href={resumeUrl} target="_blank" rel="noreferrer" download>
                <Download className="mr-1" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full px-7">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="flex flex-wrap items-center gap-2"
          >
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.key];
              return (
                <Button
                  key={social.href}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full border border-transparent hover:border-border"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                </Button>
              );
            })}
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, delay: 0.45 }}
          className="glass-panel rounded-3xl p-6 shadow-[0_26px_55px_-32px_rgba(37,99,235,0.6)] sm:p-8"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <BriefcaseBusiness className="h-3.5 w-3.5 text-primary" />
            Professional Focus
          </div>
          <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">
            Scalable backend + clean frontend, built for real product growth.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            I care about architecture, developer experience, and interfaces that feel
            polished from the first interaction.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border/70 bg-background/60 p-3">
              <p className="font-display text-2xl font-semibold text-foreground">10+</p>
              <p className="text-xs text-muted-foreground">Production-focused builds</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/60 p-3">
              <p className="font-display text-2xl font-semibold text-foreground">24/7</p>
              <p className="text-xs text-muted-foreground">Learning mindset</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
