import { motion } from "framer-motion";
import urbanroots from "../../images/UrbanRoots.png";
import saasProductivity from "../../images/saas-productivity.jpg";
import movieStreaming from "../../images/movie-streaming.png";
import travelExplorer from "../../images/travel-explorer.png";
import traffic from "../../images/traffic.png";
import climaCache from "../../images/climacache.png";
import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function Projects() {
  const projects = [
    {
      title: "UrbanRoots",
      description:
        "A smart urban gardening platform focused on sustainable living, plant tracking, AI-assisted recommendations, and user-centered product thinking.",
      tech: ["Flutter", "Next.js", "PostgreSQL", "TensorFlow"],
      image: urbanroots,
      github: "#",
    },
    {
      title: "ClimaCache",
      description:
        "A full-stack weather application with real-time weather data, Redis caching, dynamic UI changes based on weather conditions, and a responsive modern interface.",
      tech: ["React", "Node.js", "Redis", "Weather API"],
      image: climaCache,
      github: "https://github.com/pamina-guru/climacache",
    },
    {
      title: "SaaS Productivity Platform",
      description:
        "A portfolio-grade productivity system with authentication, task workflows, dashboards, and clean modern UI for organized productivity management.",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
      image: saasProductivity,
      github: "https://github.com/pamina-guru/saas-productivity-platform-",
    },
    {
      title: "Movie Streaming Web App",
      description:
        "A Netflix-style responsive movie platform with authentication, dynamic content browsing, and integrated trailer playback with polished interactions.",
      tech: ["React", "Firebase", "Tailwind", "REST API"],
      image: movieStreaming,
      github: "https://github.com/pamina-guru/netflix-clone",
    },
    {
      title: "Travel Destination Explorer",
      description:
        "A travel discovery interface that allows users to explore destinations through responsive layouts, search functionality, and visually engaging UI.",
      tech: ["React", "Tailwind", "REST API"],
      image: travelExplorer,
      github: "https://github.com/pamina-guru/travel-destination-explorer",
    },
    {
      title: "Traffic Data Analysis System",
      description:
        "A Python-based data analysis application that processes traffic information and generates meaningful statistics with graphical visualization.",
      tech: ["Python", "Tkinter", "Data Analysis"],
      image: traffic,
      github: "https://github.com/pamina-guru/traffic-analysis-system",
    },
  ];

  return (
    <section id="projects" className="section-shell scroll-mt-32 px-6 py-24">
      <ScrollReveal className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="section-kicker mb-4 text-xs">Featured Work</p>

          <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.15] text-slate-50 sm:text-5xl md:text-6xl">
            <LetterReveal text="Featured " />
            <span className="instrument-serif">
              <GradientTypeReveal text="Projects" delay={0.2} speed={0.045} />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A collection of projects that reflect my growth in product design,
            front-end development, full-stack implementation, and visual
            presentation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.06} yOffset={40}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group section-card overflow-hidden rounded-[1.8rem]"
              >
                <div className="relative overflow-hidden border-b border-slate-700/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/85 via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-50">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-slate-700/50 bg-[#0f223d]/80 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_20px_rgba(100,217,255,0.18)]"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Projects;
