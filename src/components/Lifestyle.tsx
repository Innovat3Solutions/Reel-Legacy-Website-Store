export function Lifestyle() {
  return (
    <section className="relative w-full h-[600px] flex items-center mb-2">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621360670977-9bf4a856be31?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-xl text-left">
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight uppercase mb-6 text-white">
            It's More Than<br />What You Wear.<br />It's How You Live.
          </h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-10 max-w-md">
            Reel Legacy is for those who chase adventure, respect the ocean, and leave a legacy on and off the water.
          </p>
          <button className="px-10 py-4 bg-white text-black font-semibold text-[11px] tracking-[0.15em] uppercase hover:bg-zinc-200 transition-colors">
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
}
