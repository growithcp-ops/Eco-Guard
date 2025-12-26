import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-stone-100 text-stone-900 overflow-hidden">
      {/* Top Bar / Navigation Mockup based on screenshot */}
      <nav className="w-full flex justify-between items-center px-6 md:px-12 py-6 border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-display font-black tracking-tighter uppercase">SPINX</span>
          <span className="hidden md:block text-xs font-mono text-stone-400">213.894.9933</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-display font-bold uppercase tracking-widest text-stone-600">
          <a href="#" className="hover:text-stone-900 transition-colors">Work</a>
          <a href="#" className="hover:text-stone-900 transition-colors flex items-center gap-1">How we help <span className="text-[8px]">▼</span></a>
          <a href="#" className="hover:text-stone-900 transition-colors flex items-center gap-1">Industries <span className="text-[8px]">▼</span></a>
          <a href="#" className="hover:text-stone-900 transition-colors flex items-center gap-1">About <span className="text-[8px]">▼</span></a>
        </div>
      </nav>

      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-20 max-w-7xl mx-auto w-full relative">
        {/* Decorative Green Dot from screenshot */}
        <div className="flex justify-center mb-12">
          <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center">
            <div className="w-3 h-3 bg-moss-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(92,124,102,0.5)]"></div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-400 block text-center md:text-left">Insight</span>
          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-display font-bold leading-[1.05] tracking-tight text-center md:text-left text-stone-900">
            Earth Remembers<br />
            What We Abandon.
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex items-center gap-4 justify-center md:justify-start"
        >
          <div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden ring-1 ring-stone-300">
             <div className="w-full h-full bg-stone-300 flex items-center justify-center text-[10px] font-bold text-white">EM</div>
          </div>
          <p className="text-xs font-sans text-stone-500">
            Written by <span className="text-stone-900 underline underline-offset-4 cursor-pointer">Stephen Moyers</span>
          </p>
        </motion.div>
      </div>

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>
    </section>
  );
}

