export default function TrademarkSection() {
  return (
    <section id="trademark" className="section-padding bg-gradient-to-b from-black via-gray-dark/20 to-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_#D4AF37_0%,_transparent_70%)]" />
      </div>

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24 animate-fade-in">
          <span className="section-subtitle text-gold/90 mb-6 block">Ownership & Trademark</span>
          <h2 className="section-title font-serif font-bold text-white mb-6">
            Our <span className="text-gradient-gold">Heritage</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <p className="editorial-text text-white/70 mx-auto max-w-2xl">
            The following prestigious outlets are directly owned and operated by the Trademark Holder, serving as benchmarks for the brand's highest standards.
          </p>
        </div>

        {/* Official Trademark Owner - 2 Enhanced Cards */}
        <div className="max-w-6xl mx-auto mb-24 lg:mb-32">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
            {/* Card 1 - May Star Hublife */}
            <div className="group relative bg-gray-dark/40 backdrop-blur-sm overflow-hidden rounded-xl hover-lift animate-slide-in-left">
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/30 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/30 rounded-br-xl" />
              
              <div className="aspect-[4/5] overflow-hidden responsive-image">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800"
                  alt="May Star Hublife"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-gold text-black text-xs font-bold tracking-widest mb-4 rounded-full">
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse-slow" />
                  <span>TRADEMARK OWNER</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-2 sm:mb-3 group-hover:text-gold transition-colors">
                  May Star Hublife
                </h3>
                <p className="text-gold/90 text-xs sm:text-sm mb-2 sm:mb-3 tracking-wide font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Taman Anggrek, Jakarta
                </p>
                <p className="text-responsive-sm text-white/70 leading-relaxed border-l-2 border-gold/30 pl-4">
                  The flagship restaurant showcasing the finest in Cantonese dining excellence with premium interior design and world-class service standards.
                </p>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
            </div>

            {/* Card 2 - May Star Palace */}
            <div className="group relative bg-gray-dark/40 backdrop-blur-sm overflow-hidden rounded-xl hover-lift animate-slide-in-right">
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/30 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/30 rounded-br-xl" />
              
              <div className="aspect-[4/5] overflow-hidden responsive-image">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800"
                  alt="May Star Palace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-gold text-black text-xs font-bold tracking-widest mb-4 rounded-full">
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse-slow" />
                  <span>TRADEMARK OWNER</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-2 sm:mb-3 group-hover:text-gold transition-colors">
                  May Star Palace
                </h3>
                <p className="text-gold/90 text-xs sm:text-sm mb-2 sm:mb-3 tracking-wide font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  PIK 2 – Indonesia Design District
                </p>
                <p className="text-responsive-sm text-white/70 leading-relaxed border-l-2 border-gold/30 pl-4">
                  Our newest palace location, epitomizing luxury dining with architectural grandeur and innovative culinary concepts.
                </p>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
            </div>
          </div>
        </div>

        {/* Franchise Network - Enhanced Design */}
        <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="card-luxury card-responsive rounded-xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold/30" />
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white">Franchise Network</h3>
                <div className="h-px w-12 bg-gold/30" />
              </div>
              <p className="text-responsive-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
                All other May Star branches operate under license, bringing the celebrated May Star experience to cities throughout Indonesia
              </p>
            </div>

            {/* Enhanced Grid by Region */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
              <div className="space-y-4 group">
                <div className="flex items-center gap-3 pb-3 border-b border-gold/20">
                  <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-gold text-xs sm:text-sm font-bold tracking-wider uppercase">Jakarta & Jabodetabek</h4>
                </div>
                <ul className="space-y-3">
                  {['May Star Signature, Thamrin', 'May Star PIK Avenue', 'May Star Mall Artha Gading', 'May Star Navapark BSD'].map((location, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group/item">
                      <div className="w-1.5 h-1.5 bg-gold/50 rounded-full mt-2 group-hover/item:bg-gold transition-colors" />
                      <span className="text-xs sm:text-sm">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 group">
                <div className="flex items-center gap-3 pb-3 border-b border-gold/20">
                  <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="text-gold text-xs sm:text-sm font-bold tracking-wider uppercase">West Java</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group/item">
                    <div className="w-1.5 h-1.5 bg-gold/50 rounded-full mt-2 group-hover/item:bg-gold transition-colors" />
                    <span className="text-xs sm:text-sm">May Star 23 Paskal, Bandung</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 group">
                <div className="flex items-center gap-3 pb-3 border-b border-gold/20">
                  <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h4 className="text-gold text-xs sm:text-sm font-bold tracking-wider uppercase">Central Java & Yogyakarta</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group/item">
                    <div className="w-1.5 h-1.5 bg-gold/50 rounded-full mt-2 group-hover/item:bg-gold transition-colors" />
                    <span className="text-xs sm:text-sm">May Star Jogja City Mall</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 group">
                <div className="flex items-center gap-3 pb-3 border-b border-gold/20">
                  <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-gold text-xs sm:text-sm font-bold tracking-wider uppercase">East Java</h4>
                </div>
                <ul className="space-y-3">
                  {['May Star Pakuwon Square, Surabaya', 'May Star Elpico Mall, Malang'].map((location, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group/item">
                      <div className="w-1.5 h-1.5 bg-gold/50 rounded-full mt-2 group-hover/item:bg-gold transition-colors" />
                      <span className="text-xs sm:text-sm">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
