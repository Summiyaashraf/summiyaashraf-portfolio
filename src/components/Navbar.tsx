"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X, ExternalLink } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { RESUME_DOWNLOAD_PROPS } from "@/lib/resume";
import { FOUNDER_LINKS, founderLinkProps } from "@/lib/founder-links";

const links = [
  { href: "#home", label: "Home", index: "00" },
  { href: "#about", label: "About", index: "01" },
  { href: "#skills", label: "Skills", index: "02" },
  { href: "#projects", label: "Projects", index: "03" },
  { href: "#contact", label: "Contact", index: "04" },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex shrink-0 items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-sm font-bold text-white shadow-lg shadow-[#7c3aed]/30">
        SA
      </span>
      <span className={`text-lg font-semibold tracking-tight ${compact ? "hidden sm:inline" : "inline"}`}>
        Summiya<span className="text-[#7c3aed]">.</span>
      </span>
    </span>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  /* Freeze the page behind the drawer so a swipe can't slide the content out
     from under the open menu. */
  useEffect(() => {
    if (!isOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  /* Crossing into desktop widths hides the drawer, so drop the open state
     too rather than leaving a stale `aria-expanded` on the hidden toggle. */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (query.matches) close();
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [close]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#07080c]/60 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4 md:px-10 lg:px-20">
          {/* Brand */}
          <a href="#home" onClick={close} aria-label="Summiya Ashraf — home">
            <Brand compact />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center space-x-7 font-mono text-[0.82rem] md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-muted-foreground transition-colors hover:text-foreground"
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
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-3.5 py-1.5 text-[0.8rem] font-medium text-white shadow-lg shadow-[#7c3aed]/25 transition-all hover:brightness-110 hover:shadow-[#7c3aed]/45 active:scale-[0.97] md:inline-flex"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>

          {/* Availability pill */}
          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-3.5 py-1.5 font-mono text-[0.7rem] text-emerald-300 md:flex">
            <span className="accent-dot" />
            available
          </div>

          {/* Mobile Menu Button — 44px tap target */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="-mr-2 grid h-11 w-11 shrink-0 place-items-center rounded-lg text-foreground transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed] md:hidden"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Featured founder strip — flagship startup links in the header */}
        <div className="hidden items-center gap-2.5 border-t border-white/[0.06] bg-white/[0.01] px-4 py-2 sm:px-6 md:flex md:px-10 lg:px-20">
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
      </nav>

      {/* Mobile drawer overlay.

          Rendered as a sibling of <nav> rather than inside it on purpose: the
          header carries `backdrop-blur`, which makes it the containing block
          for `position: fixed` descendants — a nested `fixed inset-0`
          backdrop would have been clipped to the header instead of covering
          the page. Sitting outside also lets the whole overlay sit above the
          chat launcher (z-40) and chat drawer (z-50). */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] md:hidden"
          >
            <motion.button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 h-full w-full cursor-default bg-[#07080c]/75 backdrop-blur-sm"
            />

            <motion.div
              key="mobile-panel"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 36, mass: 0.8 }}
              className="absolute inset-x-0 top-0 flex max-h-[100dvh] flex-col overflow-hidden border-b border-white/10 bg-[#07080c]/95 backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3.5 sm:px-6">
                <span onClick={close}>
                  <Brand />
                </span>
                <button
                  type="button"
                  onClick={close}
                  className="-mr-2 grid h-11 w-11 shrink-0 place-items-center rounded-lg text-foreground transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <nav
                aria-label="Mobile"
                className="overscroll-contain-y flex-1 overflow-y-auto px-4 py-2 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:px-6"
              >
                <ul className="flex flex-col font-mono text-sm">
                  {links.map((link) => (
                    <li key={link.href} className="border-b border-white/[0.05]">
                      <a
                        href={link.href}
                        onClick={close}
                        className="flex min-h-12 items-center gap-2 py-3 text-muted-foreground transition-colors active:text-foreground hover:text-foreground"
                      >
                        <span className="text-[#7c3aed]/70">{link.index}.</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li className="border-b border-white/[0.05]">
                    <a
                      {...RESUME_DOWNLOAD_PROPS}
                      onClick={close}
                      className="flex min-h-12 items-center gap-2 py-3 text-[#93c5fd] transition-all active:scale-[0.98] hover:text-[#a78bfa]"
                    >
                      <span className="text-[#7c3aed]/70">05.</span> Resume
                      <Download className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </li>
                </ul>

                <p className="mb-2 mt-5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                  featured ventures
                </p>
                <ul className="flex flex-col gap-2">
                  {FOUNDER_LINKS.map((link) => (
                    <li key={link.id}>
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

                <div className="mt-5 flex items-center gap-2 self-start rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-3.5 py-1.5 font-mono text-[0.7rem] text-emerald-300">
                  <span className="accent-dot" />
                  available for work
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}