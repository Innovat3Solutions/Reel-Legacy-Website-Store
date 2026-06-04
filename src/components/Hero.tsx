export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544552866-d3ed42536fcb?q=80&w=2000&auto=format&fit=crop')" }}
      >
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-zinc-300 uppercase mb-4">
            Premium Performance Apparel
          </p>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold leading-[0.85] tracking-tight uppercase mb-8">
            Built<br />Different.
          </h1>
          <div className="w-12 h-0.5 bg-white mb-8"></div>
          <p className="text-lg sm:text-xl text-zinc-200 font-light leading-relaxed mb-10 max-w-md">
            Designed for those who live it.<br />
            From sunrise to last cast.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold text-xs tracking-[0.15em] uppercase hover:bg-zinc-200 transition-colors text-center">
              Shop The Collection
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white text-white font-semibold text-xs tracking-[0.15em] uppercase hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Watch The Film
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
