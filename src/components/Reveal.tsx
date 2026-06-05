import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** seconds to delay the animation */
  delay?: number;
  /** seconds the animation runs */
  duration?: number;
  direction?: Direction;
  /** render as a different element when needed (e.g. a list item) */
  as?: keyof typeof motion;
};

/**
 * Fades + slides its children in once they scroll into view.
 * Automatically becomes a no-op for users who prefer reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
}: RevealProps) {
  const reduce = useReducedMotion();
  const from = reduce ? offset.none : offset[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: from.x, y: from.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
