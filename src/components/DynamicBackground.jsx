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
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* soft base vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_40%),radial-gradient(circle_at_top,rgba(141,2,64,0.08),transparent_28%),#000]" />

      {/* floating liquid blobs */}
      <div className="liquid-blob blob-dark" />
      <div className="liquid-blob blob-murrey" />
      <div className="liquid-blob blob-light" />

      {/* cursor follower glow */}
      <div
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] transition-all duration-300 ease-out"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(141,2,64,0.12) 35%, rgba(0,0,0,0) 75%)",
        }}
      />

      {/* subtle moving grid */}
      <div className="subtle-grid absolute inset-0" />

      {/* dark vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.72)_100%)]" />
    </div>
  );
}

export default DynamicBackground;
