"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const enter = (delay: number) => ({ initial: reduced ? false : { opacity: 0, y: 24, filter: "blur(8px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: { duration: 1.15, delay, ease: [0.22, 1, 0.36, 1] as const } });

  return <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-14 md:px-10">
    <div className="mx-auto w-full max-w-7xl pb-8">
      <motion.p {...enter(0.08)} className="eyebrow mb-8 md:mb-10">Personal corner / 01</motion.p>
      <motion.h1 {...enter(0.18)} className="display max-w-6xl text-[clamp(4.6rem,14vw,13.4rem)] leading-[.78] text-[#1d1d1f]">jiejiejie.</motion.h1>
      <motion.div {...enter(0.4)} className="mt-10 flex flex-col gap-7 md:mt-14 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-xl leading-relaxed tracking-[-.025em] text-[#5e606c] md:text-[1.6rem]">A little space on the internet.</p>
        <p className="max-w-50 text-sm leading-relaxed text-[#777985] md:text-right">A soft collection of things I’m learning, building, and keeping close.</p>
      </motion.div>
    </div>
    <a href="#about" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[.16em] text-[#747682] transition hover:bg-white/50"><span>Begin gently</span><span className="h-7 w-px bg-[#9698a1]" /></a>
  </section>;
}
