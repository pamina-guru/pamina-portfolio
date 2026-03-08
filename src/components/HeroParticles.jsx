import { useMemo } from "react";

function HeroParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 110 }, (_, i) => ({
      id: i,
      size: Math.random() * 3.2 + 1.2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.65 + 0.3,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,0,24,0.10),rgba(0,0,0,0.38))]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.03),transparent_20%),radial-gradient(circle_at_40%_75%,rgba(255,255,255,0.025),transparent_24%)]" />

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="hero-particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default HeroParticles;
