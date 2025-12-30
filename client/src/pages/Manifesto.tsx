import { Hero } from "@/components/manifesto/Hero";
import { lazy, Suspense, useEffect } from "react";

const CriticalDanger = lazy(() => import("@/components/manifesto/CriticalDanger").then(m => ({ default: m.CriticalDanger })));
const HallOfZeroLimit = lazy(() => import("@/components/manifesto/HallOfZeroLimit").then(m => ({ default: m.HallOfZeroLimit })));
const Transformation = lazy(() => import("@/components/manifesto/Transformation").then(m => ({ default: m.Transformation })));
const Process = lazy(() => import("@/components/manifesto/Process").then(m => ({ default: m.Process })));
const GrabAndGo = lazy(() => import("@/components/manifesto/GrabAndGo").then(m => ({ default: m.GrabAndGo })));
const Values = lazy(() => import("@/components/manifesto/Values").then(m => ({ default: m.Values })));
const Footer = lazy(() => import("@/components/manifesto/Footer").then(m => ({ default: m.Footer })));

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
      <Suspense fallback={<div className="min-h-screen bg-stone-950" />}>
        <CriticalDanger />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-stone-900" />}>
        <HallOfZeroLimit />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-stone-100" />}>
        <Transformation />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] bg-stone-100" />}>
        <Process />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] bg-stone-900" />}>
        <GrabAndGo />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px] bg-stone-900" />}>
        <Values />
      </Suspense>
      <Suspense fallback={<div className="min-h-[100px] bg-black" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
