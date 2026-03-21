import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";
import ScrollReveal from "./ScrollReveal";

function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.user_name.trim() ||
      !formData.user_email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields before sending your message.",
      });
      return;
    }

    console.log("SERVICE ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log("FORM DATA:", formData);

    try {
      setIsSending(true);
      setStatus({ type: "", message: "" });

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      console.log("EMAILJS SUCCESS:", result);

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Thank you for reaching out.",
      });

      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EMAILJS FULL ERROR:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-shell scroll-mt-32 px-6 py-24">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="section-kicker mb-4 text-xs">Let&apos;s Connect</p>

          <h2 className="section-heading-glow overflow-visible pb-5 text-4xl font-bold leading-[1.15] text-slate-50 sm:text-5xl md:text-6xl">
            <LetterReveal text="Get in " />
            <span className="instrument-serif">
              <GradientTypeReveal text="Touch" delay={0.2} speed={0.05} />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I’m open to internships, collaborations, creative opportunities, and
            meaningful tech projects. Let’s build something impactful together.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="section-card rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Contact Details
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:pamiguru09@gmail.com"
                className="block rounded-2xl border border-slate-700/40 bg-slate-900/20 px-5 py-4 text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                pamiguru09@gmail.com
              </a>

              <a
                href="tel:+94740960209"
                className="block rounded-2xl border border-slate-700/40 bg-slate-900/20 px-5 py-4 text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                +94 74 096 0209
              </a>

              <a
                href="https://github.com/pamina-guru"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-700/40 bg-slate-900/20 px-5 py-4 text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/pamina-guruparan"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-700/40 bg-slate-900/20 px-5 py-4 text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="section-card rounded-[2rem] p-8"
          >
            <div className="grid gap-5">
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-2xl border border-slate-700/40 bg-[#0f223d]/70 px-5 py-4 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(100,217,255,0.08)]"
              />

              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Your email"
                className="rounded-2xl border border-slate-700/40 bg-[#0f223d]/70 px-5 py-4 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(100,217,255,0.08)]"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="rounded-2xl border border-slate-700/40 bg-[#0f223d]/70 px-5 py-4 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(100,217,255,0.08)]"
              />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="resize-none rounded-2xl border border-slate-700/40 bg-[#0f223d]/70 px-5 py-4 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(100,217,255,0.08)]"
              />

              <input type="hidden" name="to_name" value="Pamina Guruparan" />

              {status.message && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                      : "border-red-400/30 bg-red-500/10 text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="flex flex-wrap gap-4 pt-2">
                <motion.button
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSending}
                  className="rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 font-semibold text-slate-950 shadow-[0_0_24px_rgba(100,217,255,0.18)] transition duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </motion.button>

                <motion.a
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/Pamina-Guruparan-CV.pdf"
                  download
                  className="rounded-2xl border border-cyan-400/30 bg-[#0f223d]/70 px-8 py-4 font-semibold text-cyan-300 transition duration-300 hover:border-cyan-300/50 hover:text-white"
                >
                  Download CV
                </motion.a>
              </div>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Contact;
