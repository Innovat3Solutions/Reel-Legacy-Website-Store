const images = [
  "https://images.unsplash.com/photo-1499540633125-484965b60031?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582559937955-7da6155a5b51?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80&auto=format&fit=crop",
]

export function Gallery() {
  return (
    <section className="w-full flex overflow-hidden h-[250px] sm:h-[300px]">
      {images.map((src, i) => (
        <div key={i} className="w-1/2 sm:w-1/5 h-full flex-shrink-0 overflow-hidden relative group">
          <img 
            src={src} 
            alt={`Lifestyle gallery ${i}`}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          {/* Overlay to show R logo icon faintly on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80 scale-75 group-hover:scale-100 transition-transform duration-300">
                <path d="M10 35L20 5H30L25 15H18L15 25H25L30 35H20L17 25H12L10 35Z" fill="currentColor"/>
              </svg>
          </div>
        </div>
      ))}
    </section>
  );
}
