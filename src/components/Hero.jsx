import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import LetterReveal from "./LetterReveal";
import HeroParticles from "./HeroParticles";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-36 pb-12 text-white md:px-8 md:pt-40"
    >
      <HeroParticles />

      <div className="relative z-10 mx-auto grid min-h-[72vh] max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-4xl">
          <h1 className="signature-name hero-name-glow text-[3.4rem] leading-[1.02] text-white md:text-[5rem] xl:text-[5.8rem]">
            <LetterReveal text="Pamina Guruparan" />
          </h1>

          <p className="hero-subtitle mt-6 text-sm uppercase tracking-[0.28em] text-[#d11468] md:text-[15px]">
            Computer Science Undergraduate
          </p>

          <p className="hero-bio mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-[1.12rem]">
            I’m a Computer Science undergraduate passionate about building
            elegant digital experiences through UI/UX design and modern web
            development. I enjoy creating intuitive applications that combine
            creativity, usability, and clean engineering.
          </p>

          <div className="hero-actions mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#8D0240] to-[#d11468] px-8 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(209,20,104,0.45)]"
            >
              View Projects
            </a>

            <a
              href="/Pamina-Guruparan-CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white/90 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d11468]/60 hover:text-white"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-4 text-base font-semibold text-white/90 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              Contact Me
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
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <div className="hero-orb absolute h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(209,20,104,0.18)_0%,rgba(120,8,55,0.10)_45%,rgba(0,0,0,0)_75%)] blur-3xl" />

          <div className="relative h-[26rem] w-[26rem] rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_0_60px_rgba(141,2,64,0.18)]">
            <div className="absolute inset-[1.1rem] rounded-full border border-white/8 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),rgba(255,255,255,0.01)_35%,transparent_55%)]" />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(255,255,255,0.03)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-7xl font-semibold tracking-wide text-white/90">
                  PG
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/45">
                  Portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
