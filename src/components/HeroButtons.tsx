"use client";

import { Download, ArrowRight } from "lucide-react";

import { RESUME_DOWNLOAD_PROPS } from "@/lib/resume";

export function HeroButtons() {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      <a
        {...RESUME_DOWNLOAD_PROPS}
        className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-medium shadow-lg shadow-[#7c3aed]/30 hover:shadow-[#7c3aed]/50 hover:brightness-110 active:scale-[0.98] transition-all"
      >
        <Download className="w-5 h-5 mr-2" />
        Download CV
      </a>

      <a
        href="#contact"
        className="inline-flex items-center px-6 py-3 rounded-xl border border-[#2563eb]/40 text-[#93c5fd] font-medium hover:bg-[#2563eb]/10 hover:border-[#60a5fa] transition-all"
      >
        Get in Touch
        <ArrowRight className="w-5 h-5 ml-2" />
      </a>
    </div>
  );
}