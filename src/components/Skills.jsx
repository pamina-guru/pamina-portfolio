import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiFlutter,
} from "react-icons/si";

import LetterReveal from "./LetterReveal";

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-[#8D0240]/18 blur-[130px]" />
        <div className="absolute right-[-80px] top-32 h-80 w-80 rounded-full bg-[#b10352]/12 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d11468]/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/60">
          MY SKILLSET
        </p>

        <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl section-heading-glow">
          <LetterReveal text="Tools & " />
          <span className="instrument-serif bg-gradient-to-r from-[#8D0240] via-[#d11468] to-[#f3b2cc] bg-clip-text text-transparent">
            <LetterReveal text="Technologies" delay={0.28} noBlur />
          </span>
        </h2>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d11468]/50 hover:text-white hover:shadow-[0_0_28px_rgba(141,2,64,0.28)]"
            >
              <span className="text-lg text-white/75 transition duration-300 group-hover:text-[#f3b2cc]">
                {skill.icon}
              </span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
