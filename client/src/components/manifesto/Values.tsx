export function Values() {
  const values = [
    "Environment-first operations",
    "Long-term responsibility",
    "Global standards",
    "Radical transparency"
  ];

  return (
    <section className="bg-stone-900 text-stone-400 py-24 px-6 border-t border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="w-full md:w-auto">
          <h3 className="text-sm font-mono uppercase tracking-widest text-stone-600 mb-4">Core Principles</h3>
        </div>
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <div key={i} className="flex flex-col gap-4 group cursor-default p-4 border border-stone-800 hover:border-moss-500/30 transition-all duration-500 bg-stone-950/50">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  i === 0 ? 'bg-moss-500' : 
                  i === 1 ? 'bg-mineral-copper' : 
                  i === 2 ? 'bg-mineral-slate' : 'bg-stone-500'
                }`}></div>
                <span className="text-lg font-sans font-light group-hover:text-stone-200 transition-colors duration-300">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
