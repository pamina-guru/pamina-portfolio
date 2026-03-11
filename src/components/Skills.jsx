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
} from "react-icons/si";

import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative scroll-mt-32 px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-[#70193D]/18 blur-[130px]" />
        <div className="absolute right-[-80px] top-32 h-80 w-80 rounded-full bg-[#DA70D6]/12 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A2C8]/8 blur-[120px]" />
      </div>

      <ScrollReveal className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/60">
          MY SKILLSET
        </p>

        <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.2] sm:text-5xl md:text-6xl">
          <LetterReveal text="Tools & " />
          <span className="instrument-serif">
            <GradientTypeReveal
              text="Technologies"
              delay={0.25}
              speed={0.042}
            />
          </span>
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition-colors duration-300 hover:border-[#DA70D6]/50 hover:text-white hover:shadow-[0_0_28px_rgba(112,25,61,0.28)]"
            >
              <span className="text-lg text-white/75 transition-colors duration-300 group-hover:text-[#C8A2C8]">
                {skill.icon}
              </span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </ScrollReveal>
    </section>
  );
}

export default Skills;
