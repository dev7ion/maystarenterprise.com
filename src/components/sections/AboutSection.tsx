'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Luxury Marble Background */}
      <div className="absolute inset-0">
        {/* Marble Texture Effect */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(120deg, transparent 0%, rgba(217, 119, 6, 0.05) 25%, transparent 50%, rgba(251, 191, 36, 0.05) 75%, transparent 100%),
              linear-gradient(60deg, rgba(217, 119, 6, 0.03) 0%, transparent 30%, rgba(251, 191, 36, 0.04) 50%, transparent 80%),
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(217, 119, 6, 0.02) 2px, rgba(217, 119, 6, 0.02) 4px)
            `,
            backgroundSize: '400% 400%, 300% 300%, 20px 20px',
            animation: 'marbleShift 60s ease-in-out infinite',
          }}
        />
        
        {/* Marble Veins */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 30%, rgba(217, 119, 6, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(251, 191, 36, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(217, 119, 6, 0.05) 0%, transparent 60%)
            `,
          }}
        />
        
        {/* Elegant Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-amber-200/20 via-yellow-100/15 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tl from-amber-100/30 via-yellow-50/15 to-transparent rounded-full blur-3xl" style={{ animation: 'pulseSlow 12s ease-in-out infinite' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-100/15 via-amber-50/10 to-transparent rounded-full blur-3xl opacity-60" />
        
        {/* Refined Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.12) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Marble Crack/Vein Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-200/25 to-transparent blur-sm" style={{ transform: 'rotate(3deg)' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-yellow-200/20 to-transparent blur-sm" style={{ transform: 'rotate(-2deg)' }} />
        
        {/* Elegant Gold Accent Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-300/25 to-transparent" />
        
        {/* Corner Marble Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-200/40 rounded-full opacity-30">
          <div className="absolute inset-2 border border-amber-300/20 rounded-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-yellow-200/40 rounded-full opacity-25">
          <div className="absolute inset-2 border border-yellow-300/20 rounded-full" />
        </div>
        
        {/* Subtle Marble Shimmer */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 3%),
              radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.6) 0%, transparent 2%),
              radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.7) 0%, transparent 2.5%)
            `,
          }}
        />
      </div>

      <div className="container-responsive relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Elegant Header */}
          <div className="mb-20 lg:mb-24 text-center relative">
            <div className="animate-fade-in-up">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100/80 via-yellow-50/80 to-amber-100/80 backdrop-blur-sm px-8 py-4 border-2 border-amber-300/40 rounded-full mb-10 shadow-lg shadow-amber-200/50 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-sm shadow-amber-500" />
                <span className="text-amber-700 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">About Us</span>
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-sm shadow-amber-500" />
              </div>
              
              {/* Luxury Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                <span className="block text-slate-800 mb-2">A Legacy of</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600">
                  Culinary Excellence
                </span>
              </h2>
              
              {/* Refined Description */}
              <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                Memadukan <span className="text-amber-600 font-semibold">tradisi autentik</span> dengan <span className="text-yellow-600 font-semibold">inovasi modern</span>
              </p>
              
              {/* Elegant Divider */}
              <div className="flex items-center justify-center gap-6">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-300 to-amber-400" />
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 rotate-45 shadow-md shadow-amber-400/50" />
                <div className="h-px w-24 bg-gradient-to-l from-transparent via-amber-300 to-amber-400" />
              </div>
            </div>
          </div>

          {/* Main Content - Three Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-20 lg:mb-24">
            {/* Column 1 - Story Cards */}
            <div className="lg:col-span-2 space-y-8">
              {/* Large Feature Card */}
              <div 
                className="group relative"
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r from-amber-200/50 to-yellow-200/50 rounded-2xl blur-lg transition-opacity duration-700 ${hoveredCard === 0 ? 'opacity-100' : 'opacity-0'}`} />
                
                <div className="relative bg-white/80 backdrop-blur-sm border-2 border-amber-200/60 hover:border-amber-300 rounded-2xl p-8 md:p-10 transition-all duration-700 shadow-xl shadow-amber-100/50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-100/50 to-transparent rounded-full blur-2xl" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl mb-6 shadow-lg shadow-amber-300/50">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-4">Established Excellence</h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                      Didirikan pada tahun <span className="text-amber-600 font-semibold">2007</span>, May Star Restaurant adalah destinasi kuliner premium di Indonesia, dikenal dengan masakan Chinese autentik dan komitmen tinggi terhadap kualitas.
                    </p>
                    
                    {/* Decorative Line */}
                    <div className="mt-6 h-0.5 w-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full group-hover:w-32 transition-all duration-700" />
                  </div>
                </div>
              </div>

              {/* Two Column Cards */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    ),
                    title: "Warisan & Inovasi",
                    text: "Memadukan warisan tradisional Kanton dengan konsep dining modern untuk Premium Dim Sum, Live Seafood, dan Chinese BBQ.",
                    gradient: "from-amber-500 to-yellow-600"
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    ),
                    title: "Keunggulan Pelayanan",
                    text: "Dari santapan keluarga hingga perayaan banquet mewah, kami menghadirkan pengalaman bersantap yang luar biasa.",
                    gradient: "from-yellow-500 to-amber-600"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group relative"
                    onMouseEnter={() => setHoveredCard(index + 1)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-br from-amber-200/40 to-yellow-200/40 rounded-xl blur-md transition-opacity duration-500 ${hoveredCard === index + 1 ? 'opacity-100' : 'opacity-0'}`} />
                    
                    <div className="relative bg-white/80 backdrop-blur-sm border-2 border-amber-200/50 hover:border-amber-300/70 rounded-xl p-7 transition-all duration-500 shadow-lg shadow-amber-100/40 h-full">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg mb-5 shadow-md shadow-amber-300/40 group-hover:scale-110 transition-transform duration-500`}>
                        {item.icon}
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-serif font-bold text-slate-800 mb-3">{item.title}</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {item.text}
                      </p>
                      
                      {/* Bottom Accent */}
                      <div className="mt-5 h-0.5 w-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full group-hover:w-16 transition-all duration-500" />
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
                  label: "Tahun Keunggulan",
                  sublabel: "Pengalaman",
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  value: "10+", 
                  label: "Lokasi Premium",
                  sublabel: "Cabang",
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                { 
                  value: "1K+", 
                  label: "Pelanggan Bahagia",
                  sublabel: "Pelanggan Setia",
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <div className={`absolute -inset-1 bg-gradient-to-br from-amber-200/50 to-yellow-200/50 rounded-xl blur-lg transition-opacity duration-500 ${hoveredStat === index ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <div className={`relative bg-white/80 backdrop-blur-sm border-2 rounded-xl p-6 transition-all duration-500 shadow-lg shadow-amber-100/40 ${hoveredStat === index ? 'border-amber-300 scale-105' : 'border-amber-200/50'}`}>
                    <div className="flex items-start justify-between mb-5">
                      <div className="text-amber-600 transform group-hover:scale-110 transition-transform duration-500">
                        {stat.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 mb-1">
                          {stat.value}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-700 text-sm font-bold uppercase tracking-wider mb-1">
                        {stat.label}
                      </div>
                      <div className="text-slate-500 text-xs uppercase tracking-wide">
                        {stat.sublabel}
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-4 h-1 w-full bg-amber-100 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full ${hoveredStat === index ? 'w-full' : 'w-0'} transition-all duration-1000`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Image Section */}
          <div className="mb-20 lg:mb-24">
            <div className="relative group max-w-5xl mx-auto">
              {/* Elegant Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-200/30 via-yellow-100/20 to-amber-200/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
              
              {/* Image Container */}
              <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border-2 border-amber-200/60 group-hover:border-amber-300 transition-all duration-700 shadow-2xl shadow-amber-200/40">
                <img
                  src="/home.jpg"
                  alt="May Star Interior"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-slate-800/40" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Top Badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-3 rounded-xl shadow-xl shadow-amber-500/40">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Kualitas Premium</span>
                  </div>
                </div>

                {/* Bottom Panel */}
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-white/95 border-t-2 border-amber-300/50 p-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="text-amber-600 text-xl font-bold tracking-wider uppercase mb-1">Sejak 2007</div>
                      <div className="text-slate-600 text-base">Authentic Chinese Cuisine Excellence</div>
                    </div>
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-amber-500 fill-current transform hover:scale-110 transition-transform" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission - Luxury White Theme */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {[
              {
                title: "Vision",
                titleId: "Visi",
                content: "Menjadi brand restoran Chinese autentik terkemuka di Indonesia, memastikan warisan kualitas May Star berlanjut dari lokasi flagship hingga setiap outlet franchise.",
                badge: "Memimpin Industri",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                gradient: "from-amber-500 to-yellow-600"
              },
              {
                title: "Mission",
                titleId: "Misi",
                content: "Menghadirkan pengalaman bersantap yang berkesan dimana cita rasa autentik dan ambiance elegan bertemu, baik untuk business lunch maupun family dinner di Jakarta.",
                badge: "Pengalaman Berkesan",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                gradient: "from-yellow-500 to-amber-600"
              }
            ].map((item, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-200/40 via-yellow-100/30 to-amber-200/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="relative bg-white/80 backdrop-blur-sm border-2 border-amber-200/60 group-hover:border-amber-300 rounded-2xl p-10 md:p-12 space-y-6 transition-all duration-700 overflow-hidden shadow-xl shadow-amber-100/50">
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-100/50 to-transparent rounded-full blur-2xl transform translate-x-24 -translate-y-24 group-hover:scale-150 transition-transform duration-1000" />
                  
                  {/* Header */}
                  <div className="relative flex items-start gap-5">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg shadow-amber-300/50 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold tracking-[0.3em] uppercase text-amber-600 mb-2">{item.title}</div>
                      <h3 className="text-3xl md:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600">
                        {item.titleId}
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mt-3 group-hover:w-24 transition-all duration-700" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <p className="relative text-slate-600 text-base md:text-lg leading-relaxed">
                    {item.content}
                  </p>
                  
                  {/* Badge */}
                  <div className="relative pt-6 border-t-2 border-amber-200/50 group-hover:border-amber-300/70 transition-colors duration-500">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-100/80 border-2 border-amber-200/60 rounded-full group-hover:bg-amber-100 transition-all duration-500">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                      <span className="text-amber-700 font-bold tracking-wide text-xs uppercase">{item.badge}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom CSS for Animation */}
      <style jsx>{`
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes marbleShift {
          0%, 100% {
            background-position: 0% 50%, 0% 50%, 0 0;
          }
          50% {
            background-position: 100% 50%, 100% 50%, 10px 10px;
          }
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
