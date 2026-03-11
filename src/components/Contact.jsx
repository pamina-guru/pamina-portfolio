import { motion } from "framer-motion";
import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-32 px-6 py-24">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="section-kicker mb-4 text-xs">Let&apos;s Connect</p>

          <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.15] text-slate-50 sm:text-5xl md:text-6xl">
            <LetterReveal text="Get in " />
            <span className="instrument-serif">
              <GradientTypeReveal text="Touch" delay={0.2} speed={0.05} />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I’m open to internships, collaborations, creative opportunities, and
            meaningful tech projects. Let’s build something impactful together.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="section-card rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Contact Details
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:pamiguru09@gmail.com"
                className="block rounded-2xl border border-slate-700/40 bg-slate-900/20 px-5 py-4 text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                pamiguru09@gmail.com
              </a>

              <a
                href="tel:+94716672616"
                className="block rounded-2xl border border-slate-700/40 bg-slate-900/20 px-5 py-4 text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                +94 71 667 2616
              </a>

              <a
                href="https://github.com/pamina-guru"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-700/40 bg-slate-900/20 px-5 py-4 text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/pamina-guruparan"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-700/40 bg-slate-900/20 px-5 py-4 text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="section-card rounded-[2rem] p-8">
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-slate-700/40 bg-[#0f223d]/70 px-5 py-4 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(100,217,255,0.08)]"
              />

              <input
                type="email"
                placeholder="Your email"
                className="rounded-2xl border border-slate-700/40 bg-[#0f223d]/70 px-5 py-4 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(100,217,255,0.08)]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="rounded-2xl border border-slate-700/40 bg-[#0f223d]/70 px-5 py-4 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(100,217,255,0.08)]"
              />

              <textarea
                rows="6"
                placeholder="Your message"
                className="resize-none rounded-2xl border border-slate-700/40 bg-[#0f223d]/70 px-5 py-4 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(100,217,255,0.08)]"
              />

              <div className="flex flex-wrap gap-4 pt-2">
                <motion.button
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 font-semibold text-slate-950 shadow-[0_0_24px_rgba(100,217,255,0.18)] transition duration-300"
                >
                  Send Message
                </motion.button>

                <motion.a
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/Pamina-Guruparan-CV.pdf"
                  download
                  className="rounded-2xl border border-cyan-400/30 bg-[#0f223d]/70 px-8 py-4 font-semibold text-cyan-300 transition duration-300 hover:border-cyan-300/50 hover:text-white"
                >
                  Download CV
                </motion.a>
              </div>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Contact;
