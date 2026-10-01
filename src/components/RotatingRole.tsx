"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Python Programmer",
  "AI Agent Developer",
  "Creative Designer",
];

export function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      2200
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          transition={{ duration: 0.35 }}
          className="caret gradient-text font-semibold"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}