export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Elegant Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#151515] to-[#0A0A0A]" />
      
      {/* Enhanced Background with Subtle Effect */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1542528180-4a4c16d6dd12?q=80&w=2000"
          alt="May Star Restaurant"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
      </div>

      {/* Golden Glow Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/25 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Golden Border Lines - Top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-[2px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      {/* Golden Border Lines - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-[2px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold/30" />

      {/* Vertical Golden Accent Lines */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

      <div className="container-responsive relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Emotional Headline with Enhanced Typography */}
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 backdrop-blur-sm bg-white/5 px-6 py-3 border border-gold/20 rounded-full">
              <span className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse-slow" />
              <span className="text-gold/90 font-medium tracking-[0.3em] text-xs uppercase">
                Join Our Legacy
              </span>
              <span className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse-slow" />
            </div>
            
            <h2 className="section-title font-serif font-bold text-white mb-6">
              Experience the <span className="text-gradient-gold">May Star Legacy</span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/50" />
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/50" />
            </div>

            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover authentic Cantonese cuisine at our exclusive locations across Indonesia
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-12 lg:mb-16 xl:mb-20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <a
              href="#branches"
              className="btn-responsive group relative bg-gradient-gold text-black font-bold hover:shadow-2xl hover:shadow-gold/40 transition-all duration-500 w-full sm:w-auto uppercase tracking-wider rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Our Locations
              </span>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="#trademark"
              className="btn-responsive group relative border-2 border-gold/40 text-gold font-bold hover:bg-gold hover:text-black hover:border-gold transition-all duration-500 w-full sm:w-auto uppercase tracking-wider rounded-full backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Our Heritage
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Enhanced Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 pt-8 sm:pt-12 border-t border-gold/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center space-y-3 sm:space-y-4 group">
              <div className="w-16 h-16 bg-gold/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-responsive-sm text-gold font-bold tracking-widest uppercase">Operating Hours</div>
              <div className="text-responsive-sm text-white/70 font-medium">Daily: 10:00 AM - 10:00 PM</div>
            </div>
            
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-gold/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-responsive-sm text-gold font-bold tracking-widest uppercase">Reservations</div>
              <div className="text-responsive-sm text-white/70 font-medium">Banquet Facilities Available</div>
            </div>
            
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-gold/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="text-responsive-sm text-gold font-bold tracking-widest uppercase">Service</div>
              <div className="text-responsive-sm text-white/70 font-medium">Professional & Attentive</div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="text-center mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gold/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-responsive-sm text-white/50 mb-4">For inquiries and reservations</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+62123456789" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-responsive-sm font-medium group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Contact Us</span>
              </a>
              <span className="text-white/30 hidden sm:block">|</span>
              <a href="mailto:info@maystar.com" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-responsive-sm font-medium group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
