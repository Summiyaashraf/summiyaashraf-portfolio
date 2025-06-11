import {
  FaFigma,
  FaNodeJs,
  FaPython,
  FaCode,
  FaRobot,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiCanva,
  SiStreamlit,
  SiVercel,
  SiRailway,
} from "react-icons/si";

function SkillIcon({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-sm w-24 h-24 text-center hover:scale-105 transition-transform rounded-lg shadow-md bg-muted p-2">
      <div className="text-3xl text-primary">{icon}</div>
      <span className="mt-2">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-20 py-16 bg-background text-foreground"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-700 text-center">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-blue-700 font-semibold">
            <SkillIcon name="Next.js" icon={<SiNextdotjs />} />
            <SkillIcon name="Tailwind CSS" icon={<SiTailwindcss />} />
            <SkillIcon name="TypeScript" icon={<SiTypescript />} />
            <SkillIcon name="Figma" icon={<FaFigma />} />
            <SkillIcon name="Canva" icon={<SiCanva />} />
            <SkillIcon name="OpenAI" icon={<FaRobot />} />
          </div>
        </div>

        {/* Backend & Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-700 text-center">
            Backend & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-blue-700 font-semibold">
            <SkillIcon name="Python" icon={<FaPython />} />
            <SkillIcon name="Node.js" icon={<FaNodeJs />} />
            <SkillIcon name="API Dev" icon={<FaCode />} />
            <SkillIcon name="Streamlit" icon={<SiStreamlit />} />
            <SkillIcon name="Vercel" icon={<SiVercel />} />
            <SkillIcon name="Railway" icon={<SiRailway />} />
          </div>
        </div>
      </div>
    </section>
  );
}
