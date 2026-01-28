export default function HeroLocations() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-neutral-900"></div>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(to right, rgb(212, 175, 55) 1px, transparent 1px),
                               linear-gradient(to bottom, rgb(212, 175, 55) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/10 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm">
          <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-[#D4AF37] text-sm font-semibold tracking-wider uppercase">
            Our Locations
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
          Discover May Star
          <span className="block mt-2 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
            Across Indonesia
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
          Experience premier Chinese fine dining at our flagship restaurants and trusted franchise locations nationwide
        </p>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
