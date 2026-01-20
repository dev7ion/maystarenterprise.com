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
      {/* Elegant Light Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7F0] via-[#FFF8E7] to-[#F5F0E8]" />
      
      {/* Decorative Overlay Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 45%, rgba(218,165,32,0.03) 50%, transparent 55%),
            linear-gradient(-30deg, transparent 45%, rgba(218,165,32,0.03) 50%, transparent 55%)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(218,165,32,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,215,0,0.15),transparent_50%)]" />
      </div>

      {/* Subtle Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DAA520] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
      
      {/* Golden Border Effect Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent opacity-50" />
      
      {/* Golden Border Effect Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Elegant Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-[#DAA520]/5 via-[#DAA520]/10 to-[#DAA520]/5 border-2 border-[#DAA520]/30 rounded-full shadow-lg shadow-[#DAA520]/10">
              <div className="w-2.5 h-2.5 bg-[#DAA520] rounded-full animate-pulse" />
              <span className="text-[#DAA520] text-sm font-bold tracking-[0.3em] uppercase">Licensed Partners</span>
              <div className="w-2.5 h-2.5 bg-[#DAA520] rounded-full animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight drop-shadow-sm">
            Franchise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5941A] via-[#DAA520] to-[#C5941A]">Network</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent to-[#DAA520]" />
            <div className="relative">
              <div className="w-3 h-3 bg-gradient-to-br from-[#DAA520] to-[#FFD700] rotate-45 shadow-md" />
              <div className="absolute inset-0 w-3 h-3 bg-[#DAA520] rotate-45 animate-ping opacity-40" />
            </div>
            <div className="h-0.5 w-24 bg-gradient-to-l from-transparent to-[#DAA520]" />
          </div>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
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
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 rounded-2xl transition-all duration-500 group-hover:from-white group-hover:to-white/90 shadow-xl group-hover:shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/5 to-transparent rounded-2xl transition-all duration-500 group-hover:from-[#DAA520]/10" />
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#DAA520]/30 via-[#FFD700]/20 to-[#DAA520]/30 blur-sm" />
                </div>

                <div className="relative p-8 lg:p-10 rounded-2xl border-2 border-[#DAA520]/20 group-hover:border-[#DAA520]/50 transition-all duration-500 backdrop-blur-sm">
                  {/* Region Header */}
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-[#DAA520]/30 group-hover:border-[#DAA520]/50 transition-colors duration-500">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#DAA520]/30 to-[#FFD700]/20 rounded-xl flex items-center justify-center group-hover:from-[#DAA520]/50 group-hover:to-[#FFD700]/30 transition-all duration-500 transform group-hover:scale-110 shadow-lg">
                        <svg className="w-7 h-7 text-[#C5941A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 w-14 h-14 bg-[#DAA520]/30 rounded-xl animate-ping opacity-0 group-hover:opacity-60" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C5941A] to-[#DAA520]">
                        {region.region}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 font-semibold tracking-wide">{region.branches.length} Lokasi</p>
                    </div>
                  </div>
                  
                  {/* Branches List */}
                  <ul className="space-y-4">
                    {region.branches.map((branch, idx) => (
                      <li
                        key={idx}
                        className="group/item relative flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#DAA520]/10 hover:to-transparent transition-all duration-300 border border-transparent hover:border-[#DAA520]/20"
                      >
                        {/* Decorative Line */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#DAA520] via-[#FFD700] to-[#DAA520] group-hover/item:h-full transition-all duration-300 rounded-full shadow-md" />
                        
                        {/* Bullet Point */}
                        <div className="relative flex-shrink-0 mt-1.5">
                          <div className="w-2.5 h-2.5 bg-[#DAA520]/60 rounded-full group-hover/item:bg-gradient-to-br group-hover/item:from-[#DAA520] group-hover/item:to-[#FFD700] transition-all duration-300 group-hover/item:scale-125 shadow-sm" />
                          <div className="absolute inset-0 w-2.5 h-2.5 bg-[#DAA520] rounded-full animate-ping opacity-0 group-hover/item:opacity-60" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-gray-900 text-base lg:text-lg mb-1.5 group-hover/item:text-[#C5941A] transition-colors duration-300">
                            {branch.name}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">
                            <svg className="w-4 h-4 flex-shrink-0 text-[#DAA520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            <span className="truncate font-medium">{branch.location}</span>
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
