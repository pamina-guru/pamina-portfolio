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
        className="blob-orbit absolute left-[-8rem] top-[-5rem]"
        style={{
          transform: `translate(${smooth.x * 120}px, ${smooth.y * 95}px)`,
        }}
      >
        <div className="liquid liquid-one" />
      </div>

      <div
        className="blob-orbit absolute right-[-7rem] top-[10%]"
        style={{
          transform: `translate(${smooth.x * -135}px, ${smooth.y * 90}px)`,
        }}
      >
        <div className="liquid liquid-two" />
      </div>

      <div
        className="blob-orbit absolute left-[22%] bottom-[-9rem]"
        style={{
          transform: `translate(${smooth.x * 90}px, ${smooth.y * -115}px)`,
        }}
      >
        <div className="liquid liquid-three" />
      </div>

      <div
        className="absolute h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          left: `${(smooth.x + 0.5) * 100}%`,
          top: `${(smooth.y + 0.5) * 100}%`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(218,112,214,0.16) 22%, rgba(112,25,61,0.15) 44%, rgba(0,0,0,0) 74%)",
        }}
      />

      <div
        className="absolute h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{
          left: `${(-smooth.x * 0.35 + 0.5) * 100}%`,
          top: `${(-smooth.y * 0.35 + 0.5) * 100}%`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(200,162,200,0.11) 38%, rgba(112,25,61,0.08) 56%, rgba(0,0,0,0) 74%)",
        }}
      />

      <div className="liquid-grid absolute inset-0" />
      <div className="noise-layer absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_54%,rgba(0,0,0,0.22)_100%)]" />
    </div>
  );
}

export default DynamicBackground;
