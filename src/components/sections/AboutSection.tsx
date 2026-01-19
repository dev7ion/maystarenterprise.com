'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Sophisticated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-amber-500/15 via-yellow-500/8 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-amber-600/12 via-orange-500/8 to-transparent rounded-full blur-3xl" style={{ animation: 'pulseSlow 12s ease-in-out infinite' }} />
        
        {/* Refined Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.2) 1px, transparent 1px)`,
            backgroundSize: '120px 120px',
          }}
        />

        {/* Elegant Accent Lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/15 to-transparent" />
      </div>

      <div className="container-responsive relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Elegant Header */}
          <div className="mb-24 lg:mb-32 text-center relative">
            <div className="animate-fade-in-up">
              {/* Refined Badge */}
              <div className="inline-flex items-center gap-4 backdrop-blur-xl bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 px-10 py-5 border border-amber-500/30 rounded-full mb-12 shadow-2xl shadow-amber-500/20 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-amber-400 text-sm md:text-base font-bold tracking-[0.3em] uppercase relative z-10">About Us</span>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              </div>
              
              {/* Elegant Title */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black mb-8 leading-tight">
                <span className="block text-white drop-shadow-2xl mb-2">A Legacy of</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 drop-shadow-2xl">
                  Culinary Excellence
                </span>
              </h2>
              
              {/* Elegant Description */}
              <p className="text-slate-300 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto mb-12 font-light leading-relaxed">
                Blending <span className="text-amber-400 font-semibold">authentic tradition</span> with <span className="text-yellow-400 font-semibold">modern innovation</span>
              </p>
              
              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-6">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500/40 to-amber-500" />
                <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-400 rotate-45 shadow-xl shadow-amber-500/50" />
                <div className="h-px w-32 bg-gradient-to-l from-transparent via-amber-500/40 to-amber-500" />
              </div>
            </div>
          </div>

          {/* Main Content - Three Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-24 lg:mb-32">
            {/* Column 1 - Story Cards */}
            <div className="lg:col-span-2 space-y-8">
              {/* Large Feature Card */}
              <div 
                className="group relative"
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r from-amber-500/40 to-yellow-500/40 rounded-3xl blur-xl transition-opacity duration-700 ${hoveredCard === 0 ? 'opacity-100' : 'opacity-0'}`} />
                
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-amber-500/30 hover:border-amber-500/50 rounded-3xl p-10 md:p-12 transition-all duration-700 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl mb-8 shadow-2xl shadow-amber-500/50">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Established Excellence</h3>
                    <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-light">
                      Established in <span className="text-amber-400 font-semibold">2007</span>, May Star Restaurant is a premier culinary destination in Indonesia, recognized for authentic Chinese cuisine and unwavering commitment to quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Two Column Cards */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    ),
                    title: "Heritage & Innovation",
                    text: "Blending traditional Cantonese heritage with modern dining concepts for Premium Dim Sum, Live Seafood, and Chinese BBQ."
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    ),
                    title: "Service Excellence",
                    text: "From casual family dining to grand banquet celebrations, we deliver consistently exceptional dining experiences."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group relative"
                    onMouseEnter={() => setHoveredCard(index + 1)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-br from-amber-500/30 to-yellow-500/30 rounded-2xl blur-lg transition-opacity duration-500 ${hoveredCard === index + 1 ? 'opacity-100' : 'opacity-0'}`} />
                    
                    <div className="relative backdrop-blur-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-amber-500/20 hover:border-amber-500/40 rounded-2xl p-8 transition-all duration-500 shadow-xl h-full">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl mb-6 shadow-xl shadow-amber-500/40 group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">{item.title}</h4>
                      <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Stats Sidebar */}
            <div className="space-y-6">
              {[
                { 
                  value: "18+", 
                  label: "Years of Excellence",
                  sublabel: "Experience",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  value: "10+", 
                  label: "Premium Locations",
                  sublabel: "Locations",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                { 
                  value: "1K+", 
                  label: "Happy Customers",
                  sublabel: "Loyal Customers",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-br from-amber-500/40 to-yellow-500/40 rounded-2xl blur-xl transition-opacity duration-500 ${hoveredStat === index ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <div className={`relative backdrop-blur-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border rounded-2xl p-8 transition-all duration-500 shadow-xl ${hoveredStat === index ? 'border-amber-500/50 scale-105' : 'border-amber-500/30'}`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-amber-400 transform group-hover:scale-110 transition-transform duration-500">
                        {stat.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 mb-2">
                          {stat.value}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-200 text-sm font-bold uppercase tracking-wider mb-1">
                        {stat.label}
                      </div>
                      <div className="text-slate-400 text-xs uppercase tracking-wide">
                        {stat.sublabel}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Image Section */}
          <div className="mb-24 lg:mb-32">
            <div className="relative group max-w-5xl mx-auto">
              {/* Elegant Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-amber-500/20 via-yellow-500/15 to-amber-600/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
              
              {/* Image Container */}
              <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-amber-500/30 group-hover:border-amber-500/50 transition-all duration-700 shadow-2xl">
                <img
                  src="/home.jpg"
                  alt="May Star Interior"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-slate-900/60" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Top Badge */}
                <div className="absolute top-8 left-8 backdrop-blur-xl bg-amber-500/90 px-8 py-4 border border-amber-300/50 rounded-2xl shadow-2xl shadow-amber-500/50">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-sm font-black tracking-[0.2em] uppercase">Premium Quality</span>
                  </div>
                </div>

                {/* Bottom Panel */}
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-2xl bg-slate-900/90 border-t border-amber-500/30 p-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-amber-400 text-2xl font-black tracking-wider uppercase mb-2">Since 2007</div>
                      <div className="text-slate-300 text-lg font-light">Authentic Chinese Cuisine Excellence</div>
                    </div>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-7 h-7 text-amber-400 fill-current transform hover:scale-125 transition-transform" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission - Elegant Two Column */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {[
              {
                title: "Vision",
                titleId: "Visi",
                content: "To become the leading authentic Chinese restaurant brand in Indonesia, ensuring May Star's legacy of quality extends from flagship locations to every franchise outlet.",
                badge: "Leading the Industry",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              },
              {
                title: "Mission",
                titleId: "Misi",
                content: "To deliver memorable dining experiences where authentic flavors and elegant ambiance meet, whether for business lunch or family dinner in Jakarta.",
                badge: "Memorable Experience",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/30 via-yellow-500/20 to-amber-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-amber-500/30 group-hover:border-amber-500/50 rounded-3xl p-12 md:p-14 space-y-8 transition-all duration-700 overflow-hidden shadow-2xl">
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl transform translate-x-28 -translate-y-28 group-hover:scale-150 transition-transform duration-1000" />
                  
                  {/* Header */}
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-500/50 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold tracking-[0.3em] uppercase text-amber-500 mb-3">{item.title}</div>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">
                        {item.titleId}
                      </h3>
                      <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mt-4 group-hover:w-40 transition-all duration-700" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <p className="relative text-slate-200 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                    {item.content}
                  </p>
                  
                  {/* Badge */}
                  <div className="relative pt-8 border-t border-amber-500/20 group-hover:border-amber-500/40 transition-colors duration-500">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full">
                      <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" />
                      <span className="text-amber-400 font-bold tracking-wide text-sm uppercase">{item.badge}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
