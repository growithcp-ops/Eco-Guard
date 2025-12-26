import { motion } from "framer-motion";
import abstractLandscape from "@assets/generated_images/abstract_stone_and_moss_landscape.png";

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
          className="space-y-4 relative z-10"
        >
          <div className="flex items-center gap-4 mb-8">
             <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-moss-500 bg-moss-500/10 px-3 py-1 rounded-full border border-moss-500/20">Report 2025</span>
             <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-400">Insight</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[130px] font-display font-black leading-[0.85] tracking-tighter text-center md:text-left text-stone-900">
            Earth<br />
            <span className="text-stroke hover:text-stone-900 transition-all duration-700 cursor-default relative group">
              Remembers
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-moss-500 group-hover:w-full transition-all duration-700"></span>
            </span><br />
            What We<br />
            Abandon.
          </h1>
        </motion.div>

        {/* Abstract 3D Asset Decoration */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[20%] w-64 h-64 hidden lg:block opacity-80"
        >
           <img src={abstractLandscape} alt="Abstract Stone" className="w-full h-full object-contain filter drop-shadow-2xl" />
        </motion.div>

        {/* Marquee effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-10 border-t border-stone-200">
          <div className="flex animate-scroll-text">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex items-center gap-20 px-10">
                <span className="text-4xl font-display font-black text-stone-200 uppercase">Sustainable Extraction</span>
                <span className="w-3 h-3 bg-moss-500 rounded-full"></span>
                <span className="text-4xl font-display font-black text-stone-200 uppercase">Mineral Recovery</span>
                <span className="w-3 h-3 bg-moss-500 rounded-full"></span>
              </div>
            ))}
          </div>
        </div>

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

