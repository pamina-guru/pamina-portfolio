import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm tracking-wide text-white/60">
          © 2026 Pamina Guruparan. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-xl text-white/60">
          <a
            href="https://github.com/pamina-guru"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-[#DA70D6] hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pamina-guruparan"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-[#DA70D6] hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
