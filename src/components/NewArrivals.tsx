import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

// Show the freshest drops on the homepage; the full catalog lives on /shop.
const newArrivals = products.filter((p) => p.isNew).slice(0, 5);

export function NewArrivals() {
  return (
    <section className="w-full py-16 sm:py-20 px-5 sm:px-6 bg-[#0a0a0a]">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <Reveal direction="up" className="flex items-end justify-between mb-8 text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase">
            New Arrivals
          </h2>
          <Link to="/shop" className="text-[10px] sm:text-xs font-semibold tracking-[0.1em] uppercase hover:text-zinc-400 transition-colors border-b border-white/30 pb-0.5">
            View All
          </Link>
        </Reveal>

        {/* Responsive grid — no horizontal scroll */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
          {newArrivals.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
