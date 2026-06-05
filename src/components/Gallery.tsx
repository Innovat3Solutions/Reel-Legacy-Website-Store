import { useState, useEffect, useRef } from 'react';
import { X, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Product = {
  image: string;
  name: string;
  color: string;
  price: string;
  description: string;
};

const products: Product[] = [
  {
    image: "/images/lifestyle/grey-long-sleeve.png",
    name: "Legacy Performance Long Sleeve",
    color: "Grey",
    price: "$54.99",
    description: "Lightweight UPF 50+ performance fabric built for long days on the water. Sweat-wicking, quick-drying, and made to move from sunrise to last cast.",
  },
  {
    image: "/images/lifestyle/camo-hat.png",
    name: "Legacy Camo Snapback",
    color: "White / Camo",
    price: "$34.99",
    description: "Water-repellent performance snapback with laser-cut ventilation and a structured camo brim. Adjustable fit, built to take a beating.",
  },
  {
    image: "/images/lifestyle/white-shirt.png",
    name: "Legacy Performance Tee",
    color: "White",
    price: "$39.99",
    description: "Premium heavyweight cotton-blend tee with a relaxed cut and subtle Reel Legacy branding. The everyday staple, engineered to last.",
  },
  {
    image: "/images/lifestyle/cooler.png",
    name: "Legacy Backpack Cooler",
    color: "Black",
    price: "$199.99",
    description: "Leakproof, fully-welded soft cooler with a backpack carry. Holds ice for days and keeps your hands free on the dock, the trail, or the boat.",
  },
  {
    image: "/images/lifestyle/tumbler-2.png",
    name: "Legacy 30oz Tumbler",
    color: "Matte Black",
    price: "$34.99",
    description: "The big one. Double-wall vacuum-insulated stainless steel with a sweat-free finish and laser-etched logo. Built for the long haul.",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<Product | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section className="w-full py-14 sm:py-16 bg-black">
        {/* Carousel header with arrow controls */}
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 flex items-end justify-between mb-6">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-2">
              Worn On The Water
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-white">
              Live The Lifestyle
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black active:scale-95 transition-all"
            >
              <ChevronLeft size={18} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black active:scale-95 transition-all"
            >
              <ChevronRight size={18} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {/* Scrollable track — the next card peeks in to signal there's more */}
        <div
          ref={trackRef}
          className="flex overflow-x-auto hide-scrollbar touch-scroll-x gap-3 sm:gap-4 px-5 sm:px-6 pb-1"
        >
          {products.map((product, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(product)}
              aria-label={`View ${product.name}`}
              className="snap-start w-[80%] sm:w-[44%] md:w-[31%] lg:w-[23.5%] aspect-[3/4] flex-shrink-0 overflow-hidden relative group cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              {/* Hover overlay (desktop): R mark + product name + view cue */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex flex-col items-center justify-center gap-2 px-3 text-center">
                <img
                  src="/images/brand-r-white.png"
                  alt="Reel Legacy"
                  className="w-10 h-auto scale-75 group-hover:scale-100 transition-transform duration-300"
                />
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white leading-tight">
                  {product.name}
                </span>
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/70 border-b border-white/40 pb-0.5">
                  View Product
                </span>
              </div>
              {/* Always-visible label (mobile): no hover, so surface the product name */}
              <div className="absolute inset-x-0 bottom-0 sm:hidden p-3 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white leading-tight text-left">
                  {product.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selected && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative w-full max-w-3xl bg-[#0f0f0f] border border-white/10 shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[92vh] sm:max-h-[90vh] rounded-t-2xl sm:rounded-none"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors"
            >
              <X size={18} strokeWidth={1.75} />
            </button>

            {/* Product Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-zinc-900 flex-shrink-0">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center text-left overflow-y-auto">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-3">
                Reel Legacy
              </p>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight uppercase text-white leading-tight mb-2">
                {selected.name}
              </h3>
              <p className="text-[11px] tracking-[0.1em] text-zinc-400 uppercase mb-5">
                {selected.color}
              </p>
              <p className="text-2xl font-semibold text-white mb-6">{selected.price}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                {selected.description}
              </p>
              <button className="w-full px-8 py-4 bg-white text-black font-semibold text-[11px] tracking-[0.15em] uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag size={15} strokeWidth={1.75} />
                Add To Cart
              </button>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
