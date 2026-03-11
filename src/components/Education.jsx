import { motion } from "framer-motion";
import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function Education() {
  const timelineItems = [
    {
      period: "2024 — Present",
      category: "Education",
      title: "Computer Science Undergraduate",
      subtitle: "Informatics Institute of Technology (IIT)",
      description:
        "Pursuing my BSc (Hons) in Computer Science while developing strengths in software engineering, front-end development, UI/UX, and modern web technologies.",
      tags: [
        "Computer Science",
        "Software Engineering",
        "UI/UX",
        "Web Development",
      ],
    },
    {
      period: "Ongoing",
      category: "Major Project",
      title: "UrbanRoots SDGP Project Member",
      subtitle: "Software Development Group Project",
      description:
        "Contributing to UrbanRoots, a smart urban gardening platform that combines sustainability, collaborative problem-solving, user-centered design, and real-world product thinking.",
      tags: ["UrbanRoots", "SDGP", "Team Collaboration", "Product Thinking"],
    },
    {
      period: "2025 — Present",
      category: "Achievement",
      title: "Leadership & Professional Growth",
      subtitle: "Student Leadership and Portfolio Building",
      description:
        "Actively building leadership, documentation, teamwork, and communication skills through student-led initiatives, technical projects, and professional branding.",
      tags: ["Leadership", "Communication", "Portfolio", "Teamwork"],
    },
  ];

  return (
    <section id="education" className="section-shell scroll-mt-32 px-6 py-24">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="section-kicker mb-4 text-xs">Journey</p>

          <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.15] text-slate-50 sm:text-5xl md:text-6xl">
            <LetterReveal text="Education & " />
            <span className="instrument-serif">
              <GradientTypeReveal
                text="Experience"
                delay={0.22}
                speed={0.045}
              />
            </span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl pl-12">
          <div className="timeline-line" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08} yOffset={40}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="section-card relative rounded-[2rem] p-7 md:p-8"
                >
                  <div className="timeline-dot" />

                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      {item.category}
                    </span>

                    <span className="rounded-full border border-slate-700/50 bg-slate-900/30 px-4 py-2 text-sm text-slate-300">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-lg text-slate-400">{item.subtitle}</p>

                  <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-slate-700/40 bg-[#0f223d]/75 px-4 py-2 text-sm text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Education;
