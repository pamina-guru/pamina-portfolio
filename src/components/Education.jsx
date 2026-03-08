import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function Education() {
  const educationItems = [
    {
      year: "2024 — Present",
      title: "Computer Science Undergraduate",
      subtitle: "Informatics Institute of Technology (IIT)",
      description:
        "Pursuing my BSc (Hons) in Computer Science with a strong focus on full-stack development, software engineering principles, UI/UX design, and modern web technologies.",
      tags: ["Java", "Python", "React.js", "PostgreSQL"],
    },
    {
      year: "Ongoing",
      title: "UrbanRoots SDGP Project Member",
      subtitle: "Software Development Group Project (SDGP)",
      description:
        "Contributing as a team member to UrbanRoots, a smart urban gardening platform focused on sustainable living, collaborative problem-solving, user-centered design, and modern software development practices.",
      tags: ["UrbanRoots", "SDGP", "UI/UX", "Team Project"],
    },
  ];

  return (
    <section
      id="education"
      className="relative scroll-mt-32 px-6 py-24 text-white"
    >
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60">
            EDUCATION
          </p>

          <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.2] sm:text-5xl md:text-6xl">
            <LetterReveal text="My " />
            <span className="instrument-serif">
              <GradientTypeReveal text="Education" delay={0.22} speed={0.045} />
            </span>
          </h2>
        </div>

        <div className="education-timeline relative mx-auto max-w-6xl">
          <div className="education-line hidden md:block" />

          <div className="space-y-10">
            {educationItems.map((item, index) => (
              <div
                key={index}
                className={`education-row relative md:grid md:grid-cols-[220px_40px_1fr] md:gap-6 ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div className="hidden md:flex md:items-start md:justify-end md:pt-8">
                  <span className="rounded-full border border-[#d11468]/30 bg-[#8D0240]/10 px-4 py-2 text-sm font-medium text-[#f3b2cc] backdrop-blur-md">
                    {item.year}
                  </span>
                </div>

                <div className="relative hidden md:flex md:justify-center">
                  <div className="education-dot mt-10" />
                </div>

                <article className="education-card relative overflow-visible rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_0_35px_rgba(141,2,64,0.10)] backdrop-blur-xl transition duration-500 md:p-9">
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_bottom,rgba(209,20,104,0.08),transparent_45%)] opacity-70" />

                  <div className="relative z-10">
                    <div className="mb-4 md:hidden">
                      <span className="rounded-full border border-[#d11468]/30 bg-[#8D0240]/10 px-4 py-2 text-sm font-medium text-[#f3b2cc] backdrop-blur-md">
                        {item.year}
                      </span>
                    </div>

                    <div className="max-w-4xl">
                      <h3 className="text-2xl font-bold text-white md:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-lg text-white/50 md:text-[1.35rem]">
                        {item.subtitle}
                      </p>

                      <p className="mt-6 max-w-4xl text-base leading-8 text-white/65 md:text-lg md:leading-9">
                        {item.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Education;
