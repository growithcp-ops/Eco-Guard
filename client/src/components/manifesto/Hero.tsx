import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-white text-black overflow-hidden font-sans">
      {/* Simple Clean Navigation */}
      <nav className="w-full flex justify-between items-center px-6 md:px-12 py-6 border-b border-stone-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-moss-500 rounded-sm"></div>
          <span className="text-xl font-bold tracking-tight">EcoRestore</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-stone-600 hover:text-moss-500">About</a>
          <a href="#" className="text-stone-600 hover:text-moss-500">Mission</a>
          <button className="px-5 py-2 bg-moss-500 text-white rounded-md text-sm font-semibold hover:bg-moss-600 transition-colors">
            Contact Us
          </button>
        </div>
      </nav>

      <div className="flex-1 flex flex-col lg:flex-row items-center px-6 md:px-12 py-12 max-w-7xl mx-auto w-full gap-12">
        <div className="flex-1 text-left space-y-6">
          <h1 className="text-6xl md:text-8xl font-black text-[#000000] leading-[1.1] tracking-tight">
            Protecting Our <span className="text-moss-600 underline decoration-moss-600/20 underline-offset-8">Environment</span> for the Future.
          </h1>
          <p className="text-xl text-[#333333] max-w-xl leading-relaxed font-medium">
            We are dedicated to restoring natural landscapes affected by illegal mining. Join our mission to preserve the earth's biodiversity and reclaim our natural heritage.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-[#1a5f2e] text-white font-black rounded-lg hover:bg-[#144d25] transition-all shadow-xl shadow-green-900/20 text-lg">
              Get Involved
            </button>
            <button className="px-10 py-5 border-3 border-[#000000] text-[#000000] font-black rounded-lg hover:bg-[#000000] hover:text-white transition-all text-lg">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full relative">
          <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-moss-500/20 to-transparent"></div>
             {/* Simple Placeholder Visual */}
             <div className="absolute inset-12 border-4 border-white/40 rounded-xl flex items-center justify-center">
                <div className="text-moss-500 text-6xl font-black opacity-20 italic">EARTH</div>
             </div>
          </div>
          {/* Feature highlights */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-stone-100 max-w-[200px]">
            <p className="text-xs font-bold text-moss-500 uppercase tracking-wider mb-1">Impact</p>
            <p className="text-sm font-medium text-stone-900">Over 500+ acres of land restored in 2024.</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-stone-50 py-12 px-6 border-t border-stone-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-stone-900">50+</p>
            <p className="text-sm text-stone-500 font-medium">Projects Done</p>
          </div>
          <div>
            <p className="text-3xl font-black text-stone-900">12k</p>
            <p className="text-sm text-stone-500 font-medium">Trees Planted</p>
          </div>
          <div>
            <p className="text-3xl font-black text-stone-900">200+</p>
            <p className="text-sm text-stone-500 font-medium">Volunteers</p>
          </div>
          <div>
            <p className="text-3xl font-black text-stone-900">100%</p>
            <p className="text-sm text-stone-500 font-medium">Committed</p>
          </div>
        </div>
      </div>
    </section>
  );
}




