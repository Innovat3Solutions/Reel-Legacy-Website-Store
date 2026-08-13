import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Reveal } from './Reveal';

type LegalPageProps = {
  title: string;
  effectiveDate: string;
  children: ReactNode;
};

/** Shared chrome for legal pages (Terms, Privacy) — consistent header + layout. */
export function LegalPage({ title, effectiveDate, children }: LegalPageProps) {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="w-full max-w-3xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft size={14} strokeWidth={2} /> Back Home
        </Link>

        <Reveal direction="up">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight uppercase text-white mb-4">
            {title}
          </h1>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-12">
            Effective {effectiveDate}
          </p>
        </Reveal>

        {/* Prose — spacing/typography applied to the section content */}
        <div className="space-y-10 text-zinc-400 text-sm sm:text-[15px] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

/** A titled section within a legal page. */
export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-lg sm:text-xl font-bold tracking-tight uppercase text-white mb-3">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
