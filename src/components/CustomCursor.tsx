"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, { stiffness: 1600, damping: 90, mass: 0.1 });
  const dotY = useSpring(y, { stiffness: 1600, damping: 90, mass: 0.1 });

  const ringX = useSpring(x, { stiffness: 240, damping: 24, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 240, damping: 24, mass: 0.55 });

  useEffect(() => {
    /* Never attach on a touch device: the synthetic mouse events iOS/Android
       emit right after a tap would leave a ghost cursor glued to the last
       touch point, and the per-frame spring updates cost battery. */
    const query = window.matchMedia(FINE_POINTER);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: Event) => {
      const el = e.target as HTMLElement | null;
      setInteractive(
        !!el?.closest(
          "a, button, [role='button'], input, textarea, select, label, [data-cursor='pointer']"
        )
      );
    };

    const press = () => setPressed(true);
    const release = () => setPressed(false);

    const activate = () => {
      setEnabled(true);
      document.documentElement.classList.add("custom-cursor-active");
    };

    const deactivate = () => {
      setEnabled(false);
      document.documentElement.classList.remove("custom-cursor-active");
    };

    /* A single handler: attaching both `activate` and `deactivate` to the
       same `change` event made the cursor disable itself the moment a
       plugging-in mouse was detected. */
    const sync = () => {
      if (query.matches) activate();
      else deactivate();
    };

    if (!query.matches) {
      deactivate();
      return;
    }

    sync();

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", press);
    window.addEventListener("mouseup", release);
    query.addEventListener("change", sync);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", press);
      window.removeEventListener("mouseup", release);
      query.removeEventListener("change", sync);
      deactivate();
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Core dot */}
      <motion.div
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-[#e0e8ff] shadow-[0_0_12px_rgba(224,232,255,0.9)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: interactive || pressed ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
      />
      {/* Magnetic halo ring */}
      <motion.div
        className="fixed left-0 top-0 h-10 w-10 rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: pressed ? 0.75 : interactive ? 1.7 : 1,
          borderColor: interactive
            ? "rgba(224,232,255,0.8)"
            : "rgba(255,255,255,0.25)",
          backgroundColor: interactive
            ? "rgba(124,58,237,0.08)"
            : "rgba(255,255,255,0)",
          boxShadow: interactive
            ? "0 0 24px rgba(124,58,237,0.5), inset 0 0 12px rgba(124,58,237,0.2)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25 }}
      />
    </div>
  );
}