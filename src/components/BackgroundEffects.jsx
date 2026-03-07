function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">
      {/* animated aurora blobs */}
      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-[#8D0240]/30 blur-[140px] animate-blob1" />
      <div className="absolute right-[-80px] top-40 h-[28rem] w-[28rem] rounded-full bg-[#b10352]/25 blur-[150px] animate-blob2" />
      <div className="absolute bottom-[-100px] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#d11468]/20 blur-[140px] animate-blob3" />

      {/* moving grid */}
      <div className="absolute inset-0 moving-grid opacity-20" />

      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.72)_100%)]" />
    </div>
  );
}

export default BackgroundEffects;
