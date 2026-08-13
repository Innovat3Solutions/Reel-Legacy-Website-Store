import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IntroVideo } from './components/IntroVideo';
import { IntroContext } from './intro';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';

// Persists across client-side navigation so the intro only ever plays on the
// very first load of the session, never when moving between pages.
let introPlayedThisSession = false;

// Reset scroll position on every route change.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppShell() {
  const reduce = useReducedMotion();
  const location = useLocation();

  // Decide once, on first render: play the full-screen intro only on a fresh
  // landing on the home page, for motion-tolerant visitors who haven't seen it.
  const [introDone, setIntroDone] = useState(
    () => introPlayedThisSession || !!reduce || location.pathname !== '/',
  );

  const finishIntro = () => {
    introPlayedThisSession = true;
    setIntroDone(true);
  };

  // While the intro owns the screen, nothing else scrolls.
  useEffect(() => {
    if (introDone) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = previous;
    };
  }, [introDone]);

  return (
    <IntroContext.Provider value={introDone}>
      <AnimatePresence>
        {!introDone && <IntroVideo key="intro" onFinish={finishIntro} />}
      </AnimatePresence>

      <div className="bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden selection:bg-white selection:text-black">
        {/* Announcement bar + header populate in once the intro clears */}
        <motion.div
          initial={false}
          animate={{ opacity: introDone ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-[#111] text-[10px] sm:text-xs text-center py-2.5 tracking-[0.2em] uppercase font-semibold text-zinc-300 border-b border-white/5">
            Pre-Order Now — 20% Off
          </div>
          <Header />
        </motion.div>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:slug" element={<ProductDetail />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </IntroContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  );
}
