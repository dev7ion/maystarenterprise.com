'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';

export default function LocationsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-800 via-amber-900/30 to-neutral-700 relative overflow-hidden">
        {/* Enhanced Background Pattern with White Accents */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
                             radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 60% 20%, rgba(255, 255, 255, 0.06) 0%, transparent 45%)`
          }}></div>
        </div>
        
        {/* Soft White Glow Overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/4 rounded-full blur-3xl"></div>
        </div>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Background with Enhanced Gradient Overlays and White Light */}
        <div className="absolute inset-0">
          {/* Multiple layered gradients for depth with warmer tones and white highlights */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-amber-900/25 to-neutral-700" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-[#D4AF37]/25 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#FFD700]/25 via-white/8 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,_var(--tw-gradient-stops))] from-amber-500/15 via-white/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/8 via-transparent to-transparent" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, #D4AF37 1px, transparent 1px),
                linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Top Golden Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#FFD700' : '#D4AF37'}, transparent)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
                opacity: 0.4 + Math.random() * 0.4,
                boxShadow: `0 0 ${10 + Math.random() * 20}px ${i % 2 === 0 ? '#FFD700' : '#D4AF37'}`
              }}
            />
          ))}
        </div>


        {/* Radial Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-24">
          {/* Premium Badge with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-block mb-8"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Badge Content */}
              <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37]/30 via-[#FFD700]/25 to-[#D4AF37]/30 border-2 border-[#D4AF37]/50 rounded-full backdrop-blur-sm shadow-2xl shadow-[#D4AF37]/20">
                <svg className="w-5 h-5 text-[#FFD700] animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase">
                  Find Us
                </span>
                <svg className="w-5 h-5 text-[#FFD700] animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Main Heading with Impressive Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="relative mb-8"
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-none tracking-tight mb-4">
              Our Locations
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-none tracking-tight">
              <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent drop-shadow-2xl">
                Across Indonesia
              </span>
              <span className="text-[#D4AF37]">.</span>
            </span>
            
            {/* Decorative Underline */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent to-[#D4AF37] rounded-full"></div>
              <div className="mx-4 relative">
                <div className="w-3 h-3 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rotate-45 shadow-lg shadow-[#D4AF37]/50"></div>
                <div className="absolute inset-0 w-3 h-3 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rotate-45 blur-md animate-pulse"></div>
              </div>
              <div className="h-1 w-32 bg-gradient-to-l from-transparent to-[#D4AF37] rounded-full"></div>
            </div>
          </motion.h1>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-2xl md:text-3xl text-neutral-300 font-light max-w-4xl mx-auto leading-relaxed mb-6">
              Discover the May Star experience across Indonesia
            </p>
            <p className="text-lg md:text-xl text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
              From flagship restaurants to nationwide franchises, find your nearest location
            </p>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            {[
              { label: 'Total Locations', value: '10+', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { label: 'Cities Covered', value: '7+', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
              { label: 'Years of Service', value: '10+', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1, type: "spring", bounce: 0.4 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-neutral-900/80 via-black/90 to-neutral-900/80 backdrop-blur-sm px-8 py-6 rounded-2xl border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl">
                  <svg className="w-8 h-8 text-[#D4AF37] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Official Trademark Owner Locations */}
      <section className="py-32 relative overflow-hidden">
        {/* Enhanced Background Effects with White Light Accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-white/10 via-[#D4AF37]/20 to-[#FFD700]/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-[#B8860B]/20 via-white/8 to-[#D4AF37]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-white/6 via-[#FFD700]/15 to-white/6 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(212, 175, 55) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/15 to-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-8 shadow-lg shadow-[#D4AF37]/10 backdrop-blur-sm">
                <span className="text-[#D4AF37] text-2xl animate-pulse">✦</span>
                <span className="text-[#FFD700] font-bold text-sm tracking-[0.3em] uppercase">
                  FLAGSHIP RESTAURANTS
                </span>
                <span className="text-[#D4AF37] text-2xl animate-pulse">✦</span>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white leading-tight">
                Official Trademark Owner
                <span className="block mt-4 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  Locations
                </span>
              </h2>
              
              {/* Decorative Line */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                <div className="mx-4 w-3 h-3 rotate-45 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] shadow-lg shadow-[#D4AF37]/50"></div>
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
              </div>
              
              {/* Description */}
              <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-light">
                These flagship restaurants are directly owned and operated by the Trademark Holder. 
                They represent the highest standards of May Star's culinary excellence, service quality, and interior sophistication.
              </p>
            </motion.div>

            {/* Enhanced Location Cards */}
            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              {/* May Star Seafood Hublife */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative"
              >
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-neutral-900/90 via-black to-neutral-900/90 rounded-3xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-700 shadow-2xl backdrop-blur-sm">
                  {/* Luxurious Header */}
                  <div className="relative bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#B8860B] p-10 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/20 rounded-full -ml-16 -mb-16 group-hover:scale-125 transition-transform duration-700"></div>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '30px 30px'
                    }}></div>
                    
                    <div className="relative">
                      {/* Premium Badge */}
                      <div className="inline-flex items-center gap-2 px-5 py-2 bg-black/40 rounded-full mb-4 backdrop-blur-sm border border-white/20 shadow-lg">
                        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">★ Flagship Location</span>
                      </div>
                      
                      {/* Restaurant Name */}
                      <h3 className="text-4xl font-serif font-bold text-white mb-3 drop-shadow-lg">
                        May Star Seafood Hublife
                      </h3>
                      
                      {/* Location Tag */}
                      <div className="flex items-center text-black/80">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-base font-semibold">Hublife Mall, West Jakarta</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="p-10 space-y-6">
                    {/* Location Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 rounded-xl flex items-center justify-center mr-5 border border-[#D4AF37]/30 group-hover/item:border-[#D4AF37]/60 group-hover/item:shadow-lg group-hover/item:shadow-[#D4AF37]/20 transition-all duration-300">
                        <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#D4AF37] mb-3 uppercase text-sm tracking-[0.2em]">Location</p>
                        <p className="text-neutral-200 leading-relaxed text-base">Hublife Mall, Ground Floor (GF)</p>
                        <p className="text-neutral-200 text-base">Units 12, 15, 16</p>
                      </div>
                    </div>
                    
                    {/* Elegant Divider */}
                    <div className="flex items-center">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mx-3"></div>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                    </div>
                    
                    {/* Address Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 rounded-xl flex items-center justify-center mr-5 border border-[#D4AF37]/30 group-hover/item:border-[#D4AF37]/60 group-hover/item:shadow-lg group-hover/item:shadow-[#D4AF37]/20 transition-all duration-300">
                        <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#D4AF37] mb-3 uppercase text-sm tracking-[0.2em]">Address</p>
                        <p className="text-neutral-200 leading-relaxed text-base">Jl. Tanjung Duren Timur No.2, RT.12/RW.5,</p>
                        <p className="text-neutral-200 text-base">Tanjung Duren Selatan, Grogol Petamburan,</p>
                        <p className="text-neutral-200 text-base">West Jakarta, Indonesia</p>
                      </div>
                    </div>
                    
                    {/* Elegant Divider */}
                    <div className="flex items-center">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mx-3"></div>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                    </div>
                    
                    {/* Coordinates Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 rounded-xl flex items-center justify-center mr-5 border border-[#D4AF37]/30 group-hover/item:border-[#D4AF37]/60 group-hover/item:shadow-lg group-hover/item:shadow-[#D4AF37]/20 transition-all duration-300">
                        <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#D4AF37] mb-3 uppercase text-sm tracking-[0.2em]">Coordinates</p>
                        <p className="text-neutral-200 font-mono text-base">6°10&apos;52.2&quot;S, 106°47&apos;31.2&quot;E</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Luxurious Bottom Accent */}
                  <div className="relative h-2 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </motion.div>

              {/* May Star Palace PIK 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative"
              >
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-neutral-900/90 via-black to-neutral-900/90 rounded-3xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-700 shadow-2xl backdrop-blur-sm">
                  {/* Luxurious Header */}
                  <div className="relative bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#B8860B] p-10 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/20 rounded-full -ml-16 -mb-16 group-hover:scale-125 transition-transform duration-700"></div>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '30px 30px'
                    }}></div>
                    
                    <div className="relative">
                      {/* Premium Badge */}
                      <div className="inline-flex items-center gap-2 px-5 py-2 bg-black/40 rounded-full mb-4 backdrop-blur-sm border border-white/20 shadow-lg">
                        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">★ Flagship Location</span>
                      </div>
                      
                      {/* Restaurant Name */}
                      <h3 className="text-4xl font-serif font-bold text-white mb-3 drop-shadow-lg">
                        May Star Palace PIK 2
                      </h3>
                      
                      {/* Location Tag */}
                      <div className="flex items-center text-black/80">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-base font-semibold">Indonesia Design District, PIK 2</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="p-10 space-y-6">
                    {/* Location Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 rounded-xl flex items-center justify-center mr-5 border border-[#D4AF37]/30 group-hover/item:border-[#D4AF37]/60 group-hover/item:shadow-lg group-hover/item:shadow-[#D4AF37]/20 transition-all duration-300">
                        <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#D4AF37] mb-3 uppercase text-sm tracking-[0.2em]">Location</p>
                        <p className="text-neutral-200 leading-relaxed text-base">Indonesia Design District (IDD), PIK 2</p>
                      </div>
                    </div>
                    
                    {/* Elegant Divider */}
                    <div className="flex items-center">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mx-3"></div>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                    </div>
                    
                    {/* Address Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 rounded-xl flex items-center justify-center mr-5 border border-[#D4AF37]/30 group-hover/item:border-[#D4AF37]/60 group-hover/item:shadow-lg group-hover/item:shadow-[#D4AF37]/20 transition-all duration-300">
                        <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#D4AF37] mb-3 uppercase text-sm tracking-[0.2em]">Address</p>
                        <p className="text-neutral-200 leading-relaxed text-base">Jalan HR. Rasuna Said No.32 Kav. BB-15 Unit,</p>
                        <p className="text-neutral-200 text-base">Salembaran, Kosambi,</p>
                        <p className="text-neutral-200 text-base">Tangerang Regency, Banten 15214</p>
                      </div>
                    </div>
                    
                    {/* Elegant Divider */}
                    <div className="flex items-center">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mx-3"></div>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                    </div>
                    
                    {/* Coordinates Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 rounded-xl flex items-center justify-center mr-5 border border-[#D4AF37]/30 group-hover/item:border-[#D4AF37]/60 group-hover/item:shadow-lg group-hover/item:shadow-[#D4AF37]/20 transition-all duration-300">
                        <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#D4AF37] mb-3 uppercase text-sm tracking-[0.2em]">Coordinates</p>
                        <p className="text-neutral-200 font-mono text-base">-6.0978, 106.638</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Luxurious Bottom Accent */}
                  <div className="relative h-2 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Network - PREMIUM LUXURY DESIGN */}
      <section className="py-32 relative overflow-hidden">
        {/* Luxurious Gradient Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-neutral-950 to-stone-950"></div>
        
        {/* Enhanced Ambient Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[1200px] h-[1200px] bg-gradient-to-br from-[#D4AF37]/20 via-[#FFD700]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-tl from-[#B8860B]/15 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-white/8 via-[#FFD700]/12 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-white/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        </div>
        
        {/* Elegant Pattern Overlays */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(212, 175, 55) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Diagonal Accent Lines */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, #D4AF37 40px, #D4AF37 41px)`
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Premium Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24 text-center"
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/15 to-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-10 shadow-lg shadow-[#D4AF37]/20 backdrop-blur-sm">
                <span className="text-[#D4AF37] text-xl">✦</span>
                <span className="text-[#FFD700] font-bold text-xs tracking-[0.3em] uppercase">
                  Licensed Partners
                </span>
                <span className="text-[#D4AF37] text-xl">✦</span>
              </div>

              {/* Large Section Title with Gradient */}
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white via-white to-neutral-300 bg-clip-text text-transparent">
                  Franchise
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  Network
                </span>
              </h2>
              
              {/* Decorative Divider */}
              <div className="flex items-center justify-center mb-10">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                <div className="mx-4 relative">
                  <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] shadow-lg shadow-[#D4AF37]/50"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rotate-45 blur-md animate-pulse"></div>
                </div>
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
              </div>
              
              {/* Description */}
              <p className="text-xl text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
                Our licensed franchise partners bring May Star's distinguished culinary heritage and exceptional service standards to major cities across Indonesia
              </p>
            </motion.div>

            {/* Premium Cards Grid */}
            <div className="space-y-16">
              
              {/* JAKARTA AREA - Premium Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/15 to-[#D4AF37]/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-neutral-900/90 via-black to-neutral-900/90 rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 transition-all duration-700 shadow-2xl backdrop-blur-sm">
                  {/* Top Gold Accent */}
                  <div className="relative h-2 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                  </div>

                  <div className="p-10 lg:p-12">
                    {/* Region Header */}
                    <div className="flex items-center gap-6 mb-10 pb-8 border-b border-[#D4AF37]/20">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/30 to-[#B8860B]/20 rounded-2xl flex items-center justify-center border border-[#D4AF37]/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-[#D4AF37]/20">
                        <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 tracking-tight group-hover:text-[#FFD700] transition-colors duration-300">
                          Jakarta Area
                        </h3>
                        <div className="flex items-center gap-3">
                          <p className="text-sm text-[#D4AF37] uppercase tracking-[0.4em] font-semibold">
                            Jabodetabek Region
                          </p>
                          <div className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full"></div>
                        </div>
                      </div>
                      <div className="hidden md:block text-right">
                        <div className="text-3xl font-serif font-bold text-[#FFD700] mb-1">4</div>
                        <div className="text-xs text-neutral-500 uppercase tracking-wider">Locations</div>
                      </div>
                    </div>
                    
                    {/* Locations Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { name: 'May Star Signature', location: 'Sari Pacific Hotel, Thamrin', icon: '★' },
                        { name: 'May Star PIK Avenue', location: 'Pantai Indah Kapuk', icon: '◆' },
                        { name: 'May Star Artha Gading', location: 'North Jakarta', icon: '◇' },
                        { name: 'May Star Navapark BSD', location: 'Tangerang', icon: '✦' }
                      ].map((item, idx) => (
                        <div key={idx} className="group/item relative">
                          <div className="absolute -inset-2 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-[#D4AF37]/20 group-hover/item:border-[#D4AF37]/50 group-hover/item:bg-white/10 transition-all duration-300">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 rounded-lg flex items-center justify-center text-[#FFD700] text-lg border border-[#D4AF37]/30">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-semibold text-white mb-1.5 group-hover/item:text-[#FFD700] transition-colors duration-300">
                                {item.name}
                              </h4>
                              <p className="text-sm text-neutral-400 leading-relaxed">{item.location}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* WEST & CENTRAL JAVA - Side by Side Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* WEST JAVA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group relative"
                >
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
                  
                  <div className="relative bg-gradient-to-br from-neutral-900/80 via-black to-neutral-900/80 rounded-2xl overflow-hidden border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/50 transition-all duration-700 shadow-xl backdrop-blur-sm h-full">
                    <div className="relative h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/25 to-[#B8860B]/15 rounded-xl flex items-center justify-center border border-[#D4AF37]/30 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-serif font-bold text-white mb-1 tracking-tight group-hover:text-[#FFD700] transition-colors">
                            West Java
                          </h3>
                          <p className="text-xs text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">West Java Region</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="relative p-5 rounded-xl bg-white/5 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-white/10 transition-all duration-300">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 rounded-lg flex items-center justify-center text-[#FFD700] border border-[#D4AF37]/30">
                              ◆
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white mb-1">Bandung</h4>
                              <p className="text-sm text-neutral-400">May Star 23 Paskal Shopping Center</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CENTRAL JAVA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="group relative"
                >
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
                  
                  <div className="relative bg-gradient-to-br from-neutral-900/80 via-black to-neutral-900/80 rounded-2xl overflow-hidden border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/50 transition-all duration-700 shadow-xl backdrop-blur-sm h-full">
                    <div className="relative h-1.5 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/25 to-[#B8860B]/15 rounded-xl flex items-center justify-center border border-[#D4AF37]/30 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-serif font-bold text-white mb-1 tracking-tight group-hover:text-[#FFD700] transition-colors">
                            Central Java
                          </h3>
                          <p className="text-xs text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">Central Java Region</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="relative p-5 rounded-xl bg-white/5 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-white/10 transition-all duration-300">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 rounded-lg flex items-center justify-center text-[#FFD700] border border-[#D4AF37]/30">
                              ✦
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white mb-1">Yogyakarta</h4>
                              <p className="text-sm text-neutral-400 mb-1">May Star Jogja City Mall</p>
                              <p className="text-xs text-neutral-500 italic">Connected to The Rich Jogja Hotel</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* EAST JAVA - Premium Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/15 to-[#D4AF37]/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-neutral-900/90 via-black to-neutral-900/90 rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 transition-all duration-700 shadow-2xl backdrop-blur-sm">
                  <div className="relative h-2 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                  </div>

                  <div className="p-10 lg:p-12">
                    <div className="flex items-center gap-6 mb-10 pb-8 border-b border-[#D4AF37]/20">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/30 to-[#B8860B]/20 rounded-2xl flex items-center justify-center border border-[#D4AF37]/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-[#D4AF37]/20">
                        <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 tracking-tight group-hover:text-[#FFD700] transition-colors duration-300">
                          East Java
                        </h3>
                        <div className="flex items-center gap-3">
                          <p className="text-sm text-[#D4AF37] uppercase tracking-[0.4em] font-semibold">
                            East Java Region
                          </p>
                          <div className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full"></div>
                        </div>
                      </div>
                      <div className="hidden md:block text-right">
                        <div className="text-3xl font-serif font-bold text-[#FFD700] mb-1">2</div>
                        <div className="text-xs text-neutral-500 uppercase tracking-wider">Locations</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { city: 'Surabaya', location: 'May Star Pakuwon Square', note: null, icon: '◆' },
                        { city: 'Malang', location: 'May Star Elpico Mall', note: 'Villa Puncak Tidar', icon: '✧' }
                      ].map((item, idx) => (
                        <div key={idx} className="group/item relative">
                          <div className="absolute -inset-2 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-[#D4AF37]/20 group-hover/item:border-[#D4AF37]/50 group-hover/item:bg-white/10 transition-all duration-300">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 rounded-lg flex items-center justify-center text-[#FFD700] text-lg border border-[#D4AF37]/30">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-semibold text-white mb-1.5 group-hover/item:text-[#FFD700] transition-colors duration-300">
                                {item.city}
                              </h4>
                              <p className="text-sm text-neutral-400 mb-1">{item.location}</p>
                              {item.note && (
                                <p className="text-xs text-neutral-500 italic">{item.note}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Premium Stats Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-20"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/15 to-[#D4AF37]/10 rounded-2xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-neutral-900/80 via-black to-neutral-900/80 backdrop-blur-sm rounded-2xl border border-[#D4AF37]/30 p-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center group/stat">
                      <div className="text-5xl font-serif font-bold bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                        8
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wider font-semibold">Franchise Locations</div>
                    </div>
                    <div className="text-center group/stat">
                      <div className="text-5xl font-serif font-bold bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                        4
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wider font-semibold">Regions Covered</div>
                    </div>
                    <div className="text-center group/stat">
                      <div className="text-5xl font-serif font-bold bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                        7+
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wider font-semibold">Major Cities</div>
                    </div>
                    <div className="text-center group/stat">
                      <div className="text-5xl font-serif font-bold bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                        100%
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wider font-semibold">Quality Standard</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-32 overflow-hidden">
        {/* Enhanced Animated Background with White Light and Warmer Tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/45 via-slate-800 to-amber-950/35"></div>
        <div className="absolute inset-0 opacity-35">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/20 via-amber-600 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/15 via-yellow-700 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-white/10 via-[#D4AF37]/25 to-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-white/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgb(212, 175, 55) 35px, rgb(212, 175, 55) 36px)`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-2xl mb-8 shadow-2xl shadow-yellow-600/30">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                A Consistent Dining Experience
              </span>
              <span className="block mt-3 text-white">
                Nationwide
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Whether visiting a flagship restaurant or a franchise location, guests can expect the same commitment 
              to authentic Cantonese flavors, premium ingredients, and professional service that define the May Star brand.
            </p>
            
            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-32 bg-gradient-to-r from-transparent to-yellow-600"></div>
              <div className="mx-4">
                <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-yellow-500 to-yellow-700"></div>
              </div>
              <div className="h-px w-32 bg-gradient-to-l from-transparent to-yellow-600"></div>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              As the network continues to expand, May Star remains dedicated to preserving its heritage 
              and delivering a refined dining experience across every location.
            </p>
          </div>
        </div>
      </section>

      {/* CSS for Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-100vh) translateX(20px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
      </main>
      <Footer />
    </>
  );
}
