import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES, products, type Category } from '../data/products';

type Filter = 'all' | Category;

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  ...CATEGORIES,
];

export function Shop() {
  // The active filter is kept in the URL (?category=accessories) so the store
  // is linkable/shareable and the Header can deep-link straight to a category.
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get('category') as Filter | null;
  const initial: Filter = FILTERS.some((f) => f.key === param) ? (param as Filter) : 'all';
  const [active, setActive] = useState<Filter>(initial);

  const visible = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  );

  const selectFilter = (key: Filter) => {
    setActive(key);
    setSearchParams(key === 'all' ? {} : { category: key }, { replace: true });
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Page header — sits below the fixed site header */}
      <section className="w-full px-5 sm:px-6 pt-32 sm:pt-36 pb-10 sm:pb-12 border-b border-white/5">
        <div className="w-full max-w-7xl mx-auto">
          <Reveal direction="up">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
              The Store
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight uppercase text-white">
              Shop All
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-5 max-w-md">
              Every piece, built for the water. Apparel, headwear, and gear engineered
              to outlast the day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter bar + product grid */}
      <section className="w-full px-5 sm:px-6 py-10 sm:py-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
            {FILTERS.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => selectFilter(f.key)}
                  aria-pressed={isActive}
                  className={`px-5 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase border transition-colors ${
                    isActive
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-zinc-400 border-white/15 hover:text-white hover:border-white/40'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}

            <span className="ml-auto hidden sm:block text-[10px] tracking-[0.15em] uppercase text-zinc-500">
              {visible.length} {visible.length === 1 ? 'Item' : 'Items'}
            </span>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {visible.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
