"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, MapPin, Focus, Briefcase, CheckCircle2, ExternalLink } from "lucide-react";

import { RESUME_DOWNLOAD_PROPS } from "@/lib/resume";
import { FOUNDER_LINKS, founderLinkProps } from "@/lib/founder-links";

const expertise = [
  {
    title: "Next.js Development",
    description: "Building fast, SEO-friendly, and scalable applications with Next.js and React.",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences with a focus on usability.",
  },
  {
    title: "Python Programming",
    description: "Writing clean, efficient, and functional Python scripts for various use-cases.",
  },
  {
    title: "AI Agent Development",
    description: "Building AI-powered assistants using OpenAI SDK for smarter web apps.",
  },
  {
    title: "Figma & Canva",
    description: "Designing creative visuals, posters, and clean layouts for web and print.",
  },
  {
    title: "ShadCN UI & Tailwind",
    description: "Using modern UI frameworks to build responsive, styled interfaces quickly.",
  },
];

const facts = [
  { Icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
  { Icon: Focus, label: "Focus", value: "Full Stack & AI" },
  { Icon: Briefcase, label: "Experience", value: "Since Feb 2024" },
  { Icon: CheckCircle2, label: "Availability", value: "Open to Work" },
];

const currently = [
  "Teaching & studying full-stack development at Sir Syed College, Karachi",
  "Student Leader at the Governor House IT Initiative",
  "Building AI agents and scaling Sflyra AI Labs",
];

const [rozgarbot, sflyra] = FOUNDER_LINKS;

const founderLinkClass =
  "inline-flex items-center gap-1 font-semibold text-[#93c5fd] underline decoration-[#7c3aed]/60 decoration-1 underline-offset-4 hover:text-[#c7d2fe] hover:decoration-[#a78bfa] transition-colors";

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-20 py-20 overflow-hidden">
      <div className="pointer-events-none absolute top-10 right-0 w-96 h-96 rounded-full bg-[#2563eb]/10 blur-3xl" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="mono-label">01. About Me</span>
          <span className="h-px flex-1 bg-gradient-to-r from-[#7c3aed]/40 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          The person behind the code
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-[360px_1fr] gap-10 items-start">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="acrylic-panel hairline rounded-2xl p-6 space-y-5"
        >
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/profile.jpg"
              alt="Summiya Ashraf"
              width={400}
              height={400}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080c]/70 to-transparent" />
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-[#07080c]/70 px-3 py-1 font-mono text-[0.65rem] text-emerald-300 backdrop-blur">
              <span className="accent-dot" /> online
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {facts.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2.5"
              >
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Icon className="w-3.5 h-3.5 text-[#7c3aed]" />
                  {label}
                </span>
                <span className="text-foreground">{value}</span>
              </div>
            ))}
          </div>

          <a
            {...RESUME_DOWNLOAD_PROPS}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-[#7c3aed]/30 hover:brightness-110 active:scale-[0.98] transition"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-8"
        >
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground italic">
            &ldquo;Transforming ideas into reality — one line of code at a time.&rdquo;
          </p>

          <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-justify">
            I&rsquo;m <strong className="text-foreground">Summiya Ashraf</strong> from{" "}
            <strong className="text-foreground">Karachi</strong>, an intermediate from Sir Syed
            College full-stack developer and passionate teacher handling multiple roles. I started
            my journey on <strong className="text-foreground">14th February 2024</strong> learning{" "}
            <strong className="text-foreground">TypeScript, Next.js, Tailwind CSS, ShadCN UI</strong>, and
            UI/UX tools like <strong className="text-foreground">Figma</strong> and{" "}
            <strong className="text-foreground">Canva</strong>. Recently, I&rsquo;ve started building{" "}
            <strong className="text-foreground">AI Agents</strong> using OpenAI SDK. Today I
            lead two of my own ventures as{" "}
            <a {...founderLinkProps(rozgarbot)} className={founderLinkClass}>
              {rozgarbot.name}
              <span className="sr-only"> (opens in a new tab)</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>{" "}
            (&ldquo;Founder&rdquo;) and{" "}
            <a {...founderLinkProps(sflyra)} className={founderLinkClass}>
              {sflyra.name}
              <span className="sr-only"> (opens in a new tab)</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>{" "}
            (&ldquo;Co-Founder&rdquo;). On{" "}
            <strong className="text-foreground">6th January 2025</strong>, I was honored with the role of{" "}
            <strong className="text-foreground">Student Leader</strong> at the Governor House IT
            Initiative. My vision is to become one of the world&rsquo;s best full-stack developers and
            scale my ventures into lasting businesses.
          </p>

          {/* Founder callout */}
          <div className="acrylic-panel card-glow relative overflow-hidden rounded-2xl p-5 sm:p-6">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#7c3aed] via-[#2563eb] to-[#06b6d4]"
            />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#a78bfa]">
              founder_note
            </p>
            <p className="mt-2.5 text-sm md:text-base font-semibold leading-relaxed text-foreground">
              Currently building and scaling AI-driven platforms at{" "}
              <a {...founderLinkProps(rozgarbot)} className={founderLinkClass}>
                Rozgarbot
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>{" "}
              &amp;{" "}
              <a {...founderLinkProps(sflyra)} className={founderLinkClass}>
                Sflyra.site
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {FOUNDER_LINKS.map((link, i) => (
                <a
                  key={link.id}
                  {...founderLinkProps(link)}
                  title={link.tagline}
                  className={`founder-pill founder-pill-sm ${
                    i % 2 === 1 ? "founder-pill-cyan" : ""
                  }`}
                >
                  <span aria-hidden="true">{link.emoji}</span>
                  {link.role} @ {link.domain}
                  <ExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Currently */}
          <div className="acrylic rounded-xl p-5">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#7c3aed]">
              {"// currently"}
            </h3>
            <ul className="space-y-2.5">
              {currently.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1 text-[#a78bfa]">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core expertise */}
          <div className="grid sm:grid-cols-2 gap-4">
            {expertise.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="node acrylic card-glow rounded-xl p-4"
              >
                <span className="mono-micro">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-1.5 text-sm font-semibold text-foreground">{skill.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}