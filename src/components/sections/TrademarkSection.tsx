'use client';

import { useState } from 'react';

export default function TrademarkSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const trademarkOwners = [
    {
      name: 'May Star Seafood Hublife',
      location: 'Taman Anggrek, Jakarta',
      address: 'Hublife, Ground Floor (GF), Units 12, 15, 16\nJl. Tanjung Duren Timur No.2, RT.12/RW.5',
      description: 'Our flagship restaurant showcasing the pinnacle of Cantonese culinary artistry, where tradition meets contemporary luxury in every detail.',
      image: '/hublife.jpg',
      badges: ['Flagship Location', 'Premium Interior', 'World-Class Service'],
      mapLink: 'https://maps.app.goo.gl/ZKcXpPd7HK2UbdM88'
    },
    {
      name: 'May Star Palace PIK 2',
      location: 'Indonesia Design District, Tangerang',
      address: 'Jalan HR. Rasuna Said No.32 Kav. BB-15\nSalembaran, Kosambi',
      description: 'Our palatial destination embodying architectural grandeur and innovative culinary concepts in an atmosphere of refined elegance.',
      image: '/pik.JPG',
      badges: ['Palace Location', 'Architectural Grandeur', 'Luxury Dining'],
      mapLink: 'https://maps.app.goo.gl/QbSK8Gxhvpqjb3F56'
    }
  ];

  return (
    <section id="trademark" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Elegant Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      
      {/* Sophisticated Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #DAA520 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#DAA520]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#DAA520]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Refined Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-28">
          {/* Premium Badge */}
          <div className="inline-block mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#DAA520]/20 blur-xl rounded-full" />
              <div className="relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#DAA520]/10 via-[#DAA520]/5 to-[#DAA520]/10 border border-[#DAA520]/30 rounded-full backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 bg-[#DAA520] rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-[#DAA520] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="w-1.5 h-1.5 bg-[#DAA520] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
                <span className="text-[#DAA520] text-xs font-bold tracking-[0.3em] uppercase">Ownership & Trademark</span>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 bg-[#DAA520] rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-[#DAA520] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="w-1.5 h-1.5 bg-[#DAA520] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Elegant Title */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#DAA520]">Heritage</span>
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#DAA520]/40 to-[#DAA520]" />
            <div className="relative">
              <div className="w-3 h-3 bg-gradient-to-br from-[#DAA520] to-[#FFD700] rotate-45 shadow-lg shadow-[#DAA520]/50" />
              <div className="absolute inset-0 w-3 h-3 bg-[#DAA520] rotate-45 animate-ping opacity-50" />
            </div>
            <div className="h-px w-32 bg-gradient-to-l from-transparent via-[#DAA520]/40 to-[#DAA520]" />
          </div>
          
          {/* Refined Description */}
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
            These prestigious establishments are directly owned and operated by the Trademark Holder, serving as the benchmark for our brand's highest standards of excellence
          </p>
        </div>

        {/* Premium Trademark Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {trademarkOwners.map((owner, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Outer Glow Effect */}
                <div className={`absolute -inset-4 bg-gradient-to-br from-[#DAA520]/20 via-[#DAA520]/5 to-transparent rounded-3xl opacity-0 blur-2xl transition-all duration-700 ${hoveredCard === index ? 'opacity-100 scale-105' : ''}`} />
                
                {/* Main Card Container */}
                <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-3xl overflow-hidden border border-white/10 group-hover:border-[#DAA520]/40 transition-all duration-700 shadow-2xl backdrop-blur-sm">
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent" />
                  
                  {/* Corner Ornaments */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#DAA520]/20 rounded-tl-3xl transition-all duration-500 group-hover:border-[#DAA520]/60" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#DAA520]/20 rounded-br-3xl transition-all duration-500 group-hover:border-[#DAA520]/60" />
                  
                  {/* Image Section */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={owner.image}
                      alt={owner.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#DAA520]/20 to-transparent opacity-0 transition-opacity duration-700 ${hoveredCard === index ? 'opacity-100' : ''}`} />
                    
                    {/* Trademark Owner Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#DAA520] to-[#FFD700] rounded-full shadow-2xl shadow-[#DAA520]/40">
                        <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                        <span className="text-black text-xs font-bold tracking-[0.25em] uppercase">Trademark Owner</span>
                      </div>
                    </div>

                    {/* Feature Badges */}
                    <div className={`absolute top-6 right-6 flex flex-col gap-2 transition-all duration-500 ${hoveredCard === index ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                      {owner.badges.map((badge, idx) => (
                        <div 
                          key={idx} 
                          className="px-4 py-2 bg-black/80 backdrop-blur-md border border-[#DAA520]/30 rounded-full text-[#DAA520] text-xs font-semibold whitespace-nowrap"
                          style={{ 
                            animationDelay: `${idx * 0.1}s`
                          }}
                        >
                          {badge}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="relative p-8 lg:p-10">
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#DAA520] group-hover:to-[#FFD700] transition-all duration-500">
                      {owner.name}
                    </h3>
                    
                    {/* Location */}
                    <div className="flex items-start gap-3 text-[#DAA520] mb-6">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold mb-1">{owner.location}</p>
                        <p className="text-xs text-white/50 leading-relaxed whitespace-pre-line">{owner.address}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="relative pl-5 mb-6">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DAA520] to-transparent" />
                      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                        {owner.description}
                      </p>
                    </div>

                    {/* Action Link */}
                    <a
                      href={owner.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-[#DAA520] hover:text-[#FFD700] transition-all duration-300 group/link ${hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <span className="text-sm font-bold tracking-wide">View on Google Maps</span>
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/30 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Heritage Statement */}
        <div className="max-w-5xl mx-auto mt-20 lg:mt-28">
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#DAA520]/20 via-[#DAA520]/5 to-transparent rounded-3xl opacity-50 blur-3xl group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Main Container */}
            <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-[#DAA520]/30 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent" />
              
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#DAA520]/20 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#DAA520]/20 rounded-br-3xl" />
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-[0.025]">
                <div
                  className="absolute inset-0 animate-pulse"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #DAA520 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                    animationDuration: '4s'
                  }}
                />
              </div>
              
              <div className="relative p-12 lg:p-16">
                {/* Icon Container */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    {/* Outer Ring Animation */}
                    <div className="absolute inset-0 -m-2 rounded-full border-2 border-[#DAA520]/30 animate-ping" style={{ animationDuration: '3s' }} />
                    
                    {/* Icon Background */}
                    <div className="relative w-20 h-20 bg-gradient-to-br from-[#DAA520]/30 to-[#DAA520]/10 rounded-full flex items-center justify-center border-2 border-[#DAA520]/40 shadow-lg shadow-[#DAA520]/20">
                      <svg className="w-10 h-10 text-[#DAA520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#DAA520]">
                    Guaranteed Authenticity
                  </span>
                </h3>
                
                {/* Decorative Divider */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#DAA520]/50" />
                  <div className="w-2 h-2 bg-[#DAA520] rounded-full" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#DAA520]/50" />
                </div>
                
                {/* Description */}
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto text-center mb-10">
                  Every May Star location, whether owned or franchised, upholds our unwavering commitment to quality, service excellence, and the authentic Cantonese culinary experience
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
                  {[
                    {
                      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
                      title: 'Premium Quality',
                      desc: 'Highest standards in ingredients and preparation'
                    },
                    {
                      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                      title: 'Expert Service',
                      desc: 'Trained staff delivering exceptional hospitality'
                    },
                    {
                      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
                      title: 'Authentic Recipes',
                      desc: 'Traditional Cantonese flavors in every dish'
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="group/feature relative p-5 rounded-xl bg-white/[0.03] border border-[#DAA520]/20 hover:border-[#DAA520]/40 hover:bg-white/[0.06] transition-all duration-300">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-[#DAA520]/10 rounded-lg flex items-center justify-center mb-4 group-hover/feature:bg-[#DAA520]/20 group-hover/feature:scale-110 transition-all duration-300">
                          <svg className="w-6 h-6 text-[#DAA520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                          </svg>
                        </div>
                        <h4 className="text-white font-bold text-base mb-2 group-hover/feature:text-[#DAA520] transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-white/50 text-sm leading-relaxed group-hover/feature:text-white/70 transition-colors">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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
