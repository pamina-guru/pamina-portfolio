import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import LetterReveal from "./LetterReveal";
import HeroParticles from "./HeroParticles";
import ScrollReveal from "./ScrollReveal";

function Hero() {
  const { scrollY } = useScroll();
  const yOrb = useTransform(scrollY, [0, 500], [0, -50]);
  const yContent = useTransform(scrollY, [0, 500], [0, 25]);
  const opacityContent = useTransform(scrollY, [0, 320], [1, 0.2]);

  const stats = [
    { value: "6+", label: "Projects" },
    { value: "2+", label: "Years Coding" },
  ];

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden px-6 pb-2 pt-28 md:px-8 md:pt-40"
    >
      <HeroParticles />

      <div className="relative z-10 mx-auto grid min-h-[80vh] max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          style={{ y: yContent, opacity: opacityContent }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-cyan-300 sm:text-sm sm:tracking-[0.35em]">
            Computer Science Undergraduate
          </p>

          <h1 className="hero-name-glow signature-name text-[3rem] leading-[0.95] text-slate-50 sm:text-[4.5rem] md:text-[5rem] xl:text-[6rem]">
            <span className="hidden whitespace-nowrap sm:block">
              <LetterReveal text="Pamina Guruparan" />
            </span>

            <span className="block sm:hidden">
              <span className="block whitespace-nowrap">
                <LetterReveal text="Pamina" />
              </span>
              <span className="block whitespace-nowrap">
                <LetterReveal text="Guruparan" delay={0.18} />
              </span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Computer Science undergraduate with a strong passion for{" "}
            <span className="font-semibold text-cyan-300">
              full stack development
            </span>
            , building complete web applications from front end to back end.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(100,217,255,0.18)] sm:px-8 sm:py-4"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-slate-600/50 bg-[#0f223d]/70 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-md transition duration-300 hover:border-cyan-400/35 hover:text-white sm:px-8 sm:py-4"
            >
              Contact Me
            </a>

            <a
              href="/Pamina-Guruparan-CV.pdf"
              download
              className="rounded-2xl border border-cyan-400/25 px-6 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:border-cyan-300/45 hover:text-white sm:px-8 sm:py-4"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/pamina-guru"
              target="_blank"
              rel="noreferrer"
              className="hero-social-circle"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pamina-guruparan"
              target="_blank"
              rel="noreferrer"
              className="hero-social-circle"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:pamiguru09@gmail.com"
              className="hero-social-circle"
              aria-label="Email"
            >
              <HiOutlineMail />
            </a>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 mb-10 grid gap-4 sm:grid-cols-2">
              {stats.map((stat, i) => (
                <div key={i} className="section-card rounded-[1.6rem] p-5">
                  <p className="text-3xl font-bold text-slate-50">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </motion.div>

        <motion.div
          style={{ y: yOrb }}
          className="mt-6 flex items-center justify-center sm:mt-10 lg:mt-0"
        >
          <div className="relative flex h-[11rem] w-[11rem] items-center justify-center rounded-full border border-slate-700/40 bg-[#0f223d]/70 backdrop-blur-md sm:h-[14rem] sm:w-[14rem] lg:h-[18rem] lg:w-[18rem]">
            <img
              src="/profile.jpeg"
              alt="Pamina Guruparan"
              className="h-[8.5rem] w-[8.5rem] rounded-full border-4 border-cyan-400/30 object-cover shadow-[0_0_25px_rgba(100,217,255,0.25)] sm:h-[11rem] sm:w-[11rem] lg:h-[13.5rem] lg:w-[13.5rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
