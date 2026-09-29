"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();

  return <motion.div
    className={className}
    initial={reduced ? false : { opacity: 0, y: 20, filter: "blur(7px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>;
}
