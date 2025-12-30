import { Hero } from "@/components/manifesto/Hero";
import { CriticalDanger } from "@/components/manifesto/CriticalDanger";
import { HallOfZeroLimit } from "@/components/manifesto/HallOfZeroLimit";
import { Transformation } from "@/components/manifesto/Transformation";
import { Process } from "@/components/manifesto/Process";
import { GrabAndGo } from "@/components/manifesto/GrabAndGo";
import { Values } from "@/components/manifesto/Values";
import { Footer } from "@/components/manifesto/Footer";
import { useEffect } from "react";

export default function Manifesto() {
  // Smooth scroll fix for some browsers
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="w-full bg-stone-900 min-h-screen selection:bg-moss-500 selection:text-stone-900">
      <Hero />
      <CriticalDanger />
      <HallOfZeroLimit />
      <Transformation />
      <Process />
      <GrabAndGo />
      <Values />
      <Footer />
    </main>
  );
}
