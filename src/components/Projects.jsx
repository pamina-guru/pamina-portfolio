import { motion } from "framer-motion";
import urbanroots from "../../images/UrbanRoots.png";
import eventPlatform from "../../images/event-platform.jpg";
import saasProductivity from "../../images/saas-productivity.jpg";
import movieStreaming from "../../images/movie-streaming.png";
import travelExplorer from "../../images/travel-explorer.png";
import traffic from "../../images/traffic.png";
import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function Projects() {
  const projects = [
    {
      title: "UrbanRoots",
      description:
        "A smart urban gardening mobile app that enables plant tracking, IoT integration, and AI-based recommendations for sustainable home gardening.",
      tech: ["Flutter", "Next.js", "PostgreSQL", "TensorFlow"],
      image: urbanroots,
      github: "#",
    },
    {
      title: "Event Management Platform",
      description:
        "A full-stack event platform where users can browse and register for events while administrators securely manage listings using REST APIs.",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
      image: eventPlatform,
      github: "#",
    },
    {
      title: "SaaS Productivity Platform",
      description:
        "A full-stack productivity system featuring authentication, task management, and dashboards for efficient workflow tracking.",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
      image: saasProductivity,
      github: "#",
    },
    {
      title: "Movie Streaming Web App",
      description:
        "A Netflix-style movie platform with authentication, dynamic browsing, and integrated trailer playback in a responsive UI.",
      tech: ["React", "Firebase", "Tailwind", "REST API"],
      image: movieStreaming,
      github: "#",
    },
    {
      title: "Travel Destination Explorer",
      description:
        "A responsive travel discovery app that allows users to explore destinations through dynamic search and detailed API-driven pages.",
      tech: ["React", "Tailwind", "REST API"],
      image: travelExplorer,
      github: "#",
    },
    {
      title: "Traffic Data Analysis System",
      description:
        "A Python application that analyzes traffic datasets and generates vehicle statistics with Tkinter-based histogram visualizations.",
      tech: ["Python", "Tkinter", "Data Analysis"],
      image: traffic,
      github: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-32 px-6 py-24 text-white"
    >
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60">
            PORTFOLIO
          </p>

          <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.2] sm:text-5xl md:text-6xl">
            <LetterReveal text="Featured " />
            <span className="instrument-serif">
              <GradientTypeReveal text="Creations" delay={0.25} speed={0.045} />
            </span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors duration-300 hover:border-[#DA70D6]/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(112,25,61,0.35)]"
            >
              <div className="overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>

                <p className="mb-6 text-sm leading-7 text-white/65">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/80 transition-colors group-hover:bg-white/[0.1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#70193D] via-[#DA70D6] to-[#C8A2C8] px-6 py-2.5 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(218,112,214,0.4)]"
                >
                  View
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </ScrollReveal>
    </section>
  );
}

export default Projects;
