import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HallOfZeroLimit() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.8], [0.95, 1.05]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.5, 1, 0.5]);

  return (
    <section ref={targetRef} className="h-[200vh] relative bg-stone-900 z-10">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale, opacity }}
          className="text-center px-4"
        >
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-stone-300 leading-tight tracking-tighter">
            Zero responsibility<br />
            creates<br />
            <span className="text-stone-500">infinite damage.</span>
          </h2>
        </motion.div>
        
        {/* Abstract Particles or Noise */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
    </section>
  );
}
