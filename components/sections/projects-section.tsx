"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds with product and engineering depth."
        description="A snapshot of projects where I focused on clean architecture, practical UI, and scalable implementation choices."
      />

      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div key={project.name} variants={itemVariants} whileHover={{ y: -6 }}>
            <Card className="h-full overflow-hidden">
              <div className="relative h-52 w-full overflow-hidden border-b border-border/70">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="mt-auto flex gap-2">
                <Button asChild className="rounded-full">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github />
                    Code
                  </a>
                </Button>
                {project.liveUrl ? (
                  <Button asChild variant="outline" className="rounded-full">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink />
                      Live Demo
                    </a>
                  </Button>
                ) : null}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
