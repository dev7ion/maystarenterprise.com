'use client';

export default function PartnershipSection() {
  return (
    <section id="partnership" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Elegant Background with Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBF5] via-[#FFF5E6] to-[#FAF0E6]" />
      
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(218,165,32,0.04) 35px, rgba(218,165,32,0.04) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(218,165,32,0.04) 35px, rgba(218,165,32,0.04) 70px)
          `
        }} />
      </div>
      
      {/* Radial Glow Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(218,165,32,0.2),transparent_70%)]" />
      </div>
      
      {/* Animated Golden Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-[#DAA520] rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }} />
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[20%] w-2.5 h-2.5 bg-[#DAA520] rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-[25%] w-1 h-1 bg-[#FFD700] rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Card */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-[#DAA520]/30 overflow-hidden">
            {/* Top Golden Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#DAA520]" />
            
            {/* Decorative Corner Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-[#DAA520]/30 rounded-tl-2xl" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-[#DAA520]/30 rounded-tr-2xl" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-[#DAA520]/30 rounded-bl-2xl" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-[#DAA520]/30 rounded-br-2xl" />
            
            <div className="relative p-10 lg:p-16">
              {/* Icon Section */}
              <div className="flex justify-center mb-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520] to-[#FFD700] rounded-full blur-xl opacity-40 animate-pulse" />
                  <div className="relative p-6 bg-gradient-to-br from-[#DAA520]/20 to-[#FFD700]/20 rounded-full border-2 border-[#DAA520]/40 shadow-xl">
                    <svg className="w-12 h-12 text-[#C5941A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="text-center mb-6">
                <div className="inline-block mb-4">
                  <span className="px-6 py-2 bg-gradient-to-r from-[#DAA520]/10 via-[#DAA520]/20 to-[#DAA520]/10 border-2 border-[#DAA520]/30 rounded-full text-[#C5941A] text-sm font-bold tracking-[0.3em] uppercase shadow-sm">
                    Partnership Opportunity
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                  Interested in Becoming a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5941A] via-[#DAA520] to-[#FFD700]">Partner?</span>
                </h2>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-[#DAA520]" />
                  <div className="w-2 h-2 bg-gradient-to-br from-[#DAA520] to-[#FFD700] rounded-full" />
                  <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-[#DAA520]" />
                </div>
              </div>

              {/* Description */}
              <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                Join the May Star franchise network and bring a premium culinary experience to your city. Build a successful business with our proven system and world-class support.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Proven Success",
                    description: "Track record of excellence across Indonesia"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                    title: "Comprehensive Training",
                    description: "Complete operational and management support"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    title: "Premium Brand",
                    description: "Established reputation for quality and luxury"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Ongoing Support",
                    description: "Continuous assistance and guidance"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                    title: "High ROI Potential",
                    description: "Strong financial returns and growth"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Strategic Locations",
                    description: "Prime placement in major cities"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="group relative p-6 bg-gradient-to-br from-white/60 to-white/40 rounded-xl border border-[#DAA520]/20 hover:border-[#DAA520]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/0 to-[#DAA520]/0 rounded-xl transition-all duration-300 group-hover:from-[#DAA520]/5 group-hover:to-transparent" />
                    <div className="relative">
                      <div className="inline-flex p-3 bg-gradient-to-br from-[#DAA520]/20 to-[#FFD700]/20 rounded-lg text-[#C5941A] mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#C5941A] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C5941A] via-[#DAA520] to-[#FFD700] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[#DAA520]/50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>Get Started</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="#franchise-network" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 border-2 border-[#DAA520]/40 text-[#C5941A] font-bold rounded-full hover:bg-[#DAA520]/10 hover:border-[#DAA520] transition-all duration-300 hover:scale-105 shadow-md"
                >
                  <span>View Locations</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>

              {/* Bottom Info */}
              <div className="mt-10 pt-8 border-t-2 border-[#DAA520]/20 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold text-[#C5941A]">Limited Opportunities Available</span>
                </p>
                <p className="text-xs text-gray-500">
                  Contact us today to learn more about franchise requirements and investment details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Golden Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent opacity-50" />
    </section>
  );
}
