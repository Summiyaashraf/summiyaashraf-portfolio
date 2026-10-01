"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 md:px-20 py-10 bg-[#07080c]/60 backdrop-blur-2xl">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold kinetic-text">Summiya Ashraf</h2>
          <p className="text-sm text-muted-foreground">Passionate Developer & Designer</p>
        </div>

        {/* Center */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-[#a78bfa]">Quick Links</h3>
          <Link href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* Right - Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-[#a78bfa]">Connect with me</h3>
          <div className="flex space-x-4 text-muted-foreground">
            <Link
              href="https://www.facebook.com/profile.php?id=61553694430220"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-[#a78bfa] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/SummiyaAshraf"
              target="_blank"
              aria-label="Twitter"
              className="hover:text-[#a78bfa] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/summiya-ashraf-8249792ba/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-[#a78bfa] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/Summiyaashraf"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-[#a78bfa] transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/summiya7127/"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-[#a78bfa] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/[0.06] pt-6 font-mono text-xs">
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