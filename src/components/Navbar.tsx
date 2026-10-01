"use client";

import { Download, Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";

import { RESUME_DOWNLOAD_PROPS } from "@/lib/resume";
import { FOUNDER_LINKS, founderLinkProps } from "@/lib/founder-links";

const links = [
  { href: "#home", label: "Home", index: "00" },
  { href: "#about", label: "About", index: "01" },
  { href: "#skills", label: "Skills", index: "02" },
  { href: "#projects", label: "Projects", index: "03" },
  { href: "#contact", label: "Contact", index: "04" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-[#07080c]/60 border-b border-white/[0.06]">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-sm font-bold text-white shadow-lg shadow-[#7c3aed]/30">
            SA
          </span>
          <span className="hidden sm:block text-lg font-semibold tracking-tight">
            Summiya<span className="text-[#7c3aed]">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-7 font-mono text-[0.82rem]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-[#7c3aed]/70">{link.index}.</span> {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          {...RESUME_DOWNLOAD_PROPS}
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-3.5 py-1.5 text-[0.8rem] font-medium text-white shadow-lg shadow-[#7c3aed]/25 hover:shadow-[#7c3aed]/45 hover:brightness-110 active:scale-[0.97] transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          Resume
        </a>

        {/* Availability pill */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-3.5 py-1.5 font-mono text-[0.7rem] text-emerald-300">
          <span className="accent-dot" />
          available
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Featured founder strip — flagship startup links in the header */}
      <div className="hidden md:flex items-center gap-2.5 border-t border-white/[0.06] bg-white/[0.01] px-6 md:px-20 py-2">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
          featured
        </span>
        {FOUNDER_LINKS.map((link, i) => (
          <a
            key={link.id}
            {...founderLinkProps(link)}
            title={`${link.name} — ${link.tagline}`}
            className={`founder-pill founder-pill-sm group ${
              i % 2 === 1 ? "founder-pill-cyan" : ""
            }`}
          >
            <span aria-hidden="true">{link.emoji}</span>
            {link.role} @ {link.domain}
            <ExternalLink
              className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>

      {/* Mobile Menu List */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 backdrop-blur-2xl bg-[#07080c]/90 border-t border-white/[0.06] font-mono text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-[#7c3aed]/70">{link.index}.</span> {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              {...RESUME_DOWNLOAD_PROPS}
              className="inline-flex items-center gap-2 text-[#93c5fd] hover:text-[#a78bfa] active:scale-[0.98] transition-all"
            >
              <span className="text-[#7c3aed]/70">05.</span> Resume
              <Download className="w-3.5 h-3.5" />
            </a>
          </li>
          {FOUNDER_LINKS.map((link) => (
            <li key={link.id} className="w-full">
              <a
                {...founderLinkProps(link)}
                title={link.tagline}
                className="founder-pill founder-pill-sm w-full justify-center"
              >
                <span aria-hidden="true">{link.emoji}</span>
                {link.role} @ {link.domain}
                <ExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}