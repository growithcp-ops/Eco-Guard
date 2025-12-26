import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center bg-stone-900 text-stone-100 overflow-hidden px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="z-10 max-w-6xl w-full"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter uppercase text-center md:text-left mix-blend-difference">
          Earth<br />
          Remembers<br />
          What We<br />
          Abandon.
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-12 left-6 md:left-12 max-w-sm z-10"
      >
        <p className="text-sm md:text-base font-sans text-stone-400 tracking-wide">
          Illegal mining doesn’t end when machines leave.
        </p>
      </motion.div>

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>
    </section>
  );
}
