import { useEffect, useMemo, useRef, useState } from "react";

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function rgbToHex({ r, g, b }) {
  const toHex = (v) => v.toString(16).padStart(2, "0");
  return `#${toHex(Math.round(r))}${toHex(Math.round(g))}${toHex(Math.round(b))}`;
}

function mixColor(a, b, t) {
  return {
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
  };
}

function getGradientColors(length) {
  const start = hexToRgb("#8D0240");
  const mid = hexToRgb("#d11468");
  const end = hexToRgb("#f3b2cc");

  if (length <= 1) return ["#d11468"];

  return Array.from({ length }, (_, i) => {
    const t = i / (length - 1);

    if (t < 0.5) {
      const localT = t / 0.5;
      return rgbToHex(mixColor(start, mid, localT));
    }

    const localT = (t - 0.5) / 0.5;
    return rgbToHex(mixColor(mid, end, localT));
  });
}

function GradientTypeReveal({
  text,
  delay = 0,
  speed = 0.045,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const colors = useMemo(() => {
    const lettersOnly = text.split("");
    return getGradientColors(lettersOnly.length);
  }, [text]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`gradient-reveal-word ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`gradient-reveal-letter ${
            visible ? "gradient-reveal-letter-visible" : ""
          }`}
          style={{
            transitionDelay: `${delay + i * speed}s`,
            color: colors[i],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default GradientTypeReveal;
