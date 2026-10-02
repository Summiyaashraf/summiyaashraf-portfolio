"use client";

import { useEffect, useState } from "react";

/** Matches while the query matches, re-renders on change. SSR-safe (false until mounted). */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const list = window.matchMedia(query);
    const update = () => setMatches(list.matches);

    update();
    list.addEventListener("change", update);
    return () => list.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/** True on phones/tablets: no hover, and the primary pointer is coarse (finger). */
export function useIsTouchDevice(): boolean {
  return useMediaQuery("(hover: none), (pointer: coarse)");
}

/** True only where hover + a precise pointer exist, i.e. the custom cursor/tilt are safe. */
export function useHasFinePointer(): boolean {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}

/** True below Tailwind's `md` breakpoint (< 768px). */
export function useIsMobileViewport(): boolean {
  return useMediaQuery("(max-width: 767px)");
}