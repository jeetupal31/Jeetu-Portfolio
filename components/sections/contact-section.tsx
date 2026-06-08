"use client";

import { FileText, Github, Layers3, Linkedin, Mail, Phone, Trophy, Twitter } from "lucide-react";
import { contactEmail, contactPhone, resumeUrl, socialLinks } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
  leetcode: Trophy,
  peerlist: Layers3,
};

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="pb-10">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something meaningful together."
        description="I am always open to discussing full-time roles, internships, collaborations, and product ideas that solve real problems."
        align="center"
      />

      <div className="glass-panel mx-auto max-w-4xl rounded-3xl p-6 text-center sm:p-8">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          If you&apos;re looking for a developer who blends problem-solving depth with
          clean product execution, let&apos;s connect.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-7">
            <a href={`mailto:${contactEmail}`}>
              <Mail />
              {contactEmail}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7">
            <a href={`tel:+91${contactPhone}`}>
              <Phone />
              {contactPhone}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7">
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              <FileText />
              Resume
            </a>
          </Button>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {socialLinks.map((social) => {
            const Icon = socialIconMap[social.key];
            return (
              <Button
                key={social.href}
                asChild
                variant="outline"
                className="h-auto rounded-xl py-3 text-sm"
              >
                <a href={social.href} target="_blank" rel="noreferrer">
                  <Icon />
                  {social.name}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
