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
          "radial-gradient(circle, rgba(209,20,104,0.13) 0%, rgba(141,2,64,0.08) 35%, rgba(255,255,255,0.03) 55%, rgba(0,0,0,0) 75%)",
      }}
    />
  );
}

export default CursorGlow;
