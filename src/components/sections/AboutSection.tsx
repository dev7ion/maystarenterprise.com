export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-black relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Editorial Layout - Single Column Focus */}
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 lg:mb-32 text-center">
            <span className="section-subtitle text-gold/80 mb-6 block">About Us</span>
            <h2 className="section-title font-serif font-bold text-white">
              A Legacy of <span className="text-gradient-gold">Culinary Excellence</span>
            </h2>
          </div>

          {/* Main Content - Editorial Grid */}
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Text Content - Takes more space */}
            <div className="lg:col-span-7 space-y-8">
              <div className="editorial-text text-white/70 space-y-6">
                <p>
                  Established in <span className="text-gold font-medium">2007</span>, May Star Restaurant is a premier culinary destination in Indonesia, recognized for its authentic Chinese cuisine and unwavering commitment to quality.
                </p>
                <p>
                  Blending traditional <span className="text-gold font-medium">Cantonese heritage</span> with modern dining concepts, the brand has become a household name for Premium Dim Sum, Live Seafood, and Chinese BBQ.
                </p>
                <p>
                  From casual family meals to grand banquet celebrations, May Star delivers a consistent dining experience that balances <span className="text-gold font-medium">luxury with warm, professional service</span>.
                </p>
              </div>

              {/* Stats - Minimal & Clean */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gold/10">
                <div>
                  <div className="text-5xl font-serif font-bold text-gold mb-2">18+</div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">Years</div>
                </div>
                <div>
                  <div className="text-5xl font-serif font-bold text-gold mb-2">10+</div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">Locations</div>
                </div>
                <div>
                  <div className="text-5xl font-serif font-bold text-gold mb-2">1K+</div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">Customers</div>
                </div>
              </div>
            </div>

            {/* Image - Single, Large, Elegant */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=800"
                  alt="May Star Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>

          {/* Vision & Mission - Cleaner Cards */}
          <div className="mt-32 grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-gold" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Vision</h3>
              <p className="editorial-text text-white/60">
                To be the leading authentic Chinese restaurant brand in Indonesia, ensuring the May Star legacy of quality extends from its flagship locations to every franchise outlet.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-gold rounded-full"></div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Mission</h3>
              <p className="editorial-text text-white/60">
                To provide a memorable dining experience where authentic flavors and elegant ambiance meet, whether at a business lunch or a family dinner in Jakarta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
