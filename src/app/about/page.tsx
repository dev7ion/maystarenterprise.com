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
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 backdrop-blur-sm border border-[#D4AF37]/20 rounded-3xl p-12 md:p-16 shadow-2xl">
              <p className="text-lg md:text-xl text-neutral-200 leading-relaxed mb-6">
                Established in <span className="text-[#D4AF37] font-semibold">2007</span>, May Star Restaurant is a premier culinary destination in Indonesia, renowned for its authentic Chinese cuisine and unwavering commitment to quality. Rooted in traditional Cantonese heritage and elevated through modern dining concepts, May Star has grown into a respected name synonymous with Premium Dim Sum, Live Seafood, and Chinese BBQ.
              </p>
              <p className="text-lg md:text-xl text-neutral-200 leading-relaxed">
                From intimate family gatherings to grand-scale banquets, every May Star restaurant is designed to deliver a consistent dining experience that balances refined elegance with warm, professional service.
              </p>
            </div>
          </motion.div>

          {/* Heritage Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center">
              Our Heritage & Brand Philosophy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] mx-auto mb-12" />
            
            <div className="bg-gradient-to-br from-neutral-900/50 to-transparent border border-[#D4AF37]/10 rounded-3xl p-12 md:p-16">
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                At the heart of May Star lies a deep respect for <span className="text-[#D4AF37] font-semibold">Cantonese culinary traditions</span>. Each dish is crafted with precision, using carefully selected ingredients and time-honored techniques, while embracing contemporary presentation and dining comfort.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                This balance between tradition and modernity defines the May Star experience — <span className="text-white font-medium">refined yet approachable, luxurious yet welcoming</span>.
              </p>
            </div>
          </motion.div>

          {/* Trademark & Ownership */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center"
            >
              Trademark & Ownership Structure
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] mx-auto mb-12" />
            
            <motion.p variants={fadeInUp} className="text-lg text-neutral-300 leading-relaxed text-center max-w-4xl mx-auto mb-16">
              The May Star brand operates under a structured ownership model that distinguishes between flagship locations directly owned by the Trademark Holder and licensed franchise partners across Indonesia.
            </motion.p>

            {/* Flagship Locations */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="bg-gradient-to-br from-[#D4AF37]/10 via-neutral-900/80 to-neutral-900/50 border-2 border-[#D4AF37]/30 rounded-3xl p-10 md:p-14 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-[#D4AF37]">
                    Official Trademark Owner Locations
                  </h3>
                </div>
                
                <p className="text-neutral-300 leading-relaxed mb-8">
                  These prestigious outlets are directly owned and operated by the Trademark Holder, serving as the benchmark for the brand's highest standards in culinary excellence, service quality, and interior grandeur:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
                    <h4 className="text-2xl font-bold text-white mb-3">May Star Hublife</h4>
                    <p className="text-neutral-400">Hublife Mall, Taman Anggrek – West Jakarta</p>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
                    <h4 className="text-2xl font-bold text-white mb-3">May Star Palace</h4>
                    <p className="text-neutral-400">Indonesia Design District (IDD), PIK 2 – Tangerang</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] rounded-r-xl">
                  <p className="text-neutral-300 italic">
                    These flagship locations represent the pinnacle of the May Star dining experience and set the standard for all other outlets nationwide.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Franchise Locations */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 border border-[#D4AF37]/20 rounded-3xl p-10 md:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white">
                    Franchise Locations
                  </h3>
                </div>
                
                <p className="text-neutral-300 leading-relaxed mb-6">
                  All other May Star branches across Indonesia operate as licensed franchise restaurants. Through this model, May Star brings its celebrated culinary experience to major cities throughout the archipelago, including recently established locations in <span className="text-[#D4AF37] font-semibold">Malang</span> and <span className="text-[#D4AF37] font-semibold">Yogyakarta</span>.
                </p>

                <p className="text-neutral-300 leading-relaxed">
                  Each franchise is required to uphold May Star's core values, operational standards, and culinary quality to ensure a consistent brand experience across all locations.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Culinary Excellence - Three Pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center"
            >
              Culinary Excellence
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] mx-auto mb-6" />
            <motion.p variants={fadeInUp} className="text-lg text-neutral-300 text-center mb-16">
              The Three Pillars of Cantonese Dining
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="group">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-[#D4AF37]/20 rounded-3xl p-8 h-full hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Live Seafood</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Ensuring the freshest selections, including Mouse Grouper, Lobster, and Mud Crabs, all maintained in live tanks to preserve quality and flavor.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-[#D4AF37]/20 rounded-3xl p-8 h-full hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Artisan Dim Sum</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Freshly handcrafted daily, featuring timeless favorites such as Ha Kau, Siew Mai, and Salted Egg Yolk Buns.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-[#D4AF37]/20 rounded-3xl p-8 h-full hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">BBQ & Roasts</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Renowned for signature offerings including crispy Peking Duck, succulent Roast Pork Belly, and Honey Glazed Char Siew.
                  </p>
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
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-16 text-center"
            >
              Vision & Mission
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <div className="bg-gradient-to-br from-[#D4AF37]/10 via-neutral-900/90 to-neutral-900/50 border-2 border-[#D4AF37]/30 rounded-3xl p-10 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-[#D4AF37]">Vision</h3>
                  </div>
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    To be the leading authentic Chinese restaurant brand in Indonesia, ensuring the May Star legacy of quality extends from its flagship "Palace" locations to every franchise outlet nationwide.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 border border-[#D4AF37]/30 rounded-3xl p-10 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">Mission</h3>
                  </div>
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    To provide a memorable dining experience where authentic flavors and elegant ambiance come together — whether for a business lunch, family dinner, or special celebration.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-[#D4AF37]/10 to-[#D4AF37]/5" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37/0.1_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37/0.1_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Experience the May Star Difference
          </h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Visit us today and discover why May Star has been Indonesia's premier destination for authentic Chinese cuisine since 2007.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#branches"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] text-black text-base font-bold tracking-wide rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all duration-300"
            >
              Find a Location
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37]/50 text-white text-base font-bold tracking-wide rounded-full hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300"
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
