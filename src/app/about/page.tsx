"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skills = [
  {
    title: "Next.js Development",
    description: "Building fast, SEO-friendly, and scalable applications with Next.js and React."
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences with a focus on usability."
  },
  {
    title: "Python Programming",
    description: "Writing clean, efficient, and functional Python scripts for various use-cases."
  },
  {
    title: "AI Agent Development",
    description: "Building AI-powered assistants using OpenAI SDK for smarter web apps."
  },
  {
    title: "Figma & Canva",
    description: "Designing creative visuals, posters, and clean layouts for web and print."
  },
  {
    title: "ShadCN UI & Tailwind",
    description: "Using modern UI frameworks to build responsive, styled interfaces quickly."
  }
]

export function About() {
  return (
    <section id="about" className="px-6 md:px-20 py-16 bg-background text-foreground">
      <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>

      <div className="flex flex-col md:flex-row flex-wrap gap-10 items-start justify-center md:justify-between">

        {/* My Journey Section */}
        <motion.div
  className="bg-gradient-to-b from-muted to-background border border-border rounded-2xl p-6 shadow-xl w-full md:max-w-sm"
  initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/profile.jpg"
              alt="Journey Icon"
              width={45}
              height={45}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-blue-700">My Journey</h3>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-muted-foreground italic mb-2">
            “Transforming ideas into reality — one line of code at a time.”
          </p>

          <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-justify">
            I’m <strong>Summiya Ashraf</strong> from <strong>Karachi</strong>, an intermediate from Sir Syed College  full-stack developer and passionate teacher handling multiple roles. I started my journey on <strong>14th Feburary 2024</strong> learning <strong>TypeScript, Next.js, Tailwind CSS, ShadCN UI</strong>, and UI/UX tools like <strong>Figma</strong> and <strong>Canva</strong>. Recently, I’ve started building <strong>AI Agents</strong> using OpenAI SDK. On <strong>6th January 2025</strong>, I was honored with the role of <strong>Student Leader</strong> at the Governor House IT Initiative. My vision is to become one of the world’s best full-stack developers and launch my own business someday.
          </p>
        </motion.div>

        {/* Skill Boxes */}
        <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:max-w-xl mt-16 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-primary/10 border border-primary rounded-xl p-4 shadow-sm cursor-pointer"
            >
              <h4 className="text-lg font-semibold text-blue-700 mb-1">{skill.title}</h4>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
