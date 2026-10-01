import {
  SiClaude,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FiShare2 } from "react-icons/fi";
import { BookOpen, Clapperboard, Palette, Sparkles } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

type Skill = {
  name: string;
  icon: React.ReactNode;
  sub?: string;
};

function SkillNode({ node, index }: { node: Skill; index: number }) {
  return (
    <TiltCard maxTilt={16} className="card-glow">
      <div className="node acrylic flex flex-col items-center justify-center text-sm w-full h-full min-h-28 text-center rounded-xl p-3">
        <span className="mono-micro self-start">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="text-3xl text-[#a78bfa]">{node.icon}</div>
        <span className="mt-2 text-foreground leading-tight">{node.name}</span>
        {node.sub && (
          <span className="mt-1 text-[10px] text-[#93c5fd] leading-tight">{node.sub}</span>
        )}
      </div>
    </TiltCard>
  );
}

function SkillMatrix({
  index,
  title,
  nodes,
}: {
  index: string;
  title: string;
  nodes: Skill[];
}) {
  return (
    <div className="acrylic-panel hairline rounded-2xl p-6">
      <h3 className="mb-6 flex items-center gap-3 text-lg font-bold">
        <span className="mono-label">{index}</span>
        <span className="gradient-text">{title}</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {nodes.map((node, i) => (
          <SkillNode key={node.name} node={node} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-20 py-20 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="pointer-events-none absolute -left-32 top-20 w-96 h-96 rounded-full bg-[#7c3aed]/15 blur-3xl" />

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="mono-label">02. Tech Stack</span>
          <span className="h-px flex-1 bg-gradient-to-r from-[#7c3aed]/40 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          Technical Expertise
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          <span className="font-mono text-xs text-[#93c5fd]">{"// tech_stack.matrix"}</span> — the
          tools and workflows I use to ship modern, production-ready products.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SkillMatrix
          index="A"
          title="Frontend & Design"
          nodes={[
            { name: "Next.js 15", icon: <SiNextdotjs /> },
            { name: "React", icon: <SiReact /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Figma", icon: <SiFigma /> },
          ]}
        />

        <SkillMatrix
          index="B"
          title="Backend & DevOps"
          nodes={[
            { name: "Python", icon: <SiPython /> },
            { name: "FastAPI", icon: <SiFastapi /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "REST APIs", icon: <FiShare2 /> },
          ]}
        />

        <SkillMatrix
          index="C"
          title="AI & Tools"
          nodes={[
            { name: "Claude Code", icon: <SiClaude /> },
            { name: "Spec-Kit Plus", icon: <BookOpen /> },
            { name: "Gemini Pro", icon: <Sparkles /> },
          ]}
        />

        <SkillMatrix
          index="D"
          title="Design & Media"
          nodes={[
            {
              name: "Video Editing & AI Generation",
              icon: <Clapperboard />,
              sub: "Google Flow, CapCut",
            },
            {
              name: "Poster & UI Design",
              icon: <Palette />,
              sub: "Canva, Figma, Google Flow",
            },
          ]}
        />
      </div>
    </section>
  );
}