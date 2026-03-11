import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-[#050c16]/80 px-6 py-8 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm tracking-wide text-slate-400">
          © 2026 Pamina Guruparan. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-xl text-slate-400">
          <a
            href="https://github.com/pamina-guru"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:scale-110 hover:text-cyan-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pamina-guruparan"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:scale-110 hover:text-cyan-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
