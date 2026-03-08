import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
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
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-[1.45rem] border border-white/10 px-6 py-4 backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? "bg-black/45 shadow-[0_10px_40px_rgba(0,0,0,0.28)]"
            : "bg-black/22 shadow-[0_0_24px_rgba(0,0,0,0.18)]"
        }`}
      >
        <a
          href="#home"
          className="allura-font text-3xl tracking-wide text-white transition duration-300 hover:text-[#ffd8e7]"
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
                    ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.06)]"
                    : "text-white/75 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
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
