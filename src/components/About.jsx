import LetterReveal from "./LetterReveal";

function About() {
  return (
    <section id="about" className="relative px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60">
            ABOUT
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl section-heading-glow">
            <LetterReveal text="About " />
            <span className="instrument-serif bg-gradient-to-r from-[#8D0240] via-[#d11468] to-[#f3b2cc] bg-clip-text text-transparent">
              <LetterReveal text="Me" delay={0.22} />
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center text-white/75 backdrop-blur-xl shadow-[0_0_30px_rgba(141,2,64,0.10)] leading-8">
          I’m a Computer Science undergraduate with a strong passion for UI/UX
          design, front-end development, and building digital products that feel
          intuitive, elegant, and meaningful. I enjoy combining creativity with
          logic to craft experiences that are visually refined and user-focused,
          while continuously learning modern technologies and sharpening my
          skills as a developer and designer.
        </div>
      </div>
    </section>
  );
}

export default About;
