import { Reveal } from './Reveal';

export function Lifestyle() {
  return (
    <section className="relative w-full h-[500px] md:h-[520px] flex items-center mb-2 overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="/images/hero/hero-section-4.png"
        alt=""
        className="absolute inset-y-0 right-0 h-full w-auto max-w-none object-contain opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6">
        <Reveal direction="right" className="max-w-xl text-left">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight uppercase mb-6 text-white">
            It's More Than<br />What You Wear.<br />It's How You Live.
          </h2>
          <p className="text-zinc-200/90 text-sm md:text-base leading-relaxed mb-9 max-w-md">
            Reel Legacy is for those who chase adventure, respect the ocean, and leave a legacy on and off the water.
          </p>
          <button className="px-9 py-4 sm:py-3.5 bg-white/90 text-black font-semibold text-[11px] tracking-[0.15em] uppercase hover:bg-white active:scale-[0.98] transition-all">
            Our Story
          </button>
        </Reveal>
      </div>
    </section>
  );
}
