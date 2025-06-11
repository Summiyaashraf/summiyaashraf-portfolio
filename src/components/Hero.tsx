"use client"

import Image from "next/image"
import { HeroButtons } from "@/components/HeroButtons"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-background text-foreground"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 max-w-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold"
        >
          Hi, I’m <span className="text-blue-800 font-bold">Summiya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-medium mt-2"
        >
          Full Stack Developer | UI/UX Enthusiast | Python Programmer | AI Agent Developer | Creative Designer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4 max-w-xl"
        >
          I specialize in building full-stack web applications using <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>ShadCN UI</strong>.<br />
          I also work on UI/UX designs using <strong>Figma</strong>, <strong>Canva</strong>, and create engaging visuals and posters.<br />
          Currently learning and developing <strong>AI agents</strong> to build smarter applications.<br />
          With a passion for clean code and beautiful interfaces, I bring ideas to life — from concept to deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <HeroButtons />
        </motion.div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 md:mt-0"
      >
        <Image
          src="/profile.jpg"
          alt="Summiya Ashraf"
          width={400}
          height={400}
          className="rounded-full border-4 border-primary object-cover"
        />
      </motion.div>
    </section>
  )
}
