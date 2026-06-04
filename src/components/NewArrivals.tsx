const products = [
  {
    id: 1,
    name: "Legacy Performance Hoodie",
    color: "White",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 2,
    name: "Legacy Performance Shirt",
    color: "Black",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 3,
    name: "Legacy Snapback Hat",
    color: "White / Black",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 4,
    name: "Legacy Sun Sleeve",
    color: "White",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1618355299441-11c5e9f8dbba?q=80&w=600&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 5,
    name: "Legacy Camo Hoodie",
    color: "Black Camo",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    isNew: true
  }
];

export function NewArrivals() {
  return (
    <section className="w-full py-20 px-6 bg-[#0a0a0a]">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase">
            New Arrivals
          </h2>
          <a href="#" className="text-[10px] sm:text-xs font-semibold tracking-[0.1em] uppercase hover:text-zinc-400 transition-colors border-b border-white/30 pb-0.5">
            View All
          </a>
        </div>

        {/* Carousel/Grid container */}
        <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0">
          {products.map((product) => (
            <div key={product.id} className="min-w-[260px] md:min-w-0 md:w-1/5 flex-shrink-0 group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-zinc-900 mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              
              {/* Details */}
              <div className="space-y-1.5 flex flex-col text-left">
                <h3 className="text-[11px] font-bold tracking-[0.05em] uppercase text-white truncate group-hover:text-zinc-300">
                  {product.name}
                </h3>
                <p className="text-[10px] tracking-[0.1em] text-zinc-500 uppercase">
                  {product.color}
                </p>
                <div className="flex items-center justify-between mt-2 pt-1">
                  <span className="text-sm font-semibold text-zinc-200">{product.price}</span>
                  {product.isNew && (
                    <span className="text-[9px] font-bold tracking-[0.1em] uppercase border border-white/20 px-1.5 py-0.5 text-white">
                      New
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
