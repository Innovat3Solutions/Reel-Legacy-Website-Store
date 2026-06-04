import { Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 mb-16">
        
        {/* Brand Side */}
        <div className="w-full md:w-1/3 flex flex-col items-start text-left shrink-0">
          <div className="flex items-center gap-3 mb-6">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 35L20 5H30L25 15H18L15 25H25L30 35H20L17 25H12L10 35Z" fill="white"/>
            </svg>
            <span className="font-heading font-semibold text-lg tracking-[0.15em] uppercase">Reel Legacy</span>
          </div>
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-zinc-400 mb-2">
            Built Different.
          </p>
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-zinc-400 mb-8">
            Earned, Not Given.
          </p>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={18} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.45c.01 4.36-3.5 7.85-7.85 7.82-4.14-.03-7.57-3.47-7.54-7.64.03-4.22 3.51-7.64 7.74-7.58v4.02c-1.95-.08-3.69 1.48-3.72 3.44-.03 1.93 1.55 3.57 3.5 3.58 1.95.01 3.57-1.55 3.58-3.5V.02zm.17 0" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Side */}
        <div className="w-full md:w-2/3 flex flex-wrap lg:flex-nowrap justify-between gap-12 text-left">
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-white mb-2">Shop</h4>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">All Products</a>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">New Arrivals</a>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">Best Sellers</a>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">Collections</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-white mb-2">Company</h4>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">About Us</a>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">Our Story</a>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">Careers</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-white mb-2">Support</h4>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">FAQ</a>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">Shipping & Returns</a>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">Size Guide</a>
            <a href="#" className="text-[11px] tracking-[0.05em] text-zinc-500 hover:text-white transition-colors">Privacy Policy</a>
          </div>

          <div className="flex flex-col gap-4 max-w-[200px]">
            <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-white mb-2">Join The Legacy</h4>
            <p className="text-[11px] leading-relaxed text-zinc-500 mb-2">
              Exclusive drops. Early access. Built for those who live it.
            </p>
            <div className="flex border-b border-zinc-700 focus-within:border-white transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-xs w-full py-2 placeholder:text-zinc-600"
              />
              <button className="text-white hover:text-zinc-400 transition-colors p-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] font-semibold tracking-[0.1em] text-zinc-600 uppercase">
        <p>© 2026 REEL LEGACY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4">
           <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
           <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
