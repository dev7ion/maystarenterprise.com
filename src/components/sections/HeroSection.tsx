'use client';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400"
          alt="May Star Restaurant"
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
        />
        {/* Animated Overlay Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_#D4AF37_0%,_transparent_50%)] opacity-5 animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
          {/* Premium Badge */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-3 backdrop-blur-sm bg-white/5 px-6 py-3 border border-gold/20 rounded-full">
              <span className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse-slow" />
              <span className="text-gold/90 font-medium tracking-[0.3em] text-xs md:text-sm uppercase">
                Established 2007
              </span>
              <span className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse-slow" />
            </div>
          </div>

          {/* Main Title with Enhanced Typography */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white tracking-tight leading-[1.05] mb-4 sm:mb-6">
              May Star
              <span className="block text-gradient-gold mt-2">Enterprise</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold" />
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
                A Legacy of Authentic Chinese
                <span className="text-gradient-gold font-medium"> Culinary Excellence</span>
              </p>
              <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Premium Dim Sum • Live Seafood • Chinese BBQ
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="opacity-0 animate-fade-in pt-4" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 max-w-2xl mx-auto">
              <a
                href="#branches"
                className="btn-responsive group relative bg-gradient-gold text-black font-bold hover:shadow-2xl hover:shadow-gold/40 transition-all duration-500 w-full sm:w-auto uppercase tracking-[0.15em] overflow-hidden"
              >
                <span className="relative z-10">Explore Our Restaurants</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              <a
                href="#about"
                className="btn-responsive group relative border-2 border-gold/40 text-gold font-bold hover:bg-gold hover:text-black hover:border-gold transition-all duration-500 w-full sm:w-auto uppercase tracking-[0.15em] backdrop-blur-sm"
              >
                <span className="relative z-10">Our Brand Story</span>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="opacity-0 animate-fade-in pt-8 sm:pt-12" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <span className="text-white/40 text-xs tracking-wider uppercase">Scroll to discover</span>
              <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-1.5 animate-bounce-slow">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-48 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
      
      {/* Decorative Side Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent opacity-50 hidden lg:block" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent opacity-50 hidden lg:block" />
    </section>
  );
}
