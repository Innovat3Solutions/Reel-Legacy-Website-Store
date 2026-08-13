import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { ProductCard } from '../components/ProductCard';
import {
  CATEGORY_LABELS,
  formatPrice,
  getSizes,
  products,
} from '../data/products';

export function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState<string | null>(null);

  // Unknown slug — keep the user in the store rather than dead-ending.
  if (!product) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-heading text-4xl font-bold uppercase text-white mb-4">Not Found</h1>
        <p className="text-zinc-400 text-sm mb-8">We couldn't find that product.</p>
        <Link
          to="/shop"
          className="px-8 py-3.5 bg-white text-black font-semibold text-[11px] tracking-[0.15em] uppercase hover:bg-zinc-200 transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const sizes = getSizes(product);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft size={14} strokeWidth={2} /> Back to Shop
        </Link>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Image */}
          <Reveal direction="right" className="lg:w-1/2">
            <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.1em] uppercase bg-white text-black px-2.5 py-1">
                  {product.badge}
                </span>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal direction="left" className="lg:w-1/2 flex flex-col items-start text-left lg:pt-6">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
              {CATEGORY_LABELS[product.category]}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-[0.95] tracking-tight uppercase text-white mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-white mb-6">{formatPrice(product.price)}</p>
            <p className="text-[10px] tracking-[0.15em] uppercase text-zinc-500 mb-8">
              Color — {product.color}
            </p>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-md">
              Engineered for those who demand the best from their gear, day in and day out.
              Timeless style, unmatched performance — built to outlast the day on the water.
            </p>

            {/* Size selector — apparel shows the full S–3XL run; headwear is one-size */}
            {sizes.length > 0 && (
              <div className="w-full max-w-md mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-400">
                    Size{size ? ` — ${size}` : ''}
                  </p>
                  <Link
                    to="/terms"
                    className="text-[10px] tracking-[0.1em] uppercase text-zinc-500 hover:text-white transition-colors"
                  >
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => {
                    const isActive = size === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSize(s)}
                        aria-pressed={isActive}
                        className={`min-w-[3rem] px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase border transition-colors ${
                          isActive
                            ? 'bg-white text-black border-white'
                            : 'bg-transparent text-zinc-300 border-white/15 hover:border-white/40 hover:text-white'
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity + Add to cart */}
            <div className="flex items-stretch gap-3 w-full max-w-md mb-4">
              <div className="flex items-center border border-white/15">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="px-4 py-4 text-zinc-300 hover:text-white transition-colors"
                >
                  <Minus size={14} strokeWidth={2} />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-white tabular-nums">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="px-4 py-4 text-zinc-300 hover:text-white transition-colors"
                >
                  <Plus size={14} strokeWidth={2} />
                </button>
              </div>
              <button className="flex-1 px-8 py-4 bg-white text-black font-semibold text-[11px] tracking-[0.15em] uppercase hover:bg-zinc-200 active:scale-[0.99] transition-all">
                Add to Cart
              </button>
            </div>
            <button className="w-full max-w-md px-8 py-4 bg-transparent border border-white/20 text-white font-semibold text-[11px] tracking-[0.15em] uppercase hover:bg-white/10 transition-all">
              Pre-Order — 20% Off
            </button>
          </Reveal>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 sm:mt-28">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight uppercase text-white mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
