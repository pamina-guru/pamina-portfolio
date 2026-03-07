import LetterRevealText from "./LetterReveal";

function SectionHeading({
  kicker,
  firstPart,
  highlightPart,
  align = "center",
}) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`mb-20 ${alignClass}`}>
      <p className="section-kicker mb-4 text-xs uppercase tracking-[0.35em] text-white/60">
        {kicker}
      </p>

      <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl section-heading-glow">
        <LetterRevealText
          as="span"
          text={firstPart}
          className="text-white"
          delay={0.05}
          speed={0.035}
        />
        <span> </span>
        <LetterRevealText
          as="span"
          text={highlightPart}
          className="instrument-serif bg-gradient-to-r from-[#8D0240] via-[#d11468] to-[#f3b2cc] bg-clip-text text-transparent"
          delay={0.25}
          speed={0.04}
        />
      </h2>
    </div>
  );
}

export default SectionHeading;
