import { motion } from "framer-motion";
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
  SiRedis,
  SiSupabase,
  SiNestjs,
} from "react-icons/si";

import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Flutter", icon: <SiFlutter /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaNodeJs /> },
        { name: "Nest.js", icon: <SiNestjs /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      title: "Languages",
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Dart", icon: <SiDart /> },
      ],
    },
    {
      title: "Tools & Dev Workflow",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vercel", icon: <SiVercel /> },
      ],
    },
  ];

  const certifications = [
    {
      title: "Postman API Fundamentals Student Expert",
      year: "2026",
    },
    {
      title: "IEEEXtreme 19.0",
      year: "2025",
    },
    {
      title: "CodeRally 6.0",
      year: "2025",
    },
    {
      title: "IEEEXtreme 18.0",
      year: "2024",
    },
  ];

  return (
    <section id="skills" className="section-shell scroll-mt-32 px-6 py-24">
      <ScrollReveal className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="section-kicker mb-4 text-xs">Capabilities</p>

          <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.15] text-slate-50 sm:text-5xl md:text-6xl">
            <LetterReveal text="Skills & " />
            <span className="instrument-serif">
              <GradientTypeReveal
                text="Technologies"
                delay={0.22}
                speed={0.042}
              />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A growing skillset across design, front-end development, backend
            fundamentals, and modern development tools.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <ScrollReveal
              key={category.title}
              delay={index * 0.08}
              yOffset={35}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="section-card rounded-[2rem] p-6"
              >
                <h3 className="text-xl font-semibold text-slate-50">
                  {category.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-700/40 bg-[#0f223d]/75 px-4 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:border-cyan-400/35 hover:text-white"
                    >
                      <span className="text-lg text-slate-400 transition duration-300 group-hover:text-cyan-300">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.18} yOffset={35} className="mt-8">
          <div className="section-card rounded-[2rem] p-6 md:p-8">
            <h3 className="text-xl font-semibold text-slate-50">
              Certifications
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-slate-700/40 bg-[#0f223d]/70 p-5"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">
                    {item.year}
                  </p>
                  <h4 className="mt-3 text-base leading-7 font-medium text-slate-100">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </ScrollReveal>
    </section>
  );
}

export default Skills;
