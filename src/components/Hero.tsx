"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Twitter,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  ExternalLink,
} from "lucide-react";
import { RotatingRole } from "@/components/RotatingRole";
import { RESUME_DOWNLOAD_PROPS } from "@/lib/resume";
import { FOUNDER_LINKS, founderLinkProps } from "@/lib/founder-links";

const Scene3D = dynamic(() => import("@/components/Scene3D").then((m) => m.Scene3D), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-mono">
      loading 3D…
    </div>
  ),
});

const socials = [
  { href: "https://x.com/SummiyaAshraf", Icon: Twitter, label: "X" },
  { href: "https://github.com/Summiyaashraf", Icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/summiya-ashraf-8249792ba/", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/profile.php?id=61553694430220", Icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/summiya7127/", Icon: Instagram, label: "Instagram" },
  { href: "mailto:summiyaashraf689@gmail.com", Icon: Mail, label: "Email" },
];

const ticker = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "FastAPI",
  "Docker",
  "REST APIs",
  "Figma",
  "Claude Code",
  "Spec-Kit Plus",
  "Gemini Pro",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ambient glow waves */}
      <div className="wave wave-1 z-0" aria-hidden="true" />
      <div className="wave wave-2 z-0" aria-hidden="true" />

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-20 py-16 md:py-24">
        {/* Left Content */}
        <motion.div className="space-y-6 max-w-xl z-10">
          <motion.div {...fadeUp(0.05)} className="flex flex-wrap items-center gap-3">
            <span className="status-pill">
              <span className="accent-dot" />
              Available for opportunities
            </span>
            <span className="hidden sm:inline-flex font-mono text-xs text-muted-foreground">
              /summiya-ashraf
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="text-5xl md:text-6xl font-extrabold leading-[1.05]"
          >
            Hello, I&apos;m{" "}
            <span className="kinetic-text">Summiya Ashraf</span>
          </motion.h1>

          {/* Founder badges — flagship startup links */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-wrap items-center gap-3"
          >
            {FOUNDER_LINKS.map((link, i) => (
              <a
                key={link.id}
                {...founderLinkProps(link)}
                title={`${link.name} — ${link.tagline}`}
                className={`founder-pill group ${
                  i % 2 === 1 ? "founder-pill-cyan" : ""
                }`}
              >
                <span aria-hidden="true" className="text-base leading-none">
                  {link.emoji}
                </span>
                <span className="whitespace-nowrap">
                  <span className="text-muted-foreground font-medium">
                    {link.role} @
                  </span>{" "}
                  <span className="kinetic-text">{link.domain}</span>
                </span>
                <ExternalLink
                  className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-[#c7d2fe]"
                  aria-hidden="true"
                />
              </a>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp(0.25)}
            className="flex items-center gap-3 text-lg md:text-xl font-medium text-foreground/90"
          >
            <span className="text-muted-foreground">I&apos;m a</span>
            <RotatingRole />
          </motion.div>

          <motion.p
            {...fadeUp(0.35)}
            className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl"
          >
            Building full-stack web applications with{" "}
            <strong className="text-foreground">Next.js</strong>,{" "}
            <strong className="text-foreground">TypeScript</strong>,{" "}
            <strong className="text-foreground">Tailwind CSS</strong>, and{" "}
            <strong className="text-foreground">ShadCN UI</strong> — designing with{" "}
            <strong className="text-foreground">Figma</strong> &{" "}
            <strong className="text-foreground">Canva</strong>, and building{" "}
            <strong className="text-foreground">AI agents</strong> for smarter applications.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-medium shadow-lg shadow-[#7c3aed]/30 hover:shadow-[#7c3aed]/50 hover:brightness-110 transition-all"
            >
              Let&apos;s Talk
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-white/15 text-foreground font-medium hover:border-[#60a5fa] hover:bg-white/5 transition-all"
            >
              View Projects
            </a>
            <a
              {...RESUME_DOWNLOAD_PROPS}
              className="inline-flex items-center gap-1 font-mono text-sm text-[#93c5fd] hover:text-[#a78bfa] active:scale-[0.98] transition-all"
            >
              <span className="text-muted-foreground">~$</span> download_resume
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.55)} className="flex items-center gap-3 pt-2">
            <span className="font-mono text-xs text-muted-foreground">{"// find me:"}</span>
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.02] text-muted-foreground hover:text-[#a78bfa] hover:border-[#7c3aed]/60 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Terminal framed 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative w-full max-w-lg z-10"
        >
          <div className="absolute inset-6 rounded-full bg-[#7c3aed]/20 blur-3xl animate-float" />

          <div className="holo-frame hairline relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-2xl">
            {/* Terminal title bar */}
            <div className="relative z-10 flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02] backdrop-blur-2xl">
              <div className="terminal-dots flex gap-1.5">
                <span className="bg-[#ff5f57]" />
                <span className="bg-[#febc2e]" />
                <span className="bg-emerald-400" />
              </div>
              <span className="font-mono text-[0.7rem] text-muted-foreground">
                summiya@portfolio: ~
              </span>
              <span className="font-mono text-[0.65rem] text-[#93c5fd]">v3.0</span>
            </div>

            {/* 3D scene */}
            <div className="absolute inset-0 top-[37px]">
              <Scene3D />
            </div>

            {/* Boot log overlay */}
            <div className="absolute inset-x-0 bottom-0 z-10 px-4 py-3 bg-gradient-to-t from-[#07080c]/90 to-transparent font-mono text-[0.7rem] leading-relaxed">
              <p className="text-muted-foreground">
                &gt; initializing systems <span className="text-emerald-300">ok</span>
              </p>
              <p className="text-muted-foreground">
                &gt; loading summiya.ashraf v3.0 ...
              </p>
              <p className="text-[#a78bfa]">
                agents_online: <span className="text-emerald-300">true</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech ticker */}
      <div className="relative z-10 border-t border-white/[0.06] py-4 marquee">
        <div className="marquee-track items-center gap-8 font-mono text-xs text-muted-foreground">
          {[...ticker, ...ticker].map((tech, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              {tech}
              <span className="text-[#7c3aed]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}