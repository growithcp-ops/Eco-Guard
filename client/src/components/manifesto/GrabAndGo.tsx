import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function GrabAndGo() {
  return (
    <section className="bg-stone-900 text-stone-100 py-40 px-6 relative overflow-hidden flex flex-col items-center text-center">
      <div className="max-w-5xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-16"
        >
          If you build,<br />
          you choose.
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-stone-100 text-stone-900 font-sans font-medium text-lg tracking-wide overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              PARTNER WITH US <ArrowRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-moss-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>

          <motion.a 
            href="#" 
            className="text-stone-400 hover:text-white border-b border-transparent hover:border-white transition-colors text-lg font-sans"
          >
            Build responsibly
          </motion.a>
        </div>
      </div>
    </section>
  );
}
