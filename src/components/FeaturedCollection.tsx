export function FeaturedCollection() {
  return (
    <section className="w-full py-20 px-6 bg-black">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
        {/* Text Content */}
        <div className="lg:w-1/3 flex flex-col items-start text-left shrink-0">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
            Featured Collection
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight uppercase mb-6">
            The Legacy<br />Collection
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
            Timeless style. Unmatched performance. Engineered for those who demand the best from their gear, day in and day out.
          </p>
          <button className="px-8 py-3.5 bg-white text-black font-semibold text-[11px] tracking-[0.15em] uppercase hover:bg-zinc-200 transition-colors">
            Shop Now
          </button>
        </div>

        {/* Image Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-2 w-full h-[500px] md:h-[600px]">
          <div 
            className="w-full h-full bg-zinc-900 bg-cover bg-center hover:opacity-90 transition-opacity cursor-pointer duration-300"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544007871-2ed144c1143c?q=80&w=600&auto=format&fit=crop')" }}
          />
          <div 
            className="w-full h-full bg-zinc-900 bg-cover bg-center hover:opacity-90 transition-opacity cursor-pointer duration-300"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618355283452-f472eb21e064?q=80&w=600&auto=format&fit=crop')" }}
          />
          <div 
            className="w-full h-full bg-zinc-900 bg-cover bg-center hover:opacity-90 transition-opacity cursor-pointer duration-300"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop')" }}
          />
        </div>
      </div>
    </section>
  );
}
