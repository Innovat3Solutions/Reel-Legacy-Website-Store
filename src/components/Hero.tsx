import { motion } from 'motion/react';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative w-full min-h-[88svh] sm:h-screen sm:min-h-[600px] flex items-center">
      {/* Background Image with a slow ken-burns zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/hero-main.png')" }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 pt-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-xl">
          <motion.p variants={item} className="text-[11px] sm:text-sm font-semibold tracking-[0.2em] text-zinc-300 uppercase mb-4">
            Premium Performance Apparel
          </motion.p>
          <motion.h1 variants={item} className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold leading-[0.85] tracking-tight uppercase mb-8">
            Built<br />Different.
          </motion.h1>
          <motion.div variants={item} className="w-12 h-0.5 bg-white mb-8" />
          <motion.p variants={item} className="text-base sm:text-xl text-zinc-200 font-light leading-relaxed mb-10 max-w-md">
            Designed for those who live it.<br />
            From sunrise to last cast.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-white text-black font-semibold text-xs tracking-[0.15em] uppercase hover:bg-zinc-200 active:scale-[0.98] transition-all text-center">
              Shop The Collection
            </button>
            <button className="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-transparent border border-white text-white font-semibold text-xs tracking-[0.15em] uppercase hover:bg-white/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Watch The Film
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
