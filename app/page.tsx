import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { About, Contact, Learning, LifeGallery, Projects, RightNow, WorldCards } from "@/components/Sections";

export default function Home() {
  return <>
    <div className="ambient-field" aria-hidden="true" />
    <Navbar />
    <main className="relative z-10"><Hero /><About /><WorldCards /><RightNow /><Projects /><LifeGallery /><Learning /><Contact /></main>
    <Footer />
  </>;
}
