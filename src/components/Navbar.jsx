function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="w-full pl-8 pr-10 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-3xl text-white allura-font tracking-wide"
        >
          Pamina
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-[#d11468] transition">
            About
          </a>

          <a href="#projects" className="hover:text-[#d11468] transition">
            Projects
          </a>

          <a href="#education" className="hover:text-[#d11468] transition">
            Education
          </a>

          <a href="#skills" className="hover:text-[#d11468] transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-[#d11468] transition">
            Contact
          </a>

          <a
            href="/Pamina-Guruparan-CV.pdf"
            download
            className="ml-4 px-5 py-2 rounded-full border border-[#d11468] text-[#f3b2cc] hover:bg-[#8D0240] hover:text-white transition duration-300 shadow-[0_0_10px_rgba(141,2,64,0.4)]"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
