import { motion } from "framer-motion";
import abstractLandscape from "@assets/generated_images/abstract_stone_and_moss_landscape.png";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-[#0a0a0a] text-white overflow-hidden">
      {/* Top Bar / Navigation Mockup */}
      <nav className="w-full flex justify-between items-center px-6 md:px-12 py-8 border-b border-white/5 bg-black/40 backdrop-blur-xl fixed top-0 z-50">
        <div className="flex items-center gap-12">
          <span className="text-3xl font-display font-black tracking-tighter uppercase text-white">RECLAIM</span>
          <div className="hidden lg:flex items-center gap-6 text-[10px] font-mono text-stone-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-moss-500 rounded-full animate-pulse"></span> Network Active</span>
            <span>2025 // PROTOCOL</span>
          </div>
        </div>
        <div className="flex items-center gap-10 text-[11px] font-display font-bold uppercase tracking-[0.2em] text-stone-400">
          <a href="#" className="hover:text-white transition-all duration-300 hover:tracking-[0.3em]">Manifesto</a>
          <a href="#" className="hover:text-white transition-all duration-300 hover:tracking-[0.3em]">Recovery</a>
          <a href="#" className="hover:text-white transition-all duration-300 hover:tracking-[0.3em]">Connect</a>
        </div>
      </nav>

      <div className="flex-1 flex flex-col justify-end pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px w-12 bg-moss-500"></div>
             <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-moss-500">System Initialization</span>
          </div>
          
          <h1 className="text-7xl md:text-[140px] lg:text-[180px] font-display font-black leading-[0.8] tracking-tighter text-white uppercase italic">
            Earth<br />
            <span className="text-stroke-white opacity-20 hover:opacity-100 transition-opacity duration-700 relative group">
              Remembers
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-moss-500 group-hover:w-full transition-all duration-700"></span>
            </span><br />
            The Scars.
          </h1>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl font-sans font-light text-stone-400 leading-tight max-w-md">
              Illegal mining leaves behind a ghost landscape. We are the protocol for restoration.
            </p>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-600">Current Objective:</span>
              <div className="flex items-center gap-4">
                <button className="px-8 py-4 bg-white text-black font-display font-bold uppercase text-xs tracking-widest hover:bg-moss-500 hover:text-white transition-all duration-300">
                  Begin Recovery
                </button>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-stone-800 flex items-center justify-center text-[8px] font-bold">0{i}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Asset - Large & Atmospheric */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block select-none pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full relative"
        >
          <img 
            src={abstractLandscape} 
            alt="Recovery Monolith" 
            className="w-full h-full object-contain opacity-40 grayscale contrast-150 scale-125" 
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
        </motion.div>
      </div>

      {/* Data HUD element */}
      <div className="absolute bottom-12 right-12 hidden xl:flex flex-col items-end gap-2 text-[10px] font-mono text-stone-700 uppercase tracking-widest">
        <span>LAT: -23.5505 | LONG: -46.6333</span>
        <span>RECLAMATION STATUS: 42% COMPLETE</span>
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-grain mix-blend-overlay"></div>
    </section>
  );
}
