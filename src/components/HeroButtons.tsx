"use client"

import { Download, ArrowRight } from "lucide-react"

export function HeroButtons() {
  return (
    <div className="mt-6 flex space-x-4">
      <a
        href="/Summiya Cv.pdf"
        download
        className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        <Download className="w-5 h-5 mr-2" />
        Download CV
      </a>

      <a
        href="#contact"
        className="inline-flex items-center px-5 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
      >
        Get in Touch
        <ArrowRight className="w-5 h-5 ml-2" />
      </a>
    </div>
  )
}
