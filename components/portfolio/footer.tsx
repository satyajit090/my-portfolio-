export function Footer() {
  return (
    <footer className="py-8 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Timeline decoration */}
        <div className="flex items-center mb-6">
          <div className="w-2 h-2 rounded-full border border-white/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-white/10 to-white/20" />
          <div className="w-2 h-2 rounded-full border border-white/40" />
        </div>

        {/* Footer content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <p className="font-mono text-white/50 text-sm tracking-[0.2em]">
          
          </p>
          <p className="text-white/40 text-sm">
            Designed & Built by Satyajit Behera
          </p>
        </div>
      </div>
    </footer>
  );
}
