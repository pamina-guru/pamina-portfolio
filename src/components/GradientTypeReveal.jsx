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
  const start = hexToRgb("#64d9ff");
  const mid = hexToRgb("#7dd3fc");
  const end = hexToRgb("#e2e8f0");

  if (length <= 1) return ["#7dd3fc"];

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
    return getGradientColors(text.split("").length);
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
