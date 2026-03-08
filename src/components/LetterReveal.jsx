import { useEffect, useRef, useState } from "react";

function LetterReveal({
  text,
  className = "",
  delay = 0,
  speed = 0.04,
  noBlur = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`letter ${visible ? "letter-visible" : ""} ${
            noBlur ? "letter-no-blur" : ""
          }`}
          style={{ transitionDelay: `${delay + i * speed}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default LetterReveal;
