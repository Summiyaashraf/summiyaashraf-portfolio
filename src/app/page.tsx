import { Hero } from "@/components/Hero"
import { About } from "./about/page";
import { Contact } from "./contact/page";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
