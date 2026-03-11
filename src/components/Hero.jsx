import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import LetterReveal from "./LetterReveal";
import HeroParticles from "./HeroParticles";

function Hero() {
  const { scrollY } = useScroll();
  const yOrb = useTransform(scrollY, [0, 500], [0, -100]);
  const yContent = useTransform(scrollY, [0, 500], [0, 50]);
  const opacityContent = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden px-6 pt-36 pb-12 text-white md:px-8 md:pt-40"
    >
      <HeroParticles />

      <div className="relative z-10 mx-auto grid min-h-[72vh] max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="max-w-4xl"
          style={{ y: yContent, opacity: opacityContent }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={itemVariants}
            className="signature-name hero-name-glow text-[3.4rem] leading-[1.02] text-white md:text-[5rem] xl:text-[5.8rem]"
          >
            <LetterReveal text="Pamina Guruparan" />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm uppercase tracking-[0.28em] text-[#DA70D6] md:text-[15px]"
          >
            Computer Science Undergraduate
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-[1.12rem]"
          >
            I’m a Computer Science undergraduate passionate about building
            elegant digital experiences through UI/UX design and modern web
            development. I enjoy creating intuitive applications that combine
            creativity, usability, and clean engineering.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-5">
            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#70193D] to-[#DA70D6] px-8 py-4 text-base font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(218,112,214,0.35)]"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="/Pamina-Guruparan-CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white/90 backdrop-blur-md transition-colors duration-300 hover:border-[#DA70D6]/60 hover:text-white"
            >
              Download CV
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-4 text-base font-semibold text-white/90 backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.08]"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-4">
            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              href="https://github.com/pamina-guru"
              target="_blank"
              rel="noreferrer"
              className="hero-social-circle"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              href="https://www.linkedin.com/in/pamina-guruparan"
              target="_blank"
              rel="noreferrer"
              className="hero-social-circle"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              href="mailto:pamiguru09@gmail.com"
              className="hero-social-circle"
              aria-label="Email"
            >
              <HiOutlineMail />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yOrb }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="hero-orb absolute h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(218,112,214,0.18)_0%,rgba(112,25,61,0.10)_45%,rgba(0,0,0,0)_75%)] blur-3xl" />

          <div className="relative h-[26rem] w-[26rem] rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_0_60px_rgba(112,25,61,0.18)]">
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
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
