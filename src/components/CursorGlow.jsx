import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[5] hidden h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        background:
          "radial-gradient(circle, rgba(100,217,255,0.10) 0%, rgba(56,189,248,0.07) 30%, rgba(15,34,61,0.05) 52%, rgba(0,0,0,0) 75%)",
      }}
    />
  );
}

export default CursorGlow;
