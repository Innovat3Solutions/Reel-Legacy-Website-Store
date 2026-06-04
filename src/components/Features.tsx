import { Waves, Sun, Droplets, Leaf, ShieldCheck } from 'lucide-react';

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
      <div className="w-full max-w-7xl mx-auto pl-6 pr-0 sm:px-6 py-12 md:py-16">
        <div className="flex overflow-x-auto hide-scrollbar sm:grid sm:grid-cols-5 gap-8 sm:gap-4 md:gap-8 items-start text-center">
          {features.map((feature, i) => (
            <div key={i} className={`flex-shrink-0 w-32 sm:w-auto flex flex-col items-center gap-4 ${i !== features.length - 1 ? 'sm:border-r border-white/10' : ''}`}>
              <div className="text-zinc-400">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
