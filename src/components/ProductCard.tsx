import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { formatPrice, type Product } from '../data/products';

type ProductCardProps = {
  product: Product;
  /** position in its grid — used to stagger the scroll-in animation */
  index?: number;
};

/**
 * Single product tile used across the storefront (New Arrivals + Shop).
 * Links through to the product's detail page.
 */
export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/shop/${product.slug}`} className="group block cursor-pointer">
        {/* Image */}
        <div className="relative aspect-[4/5] bg-zinc-900 mb-4 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 text-[9px] font-bold tracking-[0.1em] uppercase bg-white text-black px-2 py-1">
              {product.badge}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="space-y-1.5 flex flex-col text-left">
          <h3 className="text-[11px] font-bold tracking-[0.05em] uppercase text-white truncate group-hover:text-zinc-300">
            {product.name}
          </h3>
          <p className="text-[10px] tracking-[0.1em] text-zinc-500 uppercase">{product.color}</p>
          <div className="flex items-center justify-between mt-2 pt-1">
            <span className="text-sm font-semibold text-zinc-200">{formatPrice(product.price)}</span>
            {product.isNew && (
              <span className="text-[9px] font-bold tracking-[0.1em] uppercase border border-white/20 px-1.5 py-0.5 text-white">
                New
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
