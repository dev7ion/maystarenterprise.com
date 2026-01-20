'use client';

export default function FranchiseNetworkSection() {
  const franchiseRegions = [
    {
      region: 'Jakarta & Jabodetabek',
      branches: [
        { name: 'May Star Signature', location: 'Sari Pacific Hotel, Thamrin' },
        { name: 'May Star PIK Avenue', location: 'Pantai Indah Kapuk' },
        { name: 'May Star Mall Artha Gading', location: 'North Jakarta' },
        { name: 'May Star Navapark BSD', location: 'Tangerang' }
      ]
    },
    {
      region: 'West Java',
      branches: [
        { name: 'May Star', location: '23 Paskal Shopping Center, Bandung' }
      ]
    },
    {
      region: 'Central Java & Yogyakarta',
      branches: [
        { name: 'May Star', location: 'Jogja City Mall, Yogyakarta' }
      ]
    },
    {
      region: 'East Java',
      branches: [
        { name: 'May Star', location: 'Pakuwon Square, Surabaya' },
        { name: 'May Star', location: 'Elpico Mall, Malang' }
      ]
    }
  ];

  return (
    <section id="franchise-network" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a1a1a] to-black" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(218,165,32,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(218,165,32,0.1),transparent_50%)]" />
      </div>

      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DAA520] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DAA520] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Elegant Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 px-6 py-2 bg-gradient-to-r from-transparent via-[#DAA520]/10 to-transparent border border-[#DAA520]/20 rounded-full">
              <div className="w-2 h-2 bg-[#DAA520] rounded-full animate-pulse" />
              <span className="text-[#DAA520] text-sm font-bold tracking-[0.3em] uppercase">Licensed Partners</span>
              <div className="w-2 h-2 bg-[#DAA520] rounded-full animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Franchise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#DAA520]">Network</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#DAA520]/50" />
            <div className="relative">
              <div className="w-3 h-3 bg-[#DAA520] rotate-45" />
              <div className="absolute inset-0 w-3 h-3 bg-[#DAA520] rotate-45 animate-ping opacity-50" />
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#DAA520]/50" />
          </div>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Temukan pengalaman kuliner premium kami di berbagai lokasi strategis di seluruh Indonesia
          </p>
        </div>

        {/* Premium Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {franchiseRegions.map((region, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ 
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Card Background with Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl transition-all duration-500 group-hover:from-white/10 group-hover:to-white/5" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/0 to-[#DAA520]/0 rounded-2xl transition-all duration-500 group-hover:from-[#DAA520]/5 group-hover:to-transparent" />
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#DAA520]/20 via-transparent to-[#DAA520]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px' }}>
                  <div className="absolute inset-[1px] bg-black/80 rounded-2xl backdrop-blur-sm" />
                </div>

                <div className="relative p-8 lg:p-10 rounded-2xl border border-white/10 group-hover:border-[#DAA520]/40 transition-all duration-500 backdrop-blur-sm">
                  {/* Region Header */}
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#DAA520]/20 group-hover:border-[#DAA520]/40 transition-colors duration-500">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#DAA520]/20 to-[#DAA520]/5 rounded-xl flex items-center justify-center group-hover:from-[#DAA520]/30 group-hover:to-[#DAA520]/10 transition-all duration-500 transform group-hover:scale-110">
                        <svg className="w-7 h-7 text-[#DAA520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 w-14 h-14 bg-[#DAA520]/20 rounded-xl animate-ping opacity-0 group-hover:opacity-75" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFD700]">
                        {region.region}
                      </h3>
                      <p className="text-xs text-white/40 mt-1 font-medium tracking-wide">{region.branches.length} Lokasi</p>
                    </div>
                  </div>
                  
                  {/* Branches List */}
                  <ul className="space-y-4">
                    {region.branches.map((branch, idx) => (
                      <li
                        key={idx}
                        className="group/item relative flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                      >
                        {/* Decorative Line */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#DAA520] to-transparent group-hover/item:h-full transition-all duration-300 rounded-full" />
                        
                        {/* Bullet Point */}
                        <div className="relative flex-shrink-0 mt-1.5">
                          <div className="w-2.5 h-2.5 bg-[#DAA520]/40 rounded-full group-hover/item:bg-[#DAA520] transition-all duration-300 group-hover/item:scale-125" />
                          <div className="absolute inset-0 w-2.5 h-2.5 bg-[#DAA520] rounded-full animate-ping opacity-0 group-hover/item:opacity-75" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white text-base lg:text-lg mb-1.5 group-hover/item:text-[#DAA520] transition-colors duration-300">
                            {branch.name}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-white/50 group-hover/item:text-white/70 transition-colors duration-300">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            <span className="truncate">{branch.location}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-16 lg:mt-24 text-center">
          <div className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#DAA520]/20 backdrop-blur-sm overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #DAA520 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="inline-block p-3 bg-[#DAA520]/10 rounded-full mb-6">
                <svg className="w-8 h-8 text-[#DAA520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4">
                Tertarik Menjadi Partner?
              </h3>
              <p className="text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
                Bergabunglah dengan jaringan franchise May Star dan bawa pengalaman kuliner premium ke kota Anda
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#DAA520]/50 transition-all duration-300 hover:scale-105"
              >
                <span>Hubungi Kami</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
