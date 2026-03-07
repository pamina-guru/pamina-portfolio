function Projects() {
  const projects = [
    {
      title: "UrbanRoots",
      description:
        "A smart urban gardening mobile app that enables plant tracking, IoT integration, and AI-based recommendations for sustainable home gardening.",
      tech: ["Flutter", "Next.js", "PostgreSQL", "TensorFlow"],
      image: "/projects/urbanroots.png",
      github: "#",
    },
    {
      title: "Event Management Platform",
      description:
        "A full-stack event platform where users can browse and register for events while administrators securely manage listings using REST APIs.",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
      image: "/projects/event-platform.png",
      github: "#",
    },
    {
      title: "SaaS Productivity Platform",
      description:
        "A full-stack productivity system featuring authentication, task management, and dashboards for efficient workflow tracking.",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
      image: "/projects/saas-productivity.png",
      github: "#",
    },
    {
      title: "Movie Streaming Web App",
      description:
        "A Netflix-style movie platform with authentication, dynamic browsing, and integrated trailer playback in a responsive UI.",
      tech: ["React", "Firebase", "Tailwind", "REST API"],
      image: "/projects/movie-streaming.png",
      github: "#",
    },
    {
      title: "Travel Destination Explorer",
      description:
        "A responsive travel discovery app that allows users to explore destinations through dynamic search and detailed API-driven pages.",
      tech: ["React", "Tailwind", "REST API"],
      image: "/projects/travel-explorer.png",
      github: "#",
    },
    {
      title: "Traffic Data Analysis System",
      description:
        "A Python application that analyzes traffic datasets and generates vehicle statistics with Tkinter-based histogram visualizations.",
      tech: ["Python", "Tkinter", "Data Analysis"],
      image: "/projects/traffic-analysis.png",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="relative bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60">
            PORTFOLIO
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="text-white">Featured </span>
            <span className="instrument-serif bg-gradient-to-r from-[#8D0240] via-[#d11468] to-[#f3b2cc] bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-[#d11468]/40 hover:shadow-[0_0_30px_rgba(141,2,64,0.25)]"
            >
              {/* Image */}
              <div className="overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>

                <p className="mb-6 text-sm leading-7 text-white/65">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#8D0240] via-[#b10352] to-[#d11468] px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:shadow-[0_0_20px_rgba(177,3,82,0.6)]"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
