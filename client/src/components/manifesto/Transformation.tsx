import { motion } from "framer-motion";
import lightTexture from "@assets/generated_images/light_concrete_stone_texture_grain.png";
import sculpture from "@assets/generated_images/abstract_reclaimed_stone_sculpture.png";

export function Transformation() {
  return (
    <section className="relative min-h-screen bg-stone-100 text-stone-900 flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
        <img src={lightTexture} alt="Light Stone Texture" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>

      <div className="z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
              We don’t mine.<br />
              <span className="text-moss-500">We recover.</span>
            </h2>
            <p className="text-xl md:text-2xl font-sans font-light leading-relaxed max-w-lg text-stone-700">
              Waste becomes material again. We transform the scars of the past into the foundation of the future.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl"
        >
          <img src={sculpture} alt="Abstract Stone Sculpture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out" loading="lazy" decoding="async" />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
