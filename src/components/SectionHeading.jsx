import LetterReveal from "./LetterReveal";
import GradientTypeReveal from "./GradientTypeReveal";

function SectionHeading({
  kicker,
  firstPart,
  highlightPart,
  align = "center",
}) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`mb-20 ${alignClass}`}>
      <p className="section-kicker mb-4 text-xs">{kicker}</p>

      <h2 className="section-heading-glow text-4xl font-bold text-slate-50 sm:text-5xl md:text-6xl">
        <LetterReveal text={`${firstPart} `} />
        <span className="instrument-serif">
          <GradientTypeReveal text={highlightPart} delay={0.2} speed={0.04} />
        </span>
      </h2>
    </div>
  );
}

export default SectionHeading;
