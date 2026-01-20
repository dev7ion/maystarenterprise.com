'use client';

import Link from 'next/link';

export default function FranchiseNetworkSection() {
  const franchiseRegions = [
    {
      region: 'Jakarta & Greater Area',
      badge: 'Flagship Area',
      locationCount: '4 Locations',
      isHero: true,
      outlets: [
        { name: 'May Star Signature', location: 'Sari Pacific Hotel, Thamrin' },
        { name: 'May Star PIK Avenue', location: 'Pantai Indah Kapuk' },
        { name: 'May Star Mall Artha Gading', location: 'North Jakarta' },
        { name: 'May Star Navapark BSD', location: 'Tangerang' }
      ]
    },
    {
      region: 'West Java',
      badge: 'Premium Location',
      locationCount: '1 Location',
      isHero: false,
      outlets: [
        { name: 'May Star', location: '23 Paskal Shopping Center, Bandung' }
      ]
    },
    {
      region: 'Central Java & Yogyakarta',
      badge: 'Cultural Hub',
      locationCount: '1 Location',
      isHero: false,
      outlets: [
        { name: 'May Star', location: 'Jogja City Mall, Yogyakarta' }
      ]
    },
    {
      region: 'East Java',
      badge: '2 Locations',
      locationCount: '2 Locations',
      isHero: false,
      outlets: [
        { name: 'May Star', location: 'Pakuwon Square, Surabaya' },
        { name: 'May Star', location: 'Elpico Mall, Malang' }
      ]
    }
  ];

  return (
    <section id="franchise-network" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-[#F1F3F5] text-neutral-900 isolate">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.02)_0%,transparent_50%)]" />
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20 text-neutral-900">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <div className="px-4 py-1.5 border border-[#D4AF37]/20 rounded-full">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#D4AF37]">
                Our Network
              </span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold mb-6 leading-tight tracking-tight text-neutral-900">
            Franchise Network
          </h2>
          
          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
          </div>
          
          {/* Description */}
          <p className="text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Premium culinary experiences across Indonesia's most prestigious locations
          </p>
        </div>

        {/* Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {franchiseRegions.map((region, index) => (
              <div 
                key={index}
                className={`
                  group relative
                  ${region.isHero ? 'md:col-span-2 md:row-span-2' : ''}
                `}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl border border-neutral-200 hover:border-[#D4AF37]/40 transition-all duration-500 overflow-hidden shadow-sm shadow-neutral-900/5">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-transparent to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#D4AF37]/5 transition-all duration-700 rounded-2xl" />
                  
                  {/* Content */}
                  <div className={`relative p-6 lg:p-8 ${region.isHero ? 'lg:p-12' : ''} h-full flex flex-col`}>
                    {/* Top Badge */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-full">
                        <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                        <span className="text-xs font-medium text-[#B8962E] tracking-wide">
                          {region.badge}
                        </span>
                      </div>
                    </div>

                    {/* Region Title */}
                    <h3 className={`
                      font-serif font-semibold text-neutral-900 mb-3 leading-tight
                      ${region.isHero ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-2xl'}
                    `}>
                      {region.region}
                    </h3>

                    {/* Location Count */}
                    <div className="mb-6 pb-6 border-b border-neutral-200">
                      <p className="text-sm text-neutral-600 font-medium">
                        {region.locationCount}
                      </p>
                    </div>

                    {/* Outlets List - Show max 2 */}
                    <div className="space-y-4 flex-1">
                      {region.outlets.slice(0, 2).map((outlet, idx) => (
                        <div 
                          key={idx}
                          className="group/item relative"
                        >
                          {/* Outlet Name */}
                          <div className="text-base font-medium text-neutral-900 mb-1.5 group-hover/item:text-[#B8962E] transition-colors duration-300">
                            {outlet.name}
                          </div>
                          
                          {/* Location */}
                          <div className="flex items-start gap-2">
                            <svg className="w-3.5 h-3.5 flex-shrink-0 text-neutral-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm text-neutral-600 leading-relaxed">
                              {outlet.location}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View All Link - Only show if more than 2 outlets */}
                    {region.outlets.length > 2 && (
                      <div className="mt-6 pt-6 border-t border-neutral-200">
                        <Link
                          href="/locations"
                          className="group/btn inline-flex items-center gap-2 text-sm font-medium text-[#B8962E] hover:text-[#D4AF37] transition-colors duration-300"
                        >
                          <span>View all locations</span>
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/30 transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 lg:mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-neutral-200 rounded-full shadow-sm shadow-neutral-900/5">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">
              Expanding Across Indonesia
            </span>
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </section>
  );
}
