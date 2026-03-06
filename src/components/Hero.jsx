function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black text-white px-8">
      <div className="max-w-4xl">
        {/* Name */}
        <h1 className="signature-name text-7xl md:text-8xl text-white">
          Pamina Guruparan
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-[#d11468] tracking-[0.2em] uppercase text-sm">
          Computer Science Undergraduate
        </p>

        {/* Bio */}
        <p className="mt-8 text-white/70 text-lg max-w-2xl leading-relaxed">
          I’m a Computer Science undergraduate passionate about building elegant
          digital experiences through UI/UX design and modern web development. I
          enjoy creating intuitive applications that combine creativity,
          usability, and clean engineering.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6 flex-wrap">
          {/* View Projects */}
          <a
            href="#projects"
            className="px-8 py-3 rounded-full text-white font-semibold
            bg-gradient-to-r from-[#8D0240] to-[#d11468]
            hover:scale-105 active:scale-95
            transition duration-300
            shadow-[0_0_25px_rgba(209,20,104,0.5)]"
          >
            View Projects
          </a>

          {/* Download CV */}
          <a
            href="/Pamina-Guruparan-CV.pdf"
            download
            className="px-8 py-3 rounded-full font-semibold
            border border-[#d11468]
            text-[#ffd3e6]
            hover:bg-gradient-to-r hover:from-[#8D0240] hover:to-[#d11468]
            hover:text-white
            hover:scale-105 active:scale-95
            transition duration-300
            shadow-[0_0_18px_rgba(209,20,104,0.3)]"
          >
            Download CV
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold
            bg-white/10
            hover:bg-white/20
            hover:scale-105 active:scale-95
            transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
