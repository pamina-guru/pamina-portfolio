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
        x: prev.x + (target.x - prev.x) * 0.045,
        y: prev.y + (target.y - prev.y) * 0.045,
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
        className="blob-orbit absolute left-[-7rem] top-[-4rem]"
        style={{
          transform: `translate(${smooth.x * 120}px, ${smooth.y * 100}px)`,
        }}
      >
        <div className="liquid liquid-one" />
      </div>

      <div
        className="blob-orbit absolute right-[-6rem] top-[12%]"
        style={{
          transform: `translate(${smooth.x * -130}px, ${smooth.y * 95}px)`,
        }}
      >
        <div className="liquid liquid-two" />
      </div>

      <div
        className="blob-orbit absolute left-[28%] bottom-[-8rem]"
        style={{
          transform: `translate(${smooth.x * 85}px, ${smooth.y * -110}px)`,
        }}
      >
        <div className="liquid liquid-three" />
      </div>

      <div
        className="absolute h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          left: `${(smooth.x + 0.5) * 100}%`,
          top: `${(smooth.y + 0.5) * 100}%`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(224,70,150,0.18) 22%, rgba(150,20,80,0.16) 42%, rgba(0,0,0,0) 72%)",
        }}
      />

      <div
        className="absolute h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          left: `${(-smooth.x * 0.35 + 0.5) * 100}%`,
          top: `${(-smooth.y * 0.35 + 0.5) * 100}%`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(130,20,70,0.12) 38%, rgba(0,0,0,0) 72%)",
        }}
      />

      <div className="liquid-grid absolute inset-0" />
      <div className="noise-layer absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.22)_100%)]" />
    </div>
  );
}

export default DynamicBackground;
