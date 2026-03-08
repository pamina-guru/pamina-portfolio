import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function Education() {
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

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-white/75 backdrop-blur-xl shadow-[0_0_30px_rgba(141,2,64,0.10)]">
          <h3 className="text-2xl font-semibold text-white">
            BSc (Hons) Computer Science
          </h3>

          <p className="mt-2 text-[#f3b2cc]">
            Informatics Institute of Technology (IIT), Sri Lanka
          </p>

          <p className="mt-5 leading-8">
            Currently pursuing my undergraduate degree in Computer Science,
            building a strong foundation in software development, UI/UX design,
            and modern web technologies while actively working on academic and
            personal portfolio projects.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Education;
