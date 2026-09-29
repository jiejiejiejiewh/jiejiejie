import { profile } from "@/content/profile";

export function Footer() {
  return <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-8 md:px-10">
    <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#2b3345] via-[#343241] to-[#303b4d] px-7 py-16 text-[#fafaff] shadow-[0_22px_60px_rgba(31,35,48,.16)] md:px-12 md:py-22">
      <p className="text-sm text-[#c9cad1]">Still curious?</p>
      <a href="#top" className="display mt-3 inline-block text-5xl leading-[.9] tracking-[-.07em] transition-opacity hover:opacity-70 md:text-8xl">Talk to {profile.name} <span aria-hidden>→</span></a>
    </div>
    <div className="flex justify-between py-7 text-xs text-[#747682]"><span>© 2026 {profile.name}</span><span>Made with room to grow.</span></div>
  </footer>;
}
