"use client";

import Image from "next/image";
import { FaGithub, FaCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";
import { FOUNDER_LINKS } from "@/lib/founder-links";

type Project = {
  title: string;
  badge: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  /** Pinned to the top of the grid with a live-product call to action. */
  founder?: boolean;
};

const projects: Project[] = [
  {
    title: "Rozgarbot",
    badge: "Founder / Live Product",
    description:
      "AI-powered job assistance platform and smart recruitment ecosystem built to streamline talent acquisition and automated hiring solutions.",
    image: "/Rozgar bot.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "FastAPI"],
    github: "https://github.com/Summiyaashraf/Rozgar-bot-frontend.git",
    live: FOUNDER_LINKS[0].href,
    founder: true,
  },
  {
    title: "Sflyra AI Labs",
    badge: "Co-Founder / Live Product",
    description:
      "Next-gen AI agency initiative and web platform delivering automated web solutions, AI agents, and custom digital systems.",
    image: "/sflyra.png",
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "Tailwind CSS", "AI Agents"],
    live: FOUNDER_LINKS[1].href,
    founder: true,
  },
  {
    title: "Makinatic CNC Engineering",
    badge: "Client Project (Jeddah, SA)",
    description:
      "Industrial web portal and machinery platform engineered for Jeddah-based client with custom product catalog showcase and asset optimization.",
    image: "/cnc.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "UI/UX Design"],
    github: "https://github.com/Summiyaashraf/makinatic-cnc-web",
    live: "https://www.cncmakinati.com/",
  },
  {
    title: "Ruhi Resin Art Store",
    badge: "E-Commerce Platform",
    description:
      "Elegant e-commerce shop for custom handcrafted resin art featuring product galleries, interactive cart management, and seamless checkout experience.",
    image: "/Ruhi resin art.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
    github: "https://github.com/Summiyaashraf/Hackathon-web-3.git",
    live: "https://hackathon-web-3-48f3.vercel.app/",
  },
  {
    title: "Textile Industry Demo",
    badge: "Industrial Web App",
    description:
      "Modern, responsive textile manufacturing and product catalog showcase web application tailored for industrial product displays.",
    image: "/Texttile Demo Web.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "School Management System",
    badge: "SaaS Portal",
    description:
      "Comprehensive educational management system portal built for managing student records, administration tracking, and academic workflows.",
    image: "/school.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/Summiyaashraf/school-management-system.git",
    live: "https://vercel.com/summiya-ashrafs-projects/school-management-system",
  },
  {
    title: "Au Naturel Cosmetics",
    badge: "Client E-Commerce",
    description:
      "Custom Shopify storefront setup, cosmetics collection layout optimization, and promotional UI banners for handmade skincare products.",
    image: "/au natrual.png",
    tech: ["Shopify", "UI Optimization", "E-Commerce"],
    live: "https://aunaturelshop.pk/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#2563eb]/15 blur-3xl"
      />

      <div className="mx-auto mb-10 max-w-7xl px-4 sm:mb-12 sm:px-6 md:px-10 lg:px-8">
        <div className="mb-2 flex items-center gap-3">
          <span className="mono-label">03. Portfolio</span>
          <span className="h-px flex-1 bg-gradient-to-r from-[#7c3aed]/40 to-transparent" />
        </div>
        <h2 className="text-balance text-3xl font-bold gradient-text sm:text-4xl lg:text-5xl">
          Selected Work
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          A glimpse into the real-world products and experiments I build — from
          AI platforms to e-commerce stores.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8 lg:px-8">
        {projects.map((project, index) => {
          const featured = project.founder === true;
          const hasLinks = Boolean(project.github || project.live);

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="h-full"
            >
              <TiltCard maxTilt={9} className="group h-full">
                <div className="hairline titanium-hover flex h-full min-h-[440px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl sm:min-h-[480px]">
                  <div className="flex items-center justify-between gap-3 px-4 pb-3 pt-4 sm:px-5">
                    <span className="mono-micro shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="tag-badge"
                      style={
                        featured
                          ? {
                              borderColor: "rgba(124,58,237,0.6)",
                              color: "#c7d2fe",
                            }
                          : undefined
                      }
                    >
                      {featured ? "★ " : ""}
                      {project.badge}
                    </span>
                  </div>

                  <div className="relative h-44 w-full overflow-hidden rounded-t-xl bg-slate-900/50 md:h-52">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#7c3aed] via-[#4338ca] to-[#2563eb]">
                        <FaCode className="text-white/85 text-4xl" aria-hidden="true" />
                      </span>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  </div>

<div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                    <div>
                      {featured && (
                        <span className="mb-2.5 inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#7c3aed]/60 bg-gradient-to-r from-[#7c3aed]/25 to-[#2563eb]/25 px-2.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#ddd6fe] shadow-[0_0_20px_rgba(124,58,237,0.35)]">
                          Founder / Live Product
                        </span>
                      )}
                      <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-[#c7d2fe]">
                        {project.title}
                      </h3>
                      <p
                        title={project.description}
                        className="mt-1.5 line-clamp-3 text-sm text-slate-300"
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t) => (
                        <span key={t} className="tag-badge">
                          {t}
                        </span>
                      ))}
                    </div>

                    {hasLinks && (
                      <div className="flex flex-wrap items-center gap-4">
                        {project.live &&
                          (featured ? (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit ${project.title} live site (opens in a new tab)`}
                              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#7c3aed]/35 hover:brightness-110 active:scale-[0.98] transition-all"
                            >
                              <FiExternalLink className="text-sm" aria-hidden="true" />
                              Visit Site
                            </a>
                          ) : (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} live site`}
                              className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-[#a78bfa] transition-colors"
                            >
                              <FiExternalLink
                                className="text-base"
                                aria-hidden="true"
                              />
                              live_demo
                            </a>
                          ))}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} source code on GitHub`}
                            className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-[#a78bfa] transition-colors"
                          >
                            <FaGithub className="text-base" aria-hidden="true" />
                            code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
