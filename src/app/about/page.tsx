'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
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
                Discover Our Story
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
            About May Star
            <span className="text-[#D4AF37]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-300 font-light max-w-3xl mx-auto"
          >
            A Legacy of Authentic Chinese Culinary Excellence
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            transition={{ duration: 0.7 }}
            className="mb-32"
          >
            <div className="relative bg-gradient-to-br from-neutral-900/95 via-neutral-800/80 to-neutral-900/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-[2.5rem] p-12 md:p-20 shadow-2xl shadow-[#D4AF37]/10 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-block mb-8">
                  <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Est. 2007</span>
                  <div className="h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent mt-2" />
                </div>
                
                <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8 font-light">
                  Established in <span className="text-[#D4AF37] font-semibold">2007</span>, May Star Restaurant is a premier culinary destination in Indonesia, renowned for its authentic Chinese cuisine and unwavering commitment to quality.
                </p>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
                  Rooted in traditional Cantonese heritage and elevated through modern dining concepts, May Star has grown into a respected name synonymous with <span className="text-white font-medium">Premium Dim Sum</span>, <span className="text-white font-medium">Live Seafood</span>, and <span className="text-white font-medium">Chinese BBQ</span>.
                </p>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                  From intimate family gatherings to grand-scale banquets, every May Star restaurant is designed to deliver a consistent dining experience that balances refined elegance with warm, professional service.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Heritage Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-2xl flex items-center justify-center rotate-6 shadow-lg shadow-[#D4AF37]/30">
                  <svg className="w-10 h-10 text-black -rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                Our Heritage & <span className="text-[#D4AF37]">Brand Philosophy</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-neutral-900/70 via-neutral-800/40 to-transparent border-2 border-[#D4AF37]/20 rounded-[2.5rem] p-10 md:p-16 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-[#D4AF37]/10 to-transparent blur-3xl" />
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed mb-8 font-light">
                  At the heart of May Star lies a deep respect for <span className="text-[#D4AF37] font-semibold">Cantonese culinary traditions</span>. Each dish is crafted with precision, using carefully selected ingredients and time-honored techniques, while embracing contemporary presentation and dining comfort.
                </p>
                <div className="p-8 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-4 border-[#D4AF37] rounded-r-2xl">
                  <p className="text-lg md:text-xl text-white leading-relaxed italic">
                    This balance between tradition and modernity defines the May Star experience — <span className="font-semibold not-italic">refined yet approachable, luxurious yet welcoming</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trademark & Ownership */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <motion.div
                variants={fadeInUp}
                className="inline-block mb-6"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                  <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Ownership Structure</span>
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                </div>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
              >
                Trademark & <span className="text-[#D4AF37]">Ownership</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </motion.div>
            </div>
            
            <motion.p variants={fadeInUp} className="text-xl text-neutral-300 leading-relaxed text-center max-w-4xl mx-auto mb-20">
              The May Star brand operates under a structured ownership model that distinguishes between flagship locations directly owned by the Trademark Holder and licensed franchise partners across Indonesia.
            </motion.p>

            {/* Flagship Locations */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="relative bg-gradient-to-br from-[#D4AF37]/20 via-neutral-900/90 to-neutral-900/70 border-2 border-[#D4AF37]/40 rounded-[2.5rem] p-12 md:p-16 shadow-2xl shadow-[#D4AF37]/20 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37/0.05_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37/0.05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D4AF37]/30">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#D4AF37] mb-2">
                        Official Trademark Owner Locations
                      </h3>
                      <div className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-200 leading-relaxed mb-10">
                    These prestigious outlets are directly owned and operated by the Trademark Holder, serving as the benchmark for the brand's highest standards in culinary excellence, service quality, and interior grandeur:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="group relative bg-black/50 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-2xl p-10 hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1">
                      <div className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37]/10 rounded-full group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10">May Star Hublife</h4>
                      <p className="text-neutral-400 text-lg relative z-10">Hublife Mall, Taman Anggrek – West Jakarta</p>
                    </div>
                    
                    <div className="group relative bg-black/50 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-2xl p-10 hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1">
                      <div className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37]/10 rounded-full group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10">May Star Palace</h4>
                      <p className="text-neutral-400 text-lg relative z-10">Indonesia Design District (IDD), PIK 2 – Tangerang</p>
                    </div>
                  </div>

                  <div className="p-8 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent border-l-4 border-[#D4AF37] rounded-r-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-neutral-200 text-lg leading-relaxed">
                        These flagship locations represent the pinnacle of the May Star dining experience and set the standard for all other outlets nationwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Franchise Locations */}
            <motion.div variants={fadeInUp}>
              <div className="relative bg-gradient-to-br from-neutral-900/90 via-neutral-800/70 to-neutral-900/90 border border-[#D4AF37]/30 rounded-[2.5rem] p-12 md:p-16 shadow-xl overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-[#D4AF37]/5 to-transparent blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                        Franchise Locations
                      </h3>
                      <div className="h-1 w-32 bg-gradient-to-r from-neutral-600 to-transparent rounded-full" />
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                    All other May Star branches across Indonesia operate as licensed franchise restaurants. Through this model, May Star brings its celebrated culinary experience to major cities throughout the archipelago, including recently established locations in <span className="text-[#D4AF37] font-semibold">Malang</span> and <span className="text-[#D4AF37] font-semibold">Yogyakarta</span>.
                  </p>

                  <p className="text-lg text-neutral-300 leading-relaxed">
                    Each franchise is required to uphold May Star's core values, operational standards, and culinary quality to ensure a consistent brand experience across all locations.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Culinary Excellence - Three Pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32"
          >
            <div className="text-center mb-20">
              <motion.div
                variants={fadeInUp}
                className="inline-block mb-6"
              >
                <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Our Specialties</span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
              >
                Culinary <span className="text-[#D4AF37]">Excellence</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </motion.div>
              <motion.p variants={fadeInUp} className="text-xl text-neutral-400">
                The Three Pillars of Cantonese Dining
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="group">
                <div className="relative bg-gradient-to-br from-neutral-900/90 via-neutral-800/80 to-neutral-900/90 border-2 border-[#D4AF37]/20 rounded-[2rem] p-10 h-full hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:-translate-y-3 overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-colors duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#D4AF37]/30">
                      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Live Seafood</h3>
                    <p className="text-neutral-400 leading-relaxed text-lg">
                      Ensuring the freshest selections, including Mouse Grouper, Lobster, and Mud Crabs, all maintained in live tanks to preserve quality and flavor.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="relative bg-gradient-to-br from-neutral-900/90 via-neutral-800/80 to-neutral-900/90 border-2 border-[#D4AF37]/20 rounded-[2rem] p-10 h-full hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:-translate-y-3 overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-colors duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#D4AF37]/30">
                      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Artisan Dim Sum</h3>
                    <p className="text-neutral-400 leading-relaxed text-lg">
                      Freshly handcrafted daily, featuring timeless favorites such as Ha Kau, Siew Mai, and Salted Egg Yolk Buns.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="relative bg-gradient-to-br from-neutral-900/90 via-neutral-800/80 to-neutral-900/90 border-2 border-[#D4AF37]/20 rounded-[2rem] p-10 h-full hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:-translate-y-3 overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-colors duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#D4AF37]/30">
                      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">BBQ & Roasts</h3>
                    <p className="text-neutral-400 leading-relaxed text-lg">
                      Renowned for signature offerings including crispy Peking Duck, succulent Roast Pork Belly, and Honey Glazed Char Siew.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20"
          >
            <div className="text-center mb-20">
              <motion.div
                variants={fadeInUp}
                className="inline-block mb-6"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Our Purpose</span>
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                </div>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
              >
                Vision & <span className="text-[#D4AF37]">Mission</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div variants={fadeInUp}>
                <div className="relative bg-gradient-to-br from-[#D4AF37]/15 via-neutral-900/95 to-neutral-900/80 border-2 border-[#D4AF37]/40 rounded-[2rem] p-12 h-full shadow-xl shadow-[#D4AF37]/20 overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#D4AF37/0.05_50%,transparent_75%)] group-hover:bg-[linear-gradient(45deg,transparent_25%,#D4AF37/0.1_50%,transparent_75%)] transition-colors duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D4AF37]/30 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#D4AF37]">Vision</h3>
                    </div>
                    <p className="text-xl text-neutral-200 leading-relaxed">
                      To be the leading authentic Chinese restaurant brand in Indonesia, ensuring the May Star legacy of quality extends from its flagship "Palace" locations to every franchise outlet nationwide.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="relative bg-gradient-to-br from-neutral-900/95 via-neutral-800/80 to-neutral-900/95 border-2 border-[#D4AF37]/30 rounded-[2rem] p-12 h-full shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-colors duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Mission</h3>
                    </div>
                    <p className="text-xl text-neutral-200 leading-relaxed">
                      To provide a memorable dining experience where authentic flavors and elegant ambiance come together — whether for a business lunch, family dinner, or special celebration.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-neutral-900 to-black" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37/0.1_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37/0.1_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <div className="inline-block mb-8">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Join Us</span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Experience the <span className="text-[#D4AF37]">May Star</span> Difference
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-300 mb-14 max-w-3xl mx-auto font-light leading-relaxed">
            Visit us today and discover why May Star has been Indonesia's premier destination for authentic Chinese cuisine since 2007.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/#branches"
              className="group inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] text-black text-base font-bold tracking-wide rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300"
            >
              Find a Location
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-12 py-5 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37]/50 text-white text-base font-bold tracking-wide rounded-full hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
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
      `}</style>
      </main>
      <Footer />
    </>
  );
}
