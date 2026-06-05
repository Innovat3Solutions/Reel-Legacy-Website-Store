import { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = ['Shop', 'New Arrivals', 'Best Sellers', 'Collections', 'About', 'Legacy'];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the mobile menu is open + close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="absolute top-9 left-0 w-full z-50 text-white border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        {/* Mobile: hamburger (left) */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="lg:hidden -ml-1.5 p-1.5 hover:text-zinc-300 transition-colors"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>

        {/* Logo — centered on mobile, left on desktop */}
        <div className="flex items-center cursor-pointer group lg:mr-auto">
          <img
            src="/images/logos/logo-white.png"
            alt="Reel Legacy"
            className="h-6 sm:h-7 w-auto transform group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-[0.15em] text-zinc-300 uppercase">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              {link}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-6 lg:ml-8">
          <button className="hidden sm:block hover:text-zinc-300 transition-colors hover:scale-110 active:scale-95 duration-200">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden sm:block hover:text-zinc-300 transition-colors hover:scale-110 active:scale-95 duration-200">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-zinc-300 transition-colors relative hover:scale-110 active:scale-95 duration-200">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-2 bg-white text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            {/* Slide-in panel */}
            <motion.nav
              className="absolute top-0 left-0 h-full w-[80%] max-w-xs bg-[#0a0a0a] border-r border-white/10 flex flex-col p-7 pt-8"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
            >
              <div className="flex items-center justify-between mb-10">
                <img src="/images/logos/logo-white.png" alt="Reel Legacy" className="h-6 w-auto" />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 text-white/80 hover:text-white transition-colors"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-semibold tracking-[0.15em] uppercase text-zinc-300 hover:text-white transition-colors py-4 border-b border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.3 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-6 pt-8 text-zinc-400">
                <button className="flex items-center gap-2 hover:text-white transition-colors text-[11px] tracking-[0.1em] uppercase">
                  <Search size={18} strokeWidth={1.5} /> Search
                </button>
                <button className="flex items-center gap-2 hover:text-white transition-colors text-[11px] tracking-[0.1em] uppercase">
                  <User size={18} strokeWidth={1.5} /> Account
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
