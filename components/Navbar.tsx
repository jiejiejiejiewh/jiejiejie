"use client";

import { useEffect, useState } from "react";

const links = ["About", "World", "Now", "Projects", "Life", "Learning", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
    <nav className={`mx-auto flex max-w-4xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-5 ${scrolled ? "border-white/80 bg-white/65 shadow-[0_12px_35px_rgba(51,58,78,.09)] backdrop-blur-xl" : "border-transparent bg-white/25 backdrop-blur-sm"}`} aria-label="Main navigation">
      <a href="#top" className="px-1 text-[15px] font-semibold tracking-[-.06em]">jiejiejie.</a>
      <div className="hidden items-center gap-1 md:flex">{links.map((link) => <a className="rounded-full px-3 py-1.5 text-xs text-[#575864] transition-colors hover:bg-white/70 hover:text-[#1d1d1f]" href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</div>
      <button onClick={() => setOpen(!open)} className="rounded-full border border-black/8 bg-white/50 px-3 py-1.5 text-xs text-[#33343a] transition hover:bg-white md:hidden" aria-expanded={open} aria-controls="menu">{open ? "Close" : "Menu"}</button>
    </nav>
    {open && <div id="menu" className="glass-panel mx-auto mt-3 max-w-4xl rounded-[1.35rem] p-3 backdrop-blur-xl md:hidden">{links.map((link) => <a onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-[#454650] transition hover:bg-white/75" href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</div>}
  </header>;
}
