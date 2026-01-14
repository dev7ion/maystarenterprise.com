export default function CTASection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1542528180-4a4c16d6dd12?q=80&w=2000"
          alt="May Star Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emotional Headline */}
          <h2 className="section-title font-serif font-bold text-white mb-12">
            Experience the <span className="text-gradient-gold">May Star Legacy</span>
          </h2>

          {/* CTA Buttons - Maximum 2 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
            <a
              href="#branches"
              className="bg-gradient-gold text-black px-12 py-5 font-bold text-sm hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 w-full sm:w-auto uppercase tracking-wider"
            >
              Our Locations
            </a>
            <a
              href="#trademark"
              className="border border-gold/40 text-gold px-12 py-5 font-bold text-sm hover:bg-gold hover:text-black transition-all duration-300 w-full sm:w-auto uppercase tracking-wider"
            >
              Our Heritage
            </a>
          </div>

          {/* Clean Info Grid */}
          <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-gold/10">
            <div className="text-center space-y-3">
              <div className="text-gold text-sm font-semibold tracking-widest uppercase">Operating Hours</div>
              <div className="text-white/60 text-sm">Daily: 10:00 AM - 10:00 PM</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-gold text-sm font-semibold tracking-widest uppercase">Reservations</div>
              <div className="text-white/60 text-sm">Banquet Facilities Available</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-gold text-sm font-semibold tracking-widest uppercase">Service</div>
              <div className="text-white/60 text-sm">Professional & Attentive</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
