import { useEffect, useRef, useState } from "react";

function DynamicBackground() {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [smooth, setSmooth] = useState({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setTarget({ x, y });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setSmooth((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.04,
        y: prev.y + (target.y - prev.y) * 0.04,
      }));

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute left-[-10rem] top-[-6rem] h-[26rem] w-[26rem] rounded-full blur-[120px]"
        style={{
          transform: `translate(${smooth.x * 110}px, ${smooth.y * 90}px)`,
          background:
            "radial-gradient(circle, rgba(100,217,255,0.10) 0%, rgba(15,34,61,0.08) 45%, transparent 75%)",
        }}
      />

      <div
        className="absolute right-[-8rem] top-[10%] h-[24rem] w-[24rem] rounded-full blur-[130px]"
        style={{
          transform: `translate(${smooth.x * -120}px, ${smooth.y * 85}px)`,
          background:
            "radial-gradient(circle, rgba(125,211,252,0.10) 0%, rgba(17,34,64,0.08) 48%, transparent 75%)",
        }}
      />

      <div
        className="absolute bottom-[-10rem] left-[20%] h-[25rem] w-[25rem] rounded-full blur-[130px]"
        style={{
          transform: `translate(${smooth.x * 90}px, ${smooth.y * -110}px)`,
          background:
            "radial-gradient(circle, rgba(56,189,248,0.08) 0%, rgba(10,25,47,0.05) 45%, transparent 75%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black 38%, transparent 90%)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(2,6,23,0.32)_100%)]" />
    </div>
  );
}

export default DynamicBackground;
