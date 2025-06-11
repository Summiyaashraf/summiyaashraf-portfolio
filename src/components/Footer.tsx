"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 text-foreground px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold text-blue-700">Summiya Ashraf</h2>
          <p className="text-sm text-muted-foreground">Passionate Developer & Designer</p>
        </div>

        {/* Center */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-blue-700">Quick Links</h3>
          <Link href="#home" className="text-sm hover:underline">Home</Link>
          <Link href="#about" className="text-sm hover:underline">About</Link>
          <Link href="#projects" className="text-sm hover:underline">Projects</Link>
          <Link href="#contact" className="text-sm hover:underline">Contact</Link>
        </div>

        {/* Right - Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-blue-700">Connect with me</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=61553694430220" target="_blank"><Facebook className="w-5 h-5 hover:text-blue-600" /></Link>
            <Link href="https://x.com/SummiyaAshraf" target="_blank"><Twitter className="w-5 h-5 hover:text-sky-500" /></Link>
            <Link href="https://www.linkedin.com/in/summiya-ashraf-8249792ba/" target="_blank"><Linkedin className="w-5 h-5 hover:text-blue-700" /></Link>
            <Link href="https://github.com/Summiyaashraf" target="_blank"><Github className="w-5 h-5 hover:text-gray-700" /></Link>
            <Link href="https://www.instagram.com/summiya7127/" target="_blank"><Instagram className="w-5 h-5 hover:text-pink-500" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-muted-foreground mt-10">
        © {new Date().getFullYear()} Summiya Ashraf. All rights reserved.
      </div>
    </footer>
  )
}
