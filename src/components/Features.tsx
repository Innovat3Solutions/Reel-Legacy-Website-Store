import { Waves, Sun, Droplets, Leaf, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Waves size={32} strokeWidth={1} />,
    title: "Performance",
    subtitle: "Built In"
  },
  {
    icon: <Sun size={32} strokeWidth={1} />,
    title: "UPF 50+",
    subtitle: "Sun Protection"
  },
  {
    icon: <Droplets size={32} strokeWidth={1} />,
    title: "Moisture Wicking",
    subtitle: "Quick Dry"
  },
  {
    icon: <Leaf size={32} strokeWidth={1} />,
    title: "Lightweight",
    subtitle: "Comfort"
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1} />,
    title: "Built To Last",
    subtitle: "Backed By Legacy"
  }
];

export function Features() {
  return (
    <section className="w-full border-b border-white/10 bg-[#050505]">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 py-12 md:py-16">
        {/* Mobile: 3 on top, 2 centered below (grid-cols-6, each spans 2). Desktop: single row of 5. */}
        <div className="grid grid-cols-6 sm:grid-cols-5 gap-y-10 gap-x-2 sm:gap-4 md:gap-8 items-start text-center">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={`col-span-2 sm:col-span-1 ${i === 3 ? 'col-start-2 sm:col-start-auto' : ''} flex flex-col items-center gap-3 sm:gap-4 ${i !== features.length - 1 ? 'sm:border-r border-white/10' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-zinc-400 transition-colors duration-300 hover:text-white">
                {feature.icon}
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-semibold tracking-[0.1em] text-white uppercase leading-tight">
                  {feature.title}
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.1em] text-zinc-400 uppercase leading-tight mt-1">
                  {feature.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
