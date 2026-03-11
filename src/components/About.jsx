import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function About() {
  return (
    <section id="about" className="section-shell scroll-mt-32 px-6 py-24">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="section-kicker mb-4 text-xs">About</p>

          <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.15] text-slate-50 sm:text-5xl md:text-6xl">
            <LetterReveal text="About " />
            <span className="instrument-serif">
              <GradientTypeReveal text="Me" delay={0.18} speed={0.05} />
            </span>
          </h2>
        </div>

        <div className="section-card mx-auto max-w-4xl rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
            <div>
              <p className="text-lg leading-8 text-slate-300">
                I’m{" "}
                <span className="font-semibold text-slate-100">
                  Pamina Guruparan
                </span>
                , a Computer Science undergraduate with a growing focus on
                <span className="text-cyan-300"> UI/UX design</span>,
                <span className="text-cyan-300"> front-end development</span>,
                and building digital products that feel intuitive, polished, and
                meaningful.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                I enjoy combining creativity with logic to design interfaces and
                develop experiences that are visually refined, user-centered,
                and technically strong. I am especially interested in creating
                products that not only work well, but also leave a memorable and
                professional impression.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="soft-card rounded-3xl p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Focus Areas
                </p>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  UI/UX Design, Front-End Development, Responsive Interfaces,
                  Product Thinking
                </p>
              </div>

              <div className="soft-card rounded-3xl p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Strength
                </p>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  Blending clean design, thoughtful structure, and modern web
                  technologies into recruiter-ready projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default About;
