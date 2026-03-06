function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-10 h-72 w-72 rounded-full bg-[#8D0240]/30 blur-[120px]" />
        <div className="absolute right-10 top-1/3 h-80 w-80 rounded-full bg-[#b10352]/20 blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-[#d11468]/10 blur-[120px]" />
      </div>

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 inline-block rounded-full border border-[#d11468]/40 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.28em] text-[#f3b2cc] shadow-[0_0_25px_rgba(209,20,104,0.15)]">
            Welcome to my portfolio
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-[#ffffff] via-[#f5b6d0] to-[#d11468] bg-clip-text text-transparent">
              Pamina Guruparan
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            Computer Science Undergraduate, UI/UX Enthusiast, and Aspiring
            Full-Stack Developer creating elegant, interactive, and meaningful
            digital experiences.
          </p>

          {/* buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1"
            >
              {/* glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#8D0240] via-[#b10352] to-[#d11468] shadow-[0_0_25px_rgba(177,3,82,0.5),0_0_60px_rgba(209,20,104,0.25)] transition duration-300 group-hover:shadow-[0_0_35px_rgba(177,3,82,0.8),0_0_80px_rgba(209,20,104,0.4)]" />

              {/* shine sweep */}
              <span className="absolute -left-20 top-0 h-full w-10 rotate-12 bg-white/25 blur-md transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative z-10">View Projects</span>
            </a>

            <a
              href="/Pamina-Guruparan-CV.pdf"
              download
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#d11468]/60 bg-black/40 px-8 py-4 font-semibold text-[#ffd7e8] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#ff6fae] hover:text-white"
            >
              <span className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(209,20,104,0.18),transparent_70%)]" />
              <span className="absolute -left-20 top-0 h-full w-10 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />
              <span className="relative z-10">Download CV</span>
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white/80 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d11468]/60 hover:text-white hover:shadow-[0_0_30px_rgba(141,2,64,0.28)]"
            >
              <span className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-r from-[#8D0240]/20 via-[#b10352]/10 to-transparent" />
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>

          {/* stats */}
          <div className="mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#d11468]/60 hover:shadow-[0_0_30px_rgba(141,2,64,0.3)]">
              <h3 className="mb-2 text-4xl font-bold bg-gradient-to-b from-white to-[#f0a8c8] bg-clip-text text-transparent">
                4+
              </h3>
              <p className="tracking-wide text-white/65">Projects</p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#d11468]/60 hover:shadow-[0_0_30px_rgba(141,2,64,0.3)]">
              <h3 className="mb-2 text-4xl font-bold bg-gradient-to-b from-white to-[#f0a8c8] bg-clip-text text-transparent">
                2+
              </h3>
              <p className="tracking-wide text-white/65">Years Coding</p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#d11468]/60 hover:shadow-[0_0_30px_rgba(141,2,64,0.3)]">
              <h3 className="mb-2 text-4xl font-bold bg-gradient-to-b from-white to-[#f0a8c8] bg-clip-text text-transparent">
                3
              </h3>
              <p className="tracking-wide text-white/65">Tech Stacks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
