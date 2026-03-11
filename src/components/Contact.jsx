import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-32 px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-[-80px] h-72 w-72 rounded-full bg-[#70193D]/20 blur-[130px]" />
        <div className="absolute bottom-10 right-[-60px] h-80 w-80 rounded-full bg-[#DA70D6]/15 blur-[150px]" />
      </div>

      <ScrollReveal className="relative z-10 mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/60">
            LET&apos;S CONNECT
          </p>

          <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.2] sm:text-5xl md:text-6xl">
            <LetterReveal text="Get in " />
            <span className="instrument-serif">
              <GradientTypeReveal text="Touch" delay={0.2} speed={0.05} />
            </span>
          </h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-white/65">
            Feel free to reach out for internships, collaborations, projects or
            opportunities. I’d love to connect and create something meaningful!
          </p>

          <div className="mt-10 space-y-5 text-base sm:text-lg">
            <a
              href="tel:+94716672616"
              className="block text-white/80 transition duration-300 hover:text-[#C8A2C8]"
            >
              +94 71 667 2616
            </a>

            <a
              href="mailto:pamiguru09@gmail.com"
              className="block text-white/80 transition duration-300 hover:text-[#C8A2C8]"
            >
              pamiguru09@gmail.com
            </a>

            <a
              href="https://github.com/pamina-guru"
              target="_blank"
              rel="noreferrer"
              className="block text-white/80 transition duration-300 hover:text-[#C8A2C8]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pamina-guruparan"
              target="_blank"
              rel="noreferrer"
              className="block text-white/80 transition duration-300 hover:text-[#C8A2C8]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form className="space-y-6 rounded-[2rem] border border-[#DA70D6]/20 bg-white/[0.04] p-6 shadow-[0_0_35px_rgba(112,25,61,0.12)] backdrop-blur-xl md:p-8">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#DA70D6] focus:shadow-[0_0_0_3px_rgba(218,112,214,0.12)]"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#DA70D6] focus:shadow-[0_0_0_3px_rgba(218,112,214,0.12)]"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#DA70D6] focus:shadow-[0_0_0_3px_rgba(218,112,214,0.12)]"
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#DA70D6] focus:shadow-[0_0_0_3px_rgba(218,112,214,0.12)]"
          ></textarea>

          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#70193D] via-[#DA70D6] to-[#C8A2C8] shadow-[0_0_25px_rgba(218,112,214,0.35),0_0_60px_rgba(200,162,200,0.18)] transition duration-300 group-hover:shadow-[0_0_35px_rgba(218,112,214,0.5),0_0_80px_rgba(200,162,200,0.28)]" />
              <span className="absolute -left-16 top-0 h-full w-10 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[115%]" />
              <span className="relative z-10">Send Message</span>
            </button>

            <a
              href="/Pamina-Guruparan-CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-2xl border border-[#DA70D6]/55 bg-black/30 px-8 py-4 font-semibold text-[#C8A2C8] transition duration-300 hover:-translate-y-1 hover:border-[#DA70D6] hover:text-white hover:shadow-[0_0_28px_rgba(112,25,61,0.28)]"
            >
              Download CV
            </a>
          </div>
        </form>
      </ScrollReveal>
    </section>
  );
}

export default Contact;
