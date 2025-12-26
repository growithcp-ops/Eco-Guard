export function Footer() {
  return (
    <footer className="bg-black text-stone-500 py-12 px-6 text-center border-t border-stone-900/50">
      <p className="font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        “Saving Earth doesn’t start with technology. It starts with responsibility.”
      </p>
      <div className="mt-8 text-xs font-mono opacity-50">
        &copy; {new Date().getFullYear()} EARTH REMEMBERS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
