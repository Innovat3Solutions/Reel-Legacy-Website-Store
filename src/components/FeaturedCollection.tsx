import { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { Reveal } from './Reveal';

const tiles = [
  { image: '/images/clothing/hat.png', label: 'Camo Snapback' },
  { image: '/images/clothing/long-sleeve.png', label: 'Performance Long Sleeve' },
  { image: '/images/clothing/tshirt.png', label: 'Performance Tee' },
];

export function FeaturedCollection() {
  // null = all three equal; index = that tile expanded to show the full image.
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full py-16 sm:py-20 px-5 sm:px-6 bg-black">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-8 items-center">
        {/* Text Content */}
        <Reveal direction="right" className="lg:w-1/3 flex flex-col items-start text-left shrink-0">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
            Featured Collection
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight uppercase mb-6">
            The Legacy<br />Collection
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
            Timeless style. Unmatched performance. Engineered for those who demand the best from their gear, day in and day out.
          </p>
          <button className="px-8 py-4 sm:py-3.5 bg-white text-black font-semibold text-[11px] tracking-[0.15em] uppercase hover:bg-zinc-200 active:scale-[0.98] transition-all">
            Shop Now
          </button>
        </Reveal>

        {/* Expanding tiles — tap one to open the full image, tap again to collapse. Works on mobile + desktop. */}
        <div className="lg:w-2/3 w-full flex flex-row gap-2 h-[360px] sm:h-[480px] md:h-[600px]">
          {tiles.map((tile, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={tile.image}
                type="button"
                onClick={() => setActive(isActive ? null : i)}
                aria-label={isActive ? `Collapse ${tile.label}` : `Expand ${tile.label}`}
                aria-expanded={isActive}
                className={`group relative bg-zinc-950 overflow-hidden cursor-pointer min-w-0 transition-[flex-grow,flex-shrink] duration-500 ease-out ${isActive ? 'flex-[3]' : 'flex-1'}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={tile.image}
                  alt={tile.label}
                  className={`w-full h-full object-center transition-opacity duration-300 ${isActive ? 'object-contain' : 'object-cover'}`}
                />

                {/* Expand / collapse indicator — favicon R to expand, X to collapse */}
                <span className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors group-hover:bg-black/75">
                  {isActive ? (
                    <X size={15} strokeWidth={2} />
                  ) : (
                    <img src="/images/brand-r-white.png" alt="" className="w-4 h-auto" />
                  )}
                </span>

                {/* Label — always visible when expanded, on hover otherwise */}
                <span
                  className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left bg-gradient-to-t from-black/75 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                >
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-white">
                    {tile.label}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
