import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

// Safety net: if `onEnded` never fires (stall / odd codec), reveal the site
// anyway a few seconds past the known clip length (~15s).
const INTRO_TIMEOUT_MS = 18000;

/**
 * Full-screen intro overlay. Sits above the entire site (header included),
 * plays the hero video muted, and calls `onFinish` when it ends, errors, is
 * blocked by autoplay policy, or hits the safety timeout — exactly once.
 * Scroll locking is handled by the parent while this is mounted.
 */
export function IntroVideo({ onFinish }: { onFinish: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const finished = useRef(false);

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    onFinish();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      // Some browsers only honor muted autoplay when play() is called directly.
      video.play().catch(finish); // blocked → just reveal the site
    }
    const timer = window.setTimeout(finish, INTRO_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/images/hero/hero-still.png"
        onEnded={finish}
        onError={finish}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Skip control — fades in shortly after the video starts */}
      <motion.button
        type="button"
        onClick={finish}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 right-5 sm:right-6 z-10 flex items-center gap-2 px-4 py-2.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-white/80 border border-white/25 bg-black/30 backdrop-blur-sm hover:text-white hover:border-white/50 transition-colors"
      >
        Skip Intro
      </motion.button>
    </motion.div>
  );
}
