"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, resumeUrl } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 14);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Lock document scroll while the mobile drawer is open.
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-8">
      <motion.nav
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all sm:px-6",
          scrolled
            ? "glass-panel border-white/45 shadow-[0_16px_38px_-24px_rgba(15,23,42,0.65)] dark:border-white/10"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="#home" className="font-display text-lg font-semibold tracking-tight">
          JP
          <span className="ml-1 text-sm text-muted-foreground">Portfolio</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild className="h-9 rounded-full px-4">
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-full md:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24 }}
            className="mx-auto mt-3 w-full max-w-6xl rounded-2xl border border-white/35 bg-background/95 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
