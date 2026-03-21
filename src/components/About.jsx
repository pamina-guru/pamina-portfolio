import { motion } from "framer-motion";
import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function About() {
  const highlights = [
    {
      title: "Interested in",
      content: "Full Stack Development",
      dotColor: "bg-cyan-400",
    },
    {
      title: "Open to",
      content: "Internships, remote opportunities & collaborations",
      dotColor: "bg-emerald-400",
    },
    {
      title: "Enjoy",
      content: "Working with teams and building meaningful products",
      dotColor: "bg-violet-400",
    },
    {
      title: "Driven by",
      content: "Learning, experimenting and continuously improving",
      dotColor: "bg-amber-400",
    },
  ];

  const strengths = [
    "Full Stack Development",
    "Team Collaboration",
    "Technical Writing",
    "Documentation",
    "Problem Solving",
    "Modern Web Technologies",
  ];

  return (
    <section
      id="about"
      className="section-shell scroll-mt-32 px-6 py-16 md:py-20"
    >
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="mb-14 text-center md:mb-16">
          <p className="section-kicker mb-4 text-xs">About</p>

          <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.15] text-slate-50 sm:text-5xl md:text-6xl">
            <LetterReveal text="About " />
            <span className="instrument-serif">
              <GradientTypeReveal text="Me" delay={0.18} speed={0.05} />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A quick snapshot of who I am, what I enjoy building, and the kind of
            opportunities I’m excited about.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            whileHover={{ y: -4 }}
            className="section-card rounded-[2rem] p-8 md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
              Profile
            </p>

            <h3 className="mt-5 text-2xl font-semibold text-slate-50 md:text-3xl">
              Computer Science undergraduate passionate about building modern,
              user-focused digital products.
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              I’m Pamina Guruparan, a Computer Science undergraduate with a
              strong interest in{" "}
              <span className="font-semibold tracking-[0.02em] text-cyan-300/90">
                full stack development
              </span>
              , creating complete web applications from front end to back end. I
              enjoy turning ideas into polished, functional products using clean
              code, thoughtful design, and modern technologies.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">
              I’m especially interested in working with{" "}
              <span className="font-medium text-slate-200">teams</span>,
              contributing to meaningful products, learning from collaboration,
              and growing through real-world development experiences.
            </p>

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Strengths
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {strengths.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-slate-700/40 bg-[#0f223d]/75 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {highlights.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08} yOffset={24}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="section-card rounded-[1.7rem] p-6"
                >
                  <p className="text-sm text-slate-400">{item.title}</p>

                  <div className="mt-3 flex items-start gap-3">
                    <span
                      className={`mt-2 h-3 w-3 rounded-full ${item.dotColor} shadow-[0_0_14px_rgba(255,255,255,0.16)]`}
                    />
                    <p className="text-xl leading-9 text-slate-100">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default About;
