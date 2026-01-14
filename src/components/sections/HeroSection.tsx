'use client';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1E]/80 via-[#1C1C1E]/85 to-[#1C1C1E] z-10" />
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400"
          alt="May Star Restaurant"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-6xl mx-auto space-y-16 animate-fade-in-up">
          {/* 1. Small Label */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="text-gold/70 font-light tracking-[0.3em] text-xs md:text-sm uppercase">
              Since 2007
            </span>
          </div>

          {/* 2. BIG TITLE - Hero */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1]">
              May Star Enterprise
            </h1>
          </div>

          {/* 3. Short Description */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <p className="text-white/60 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed space-y-2">
              <span className="block">A Legacy of Authentic Chinese Culinary Excellence</span>
              <span className="block text-white/50 text-sm md:text-base">Premium Dim Sum, Live Seafood, and Chinese BBQ since 2007</span>
            </p>
          </div>

          {/* 4. CTA Buttons */}
          <div className="opacity-0 animate-fade-in pt-8" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="#branches"
                className="bg-gradient-gold text-black px-12 py-4 font-semibold text-sm hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500 w-full sm:w-auto uppercase tracking-[0.15em] hover:scale-105"
              >
                Explore Our Restaurants
              </a>
              <a
                href="#about"
                className="border-2 border-gold/30 text-gold px-12 py-4 font-semibold text-sm hover:bg-gold/10 hover:border-gold transition-all duration-500 w-full sm:w-auto uppercase tracking-[0.15em] hover:scale-105"
              >
                Our Brand Story
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1C1C1E] to-transparent z-10" />
    </section>
  );
}
