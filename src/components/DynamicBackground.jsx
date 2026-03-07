import { useEffect, useState } from "react";

function DynamicBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* animated blobs */}
      <div className="liquid liquid-one" />
      <div className="liquid liquid-two" />
      <div className="liquid liquid-three" />

      {/* mouse glow */}
      <div
        className="absolute h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-all duration-300 ease-out"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(220,40,120,0.14) 28%, rgba(141,2,64,0.10) 45%, rgba(0,0,0,0) 72%)",
        }}
      />

      {/* moving grid */}
      <div className="liquid-grid absolute inset-0" />

      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.42)_100%)]" />
    </div>
  );
}

export default DynamicBackground;
