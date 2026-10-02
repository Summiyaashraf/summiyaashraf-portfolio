"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#07080c]/60 px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-10 backdrop-blur-2xl sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-10">
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold kinetic-text">Summiya Ashraf</h2>
          <p className="text-sm text-muted-foreground">Passionate Developer & Designer</p>
        </div>

        {/* Center */}
        <nav aria-label="Footer" className="flex flex-col space-y-2">
          <h3 className="font-semibold text-[#a78bfa]">Quick Links</h3>
          <Link href="#home" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>

        {/* Right - Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-[#a78bfa]">Connect with me</h3>
          <ul className="flex flex-wrap gap-4 text-muted-foreground">
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=61553694430220"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="block rounded-md transition-colors hover:text-[#a78bfa]"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/SummiyaAshraf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="block rounded-md transition-colors hover:text-[#a78bfa]"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/summiya-ashraf-8249792ba/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="block rounded-md transition-colors hover:text-[#a78bfa]"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Summiyaashraf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="block rounded-md transition-colors hover:text-[#a78bfa]"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/summiya7127/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="block rounded-md transition-colors hover:text-[#a78bfa]"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/[0.06] pt-6 text-center font-mono text-xs">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Summiya Ashraf. All rights reserved.
        </p>
        <p className="text-muted-foreground/70">
          <span className="text-[#7c3aed]">~$</span> made_with next.js + tailwind · deploy:{" "}
          <span className="text-emerald-300">ok</span>
        </p>
      </div>
    </footer>
  );
}