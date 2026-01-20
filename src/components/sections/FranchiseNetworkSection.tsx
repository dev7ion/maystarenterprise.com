'use client';

export default function FranchiseNetworkSection() {
  const franchiseRegions = [
    {
      region: 'Jakarta & Greater Area',
      count: '4',
      branches: [
        { name: 'May Star Signature', location: 'Sari Pacific Hotel, Thamrin' },
        { name: 'May Star PIK Avenue', location: 'Pantai Indah Kapuk' },
        { name: 'May Star Mall Artha Gading', location: 'North Jakarta' },
        { name: 'May Star Navapark BSD', location: 'Tangerang' }
      ]
    },
    {
      region: 'West Java',
      count: '1',
      branches: [
        { name: 'May Star', location: '23 Paskal Shopping Center, Bandung' }
      ]
    },
    {
      region: 'Central Java & Yogyakarta',
      count: '1',
      branches: [
        { name: 'May Star', location: 'Jogja City Mall, Yogyakarta' }
      ]
    },
    {
      region: 'East Java',
      count: '2',
      branches: [
        { name: 'May Star', location: 'Pakuwon Square, Surabaya' },
        { name: 'May Star', location: 'Elpico Mall, Malang' }
      ]
    }
  ];

  return (
    <section id="franchise-network" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Luxurious Multi-Layer Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100" />
        
        {/* PNG Background Image with Enhanced Opacity */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: 'url(/bg-licensed.png)' }}
          />
        </div>

        {/* Premium Overlay Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,148,26,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(218,165,32,0.07)_0%,transparent_50%)]" />
        
        {/* Advanced Light Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#C5941A]/5 to-transparent" />
        </div>

        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#DAA520]/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5941A]/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#FFD700]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Elegant Top Border with Shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full bg-gradient-to-r from-transparent via-[#C5941A]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header with Enhanced Typography */}
        <div className="max-w-5xl mx-auto text-center mb-24 lg:mb-32">
          {/* Luxury Badge Label */}
          <div className="inline-flex items-center gap-6 mb-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C5941A]/40 to-[#C5941A]/60" />
            <div className="relative px-6 py-2.5 backdrop-blur-sm bg-white/60 border border-[#C5941A]/20 rounded-full shadow-lg shadow-[#C5941A]/5">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-[#C5941A] relative z-10">
                Licensed Partners
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C5941A]/5 via-[#DAA520]/10 to-[#C5941A]/5 rounded-full" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#C5941A]/40 to-[#C5941A]/60" />
          </div>
          
          {/* Magnificent Title with Enhanced Gradient */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-10 leading-[1.1] tracking-tight">
            <span className="inline-block text-gray-900 drop-shadow-sm">Franchise</span>{' '}
            <span className="inline-block relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5941A] via-[#DAA520] to-[#FFD700] drop-shadow-lg">
                Network
              </span>
              {/* Luxurious Underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5941A]/40 to-transparent rounded-full" />
            </span>
          </h2>
          
          {/* Elegant Divider with Diamond */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-px w-28 bg-gradient-to-r from-transparent via-[#C5941A]/30 to-[#C5941A]" />
            <div className="relative">
              {/* Diamond Shape */}
              <div className="w-3 h-3 bg-gradient-to-br from-[#FFD700] via-[#DAA520] to-[#C5941A] rotate-45 shadow-lg shadow-[#C5941A]/30" />
              {/* Glow Effect */}
              <div className="absolute inset-0 w-3 h-3 bg-[#FFD700] rotate-45 blur-md opacity-60 animate-pulse-slow" />
              {/* Outer Ring */}
              <div className="absolute -inset-2 border border-[#C5941A]/20 rotate-45 rounded-sm" />
            </div>
            <div className="h-px w-28 bg-gradient-to-l from-transparent via-[#C5941A]/30 to-[#C5941A]" />
          </div>
          
          {/* Refined Description */}
          <p className="text-lg lg:text-xl text-gray-600 mx-auto max-w-3xl leading-relaxed font-light">
            Discover our premium culinary experience across strategic locations throughout Indonesia
          </p>
        </div>

        {/* Enhanced 4-Column Premium Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {franchiseRegions.map((region, index) => (
              <div 
                key={index}
                className="group relative"
                style={{
                  animation: 'fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0
                }}
              >
                {/* Sophisticated Card Container */}
                <div className="relative h-full">
                  {/* Multi-Layer Background */}
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 group-hover:shadow-2xl group-hover:shadow-[#C5941A]/10 transition-all duration-700" />
                  
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C5941A]/[0.03] via-white/50 to-[#DAA520]/[0.02] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Elegant Border with Gradient */}
                  <div className="absolute inset-0 rounded-3xl border border-gray-200/80 group-hover:border-[#C5941A]/40 transition-all duration-700" />
                  
                  {/* Sophisticated Hover Glow */}
                  <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFD700]/20 via-[#DAA520]/15 to-[#C5941A]/10 blur-2xl" />
                  </div>

                  {/* Premium Top Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#C5941A]/30 to-transparent rounded-t-3xl group-hover:via-[#C5941A]/60 transition-all duration-700" />
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C5941A]/20 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C5941A]/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative p-8 lg:p-10 h-full flex flex-col">
                    {/* Region Header Section */}
                    <div className="mb-10 pb-7 border-b-2 border-gray-100 group-hover:border-[#C5941A]/20 transition-colors duration-700">
                      <div className="flex items-start justify-between mb-6">
                        {/* Premium Location Icon */}
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700]/10 via-[#DAA520]/15 to-[#C5941A]/5 rounded-2xl flex items-center justify-center group-hover:from-[#FFD700]/20 group-hover:via-[#DAA520]/25 group-hover:to-[#C5941A]/10 transition-all duration-700 shadow-lg shadow-[#C5941A]/5">
                            <svg className="w-7 h-7 text-[#C5941A] group-hover:scale-110 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          {/* Icon Glow Effect */}
                          <div className="absolute inset-0 w-14 h-14 bg-gradient-to-br from-[#FFD700]/20 to-[#C5941A]/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000 blur-xl" />
                        </div>
                        
                        {/* Large Count Number */}
                        <div className="relative -mt-2">
                          <div className="text-7xl lg:text-8xl font-serif font-extralight leading-none">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#C5941A]/20 via-[#DAA520]/30 to-[#FFD700]/15 group-hover:from-[#C5941A]/40 group-hover:via-[#DAA520]/50 group-hover:to-[#FFD700]/30 transition-all duration-700">
                              {region.count}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Region Title with Enhanced Typography */}
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-5 leading-tight tracking-tight group-hover:text-[#C5941A] transition-colors duration-500">
                        {region.region}
                      </h3>
                      
                      {/* Animated Gold Accent Line */}
                      <div className="flex items-center gap-3">
                        <div className="h-[3px] w-16 bg-gradient-to-r from-[#C5941A] via-[#DAA520] to-[#FFD700]/40 rounded-full shadow-sm shadow-[#C5941A]/30 group-hover:w-28 transition-all duration-700" />
                        <div className="flex gap-1.5">
                          <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#FFD700] to-[#C5941A] rounded-full shadow-sm shadow-[#C5941A]/50" />
                          <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#DAA520] to-[#C5941A] rounded-full shadow-sm shadow-[#C5941A]/40" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Premium Branches List */}
                    <div className="space-y-6 flex-1">
                      {region.branches.map((branch, idx) => (
                        <div 
                          key={idx}
                          className="group/item relative pl-6 transition-all duration-500 hover:translate-x-2"
                          style={{
                            animation: 'fadeIn 0.6s ease-out forwards',
                            animationDelay: `${(index * 0.15) + (idx * 0.1)}s`,
                            opacity: 0
                          }}
                        >
                          {/* Premium Bullet Point */}
                          <div className="absolute left-0 top-2.5">
                            <div className="relative">
                              {/* Main Dot */}
                              <div className="w-2 h-2 bg-gradient-to-br from-[#FFD700] via-[#DAA520] to-[#C5941A] rounded-full shadow-md shadow-[#C5941A]/40 group-hover/item:scale-125 transition-transform duration-300" />
                              {/* Pulse Effect */}
                              <div className="absolute inset-0 w-2 h-2 bg-[#FFD700] rounded-full opacity-0 group-hover/item:opacity-75 group-hover/item:scale-150 transition-all duration-500 blur-sm" />
                              {/* Outer Ring */}
                              <div className="absolute -inset-1 border border-[#C5941A]/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                          
                          {/* Branch Information */}
                          <div className="relative bg-gradient-to-r from-transparent to-transparent group-hover/item:from-[#C5941A]/[0.02] group-hover/item:to-transparent px-3 py-1 -ml-3 rounded-r-lg transition-all duration-300">
                            {/* Branch Name */}
                            <div className="text-base lg:text-lg font-bold text-gray-900 mb-2 group-hover/item:text-[#C5941A] transition-colors duration-300 leading-snug">
                              {branch.name}
                            </div>
                            
                            {/* Location with Icon */}
                            <div className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                              <svg className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover/item:text-[#C5941A]/60 mt-0.5 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="font-medium group-hover/item:text-gray-700 transition-colors duration-300">
                                {branch.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Luxurious Bottom Statement */}
        <div className="mt-28 lg:mt-36 text-center">
          <div className="inline-flex flex-col items-center gap-8">
            {/* Decorative Premium Icon */}
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700]/10 via-[#DAA520]/15 to-[#C5941A]/5 rounded-2xl flex items-center justify-center shadow-xl shadow-[#C5941A]/10 backdrop-blur-sm border border-[#C5941A]/10">
                <svg className="w-8 h-8 text-[#C5941A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {/* Multi-layer Glow */}
              <div className="absolute inset-0 blur-2xl bg-gradient-to-br from-[#FFD700]/20 to-[#C5941A]/20 rounded-2xl animate-pulse-slow" />
              <div className="absolute -inset-2 border border-[#C5941A]/20 rounded-2xl" />
            </div>
            
            {/* Elegant Statement Text */}
            <div className="flex items-center gap-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#C5941A]/30 to-[#C5941A]/50" />
              <div className="flex items-center gap-3 px-8 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-[#C5941A]/10 shadow-lg shadow-[#C5941A]/5">
                <div className="w-2 h-2 bg-gradient-to-br from-[#FFD700] to-[#C5941A] rounded-full shadow-sm shadow-[#C5941A]/50" />
                <span className="text-base lg:text-lg font-semibold tracking-wide bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent">
                  Expanding Across Indonesia
                </span>
                <div className="w-2 h-2 bg-gradient-to-br from-[#FFD700] to-[#C5941A] rounded-full shadow-sm shadow-[#C5941A]/50" />
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-[#C5941A]/30 to-[#C5941A]/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Premium Bottom Border with Shimmer */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full bg-gradient-to-r from-transparent via-[#C5941A]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" style={{ animationDelay: '2s' }} />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          33% {
            transform: translateY(-30px) translateX(20px) scale(1.1);
          }
          66% {
            transform: translateY(20px) translateX(-20px) scale(0.9);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-blob {
          animation: blob 12s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
