"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// Reveal
// Reusable, professional scroll-into-view animation wrapper.
// Keeps motion subtle and consistent across the whole site.
// ---------------------------------------------------------------------------

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds */
  delay?: number;
  /** Extra classes for the wrapper */
  className?: string;
  /** Direction the element eases in from */
  y?: number;
}

const variants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      custom={y}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
