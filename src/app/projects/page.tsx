"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

const projects = [{
    title: "Ruhi Resin Art",
    description: "An elegant resin art shop with cart and checkout system.",
    image: "/Ruhi resin art.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Summiyaashraf/Hackathon-web-3.git",
    live: "https://hackathon-web-3-48f3.vercel.app/",
  },
    {
    title: "Shareable Resume Builder",
    description: "Build and share professional resumes instantly with a sleek UI.",
    image: "/Shareable resume.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Summiyaashraf/hackathon-milestones/tree/7d89247ae0a15f33d28f5dc418c37210f2fdba6a/milestone%205",
    live: "https://milestones5-chi.vercel.app/",
  },
  {
    title: "Static Interactive Resume",
    description: "A static resume website with clean responsive design.",
    image: "/static resume.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Summiyaashraf/hackathon-milestones/tree/7d89247ae0a15f33d28f5dc418c37210f2fdba6a/milestone%201",
    live: "https://milestones1to2-eta.vercel.app/",
  },
  {
    title: "Food expiry Tracker",
    description: "Keep track of food items and their expiry dates to reduce waste using this smart Python tracker.",
    image: "/Food.png",
    tech: ["Python", "UV", "Streamlit"],
    github: "https://github.com/Summiyaashraf/Food-expiry-tracker.git",
    live: "https://food-expiry-tracker-by-summiya.streamlit.app/",
  },
  {
    title: "Virtual Pet Game",
    description: "A fun Python-based game where you adopt, feed, and care for your digital pet with interactive features.",
    image: "/pet.png",
    tech: ["Python", "UV", "Streamlit"],
    github: "https://github.com/Summiyaashraf/Virtual-pet-game.git",
    live: "https://virtual-pet-game-by-summiya.streamlit.app/",
  },
  {
    title: "Unit Converter",
    description: "Convert between units like length, weight, and temperature with this sleek and efficient Python Streamlit app. ",
    image: "/unit.png",
    tech: ["Python", "UV", "Streamlit"],
    github: "https://github.com/Summiyaashraf/unit-converter.git",
    live: "https://unit-converter-by-summiya.streamlit.app/",
  },
  {
    title: "Time Zone App",
    description: "Check and convert between global time zones in real-time with this user-friendly time zone utility.",
    image: "/Time.png",
    tech:["Python", "UV", "Streamlit"],
    github: "https://github.com/Summiyaashraf/Time-zone.git",
    live: "https://time-zone-by-summiya.streamlit.app/",
  },
  {
    title: "Simple Calculator",
    description: "A basic yet responsive calculator built with Python and Streamlit for performing quick calculations.",
    image: "/Calculator.png",
    tech: ["Python", "UV", "Streamlit"],
    github: "https://github.com/Summiyaashraf/Simple-Calculator.git",
    live: "https://simple-calculator-by-summiya.streamlit.app/",
  },
  {
    title: "Quiz Application",
    description: "Test your knowledge with an interactive multiple-choice quiz app powered by Python and Streamlit.",
    image: "/Quiz.png",
    tech: ["Python", "UV", "Streamlit"],
    github: "https://github.com/Summiyaashraf/Quiz-application.git",
    live: "https://quiz-application-by-summiya.streamlit.app/",
  },
  {
    title: "Personal Library Manager",
    description: "Easily manage your book collection — add, view, and track your personal library with this handy app.",
    image: "/Library.png",
    tech: ["Python", "UV", "Streamlit"],
    github: "https://github.com/Summiyaashraf/Personal-library-manager.git",
    live: "https://personal-library-manager-by-summiya.streamlit.app/",
  },
  {
    title: "Growth Mindset",
    description: "Get inspired with motivational quotes and mindset tips to boost your personal development journey.",
    image: "/Growth .png",
    tech: ["Python", "UV", "Streamlit"],
    github: "https://github.com/Summiyaashraf/Growth-mindset.git",
    live: "https://growth-mindset-by-summiya.streamlit.app/",
  },

  {
    title: "Random Joke Generator",
    description: "Brighten your day with a fresh, random joke every time you open this fun and simple Streamlit app.",
    image: "/Joke.png",
    tech: ["Python", "UV", "Streamlit"],
    github: "https://github.com/Summiyaashraf/Random-joke-generator.git",
    live: "https://random-joke-generator-by-summiya.streamlit.app/",
  },];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // 👇 only show 4 initially
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="px-6 md:px-20 py-16 bg-background text-foreground">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-muted rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-blue-700">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-blue-700 text-white px-2 py-0.5 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl hover:text-blue-700" />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="text-xl hover:text-blue-700" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-10 text-center">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="text-blue-700 hover:underline text-sm font-semibold flex items-center gap-1 mx-auto"
          >
            View All Projects →
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="text-red-600 hover:underline text-sm font-semibold flex items-center gap-1 mx-auto"
          >
            View Less ↑
          </button>
        )}
      </div>
    </section>
  );
}
