import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import LetterReveal from "./LetterReveal";
import HeroParticles from "./HeroParticles";
import ScrollReveal from "./ScrollReveal";

function Hero() {
  const { scrollY } = useScroll();
  const yOrb = useTransform(scrollY, [0, 500], [0, -70]);
  const yContent = useTransform(scrollY, [0, 500], [0, 35]);
  const opacityContent = useTransform(scrollY, [0, 320], [1, 0.15]);

  const stats = [
    { value: "6+", label: "Projects" },
    { value: "2+", label: "Years Coding" },
    { value: "3", label: "Tech Stacks" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden px-6 pb-16 pt-36 md:px-8 md:pt-40"
    >
      <HeroParticles />

      <div className="relative z-10 mx-auto grid min-h-[80vh] max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="max-w-4xl"
          style={{ y: yContent, opacity: opacityContent }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={itemVariants}
            className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-300"
          >
            Computer Science Undergraduate
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="hero-name-glow signature-name text-[3.6rem] leading-[0.98] text-slate-50 md:text-[5rem] xl:text-[6rem]"
          >
            <LetterReveal text="Pamina Guruparan" />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-[1.12rem]"
          >
            Computer Science undergraduate with a strong passion for{" "}
            <span className="font-semibold text-cyan-300/90 tracking-[0.02em]">
              full stack development
            </span>
            , building complete web applications from front end to back end.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_0_28px_rgba(100,217,255,0.18)]"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="rounded-2xl border border-slate-600/50 bg-[#0f223d]/70 px-8 py-4 text-base font-semibold text-slate-100 backdrop-blur-md transition duration-300 hover:border-cyan-400/35 hover:text-white"
            >
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="/Pamina-Guruparan-CV.pdf"
              download
              className="rounded-2xl border border-cyan-400/25 bg-transparent px-8 py-4 text-base font-semibold text-cyan-300 transition duration-300 hover:border-cyan-300/45 hover:text-white"
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-4"
          >
            <motion.a
              whileHover={{ y: -4, scale: 1.08 }}
              href="https://github.com/pamina-guru"
              target="_blank"
              rel="noreferrer"
              className="hero-social-circle"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.08 }}
              href="https://www.linkedin.com/in/pamina-guruparan"
              target="_blank"
              rel="noreferrer"
              className="hero-social-circle"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.08 }}
              href="mailto:pamiguru09@gmail.com"
              className="hero-social-circle"
              aria-label="Email"
            >
              <HiOutlineMail />
            </motion.a>
          </motion.div>

          <ScrollReveal delay={0.2} yOffset={35} className="mt-12">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.12, duration: 0.55 }}
                  whileHover={{ y: -4 }}
                  className="section-card rounded-[1.6rem] p-5"
                >
                  <p className="text-3xl font-bold text-slate-50">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </motion.div>

        <motion.div
          style={{ y: yOrb }}
          initial={{ opacity: 0, scale: 0.84 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.35 }}
          className="relative hidden items-center justify-center lg:flex"
        >
          <div className="hero-orb absolute h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(100,217,255,0.18)_0%,rgba(56,189,248,0.10)_45%,rgba(0,0,0,0)_74%)] blur-3xl" />

          <div className="section-card relative h-[29rem] w-[29rem] rounded-full border border-slate-700/40">
            <div className="absolute inset-[1.15rem] rounded-full border border-slate-600/30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),rgba(255,255,255,0.01)_35%,transparent_55%)]" />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_100px_rgba(255,255,255,0.03)]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-7xl font-semibold tracking-wide text-slate-50">
                  PG
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-400">
                  Developer Portfolio
                </p>
                <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
