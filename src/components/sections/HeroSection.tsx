'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer Animated Background with Enhanced Parallax */}
      <div className="absolute inset-0">
        {/* Base Image Layer */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          {/* Simple Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 z-10" />
          
          <img
            src="/home.JPG"
            alt="May Star Restaurant"
            className="w-full h-full object-cover opacity-40 scale-110 animate-slow-zoom"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">

          {/* Main Title with Enhanced Effects */}
          <div className="pt-20 sm:pt-24 md:pt-32">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight leading-[1.05] relative">
              <span className="relative inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <span className="text-white drop-shadow-2xl">May Star</span>
                {/* Subtle glow effect */}
                <span className="absolute inset-0 text-white opacity-30 blur-lg">May Star</span>
              </span>
              
              <span className="block mt-3 relative opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <span className="text-gradient-gold drop-shadow-2xl animate-text-glow">Enterprise</span>
                {/* Reflection effect */}
                <span className="absolute inset-0 text-gradient-gold opacity-20 blur-md transform translate-y-1">Enterprise</span>
              </span>
            </h1>

            {/* Enhanced Decorative Middle Border - Lotus Flower */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold/50" />
              {/* Lotus/Flower Motif */}
              <svg className="w-8 h-8 text-gold/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-1 3-3 5-5 5 2 0 4 2 4 4 0-2 2-4 4-4-2 0-4-2-4-5zm0 0c1 3 3 5 5 5-2 0-4 2-4 4 0-2-2-4-4-4 2 0 4-2 4-5z"/>
                <path d="M12 11c-2 0-4 1-5 3 1-1 2-1.5 3.5-1.5.5 0 1.5.5 1.5 1.5s1-.5 1.5-1.5c1.5 0 2.5.5 3.5 1.5-1-2-3-3-5-3z"/>
                <circle cx="12" cy="16" r="1.5"/>
              </svg>
              <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
          </div>

          {/* Enhanced Description with Decorative Elements */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="max-w-4xl mx-auto space-y-6 relative">
              
              <p className="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
                A Legacy of Authentic
                <span className="block mt-2">
                  <span className="text-gradient-gold font-medium">Chinese Culinary Excellence</span>
                </span>
              </p>
              
              {/* Feature Tags with Icons */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-4">
                <span className="px-5 py-2.5 backdrop-blur-sm bg-gradient-to-r from-red-950/10 to-black/20 border border-gold/30 rounded-full text-gold/90 text-sm md:text-base font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Premium Dim Sum
                </span>
                <span className="px-5 py-2.5 backdrop-blur-sm bg-gradient-to-r from-red-950/10 to-black/20 border border-gold/30 rounded-full text-gold/90 text-sm md:text-base font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Live Seafood
                </span>
                <span className="px-5 py-2.5 backdrop-blur-sm bg-gradient-to-r from-red-950/10 to-black/20 border border-gold/30 rounded-full text-gold/90 text-sm md:text-base font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  Chinese BBQ
                </span>
              </div>
              
              <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed italic">
                Experience the finest Chinese dining across multiple locations in Indonesia
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons with Modern Design */}
          <div className="opacity-0 animate-fade-in pt-6" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-2xl mx-auto">
              <a
                href="#branches"
                className="group relative bg-gradient-gold text-black font-bold hover:shadow-2xl hover:shadow-gold/50 transition-all duration-500 w-full sm:w-auto uppercase tracking-[0.15em] overflow-hidden px-8 py-4 rounded-full text-sm md:text-base"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Our Restaurants
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </a>
              
              <a
                href="#about"
                className="group relative border-2 border-gold/40 text-gold font-bold hover:bg-gold hover:text-black hover:border-gold transition-all duration-500 w-full sm:w-auto uppercase tracking-[0.15em] backdrop-blur-sm px-8 py-4 rounded-full text-sm md:text-base overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Our Heritage Story
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Stats/Features Bar with Elegant Design */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-12 text-white/60 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-900/20 to-gold/20 flex items-center justify-center border border-gold/20">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white/90 text-base">18+ Years</div>
                  <div className="text-xs opacity-70">Legacy</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-900/20 to-gold/20 flex items-center justify-center border border-gold/20">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white/90 text-base">Award</div>
                  <div className="text-xs opacity-70">Winning</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-900/20 to-gold/20 flex items-center justify-center border border-gold/20">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white/90 text-base">Master</div>
                  <div className="text-xs opacity-70">Chefs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="opacity-0 animate-fade-in pt-12 sm:pt-16" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center gap-3">
              <span className="text-white/40 text-xs tracking-widest uppercase font-medium">Scroll to discover more</span>
              <div className="relative flex flex-col items-center">
                <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center p-2 animate-bounce-slow">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full animate-scroll-down" />
                </div>
                {/* Arrow indicator */}
                <svg className="w-4 h-4 text-gold/60 mt-2 animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-56 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      
      {/* Chinese Corner Decorative Elements */}
      <div className="absolute top-8 left-8 opacity-30 hidden lg:block">
        <svg className="w-16 h-16 text-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 0 L0 32 M0 0 L32 0" />
          <circle cx="8" cy="8" r="3" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-8 right-8 opacity-30 hidden lg:block">
        <svg className="w-16 h-16 text-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M64 0 L64 32 M64 0 L32 0" />
          <circle cx="56" cy="8" r="3" fill="currentColor"/>
        </svg>
      </div>
      

    </section>
  );
}
