import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import darkGranite from "@assets/generated_images/dark_raw_granite_texture_closeup.png";

export function CriticalDanger() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1, 1], [100, -100]);

  const lines = [
    "Granite was extracted.",
    "Profit was taken.",
    "Waste was left.",
    "Damage stayed."
  ];

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-stone-950 flex items-center justify-center overflow-hidden py-32">
      {/* Background Texture with Parallax */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute inset-0 opacity-20 z-0"
      >
        <img 
          src={darkGranite} 
          alt="Dark Granite Texture" 
          className="w-full h-full object-cover grayscale contrast-125 scale-110" 
        />
      </motion.div>
      
      <div className="relative z-10 flex flex-col gap-16 md:gap-24 px-6 max-w-4xl w-full">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-10%" }}
            className="border-l-2 border-moss-500 pl-6 md:pl-10"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-stone-200 tracking-tight uppercase">
              {line}
            </h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
