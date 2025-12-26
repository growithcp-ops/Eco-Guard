import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-stone-950 text-stone-100 overflow-hidden">
      {/* Organic Navigation */}
      <nav className="w-full flex justify-between items-center px-6 md:px-12 py-10 fixed top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-moss-500 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-stone-950 rounded-sm rotate-45"></div>
          </div>
          <span className="text-2xl font-display font-black tracking-tighter uppercase text-white">EARTH.ARC</span>
        </div>
        <div className="flex items-center gap-8 text-[11px] font-display font-bold uppercase tracking-[0.3em] text-stone-400">
          <a href="#" className="hover:text-accent-lime transition-all">Restore</a>
          <a href="#" className="hover:text-accent-lime transition-all">Monitor</a>
          <button className="px-6 py-2 border border-moss-500/30 text-moss-400 rounded-full hover:bg-moss-500 hover:text-white transition-all">
            Join Protocol
          </button>
        </div>
      </nav>

      <div className="flex-1 flex flex-col justify-center items-center px-6 text-center max-w-6xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <span className="inline-block text-[10px] font-mono uppercase tracking-[0.5em] text-accent-lime border border-accent-lime/20 px-4 py-2 rounded-full bg-accent-lime/5">
            Preservation Protocol Active
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-[140px] font-display font-black leading-[0.85] tracking-tighter text-white uppercase">
            Heal the<br />
            <span className="italic text-moss-500 underline decoration-accent-lime/30 underline-offset-8">Broken</span><br />
            Landscape.
          </h1>

          <p className="text-lg md:text-2xl font-sans font-light text-stone-400 leading-relaxed max-w-2xl mx-auto">
            Illegal granite mining leaves scars that last for centuries. We reclaim abandoned sites and restore biological integrity.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
            <button className="group relative px-12 py-5 bg-moss-500 text-white font-display font-black uppercase text-sm tracking-widest overflow-hidden rounded-full transition-transform hover:scale-105">
              <span className="relative z-10">Initialize Recovery</span>
              <div className="absolute inset-0 bg-accent-lime transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <div className="flex items-center gap-3 text-stone-500">
              <span className="w-12 h-px bg-stone-800"></span>
              <span className="text-xs font-mono uppercase tracking-widest">Responsibility First</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Organic Elements */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-moss-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent-lime/5 blur-[100px] rounded-full"></div>

      {/* Data Feed HUD */}
      <div className="absolute bottom-12 left-12 flex flex-col gap-1 text-[9px] font-mono text-moss-500/50 uppercase tracking-[0.2em]">
        <span>&gt; BIOSYSTEM_INTEGRITY: 88.4%</span>
        <span>&gt; RECOVERY_MODE: ACTIVE</span>
      </div>

      <div className="absolute bottom-12 right-12 flex items-center gap-4 text-[9px] font-mono text-stone-600 uppercase tracking-widest">
        <span className="animate-pulse flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent-lime rounded-full"></span> LIVE_MONITORING
        </span>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-grain mix-blend-overlay"></div>
    </section>
  );
}



