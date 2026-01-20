'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-40 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(120, 119, 198) 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* SECTION 1: HEADER */}
          <div className="text-center mb-24 lg:mb-32">
            {/* Label */}
            <div className="inline-block mb-8">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-500">
                About Us
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[1.1]">
              <span className="block text-slate-900 mb-2">
                Premier Culinary
              </span>
              <span className="block bg-gradient-to-r from-amber-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                Destination Since 2007
              </span>
            </h2>
          </div>

          {/* SECTION 2: MAIN CONTENT GRID */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32 lg:mb-40">
            
            {/* LEFT: Image */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/about.jpg"
                    alt="May Star Restaurant Interior"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle Gradient Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* Badge - Minimalist */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white px-6 py-4 rounded-lg shadow-xl">
                <div className="text-3xl font-black text-amber-500">18+</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-slate-300">Years</div>
              </div>
            </div>

            {/* RIGHT: Brand Story */}
            <div className="space-y-8 lg:pt-8">
              <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                <span className="font-bold text-slate-900">May Star Restaurant</span> is a premier culinary destination in Indonesia, celebrated for its <span className="text-amber-700 font-semibold">authentic Chinese cuisine</span> and unwavering commitment to quality.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-slate-600">
                Blending traditional <span className="text-slate-800 font-semibold">Cantonese heritage</span> with modern dining concepts, our brand has become the trusted choice for <span className="text-amber-700 font-semibold">Premium Dim Sum</span>, <span className="text-amber-700 font-semibold">Live Seafood</span>, and <span className="text-amber-700 font-semibold">Chinese BBQ</span>.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-10">
                From intimate family gatherings to grand banquet celebrations, May Star delivers a consistent dining experience that harmoniously balances <span className="text-amber-700 font-semibold">luxury</span> with warm, professional hospitality.
              </p>

              {/* Culinary Highlights - Inline Premium */}
              <div className="space-y-6 pt-6 border-t border-slate-200">
                {[
                  {
                    title: "Premium Dim Sum",
                    description: "Handcrafted with authentic Cantonese techniques"
                  },
                  {
                    title: "Live Seafood",
                    description: "Fresh daily selection ensuring ultimate quality"
                  },
                  {
                    title: "Chinese BBQ",
                    description: "Traditional recipes refined with modern techniques"
                  }
                ].map((item, index) => (
                  <div key={index} className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                    {/* Bullet/Icon */}
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 3: STATISTICS - TEXT-BASED, NO CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-32 lg:mb-40">
            {[
              { number: "18+", label: "Years of Excellence" },
              { number: "10+", label: "Premium Locations" },
              { number: "100K+", label: "Satisfied Guests" },
              { number: "5.0 ★", label: "Customer Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent mb-3 transition-transform duration-300 group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-600 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
