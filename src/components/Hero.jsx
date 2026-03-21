import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import LetterReveal from "./LetterReveal";
import HeroParticles from "./HeroParticles";
import ScrollReveal from "./ScrollReveal";

function Hero() {
  const { scrollY } = useScroll();
  const yOrb = useTransform(scrollY, [0, 500], [0, -60]);
  const yContent = useTransform(scrollY, [0, 500], [0, 30]);
  const opacityContent = useTransform(scrollY, [0, 320], [1, 0.2]);

  const stats = [
    { value: "6+", label: "Projects" },
    { value: "2+", label: "Years Coding" },
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
        {/* LEFT CONTENT */}
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

          {/* BUTTONS */}
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

          {/* SOCIAL ICONS */}
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
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.08 }}
              href="https://www.linkedin.com/in/pamina-guruparan"
              target="_blank"
              rel="noreferrer"
              className="hero-social-circle"
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.08 }}
              href="mailto:pamiguru09@gmail.com"
              className="hero-social-circle"
            >
              <HiOutlineMail />
            </motion.a>
          </motion.div>

          {/* STATS */}
          <ScrollReveal delay={0.2} yOffset={35} className="mt-12">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
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

        {/* RIGHT SIDE PROFILE CIRCLE */}
        <motion.div
          style={{ y: yOrb }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
          className="relative hidden items-center justify-center lg:flex"
        >
          {/* Glow */}
          <div className="absolute h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(100,217,255,0.25)_0%,rgba(56,189,248,0.10)_45%,rgba(0,0,0,0)_75%)] blur-2xl" />

          {/* Circle */}
          <div className="relative flex h-[18rem] w-[18rem] items-center justify-center rounded-full border border-slate-700/40 bg-[#0f223d]/70 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.4)]">
            {/* Inner ring */}
            <div className="absolute inset-[10px] rounded-full border border-cyan-400/20" />

            {/* Profile image */}
            <img
              src="/profile.jpeg"
              alt="Pamina Guruparan"
              className="h-[13.5rem] w-[13.5rem] rounded-full object-cover border-4 border-cyan-400/30 shadow-[0_0_35px_rgba(100,217,255,0.35)] transition duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
