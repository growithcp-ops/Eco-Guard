import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      id: "01",
      title: "Recover",
      description: "We identify and secure abandoned granite waste sites, preventing further environmental decay."
    },
    {
      id: "02",
      title: "Process",
      description: "Using international standard technology, we refine raw waste into high-grade engineered stone."
    },
    {
      id: "03",
      title: "Deliver",
      description: "Sustainable building materials delivered to architects who choose responsibility over ease."
    }
  ];

  return (
    <section className="bg-stone-100 text-stone-900 py-32 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-300 border border-stone-300">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-stone-100 p-12 flex flex-col h-full min-h-[400px] hover:bg-white transition-colors duration-500 group"
            >
              <span className="text-sm font-mono text-moss-500 mb-auto block">{step.id}</span>
              <h3 className="text-3xl font-display font-bold mb-6 group-hover:translate-x-2 transition-transform duration-300">{step.title}</h3>
              <p className="text-lg font-sans text-stone-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
