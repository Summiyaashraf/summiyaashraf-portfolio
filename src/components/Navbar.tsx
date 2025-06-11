"use client"

import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMounted } from "@/hooks/use-mounted"
import { useState } from "react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-black sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-700">Summiya</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li className=" hover:text-blue-700"><a href="#home">Home</a></li>
        <li className=" hover:text-blue-700"><a href="#about">About</a></li>
        <li className=" hover:text-blue-700"><a href="#skills">Skills</a></li>
        <li className=" hover:text-blue-700"><a href="#projects">Projects</a></li>
        <li className=" hover:text-blue-700"><a href="#contact">Contact</a></li>
      </ul>

      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu List */}
      {isOpen && (
  <ul className="absolute top-16 left-0 w-full bg-white dark:bg-black flex flex-col items-center space-y-4 py-4 md:hidden shadow-md z-40">
    <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-700">Home</a></li>
    <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-700">About</a></li>
    <li><a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-700">Skills</a></li>
    <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-700">Projects</a></li>
    <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-700">Contact</a></li>
  </ul>
)}

    </nav>
  )
}
