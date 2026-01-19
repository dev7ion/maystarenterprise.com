'use client';

import { useState } from 'react';

export default function TrademarkSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const trademarkOwners = [
    {
      name: 'May Star Hublife',
      location: 'Taman Anggrek, Jakarta',
      description: 'The flagship restaurant showcasing the finest in Cantonese dining excellence with premium interior design and world-class service standards.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
      features: ['Premium Interior', 'World-Class Service', 'Flagship Location']
    },
    {
      name: 'May Star Palace',
      location: 'PIK 2 – Indonesia Design District',
      description: 'Our newest palace location, epitomizing luxury dining with architectural grandeur and innovative culinary concepts.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800',
      features: ['Architectural Grandeur', 'Luxury Dining', 'Innovative Concepts']
    }
  ];

  const franchiseLocations = {
    'Jakarta & Jabodetabek': [
      'May Star Signature, Thamrin',
      'May Star PIK Avenue',
      'May Star Mall Artha Gading',
      'May Star Navapark BSD'
    ],
    'West Java': ['May Star 23 Paskal, Bandung'],
    'Central Java & Yogyakarta': ['May Star Jogja City Mall'],
    'East Java': ['May Star Pakuwon Square, Surabaya', 'May Star Elpico Mall, Malang']
  };

  const regionIcons: { [key: string]: string } = {
    'Jakarta & Jabodetabek': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    'West Java': 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    'Central Java & Yogyakarta': 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    'East Java': 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  };

  return (
    <section id="trademark" className="section-padding bg-gradient-to-b from-black via-gray-dark/20 to-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_#D4AF37_0%,_transparent_70%)] opacity-5 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Elements */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold/10"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container-responsive relative z-10">
        {/* Enhanced Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-28 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 backdrop-blur-md bg-white/5 px-8 py-4 border border-gold/30 rounded-full mb-8">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse-slow" />
              <span className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse-slow" style={{ animationDelay: '0.2s' }} />
              <span className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse-slow" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="section-subtitle text-gold/90 mb-0">Ownership & Trademark</span>
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse-slow" />
              <span className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse-slow" style={{ animationDelay: '0.2s' }} />
              <span className="w-2 h-2 bg-gradient-gold rounded-full animate-pulse-slow" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
          
          <h2 className="section-title font-serif font-bold text-white mb-8">
            Our <span className="text-gradient-gold">Heritage</span>
          </h2>
          
          {/* Enhanced Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-gold animate-shimmer" />
            <div className="relative">
              <div className="w-3 h-3 bg-gradient-gold rotate-45 shadow-lg shadow-gold/50" />
              <div className="absolute inset-0 w-3 h-3 bg-gold/50 rotate-45 animate-ping" />
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-gold/50 to-gold animate-shimmer" />
          </div>
          
          <p className="editorial-text text-white/70 mx-auto max-w-2xl text-lg leading-relaxed">
            The following prestigious outlets are directly owned and operated by the Trademark Holder, serving as benchmarks for the brand's highest standards.
          </p>
        </div>

        {/* Enhanced Trademark Owner Cards */}
        <div className="max-w-6xl mx-auto mb-28 lg:mb-36">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
            {trademarkOwners.map((owner, index) => (
              <div
                key={index}
                className="group relative animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Outer Glow */}
                <div className={`absolute -inset-2 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl opacity-0 blur-xl transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : ''}`} />
                
                {/* Main Card */}
                <div className="relative bg-gray-dark/50 backdrop-blur-md overflow-hidden rounded-2xl border-2 border-gold/30 group-hover:border-gold/60 transition-all duration-500 shadow-2xl">
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-gold/40 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-gold/40 rounded-br-2xl" />
                  
                  {/* Top Gold Line */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-gold" />
                  
                  {/* Image Container */}
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={owner.image}
                      alt={owner.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : ''}`} />
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-gold text-black text-xs font-bold tracking-[0.2em] rounded-full shadow-lg shadow-gold/30">
                        <div className="w-2 h-2 bg-black rounded-full animate-pulse-slow" />
                        <span>TRADEMARK OWNER</span>
                      </div>
                    </div>

                    {/* Features Pills */}
                    <div className={`absolute top-6 right-6 space-y-2 transform transition-all duration-500 ${hoveredCard === index ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                      {owner.features.map((feature, idx) => (
                        <div key={idx} className="backdrop-blur-md bg-black/60 border border-gold/30 px-3 py-1.5 rounded-full text-xs text-white/90">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8 lg:p-10">
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 group-hover:text-gradient-gold transition-all duration-300">
                      {owner.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gold text-sm mb-6 font-medium">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="tracking-wide">{owner.location}</span>
                    </div>
                    
                    <div className="relative pl-5 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300">
                      <p className="text-responsive-sm text-white/80 leading-relaxed group-hover:text-white/90 transition-colors">
                        {owner.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className={`mt-6 transform transition-all duration-500 ${hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      <div className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors group/btn cursor-pointer">
                        <span className="text-sm font-semibold tracking-wide">View Details</span>
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Shine Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PREMIUM LUXURY Franchise Network */}
        <div className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="relative">
            {/* Enhanced Outer Glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-3xl blur-3xl animate-pulse-slow" />
            
            {/* Main Luxury Container */}
            <div className="relative backdrop-blur-lg bg-gradient-to-br from-gray-dark/80 via-black/90 to-gray-dark/80 border-2 border-gold/40 rounded-3xl overflow-hidden shadow-2xl">
              {/* Premium Top Accent Bar */}
              <div className="relative h-2 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
              </div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-2 left-2 w-16 h-16 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-gold/30 rounded-br-2xl pointer-events-none" />
              
              <div className="p-12 lg:p-16">
                {/* Premium Header Section */}
                <div className="text-center mb-16">
                  {/* Luxury Badge */}
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold/20 via-gold/15 to-gold/20 border border-gold/40 rounded-full mb-8 shadow-lg shadow-gold/20 backdrop-blur-sm">
                    <span className="text-gold text-xl animate-pulse-slow">✦</span>
                    <span className="text-gold/90 font-bold text-xs tracking-[0.3em] uppercase">
                      Licensed Partners
                    </span>
                    <span className="text-gold text-xl animate-pulse-slow">✦</span>
                  </div>

                  {/* Elegant Title */}
                  <div className="relative inline-block mb-8">
                    <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white relative z-10">
                      Franchise Network
                    </h3>
                    <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-gold rounded-full blur-sm" />
                    <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-gold rounded-full" />
                  </div>
                  
                  {/* Description with Decorative Lines */}
                  <div className="flex items-center justify-center gap-6 mb-8">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold/60 to-gold" />
                    <div className="w-2 h-2 bg-gradient-gold rounded-full shadow-lg shadow-gold/50" />
                    <div className="h-px w-20 bg-gradient-to-l from-transparent via-gold/60 to-gold" />
                  </div>
                  
                  <p className="text-base text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
                    All other May Star branches operate under license, bringing the celebrated May Star experience to cities throughout Indonesia with the same commitment to excellence
                  </p>
                </div>

                {/* Premium Locations Grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                  {Object.entries(franchiseLocations).map(([region, locations], regionIdx) => (
                    <div
                      key={regionIdx}
                      className="group/region relative"
                    >
                      {/* Card Glow Effect */}
                      <div className="absolute -inset-2 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl opacity-0 group-hover/region:opacity-100 blur-xl transition-opacity duration-500" />
                      
                      {/* Card Container */}
                      <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border-2 border-gold/20 group-hover/region:border-gold/40 rounded-2xl overflow-hidden transition-all duration-500 shadow-xl">
                        {/* Top Accent */}
                        <div className="h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50" />
                        
                        <div className="p-8">
                          {/* Premium Region Header */}
                          <div className="flex items-center gap-5 mb-8 pb-6 border-b-2 border-gold/20 group-hover/region:border-gold/40 transition-colors duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-gold/30 to-gold/10 rounded-2xl flex items-center justify-center border-2 border-gold/40 group-hover/region:scale-110 group-hover/region:rotate-3 transition-all duration-500 shadow-lg shadow-gold/20">
                              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={regionIcons[region]} />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-gold text-base font-bold tracking-[0.2em] uppercase mb-2 group-hover/region:text-[#FFD700] transition-colors">
                                {region}
                              </h4>
                              <div className="flex items-center gap-3">
                                <div className="h-1 w-16 bg-gradient-gold rounded-full group-hover/region:w-28 transition-all duration-500" />
                                <span className="text-xs text-gold/60 font-semibold">
                                  {locations.length} {locations.length === 1 ? 'Location' : 'Locations'}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Luxurious Locations List */}
                          <ul className="space-y-4">
                            {locations.map((location, idx) => (
                              <li
                                key={idx}
                                className="group/item"
                                onMouseEnter={() => setHoveredLocation(location)}
                                onMouseLeave={() => setHoveredLocation(null)}
                              >
                                <div className={`relative flex items-start gap-4 p-5 rounded-xl transition-all duration-300 ${hoveredLocation === location ? 'bg-white/10 border-2 border-gold/40 shadow-lg shadow-gold/10' : 'bg-white/5 border border-gold/20 hover:border-gold/30'}`}>
                                  {/* Decorative Icon */}
                                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${hoveredLocation === location ? 'bg-gradient-gold text-black scale-110 shadow-lg shadow-gold/50' : 'bg-gold/20 text-gold border border-gold/30'}`}>
                                    <span className="text-sm font-bold">✦</span>
                                  </div>
                                  
                                  {/* Location Text */}
                                  <div className="flex-1 min-w-0">
                                    <span className={`text-sm leading-relaxed block transition-colors duration-300 ${hoveredLocation === location ? 'text-white font-semibold' : 'text-white/70'}`}>
                                      {location}
                                    </span>
                                  </div>
                                  
                                  {/* Arrow Icon */}
                                  <svg
                                    className={`flex-shrink-0 w-5 h-5 text-gold transform transition-all duration-300 ${hoveredLocation === location ? 'translate-x-0 opacity-100 scale-110' : '-translate-x-2 opacity-0'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                  </svg>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Premium Footer Stats */}
                <div className="relative mt-16 pt-10 border-t-2 border-gold/20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-1 bg-gradient-gold rounded-full shadow-lg shadow-gold/50" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-8">
                    {[
                      { value: '8', label: 'Franchise Locations' },
                      { value: '4', label: 'Regions' },
                      { value: '100%', label: 'Quality Standards' }
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center group/stat cursor-pointer">
                        <div className="relative inline-block mb-4">
                          <div className="absolute -inset-2 bg-gradient-gold/20 rounded-xl opacity-0 group-hover/stat:opacity-100 blur-lg transition-opacity duration-300" />
                          <div className="relative text-5xl lg:text-6xl font-serif font-bold text-gradient-gold group-hover/stat:scale-110 transition-transform duration-300">
                            {stat.value}
                          </div>
                        </div>
                        <div className="text-white/60 text-xs uppercase tracking-[0.15em] font-semibold">{stat.label}</div>
                        <div className="h-1 w-12 bg-gradient-gold/50 rounded-full mx-auto mt-3 group-hover/stat:w-20 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Accent Bar */}
              <div className="relative h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
