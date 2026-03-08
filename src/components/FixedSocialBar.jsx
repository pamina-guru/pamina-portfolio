import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function FixedSocialBar() {
  return (
    <div className="fixed bottom-8 right-6 z-[60] hidden lg:flex flex-col items-center gap-5">
      <a
        href="https://github.com/pamina-guru"
        target="_blank"
        rel="noreferrer"
        className="hero-side-social-btn"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/pamina-guruparan"
        target="_blank"
        rel="noreferrer"
        className="hero-side-social-btn"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="mailto:pamiguru09@gmail.com"
        className="hero-side-social-btn"
        aria-label="Email"
      >
        <HiOutlineMail />
      </a>

      <div className="hero-side-line" />
    </div>
  );
}

export default FixedSocialBar;
