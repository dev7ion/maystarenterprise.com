'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';

export default function OurHeritagePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900/90 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        {/* Floating Golden Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase">
                Our Story
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-3" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Our Heritage
            <span className="text-[#D4AF37]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-300 font-light max-w-3xl mx-auto"
          >
            Preserving Cantonese Tradition, Elevating the Dining Experience
          </motion.p>
        </div>
      </section>

      <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Stats Section - NEW */}
      <section className="py-16 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,138,4,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative inline-block">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  17+
                </div>
                <div className="absolute -inset-2 bg-yellow-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider">Years of Excellence</p>
            </div>
            <div className="text-center group">
              <div className="relative inline-block">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  20+
                </div>
                <div className="absolute -inset-2 bg-yellow-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider">Locations Nationwide</p>
            </div>
            <div className="text-center group">
              <div className="relative inline-block">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  100+
                </div>
                <div className="absolute -inset-2 bg-yellow-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider">Signature Dishes</p>
            </div>
            <div className="text-center group">
              <div className="relative inline-block">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  1M+
                </div>
                <div className="absolute -inset-2 bg-yellow-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rotate-45 bg-yellow-600 animate-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-r from-yellow-600/50 to-yellow-600"></div>
              <span className="text-yellow-600 font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <div className="h-px w-16 bg-gradient-to-l from-yellow-600/50 to-yellow-600"></div>
              <div className="w-3 h-3 rotate-45 bg-yellow-600 animate-pulse"></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-yellow-900/30 rounded-2xl p-10 md:p-16 shadow-2xl shadow-yellow-900/10 hover:border-yellow-800/50 transition-all duration-500 hover:shadow-yellow-900/20">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Since its establishment in <span className="text-yellow-500 font-semibold relative">
                2007
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-600"></span>
              </span>, May Star Restaurant has been built upon a deep respect for authentic Cantonese culinary heritage. From the selection of ingredients to the preparation techniques used in every kitchen, May Star remains committed to preserving the essence of traditional Chinese cuisine while adapting it to modern dining expectations.
            </p>
            <div className="my-8 flex items-center justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              This heritage is not only reflected in the food, but also in the atmosphere, service standards, and overall dining philosophy across all May Star locations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section - Elegant Grid Layout */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900 relative overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/50 via-transparent to-zinc-950/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(202,138,4,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(202,138,4,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-yellow-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-600"></div>
                <span className="text-yellow-600 font-semibold tracking-[0.3em] uppercase text-sm">Our Journey</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-600"></div>
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Milestones of
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              A legacy built on tradition, innovation, and unwavering commitment to culinary excellence
            </motion.p>
          </div>

          {/* Journey Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* 2007 - Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-yellow-900/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-yellow-900/20 rounded-2xl p-8 lg:p-10 hover:border-yellow-600/40 transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-2">
                      2007
                    </div>
                    <div className="h-1 w-16 bg-gradient-to-r from-yellow-600 to-transparent"></div>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  Foundation
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  May Star Restaurant was established, bringing authentic Cantonese cuisine to Indonesia with a vision of culinary excellence and traditional values.
                </p>
              </div>
            </motion.div>

            {/* 2010 - Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-yellow-900/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-yellow-900/20 rounded-2xl p-8 lg:p-10 hover:border-yellow-600/40 transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-2">
                      2010
                    </div>
                    <div className="h-1 w-16 bg-gradient-to-r from-yellow-600 to-transparent"></div>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  Expansion Begins
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  First expansion into major cities, establishing the foundation for nationwide presence and brand recognition across Indonesia.
                </p>
              </div>
            </motion.div>

            {/* 2015 - Franchise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-yellow-900/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-yellow-900/20 rounded-2xl p-8 lg:p-10 hover:border-yellow-600/40 transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-2">
                      2015
                    </div>
                    <div className="h-1 w-16 bg-gradient-to-r from-yellow-600 to-transparent"></div>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  Franchise System
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Launched structured franchise model to maintain quality standards while expanding the May Star family throughout the nation.
                </p>
              </div>
            </motion.div>

            {/* 2020 - Digital */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-yellow-900/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-yellow-900/20 rounded-2xl p-8 lg:p-10 hover:border-yellow-600/40 transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-2">
                      2020
                    </div>
                    <div className="h-1 w-16 bg-gradient-to-r from-yellow-600 to-transparent"></div>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  Digital Innovation
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Embraced digital transformation while maintaining traditional values, ensuring seamless customer experience in the modern era.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 2024 - Featured Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-6xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-yellow-500/20 to-yellow-600/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-yellow-900/30 via-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-yellow-600/30 rounded-3xl p-10 lg:p-12 hover:border-yellow-500/50 transition-all duration-500">
                <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                  <div>
                    <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
                      2024
                    </div>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
                      Continued Excellence
                    </h3>
                    <p className=" text-gray-300 leading-relaxed text-lg mb-6">
                      20+ locations across Indonesia, serving millions while upholding our commitment to authentic Cantonese cuisine and exceptional service.
                    </p>
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 px-8 py-4 rounded-full text-white font-semibold shadow-lg shadow-yellow-600/30 hover:shadow-yellow-600/50 hover:scale-105 transition-all duration-300">
                      <span>Today & Beyond</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-zinc-900/50 via-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-yellow-600/20 rounded-full px-10 py-5 shadow-xl">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <p className="text-lg text-gray-300">
                <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">17+ Years</span>
                {' '}of Culinary Heritage
              </p>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Foundation of Cuisine */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.02)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-900/8 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="group">
              <div className="inline-flex items-center gap-2 mb-6 text-yellow-600">
                <div className="w-2 h-2 bg-yellow-600 rotate-45 animate-pulse"></div>
                <span className="text-sm font-semibold tracking-wider uppercase">Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                The Foundation of Our{' '}
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  Cuisine
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mb-8"></div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At the core of May Star's culinary identity lies a dedication to authentic Cantonese flavors. Each dish is crafted with precision, honoring time-honored recipes that have been passed down through generations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                By combining classical techniques with contemporary presentation, May Star creates dishes that feel both familiar and refined — maintaining authenticity without compromising on modern appeal.
              </p>
              
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 group/item">
                  <div className="w-12 h-12 rounded-lg bg-yellow-900/20 border border-yellow-600/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-yellow-900/40 transition-colors">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Master Chefs</h4>
                    <p className="text-gray-400 text-sm">Expert culinary teams trained in traditional Cantonese techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <div className="w-12 h-12 rounded-lg bg-yellow-900/20 border border-yellow-600/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-yellow-900/40 transition-colors">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Premium Ingredients</h4>
                    <p className="text-gray-400 text-sm">Carefully sourced fresh ingredients for optimal taste and quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <div className="w-12 h-12 rounded-lg bg-yellow-900/20 border border-yellow-600/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-yellow-900/40 transition-colors">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Authentic Recipes</h4>
                    <p className="text-gray-400 text-sm">Traditional recipes preserved and perfected over decades</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-2xl border border-yellow-900/30 shadow-xl overflow-hidden">
                <img
                  src="/our-heritage-1.png"
                  alt="The Foundation of Our Cuisine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-yellow-600/30 rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-yellow-600/30 rounded-bl-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Consistency */}
      <section className="py-20 md:py-32 bg-gradient-to-bl from-zinc-950 via-zinc-900/95 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.02)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-yellow-900/8 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-2xl border border-yellow-900/30 shadow-xl overflow-hidden">
                <img
                  src="/our-heritage-2.png"
                  alt="A Commitment to Quality and Consistency"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-yellow-600/30 rounded-tl-2xl"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-yellow-600/30 rounded-br-2xl"></div>
              </div>
            </div>
            <div className="order-1 md:order-2 group">
              <div className="inline-flex items-center gap-2 mb-6 text-yellow-600">
                <div className="w-2 h-2 bg-yellow-600 rotate-45 animate-pulse"></div>
                <span className="text-sm font-semibold tracking-wider uppercase">Commitment</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                A Commitment to{' '}
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  Quality and Consistency
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mb-8"></div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Quality has always been a defining pillar of the May Star brand. From premium ingredients to disciplined kitchen operations, every element is carefully managed to ensure a consistent dining experience across all locations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether dining at a flagship restaurant or a franchise outlet, guests can expect the same commitment to excellence that has defined May Star since its inception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - NEW */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-yellow-900/10 via-zinc-900 to-yellow-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,138,4,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.02)_1px,transparent_1px)] bg-[size:90px_90px]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            <div className="absolute -top-10 -left-5 text-8xl text-yellow-600/20 font-serif">"</div>
            <div className="absolute -bottom-10 -right-5 text-8xl text-yellow-600/20 font-serif">"</div>
            <blockquote className="text-center relative z-10 py-12">
              <p className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8 italic">
                Heritage is not just about preserving the past,<br className="hidden md:block" /> 
                it's about carrying forward the essence<br className="hidden md:block" /> 
                of excellence into the future.
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-6"></div>
              <footer className="text-yellow-500 font-semibold text-lg">
                — May Star Philosophy
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Flagship Standards */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rotate-45 bg-yellow-300 animate-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-r from-yellow-300/50 to-yellow-300"></div>
              <span className="text-yellow-300 font-semibold tracking-wider uppercase text-sm">Excellence</span>
              <div className="h-px w-16 bg-gradient-to-l from-yellow-300/50 to-yellow-300"></div>
              <div className="w-3 h-3 rotate-45 bg-yellow-300 animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Flagship Standards and<br />Brand Legacy
            </h2>
            <div className="w-32 h-1 bg-yellow-300 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed">
              May Star's flagship locations, directly owned and operated by the Trademark Holder, serve as the highest representation of the brand's values. These restaurants set the benchmark for:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="group bg-black/40 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-8 text-center hover:bg-black/60 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/50">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Culinary Excellence</h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
              <p className="text-yellow-100/80">Exceptional taste and presentation in every dish</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-8 text-center hover:bg-black/60 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/50">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Service Professionalism</h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
              <p className="text-yellow-100/80">Attentive and refined hospitality</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-8 text-center hover:bg-black/60 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/50">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Interior Elegance</h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
              <p className="text-yellow-100/80">Sophisticated ambiance and design</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-8 text-center hover:bg-black/60 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/50">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Overall Experience</h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
              <p className="text-yellow-100/80">Memorable moments for every guest</p>
            </div>
          </div>

          <div className="mt-16 text-center bg-black/30 backdrop-blur-sm border border-yellow-600/20 rounded-2xl p-8 hover:border-yellow-600/40 transition-all duration-300">
            <p className="text-lg md:text-xl text-yellow-100/90 max-w-4xl mx-auto leading-relaxed">
              The standards established at these flagship outlets guide the operational and confirming quality of all May Star restaurants nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,138,4,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.02)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rotate-45 bg-yellow-600 animate-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-r from-yellow-600/50 to-yellow-600"></div>
              <span className="text-yellow-600 font-semibold tracking-wider uppercase text-sm">Growth</span>
              <div className="h-px w-16 bg-gradient-to-l from-yellow-600/50 to-yellow-600"></div>
              <div className="w-3 h-3 rotate-45 bg-yellow-600 animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Expanding the Legacy<br />
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                Across Indonesia
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-10"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-yellow-900/30 rounded-2xl p-10 md:p-12 mb-16 shadow-2xl hover:border-yellow-800/50 transition-all duration-500">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-8">
                Through a structured franchise model, May Star has extended its presence to major cities throughout Indonesia. Each licensed restaurant operates under strict brand guidelines, ensuring that the May Star heritage of quality, authenticity, and service excellence is preserved as the brand continues to grow.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent mb-8"></div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                This approach allows May Star to expand responsibly while maintaining the integrity of its culinary and brand identity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-zinc-900 to-zinc-800 border border-yellow-900/30 rounded-2xl p-8 text-center hover:border-yellow-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/20">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-yellow-500 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-4">Nationwide Presence</h3>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
                <p className="text-gray-400">Serving major cities across Indonesia</p>
              </div>
              
              <div className="group bg-gradient-to-br from-zinc-900 to-zinc-800 border border-yellow-900/30 rounded-2xl p-8 text-center hover:border-yellow-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/20">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-yellow-500 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-4">Strict Guidelines</h3>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
                <p className="text-gray-400">Consistent brand standards everywhere</p>
              </div>
              
              <div className="group bg-gradient-to-br from-zinc-900 to-zinc-800 border border-yellow-900/30 rounded-2xl p-8 text-center hover:border-yellow-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/20">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-yellow-500 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-4">Brand Integrity</h3>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
                <p className="text-gray-400">Preserving quality and authenticity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Heritage */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-yellow-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/80 via-zinc-900/50 to-yellow-900/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/8 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-sm border border-yellow-600/30 rounded-3xl p-12 md:p-16 shadow-2xl hover:border-yellow-600/50 transition-all duration-500 hover:shadow-yellow-900/30">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rotate-45 bg-yellow-600 animate-pulse"></div>
                  <div className="h-px w-16 bg-gradient-to-r from-yellow-600/50 to-yellow-600"></div>
                  <span className="text-yellow-600 font-semibold tracking-wider uppercase text-sm">Legacy</span>
                  <div className="h-px w-16 bg-gradient-to-l from-yellow-600/50 to-yellow-600"></div>
                  <div className="w-3 h-3 rotate-45 bg-yellow-600 animate-pulse"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                    A Living Heritage
                  </span>
                </h2>
                
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-10"></div>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
                  For May Star, heritage is not static — it is continuously refined and upheld through dedication, discipline, and respect for tradition. By staying true to its roots while embracing modern dining concepts, May Star continues to deliver an experience that resonates with both long-time patrons and new generations of guests.
                </p>
                
                <div className="inline-flex items-center justify-center gap-6 bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-900 border border-yellow-600/50 text-white px-10 py-6 rounded-full shadow-xl shadow-yellow-900/30 hover:shadow-yellow-900/50 transition-all duration-300 hover:scale-105 cursor-default">
                  <svg className="w-8 h-8 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
                    Since 2007 • Tradition Meets Excellence
                  </span>
                  <svg className="w-8 h-8 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />

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
      `}</style>
    </div>
  );
}
