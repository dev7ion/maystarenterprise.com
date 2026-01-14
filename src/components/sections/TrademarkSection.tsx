export default function TrademarkSection() {
  return (
    <section id="trademark" className="section-padding bg-gradient-to-b from-black via-gray-dark to-black relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
          <span className="section-subtitle text-gold/80 mb-6 block">Ownership & Trademark</span>
          <h2 className="section-title font-serif font-bold text-white mb-8">
            Our <span className="text-gradient-gold">Heritage</span>
          </h2>
          <p className="editorial-text text-white/60 mx-auto">
            The following prestigious outlets are directly owned and operated by the Trademark Holder, serving as benchmarks for the brand's highest standards.
          </p>
        </div>

        {/* Official Trademark Owner - 2 Large Cards */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Card 1 - May Star Hublife */}
            <div className="group relative bg-gray-dark overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800"
                  alt="May Star Hublife"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <div className="inline-block px-4 py-1.5 bg-gradient-gold text-black text-xs font-bold tracking-widest mb-4">
                  TRADEMARK OWNER
                </div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-3">
                  May Star Hublife
                </h3>
                <p className="text-gold/90 text-sm mb-2 tracking-wide">Taman Anggrek, Jakarta</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  The flagship restaurant showcasing the finest in Cantonese dining excellence with premium interior design and world-class service standards.
                </p>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
            </div>

            {/* Card 2 - May Star Palace */}
            <div className="group relative bg-gray-dark overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800"
                  alt="May Star Palace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <div className="inline-block px-4 py-1.5 bg-gradient-gold text-black text-xs font-bold tracking-widest mb-4">
                  TRADEMARK OWNER
                </div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-3">
                  May Star Palace
                </h3>
                <p className="text-gold/90 text-sm mb-2 tracking-wide">PIK 2 – Indonesia Design District</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our newest palace location, epitomizing luxury dining with architectural grandeur and innovative culinary concepts.
                </p>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
            </div>
          </div>
        </div>

        {/* Franchise Network - Simpler, Less Visual Weight */}
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-gold/10 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Franchise Network</h3>
              <p className="text-white/50 text-sm max-w-2xl mx-auto">
                All other May Star branches operate under license, bringing the celebrated May Star experience to cities throughout Indonesia
              </p>
            </div>

            {/* Simple List by Region */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-gold text-sm font-semibold tracking-wider uppercase">Jakarta & Jabodetabek</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>May Star Signature, Thamrin</li>
                  <li>May Star PIK Avenue</li>
                  <li>May Star Mall Artha Gading</li>
                  <li>May Star Navapark BSD</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-gold text-sm font-semibold tracking-wider uppercase">West Java</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>May Star 23 Paskal, Bandung</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-gold text-sm font-semibold tracking-wider uppercase">Central Java & Yogyakarta</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>May Star Jogja City Mall</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-gold text-sm font-semibold tracking-wider uppercase">East Java</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>May Star Pakuwon Square, Surabaya</li>
                  <li>May Star Elpico Mall, Malang</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
