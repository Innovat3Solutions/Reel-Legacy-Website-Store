import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FeaturedCollection } from './components/FeaturedCollection';
import { NewArrivals } from './components/NewArrivals';
import { Lifestyle } from './components/Lifestyle';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* Top Announcement Bar */}
      <div className="bg-[#111] text-[10px] sm:text-xs text-center py-2.5 tracking-[0.2em] uppercase font-semibold text-zinc-300 border-b border-white/5">
        Free shipping on orders $150+
      </div>
      
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturedCollection />
        <NewArrivals />
        <Lifestyle />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
