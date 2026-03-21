import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 180;

      let current = "about";

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div
        className={`nav-surface mx-auto flex w-full max-w-7xl items-center justify-between rounded-[1.45rem] px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "shadow-[0_10px_40px_rgba(2,8,23,0.35)]"
            : "shadow-[0_0_22px_rgba(2,8,23,0.18)]"
        }`}
      >
        <a
          href="#home"
          className="allura-font text-3xl tracking-wide text-slate-50 transition duration-300 hover:text-cyan-300"
        >
          Pamina
        </a>

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-400/12 text-cyan-300 shadow-[0_0_18px_rgba(100,217,255,0.10)]"
                    : "text-slate-300 hover:bg-slate-800/40 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href="/Pamina Guruparan CV.pdf"
          download
          className="rounded-full border border-cyan-400/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-400/10 hover:text-white"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
