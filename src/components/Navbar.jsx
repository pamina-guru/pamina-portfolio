function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[1.4rem] border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-xl shadow-[0_0_24px_rgba(0,0,0,0.22)]">
        <a
          href="#home"
          className="allura-font text-3xl tracking-wide text-white"
        >
          Pamina
        </a>

        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-white/80">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#education" className="transition hover:text-white">
            Education
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="/Pamina-Guruparan-CV.pdf"
          download
          className="rounded-full border border-[#d11468]/70 px-5 py-2 text-sm font-semibold text-[#ffd3e6] transition duration-300 hover:bg-[#8D0240] hover:text-white hover:shadow-[0_0_18px_rgba(209,20,104,0.35)]"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
