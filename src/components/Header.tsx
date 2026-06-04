import { Search, User, ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="absolute top-[40px] left-0 w-full z-50 text-white border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform">
            <path d="M10 35L20 5H30L25 15H18L15 25H25L30 35H20L17 25H12L10 35Z" fill="white"/>
          </svg>
          <span className="font-heading font-semibold text-xl tracking-[0.15em] uppercase">Reel Legacy</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-[0.15em] text-zinc-300 uppercase">
          <a href="#" className="hover:text-white transition-colors">Shop</a>
          <a href="#" className="hover:text-white transition-colors">New Arrivals</a>
          <a href="#" className="hover:text-white transition-colors">Best Sellers</a>
          <a href="#" className="hover:text-white transition-colors">Collections</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Legacy</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="hover:text-zinc-300 transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden sm:block hover:text-zinc-300 transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-zinc-300 transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-2 bg-white text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
