'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';

export default function LocationsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlidePIK, setCurrentSlidePIK] = useState(0);
  const [currentSlideMAG, setCurrentSlideMAG] = useState(0);
  const [currentSlideNAV, setCurrentSlideNAV] = useState(0);
  const [currentSlideYOG, setCurrentSlideYOG] = useState(0);
  const [currentSlideSBY, setCurrentSlideSBY] = useState(0);
  const [currentSlideMLG, setCurrentSlideMLG] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedImagePIK, setSelectedImagePIK] = useState<number | null>(null);
  const [selectedImageMAG, setSelectedImageMAG] = useState<number | null>(null);
  const [selectedImageNAV, setSelectedImageNAV] = useState<number | null>(null);
  const [selectedImageYOG, setSelectedImageYOG] = useState<number | null>(null);
  const [selectedImageSBY, setSelectedImageSBY] = useState<string | null>(null);
  const [selectedImageMLG, setSelectedImageMLG] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryImages = [1, 2, 3, 4, 5, 6];
  const galleryImagesPIK = [1, 2, 3, 4, 5];
  const galleryImagesMAG = [1, 2, 3, 4, 5, 6, 7];
  const galleryImagesNAV = [1, 2, 3, 4, 5, 6, 7];
  const galleryImagesYOG = [1, 2, 3, 4, 5];
  const galleryImagesSBY = [
    'WhatsApp Image 2026-01-30 at 11.08.21 AM',
    'WhatsApp Image 2026-01-30 at 11.08.21 AM (1)',
    'WhatsApp Image 2026-01-30 at 11.08.21 AM (2)',
    'WhatsApp Image 2026-01-30 at 11.08.21 AM (3)',
    'WhatsApp Image 2026-01-30 at 11.08.22 AM',
    'WhatsApp Image 2026-01-30 at 11.08.22 AM (1)',
    'WhatsApp Image 2026-01-30 at 11.08.22 AM (2)',
    'WhatsApp Image 2026-01-30 at 11.08.22 AM (3)',
    'WhatsApp Image 2026-01-30 at 11.08.22 AM (4)',
    'WhatsApp Image 2026-01-30 at 11.08.23 AM',
    'WhatsApp Image 2026-01-30 at 11.08.23 AM (1)',
    'WhatsApp Image 2026-01-30 at 11.08.23 AM (2)',
    'WhatsApp Image 2026-01-30 at 11.08.23 AM (3)'
  ];
  const galleryImagesMLG = [1, 2, 3, 4, 5];
  const imagesPerSlide = 3;
  const totalSlides = Math.ceil(galleryImages.length / imagesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleImages = () => {
    const start = currentSlide * imagesPerSlide;
    return galleryImages.slice(start, start + imagesPerSlide);
  };

  const openImageModal = (imageNum: number) => {
    setSelectedImage(imageNum);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! < galleryImages.length ? prev! + 1 : 1));
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! > 1 ? prev! - 1 : galleryImages.length));
    }
  };

  // PIK Avenue Slider functions
  const nextSlidePIK = () => {
    const totalSlidesPIK = Math.ceil(galleryImagesPIK.length / imagesPerSlide);
    setCurrentSlidePIK((prev) => (prev + 1) % totalSlidesPIK);
  };

  const prevSlidePIK = () => {
    const totalSlidesPIK = Math.ceil(galleryImagesPIK.length / imagesPerSlide);
    setCurrentSlidePIK((prev) => (prev - 1 + totalSlidesPIK) % totalSlidesPIK);
  };

  const openImageModalPIK = (imageNum: number) => {
    setSelectedImagePIK(imageNum);
  };

  const closeImageModalPIK = () => {
    setSelectedImagePIK(null);
  };

  const nextImagePIK = () => {
    if (selectedImagePIK !== null) {
      setSelectedImagePIK((prev) => (prev! < galleryImagesPIK.length ? prev! + 1 : 1));
    }
  };

  const prevImagePIK = () => {
    if (selectedImagePIK !== null) {
      setSelectedImagePIK((prev) => (prev! > 1 ? prev! - 1 : galleryImagesPIK.length));
    }
  };

  // Mall Artha Gading Slider functions
  const nextSlideMAG = () => {
    const totalSlidesMAG = Math.ceil(galleryImagesMAG.length / imagesPerSlide);
    setCurrentSlideMAG((prev) => (prev + 1) % totalSlidesMAG);
  };

  const prevSlideMAG = () => {
    const totalSlidesMAG = Math.ceil(galleryImagesMAG.length / imagesPerSlide);
    setCurrentSlideMAG((prev) => (prev - 1 + totalSlidesMAG) % totalSlidesMAG);
  };

  const openImageModalMAG = (imageNum: number) => {
    setSelectedImageMAG(imageNum);
  };

  const closeImageModalMAG = () => {
    setSelectedImageMAG(null);
  };

  const nextImageMAG = () => {
    if (selectedImageMAG !== null) {
      setSelectedImageMAG((prev) => (prev! < galleryImagesMAG.length ? prev! + 1 : 1));
    }
  };

  const prevImageMAG = () => {
    if (selectedImageMAG !== null) {
      setSelectedImageMAG((prev) => (prev! > 1 ? prev! - 1 : galleryImagesMAG.length));
    }
  };

  // Navapark BSD Slider functions
  const nextSlideNAV = () => {
    const totalSlidesNAV = Math.ceil(galleryImagesNAV.length / imagesPerSlide);
    setCurrentSlideNAV((prev) => (prev + 1) % totalSlidesNAV);
  };

  const prevSlideNAV = () => {
    const totalSlidesNAV = Math.ceil(galleryImagesNAV.length / imagesPerSlide);
    setCurrentSlideNAV((prev) => (prev - 1 + totalSlidesNAV) % totalSlidesNAV);
  };

  const openImageModalNAV = (imageNum: number) => {
    setSelectedImageNAV(imageNum);
  };

  const closeImageModalNAV = () => {
    setSelectedImageNAV(null);
  };

  const nextImageNAV = () => {
    if (selectedImageNAV !== null) {
      setSelectedImageNAV((prev) => (prev! < galleryImagesNAV.length ? prev! + 1 : 1));
    }
  };

  const prevImageNAV = () => {
    if (selectedImageNAV !== null) {
      setSelectedImageNAV((prev) => (prev! > 1 ? prev! - 1 : galleryImagesNAV.length));
    }
  };

  // Yogyakarta Slider functions
  const nextSlideYOG = () => {
    const totalSlidesYOG = Math.ceil(galleryImagesYOG.length / imagesPerSlide);
    setCurrentSlideYOG((prev) => (prev + 1) % totalSlidesYOG);
  };

  const prevSlideYOG = () => {
    const totalSlidesYOG = Math.ceil(galleryImagesYOG.length / imagesPerSlide);
    setCurrentSlideYOG((prev) => (prev - 1 + totalSlidesYOG) % totalSlidesYOG);
  };

  const openImageModalYOG = (imageNum: number) => {
    setSelectedImageYOG(imageNum);
  };

  const closeImageModalYOG = () => {
    setSelectedImageYOG(null);
  };

  const nextImageYOG = () => {
    if (selectedImageYOG !== null) {
      setSelectedImageYOG((prev) => (prev! < galleryImagesYOG.length ? prev! + 1 : 1));
    }
  };

  const prevImageYOG = () => {
    if (selectedImageYOG !== null) {
      setSelectedImageYOG((prev) => (prev! > 1 ? prev! - 1 : galleryImagesYOG.length));
    }
  };

  // Surabaya Slider functions
  const nextSlideSBY = () => {
    const totalSlidesSBY = Math.ceil(galleryImagesSBY.length / imagesPerSlide);
    setCurrentSlideSBY((prev) => (prev + 1) % totalSlidesSBY);
  };

  const prevSlideSBY = () => {
    const totalSlidesSBY = Math.ceil(galleryImagesSBY.length / imagesPerSlide);
    setCurrentSlideSBY((prev) => (prev - 1 + totalSlidesSBY) % totalSlidesSBY);
  };

  const openImageModalSBY = (imageFilename: string) => {
    setSelectedImageSBY(imageFilename);
  };

  const closeImageModalSBY = () => {
    setSelectedImageSBY(null);
  };

  const nextImageSBY = () => {
    if (selectedImageSBY !== null) {
      const currentIndex = galleryImagesSBY.indexOf(selectedImageSBY);
      const nextIndex = (currentIndex + 1) % galleryImagesSBY.length;
      setSelectedImageSBY(galleryImagesSBY[nextIndex]);
    }
  };

  const prevImageSBY = () => {
    if (selectedImageSBY !== null) {
      const currentIndex = galleryImagesSBY.indexOf(selectedImageSBY);
      const prevIndex = currentIndex === 0 ? galleryImagesSBY.length - 1 : currentIndex - 1;
      setSelectedImageSBY(galleryImagesSBY[prevIndex]);
    }
  };

  // Malang Slider functions
  const nextSlideMLG = () => {
    const totalSlidesMLG = Math.ceil(galleryImagesMLG.length / imagesPerSlide);
    setCurrentSlideMLG((prev) => (prev + 1) % totalSlidesMLG);
  };

  const prevSlideMLG = () => {
    const totalSlidesMLG = Math.ceil(galleryImagesMLG.length / imagesPerSlide);
    setCurrentSlideMLG((prev) => (prev - 1 + totalSlidesMLG) % totalSlidesMLG);
  };

  const openImageModalMLG = (imageNum: number) => {
    setSelectedImageMLG(imageNum);
  };

  const closeImageModalMLG = () => {
    setSelectedImageMLG(null);
  };

  const nextImageMLG = () => {
    if (selectedImageMLG !== null) {
      setSelectedImageMLG((prev) => (prev! < galleryImagesMLG.length ? prev! + 1 : 1));
    }
  };

  const prevImageMLG = () => {
    if (selectedImageMLG !== null) {
      setSelectedImageMLG((prev) => (prev! > 1 ? prev! - 1 : galleryImagesMLG.length));
    }
  };

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
                  Our Locations
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
              Discover the May Star dining experience across Indonesia
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

      {/* Official Trademark Owner Locations - FLAGSHIP */}
      <section className="py-32 relative overflow-hidden">
        {/* Clean Subtle Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-[#D4AF37]/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[800px] h-[800px] bg-gradient-to-tl from-[#D4AF37]/6 to-transparent rounded-full blur-3xl"></div>
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
                  Trademark Holder Locations
                </span>
                <span className="text-[#D4AF37] text-2xl animate-pulse">✦</span>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white leading-tight">
                Flagship Restaurants
                <span className="block mt-4 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  Official Locations
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
                These flagship restaurants represent the highest standard of the May Star brand in design, service, and culinary excellence.
              </p>
            </motion.div>

            {/* Enhanced Location Cards */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* May Star Seafood Hublife - Jakarta West: Taman Anggrek */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative"
              >
                {/* Subtle Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/5 via-[#FFD700]/10 to-[#D4AF37]/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-3xl transition duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-neutral-950/95 via-black to-neutral-950/95 rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-700 shadow-2xl backdrop-blur-sm">
                  {/* Clean Luxurious Header */}
                  <div className="relative bg-gradient-to-br from-[#C9A961] via-[#D4AF37] to-[#B8952B] p-10 overflow-hidden">
                    {/* Subtle Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-white/8 to-transparent rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-black/10 to-transparent rounded-full -ml-24 -mb-24 group-hover:scale-110 transition-transform duration-700"></div>
                    
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
                      <div className="flex items-center text-black/80 mb-2">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-base font-semibold">Jakarta West: Taman Anggrek</span>
                      </div>
                      
                      {/* Area Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full backdrop-blur-sm">
                        <span className="text-white text-xs font-semibold">Hublife Mall - Ground Floor</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Content with More Spacing */}
                  <div className="p-12 space-y-8">
                    {/* Restaurant Name Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center mr-6 border border-[#D4AF37]/40 group-hover/item:border-[#D4AF37]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#D4AF37]/80 mb-2 uppercase text-xs tracking-[0.25em]">Restaurant Name</p>
                        <p className="text-neutral-100 leading-relaxed text-lg">May Star Seafood Hublife</p>
                      </div>
                    </div>
                    
                    {/* Minimal Divider - More Spacing */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent"></div>
                    
                    {/* Location Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center mr-6 border border-[#D4AF37]/40 group-hover/item:border-[#D4AF37]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#D4AF37]/80 mb-2 uppercase text-xs tracking-[0.25em]">Inside the Mall</p>
                        <p className="text-neutral-100 leading-relaxed text-base">Hublife, Ground Floor (GF)</p>
                        <p className="text-neutral-100 text-base">Units 12, 15, 16</p>
                      </div>
                    </div>
                    
                    {/* Minimal Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent"></div>
                    
                    {/* Address Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center mr-6 border border-[#D4AF37]/40 group-hover/item:border-[#D4AF37]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#D4AF37]/80 mb-2 uppercase text-xs tracking-[0.25em]">Address</p>
                        <p className="text-neutral-100 leading-relaxed text-base">Jl. Tanjung Duren Timur No.2, RT.12/RW.5,</p>
                        <p className="text-neutral-100 text-base">Tanjung Duren Selatan, Grogol Petamburan District,</p>
                        <p className="text-neutral-100 text-base">West Jakarta</p>
                      </div>
                    </div>
                    
                    {/* Minimal Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent"></div>
                    
                    {/* Coordinates Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center mr-6 border border-[#D4AF37]/40 group-hover/item:border-[#D4AF37]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#D4AF37]/80 mb-2 uppercase text-xs tracking-[0.25em]">Coordinates</p>
                        <p className="text-neutral-100/70 font-mono text-sm">Latitude 6°10&apos;52.2&quot;S</p>
                        <p className="text-neutral-100/70 font-mono text-sm">Longitude 106°47&apos;31.2&quot;E</p>
                      </div>
                    </div>
                    
                    {/* Minimal Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent"></div>
                    
                    {/* Premium Social Media Links */}
                    <div className="bg-gradient-to-br from-black/20 to-black/40 rounded-2xl p-6 border border-[#D4AF37]/15">
                      <p className="font-semibold text-[#D4AF37]/80 mb-5 uppercase text-xs tracking-[0.25em]">Connect With Us</p>
                      
                      <div className="space-y-3">
                        {/* Facebook Link - Premium Style */}
                        <a
                          href="https://www.facebook.com/share/1AZhMaUqvp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 bg-neutral-900/60 hover:bg-neutral-900/80 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group/link"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30 group-hover/link:border-[#D4AF37]/50 transition-all duration-300">
                            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-neutral-200 group-hover/link:text-white transition-colors">Facebook</p>
                            <p className="text-xs text-neutral-500">Follow our updates</p>
                          </div>
                          <svg className="w-5 h-5 text-[#D4AF37]/50 group-hover/link:text-[#D4AF37] group-hover/link:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        
                        {/* Google Maps Link - Premium Style */}
                        <a
                          href="https://maps.app.goo.gl/A8kwriC8XjYUaTU87"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 bg-neutral-900/60 hover:bg-neutral-900/80 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group/link"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30 group-hover/link:border-[#D4AF37]/50 transition-all duration-300">
                            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-neutral-200 group-hover/link:text-white transition-colors">Google Maps</p>
                            <p className="text-xs text-neutral-500">Get directions</p>
                          </div>
                          <svg className="w-5 h-5 text-[#D4AF37]/50 group-hover/link:text-[#D4AF37] group-hover/link:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        
                        {/* Instagram - Coming Soon - Premium Style */}
                        <div className="flex items-center gap-4 p-4 bg-neutral-900/40 rounded-xl border border-[#D4AF37]/10 opacity-50">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/20">
                            <svg className="w-5 h-5 text-purple-400/60" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-neutral-400">Instagram</p>
                            <p className="text-xs text-neutral-600 italic">Coming Soon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Bottom Accent */}
                  <div className="relative h-1 bg-gradient-to-r from-[#B8860B]/80 via-[#D4AF37] to-[#B8860B]/80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </motion.div>

              {/* May Star Palace PIK 2 - Tangerang: Indonesia Design District */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative"
              >
                {/* Subtle Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/5 via-[#FFD700]/10 to-[#D4AF37]/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-3xl transition duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-neutral-950/95 via-black to-neutral-950/95 rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-700 shadow-2xl backdrop-blur-sm">
                  {/* Clean Luxurious Header */}
                  <div className="relative bg-gradient-to-br from-[#C9A961] via-[#D4AF37] to-[#B8952B] p-10 overflow-hidden">
                    {/* Subtle Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-white/8 to-transparent rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-black/10 to-transparent rounded-full -ml-24 -mb-24 group-hover:scale-110 transition-transform duration-700"></div>
                    
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
                      <div className="flex items-center text-black/80 mb-2">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-base font-semibold">Tangerang: Indonesia Design District</span>
                      </div>
                      
                      {/* Area Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full backdrop-blur-sm">
                        <span className="text-white text-xs font-semibold">Indonesia Design District (IDD), PIK 2</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Content with More Spacing */}
                  <div className="p-12 space-y-8">
                    {/* Restaurant Name Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center mr-6 border border-[#D4AF37]/40 group-hover/item:border-[#D4AF37]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#D4AF37]/80 mb-2 uppercase text-xs tracking-[0.25em]">Restaurant Name</p>
                        <p className="text-neutral-100 leading-relaxed text-lg">May Star Palace PIK 2</p>
                      </div>
                    </div>
                    
                    {/* Minimal Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent"></div>
                    
                    {/* Area Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center mr-6 border border-[#D4AF37]/40 group-hover/item:border-[#D4AF37]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#D4AF37]/80 mb-2 uppercase text-xs tracking-[0.25em]">Area</p>
                        <p className="text-neutral-100 leading-relaxed text-base">Indonesia Design District (IDD), PIK 2</p>
                      </div>
                    </div>
                    
                    {/* Minimal Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent"></div>
                    
                    {/* City/Province Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center mr-6 border border-[#D4AF37]/40 group-hover/item:border-[#D4AF37]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#D4AF37]/80 mb-2 uppercase text-xs tracking-[0.25em]">City/Province</p>
                        <p className="text-neutral-100 leading-relaxed text-base">Tangerang Regency, Banten</p>
                      </div>
                    </div>
                    
                    {/* Minimal Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent"></div>
                    
                    {/* Address Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center mr-6 border border-[#D4AF37]/40 group-hover/item:border-[#D4AF37]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#D4AF37]/80 mb-2 uppercase text-xs tracking-[0.25em]">Address</p>
                        <p className="text-neutral-100 leading-relaxed text-base">Jalan HR. Rasuna Said No.32 Kav. BB-15 Unit,</p>
                        <p className="text-neutral-100 text-base">Salembaran, Kosambi,</p>
                        <p className="text-neutral-100 text-base">Tangerang Regency, Banten 15214</p>
                      </div>
                    </div>
                    
                    {/* Minimal Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent"></div>
                    
                    {/* Coordinates Info */}
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center mr-6 border border-[#D4AF37]/40 group-hover/item:border-[#D4AF37]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#D4AF37]/80 mb-2 uppercase text-xs tracking-[0.25em]">Coordinates</p>
                        <p className="text-neutral-100/70 font-mono text-sm">Latitude: -6.0978</p>
                        <p className="text-neutral-100/70 font-mono text-sm">Longitude: 106.638</p>
                      </div>
                    </div>
                    
                    {/* Minimal Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent"></div>
                    
                    {/* Premium Social Media Links */}
                    <div className="bg-gradient-to-br from-black/20 to-black/40 rounded-2xl p-6 border border-[#D4AF37]/15">
                      <p className="font-semibold text-[#D4AF37]/80 mb-5 uppercase text-xs tracking-[0.25em]">Connect With Us</p>
                      
                      <div className="space-y-3">
                        {/* Instagram Link - Premium Style */}
                        <a
                          href="https://www.instagram.com/maystarpalacepik2?igsh=MXJqa3ZrYjE3bjV0Yw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 bg-neutral-900/60 hover:bg-neutral-900/80 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group/link"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30 group-hover/link:border-[#D4AF37]/50 transition-all duration-300">
                            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-neutral-200 group-hover/link:text-white transition-colors">Instagram</p>
                            <p className="text-xs text-neutral-500">Follow our updates</p>
                          </div>
                          <svg className="w-5 h-5 text-[#D4AF37]/50 group-hover/link:text-[#D4AF37] group-hover/link:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        
                        {/* Google Maps Link - Premium Style */}
                        <a
                          href="https://maps.app.goo.gl/dxUm4UuZ5gitEs446"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 bg-neutral-900/60 hover:bg-neutral-900/80 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group/link"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30 group-hover/link:border-[#D4AF37]/50 transition-all duration-300">
                            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-neutral-200 group-hover/link:text-white transition-colors">Google Maps</p>
                            <p className="text-xs text-neutral-500">Get directions</p>
                          </div>
                          <svg className="w-5 h-5 text-[#D4AF37]/50 group-hover/link:text-[#D4AF37] group-hover/link:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Bottom Accent */}
                  <div className="relative h-1 bg-gradient-to-r from-[#B8860B]/80 via-[#D4AF37] to-[#B8860B]/80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
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
                  Licensed Franchise Locations
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
                Operated by trusted partners, delivering the authentic May Star experience across Indonesia
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
                          Jakarta & Jabodetabek
                        </h3>
                        <div className="flex items-center gap-3">
                          <p className="text-sm text-[#D4AF37] uppercase tracking-[0.4em] font-semibold">
                            Greater Jakarta Region
                          </p>
                          <div className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full"></div>
                        </div>
                      </div>
                      <div className="hidden md:block text-right">
                        <div className="text-3xl font-serif font-bold text-[#FFD700] mb-1">4</div>
                        <div className="text-xs text-neutral-500 uppercase tracking-wider">Locations</div>
                      </div>
                    </div>
                    
                    {/* Locations Grid with Improved Spacing */}
                    <div className="space-y-12">
                      {/* May Star Signature - Sari Pacific Hotel */}
                      <div className="group/item relative">
                        {/* Subtle glow only on hover */}
                        <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover/item:from-[#D4AF37]/8 group-hover/item:to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 blur-2xl transition-all duration-500"></div>
                        
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-950/60 via-neutral-950/80 to-neutral-900/70 border border-white/5 group-hover/item:border-[#D4AF37]/20 transition-all duration-500">
                          <div className="flex items-start gap-5 mb-6">
                            {/* Ikon outline tipis gold - ukuran lebih kecil */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30">
                              <svg className="w-5 h-5 text-[#D4AF37]/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              {/* Nama restoran - Lebih besar dan tebal */}
                              <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                                May Star Signature - Sari Pacific Hotel
                              </h4>
                              {/* Detail lokasi - Lebih kecil dan abu-abu */}
                              <p className="text-sm text-neutral-400">Thamrin, Central Jakarta</p>
                            </div>
                          </div>
                          
                          {/* Detail tanpa garis pemisah, gunakan spacing */}
                          <div className="space-y-5 pl-15">
                            <div className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-sm text-neutral-400 leading-relaxed">
                                Sari Pacific Jakarta, Autograph Collection<br/>
                                Jl. M.H. Thamrin No.6, RT.2/RW.1, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, 10340
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                              <p className="text-xs text-neutral-500 font-mono">6°11'07.5"S 106°49'26.1"E</p>
                            </div>
                            
                            {/* Tombol social - Style luxury dengan border gold */}
                            <div className="grid grid-cols-3 gap-3 pt-2">
                              <a href="https://www.instagram.com/maystarsignature" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                <span className="text-xs font-medium text-white">Instagram</span>
                              </a>
                              
                              <a href="https://www.facebook.com/maystarsignature" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span className="text-xs font-medium text-white">Facebook</span>
                              </a>
                              
                              <a href="https://maps.app.goo.gl/mshCDUiyAbaykG9t8" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-xs font-medium text-white">Maps</span>
                              </a>
                            </div>
                            
                            {/* Gallery Section - May Star Signature Photos Slider */}
                            <div className="mt-8 pt-8 border-t border-[#D4AF37]/15">
                              <div className="flex items-center justify-between mb-5">
                                <p className="font-semibold text-[#D4AF37]/80 uppercase text-xs tracking-[0.25em]">Restaurant Gallery</p>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={prevSlide}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Previous slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  <span className="text-xs text-neutral-500 font-mono">
                                    {currentSlide + 1} / {totalSlides}
                                  </span>
                                  <button
                                    onClick={nextSlide}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Next slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              
                              <div className="relative overflow-hidden">
                                <div
                                  className="flex transition-transform duration-500 ease-in-out"
                                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="min-w-full">
                                      <div className="grid grid-cols-3 gap-3">
                                        {galleryImages
                                          .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                                          .map((num) => (
                                            <div
                                              key={num}
                                              className="group/img relative aspect-square rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer"
                                              onClick={() => openImageModal(num)}
                                            >
                                              <img
                                                src={`/maystarsignature/${num}.png`}
                                                alt={`May Star Signature - Photo ${num}`}
                                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                                              />
                                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                </svg>
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Dots Indicator */}
                              <div className="flex justify-center gap-2 mt-4">
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      currentSlide === index
                                        ? 'bg-[#D4AF37] w-6'
                                        : 'bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* May Star PIK Avenue */}
                      <div className="group/item relative">
                        <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover/item:from-[#D4AF37]/8 group-hover/item:to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 blur-2xl transition-all duration-500"></div>
                        
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-950/60 via-neutral-950/80 to-neutral-900/70 border border-white/5 group-hover/item:border-[#D4AF37]/20 transition-all duration-500">
                          <div className="flex items-start gap-5 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30">
                              <svg className="w-5 h-5 text-[#D4AF37]/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                                May Star PIK Avenue
                              </h4>
                              <p className="text-sm text-neutral-400">Pantai Indah Kapuk, North Jakarta</p>
                            </div>
                          </div>
                          
                          <div className="space-y-5 pl-15">
                            <div className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-sm text-neutral-400 leading-relaxed">
                                Mall PIK Avenue Lt. 1<br/>
                                Jl. Pantai Indah Kapuk Boulevard, RT.6/RW.2, Kamal Muara, Kecamatan Penjaringan, Jkt Utara, 14470
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                              <p className="text-xs text-neutral-500 font-mono">6°06'31.6"S 106°44'24.7"E</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3 pt-2">
                              <a href="https://www.instagram.com/maystarpikavenue" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                <span className="text-xs font-medium text-white">Instagram</span>
                              </a>
                              
                              <a href="https://maps.app.goo.gl/J7JGUZY8QALDf3SB6" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-xs font-medium text-white">Maps</span>
                              </a>
                            </div>
                            
                            {/* Gallery Section - May Star PIK Avenue Photos Slider */}
                            <div className="mt-8 pt-8 border-t border-[#D4AF37]/15">
                              <div className="flex items-center justify-between mb-5">
                                <p className="font-semibold text-[#D4AF37]/80 uppercase text-xs tracking-[0.25em]">Restaurant Gallery</p>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={prevSlidePIK}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Previous slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  <span className="text-xs text-neutral-500 font-mono">
                                    {currentSlidePIK + 1} / {Math.ceil(galleryImagesPIK.length / imagesPerSlide)}
                                  </span>
                                  <button
                                    onClick={nextSlidePIK}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Next slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              
                              <div className="relative overflow-hidden">
                                <div
                                  className="flex transition-transform duration-500 ease-in-out"
                                  style={{ transform: `translateX(-${currentSlidePIK * 100}%)` }}
                                >
                                  {Array.from({ length: Math.ceil(galleryImagesPIK.length / imagesPerSlide) }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="min-w-full">
                                      <div className="grid grid-cols-3 gap-3">
                                        {galleryImagesPIK
                                          .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                                          .map((num) => (
                                            <div
                                              key={num}
                                              className="group/img relative aspect-square rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer"
                                              onClick={() => openImageModalPIK(num)}
                                            >
                                              <img
                                                src={`/maystarpikavenue/${num}.jpeg`}
                                                alt={`May Star PIK Avenue - Photo ${num}`}
                                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                                              />
                                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                </svg>
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Dots Indicator */}
                              <div className="flex justify-center gap-2 mt-4">
                                {Array.from({ length: Math.ceil(galleryImagesPIK.length / imagesPerSlide) }).map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentSlidePIK(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      currentSlidePIK === index
                                        ? 'bg-[#D4AF37] w-6'
                                        : 'bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* May Star Mall Artha Gading */}
                      <div className="group/item relative">
                        <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover/item:from-[#D4AF37]/8 group-hover/item:to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 blur-2xl transition-all duration-500"></div>
                        
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-950/60 via-neutral-950/80 to-neutral-900/70 border border-white/5 group-hover/item:border-[#D4AF37]/20 transition-all duration-500">
                          <div className="flex items-start gap-5 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30">
                              <svg className="w-5 h-5 text-[#D4AF37]/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                                May Star Mall Artha Gading
                              </h4>
                              <p className="text-sm text-neutral-400">North Jakarta</p>
                            </div>
                          </div>
                          
                          <div className="space-y-5 pl-15">
                            <div className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-sm text-neutral-400 leading-relaxed">
                                Mall Artha Gading Lt. 3 Blok A1 No. 224<br/>
                                Jl. Artha Gading Sel. No.1 Jakarta 14240
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                              <p className="text-xs text-neutral-500 font-mono">6°08'42.5"S 106°53'34.5"E</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3 pt-2">
                              <a href="https://www.instagram.com/maystar.mag" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                <span className="text-xs font-medium text-white">Instagram</span>
                              </a>
                              
                              <a href="https://maps.app.goo.gl/ZXUf8TYn6EzgHAsP7" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-xs font-medium text-white">Maps</span>
                              </a>
                            </div>
                            
                            {/* Gallery Section - May Star Mall Artha Gading Photos Slider */}
                            <div className="mt-8 pt-8 border-t border-[#D4AF37]/15">
                              <div className="flex items-center justify-between mb-5">
                                <p className="font-semibold text-[#D4AF37]/80 uppercase text-xs tracking-[0.25em]">Restaurant Gallery</p>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={prevSlideMAG}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Previous slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  <span className="text-xs text-neutral-500 font-mono">
                                    {currentSlideMAG + 1} / {Math.ceil(galleryImagesMAG.length / imagesPerSlide)}
                                  </span>
                                  <button
                                    onClick={nextSlideMAG}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Next slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              
                              <div className="relative overflow-hidden">
                                <div
                                  className="flex transition-transform duration-500 ease-in-out"
                                  style={{ transform: `translateX(-${currentSlideMAG * 100}%)` }}
                                >
                                  {Array.from({ length: Math.ceil(galleryImagesMAG.length / imagesPerSlide) }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="min-w-full">
                                      <div className="grid grid-cols-3 gap-3">
                                        {galleryImagesMAG
                                          .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                                          .map((num) => (
                                            <div
                                              key={num}
                                              className="group/img relative aspect-square rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer"
                                              onClick={() => openImageModalMAG(num)}
                                            >
                                              <img
                                                src={`/maystararthagading/${num}.jpg`}
                                                alt={`May Star Mall Artha Gading - Photo ${num}`}
                                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                                              />
                                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                </svg>
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Dots Indicator */}
                              <div className="flex justify-center gap-2 mt-4">
                                {Array.from({ length: Math.ceil(galleryImagesMAG.length / imagesPerSlide) }).map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentSlideMAG(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      currentSlideMAG === index
                                        ? 'bg-[#D4AF37] w-6'
                                        : 'bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* May Star Navapark Country Club BSD */}
                      <div className="group/item relative">
                        <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover/item:from-[#D4AF37]/8 group-hover/item:to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 blur-2xl transition-all duration-500"></div>
                        
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-950/60 via-neutral-950/80 to-neutral-900/70 border border-white/5 group-hover/item:border-[#D4AF37]/20 transition-all duration-500">
                          <div className="flex items-start gap-5 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30">
                              <svg className="w-5 h-5 text-[#D4AF37]/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                                May Star Navapark Country Club BSD
                              </h4>
                              <p className="text-sm text-neutral-400">Tangerang, Banten</p>
                            </div>
                          </div>
                          
                          <div className="space-y-5 pl-15">
                            <div className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-sm text-neutral-400 leading-relaxed">
                                Jl. BSD Grand Boulevard, Tangerang, Banten, Indonesia
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                              <p className="text-xs text-neutral-500 font-mono">6°17'28.4"S 106°39'01.5"E</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3 pt-2">
                              <a href="https://www.facebook.com/share/19eXQiFFfG/" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span className="text-xs font-medium text-white">Facebook</span>
                              </a>
                              
                              <a href="https://maps.app.goo.gl/zz83FKcbEvjjUZAm9" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-xs font-medium text-white">Maps</span>
                              </a>
                            </div>
                            
                            {/* Gallery Section - May Star Navapark Country Club BSD Photos Slider */}
                            <div className="mt-8 pt-8 border-t border-[#D4AF37]/15">
                              <div className="flex items-center justify-between mb-5">
                                <p className="font-semibold text-[#D4AF37]/80 uppercase text-xs tracking-[0.25em]">Restaurant Gallery</p>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={prevSlideNAV}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Previous slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  <span className="text-xs text-neutral-500 font-mono">
                                    {currentSlideNAV + 1} / {Math.ceil(galleryImagesNAV.length / imagesPerSlide)}
                                  </span>
                                  <button
                                    onClick={nextSlideNAV}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Next slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              
                              <div className="relative overflow-hidden">
                                <div
                                  className="flex transition-transform duration-500 ease-in-out"
                                  style={{ transform: `translateX(-${currentSlideNAV * 100}%)` }}
                                >
                                  {Array.from({ length: Math.ceil(galleryImagesNAV.length / imagesPerSlide) }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="min-w-full">
                                      <div className="grid grid-cols-3 gap-3">
                                        {galleryImagesNAV
                                          .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                                          .map((num) => (
                                            <div
                                              key={num}
                                              className="group/img relative aspect-square rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer"
                                              onClick={() => openImageModalNAV(num)}
                                            >
                                              <img
                                                src={`/maystarnavaparkbsd/${num}.jpeg`}
                                                alt={`May Star Navapark Country Club BSD - Photo ${num}`}
                                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                                              />
                                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                </svg>
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Dots Indicator */}
                              <div className="flex justify-center gap-2 mt-4">
                                {Array.from({ length: Math.ceil(galleryImagesNAV.length / imagesPerSlide) }).map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentSlideNAV(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      currentSlideNAV === index
                                        ? 'bg-[#D4AF37] w-6'
                                        : 'bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CENTRAL JAVA & YOGYAKARTA - Premium Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 tracking-tight group-hover:text-[#FFD700] transition-colors duration-300">
                          Central Java & Yogyakarta
                        </h3>
                        <div className="flex items-center gap-3">
                          <p className="text-sm text-[#D4AF37] uppercase tracking-[0.4em] font-semibold">
                            Central Java Region
                          </p>
                          <div className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full"></div>
                        </div>
                      </div>
                      <div className="hidden md:block text-right">
                        <div className="text-3xl font-serif font-bold text-[#FFD700] mb-1">1</div>
                        <div className="text-xs text-neutral-500 uppercase tracking-wider">Location</div>
                      </div>
                    </div>
                    
                    <div className="space-y-12">
                      {/* May Star Yogyakarta */}
                      <div className="group/item relative">
                        <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover/item:from-[#D4AF37]/8 group-hover/item:to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 blur-2xl transition-all duration-500"></div>
                        
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-950/60 via-neutral-950/80 to-neutral-900/70 border border-white/5 group-hover/item:border-[#D4AF37]/20 transition-all duration-500">
                          <div className="flex items-start gap-5 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30">
                              <svg className="w-5 h-5 text-[#D4AF37]/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                                May Star Yogyakarta
                              </h4>
                              <p className="text-sm text-neutral-400">Sleman City Hall</p>
                            </div>
                          </div>
                          
                          <div className="space-y-5 pl-15">
                            <div className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-sm text-neutral-400 leading-relaxed">
                                Jl. Magelang Jl. Gito Gati No.KM 9, Denggung, Tridadi, Kec. Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55511
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                              <p className="text-xs text-neutral-500 font-mono">7°43'13.6"S 110°21'43.7"E</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3 pt-2">
                              <a href="https://www.instagram.com/maystarjogja?igsh=c21wbnB1NzAydjU1" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                <span className="text-xs font-medium text-white">Instagram</span>
                              </a>
                              
                              <a href="https://maps.app.goo.gl/ykYa7u2TCJjcqusE8" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-xs font-medium text-white">Maps</span>
                              </a>
                            </div>
                            
                            {/* Gallery Section - May Star Yogyakarta Photos Slider */}
                            <div className="mt-8 pt-8 border-t border-[#D4AF37]/15">
                              <div className="flex items-center justify-between mb-5">
                                <p className="font-semibold text-[#D4AF37]/80 uppercase text-xs tracking-[0.25em]">Restaurant Gallery</p>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={prevSlideYOG}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Previous slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  <span className="text-xs text-neutral-500 font-mono">
                                    {currentSlideYOG + 1} / {Math.ceil(galleryImagesYOG.length / imagesPerSlide)}
                                  </span>
                                  <button
                                    onClick={nextSlideYOG}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Next slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              
                              <div className="relative overflow-hidden">
                                <div
                                  className="flex transition-transform duration-500 ease-in-out"
                                  style={{ transform: `translateX(-${currentSlideYOG * 100}%)` }}
                                >
                                  {Array.from({ length: Math.ceil(galleryImagesYOG.length / imagesPerSlide) }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="min-w-full">
                                      <div className="grid grid-cols-3 gap-3">
                                        {galleryImagesYOG
                                          .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                                          .map((num) => (
                                            <div
                                              key={num}
                                              className="group/img relative aspect-square rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer"
                                              onClick={() => openImageModalYOG(num)}
                                            >
                                              <img
                                                src={`/maystaryogyakarta/${num}.jpeg`}
                                                alt={`May Star Yogyakarta - Photo ${num}`}
                                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                                              />
                                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                </svg>
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Dots Indicator */}
                              <div className="flex justify-center gap-2 mt-4">
                                {Array.from({ length: Math.ceil(galleryImagesYOG.length / imagesPerSlide) }).map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentSlideYOG(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      currentSlideYOG === index
                                        ? 'bg-[#D4AF37] w-6'
                                        : 'bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* WEST JAVA & SUMATRA - Side by Side Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* WEST JAVA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
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
                      
                      <div className="space-y-6">
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-neutral-950/60 via-neutral-950/80 to-neutral-900/70 border border-white/5 transition-all duration-500">
                          <div className="flex items-start gap-4 mb-5">
                            <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center border border-[#D4AF37]/30">
                              <svg className="w-5 h-5 text-[#D4AF37]/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-white mb-1 leading-tight">May Star Bandung</h4>
                              <p className="text-sm text-neutral-400 mb-3">Nanakam Fresh Market</p>
                              <p className="text-xs text-neutral-500 leading-relaxed">Jl. L. L. R.E. Martadinata No.20A, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115</p>
                              <p className="text-xs text-neutral-500 font-mono mt-2">6°54'24.3"S 107°36'51.5"E</p>
                            </div>
                          </div>
                          
                          {/* Under Relocation Badge */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-lg mt-3">
                            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Under Relocation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* SUMATRA - Coming Soon */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="group relative"
                >
                  <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
                  
                  <div className="relative bg-gradient-to-br from-neutral-900/70 via-black to-neutral-900/70 rounded-2xl overflow-hidden border border-blue-400/30 group-hover:border-blue-400/50 transition-all duration-700 shadow-xl backdrop-blur-sm h-full">
                    <div className="relative h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500/25 to-blue-600/15 rounded-xl flex items-center justify-center border border-blue-400/30 group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-serif font-bold text-white mb-1 tracking-tight group-hover:text-blue-400 transition-colors">
                            Sumatra
                          </h3>
                          <p className="text-xs text-blue-400 uppercase tracking-[0.3em] font-semibold">Sumatra Region</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-neutral-950/60 via-neutral-950/80 to-neutral-900/70 border border-white/5 transition-all duration-500">
                          <div className="flex items-start gap-4 mb-5">
                            <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center border border-blue-400/30">
                              <svg className="w-5 h-5 text-blue-400/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-white mb-1 leading-tight">May Star Batam</h4>
                              <p className="text-sm text-neutral-400 mb-3">Location TBA</p>
                            </div>
                          </div>
                          
                          {/* Coming Soon Badge */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg mt-3">
                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Coming Soon</span>
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
                    
                    <div className="space-y-12">
                      {/* Surabaya */}
                      <div className="group/item relative">
                        <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover/item:from-[#D4AF37]/8 group-hover/item:to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 blur-2xl transition-all duration-500"></div>
                        
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-950/60 via-neutral-950/80 to-neutral-900/70 border border-white/5 group-hover/item:border-[#D4AF37]/20 transition-all duration-500">
                          <div className="flex items-start gap-5 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30">
                              <svg className="w-5 h-5 text-[#D4AF37]/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                                May Star Surabaya: Pakuwon Square
                              </h4>
                              <p className="text-sm text-neutral-400">Surabaya, East Java</p>
                            </div>
                          </div>
                          
                          <div className="space-y-5 pl-15">
                            <div className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-sm text-neutral-400 leading-relaxed">
                                Ruko Pakuwon Square Blok AK.2 No. 17-18<br/>
                                Jalan Mayjend Yono Soewoyo, Lidah Wetan, Lakarsantri, Kec. Lakarsantri, Kota SBY, Jawa Timur 60226
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                              <p className="text-xs text-neutral-500 font-mono">7°17'44.3"S 112°40'30.7"E</p>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-3 pt-2">
                              <a href="https://www.instagram.com/maystarsurabaya?igsh=emR1Ym5pYWxrZTM5" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                <span className="text-xs font-medium text-white">Instagram</span>
                              </a>
                              
                              <a href="https://www.facebook.com/share/1VyK2PX16X/" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span className="text-xs font-medium text-white">Facebook</span>
                              </a>
                              
                              <a href="https://maps.app.goo.gl/mR6um3JPNNDpB2ED7" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-xs font-medium text-white">Maps</span>
                              </a>
                            </div>
                            
                            {/* Gallery Section - May Star Surabaya Photos Slider */}
                            <div className="mt-8 pt-8 border-t border-[#D4AF37]/15">
                              <div className="flex items-center justify-between mb-5">
                                <p className="font-semibold text-[#D4AF37]/80 uppercase text-xs tracking-[0.25em]">Restaurant Gallery</p>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={prevSlideSBY}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Previous slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  <span className="text-xs text-neutral-500 font-mono">
                                    {currentSlideSBY + 1} / {Math.ceil(galleryImagesSBY.length / imagesPerSlide)}
                                  </span>
                                  <button
                                    onClick={nextSlideSBY}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Next slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              
                              <div className="relative overflow-hidden">
                                <div
                                  className="flex transition-transform duration-500 ease-in-out"
                                  style={{ transform: `translateX(-${currentSlideSBY * 100}%)` }}
                                >
                                  {Array.from({ length: Math.ceil(galleryImagesSBY.length / imagesPerSlide) }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="min-w-full">
                                      <div className="grid grid-cols-3 gap-3">
                                        {galleryImagesSBY
                                          .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                                          .map((num) => (
                                            <div
                                              key={num}
                                              className="group/img relative aspect-square rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer"
                                              onClick={() => openImageModalSBY(num)}
                                            >
                                              <img
                                                src={`/maystarsurabaya/${num}.jpeg`}
                                                alt={`May Star Surabaya - ${num}`}
                                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                                              />
                                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                </svg>
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Dots Indicator */}
                              <div className="flex justify-center gap-2 mt-4">
                                {Array.from({ length: Math.ceil(galleryImagesSBY.length / imagesPerSlide) }).map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentSlideSBY(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      currentSlideSBY === index
                                        ? 'bg-[#D4AF37] w-6'
                                        : 'bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Malang */}
                      <div className="group/item relative">
                        <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover/item:from-[#D4AF37]/8 group-hover/item:to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 blur-2xl transition-all duration-500"></div>
                        
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-950/60 via-neutral-950/80 to-neutral-900/70 border border-white/5 group-hover/item:border-[#D4AF37]/20 transition-all duration-500">
                          <div className="flex items-start gap-5 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30">
                              <svg className="w-5 h-5 text-[#D4AF37]/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                                May Star Malang: Elpico Mall
                              </h4>
                              <p className="text-sm text-neutral-400">Malang, East Java</p>
                            </div>
                          </div>
                          
                          <div className="space-y-5 pl-15">
                            <div className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-sm text-neutral-400 leading-relaxed">
                                Kristal Tee Building 2nd Floor, Elpico Mall Malang<br/>
                                Jl. Villa Puncak Tidar, Malang-65151
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-[#D4AF37]/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                              <p className="text-xs text-neutral-500 font-mono">7°57'50.7"S 112°35'34.2"E</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3 pt-2">
                              <a href="https://www.instagram.com/maystar.malang?igsh=azN3dDdhazdsejY3" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                <span className="text-xs font-medium text-white">Instagram</span>
                              </a>
                              
                              <a href="https://maps.app.goo.gl/7fxuZ8gHRz78DSGH9" target="_blank" rel="noopener noreferrer"
                                 className="group/social flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300">
                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-xs font-medium text-white">Maps</span>
                              </a>
                            </div>
                            
                            {/* Gallery Section - May Star Malang Photos Slider */}
                            <div className="mt-8 pt-8 border-t border-[#D4AF37]/15">
                              <div className="flex items-center justify-between mb-5">
                                <p className="font-semibold text-[#D4AF37]/80 uppercase text-xs tracking-[0.25em]">Restaurant Gallery</p>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={prevSlideMLG}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Previous slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  <span className="text-xs text-neutral-500 font-mono">
                                    {currentSlideMLG + 1} / {Math.ceil(galleryImagesMLG.length / imagesPerSlide)}
                                  </span>
                                  <button
                                    onClick={nextSlideMLG}
                                    className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-neutral-900/80 transition-all duration-300 flex items-center justify-center"
                                    aria-label="Next slide"
                                  >
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              
                              <div className="relative overflow-hidden">
                                <div
                                  className="flex transition-transform duration-500 ease-in-out"
                                  style={{ transform: `translateX(-${currentSlideMLG * 100}%)` }}
                                >
                                  {Array.from({ length: Math.ceil(galleryImagesMLG.length / imagesPerSlide) }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="min-w-full">
                                      <div className="grid grid-cols-3 gap-3">
                                        {galleryImagesMLG
                                          .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                                          .map((num) => (
                                            <div
                                              key={num}
                                              className="group/img relative aspect-square rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer"
                                              onClick={() => openImageModalMLG(num)}
                                            >
                                              <img
                                                src={`/maystarmalang/${num}.png`}
                                                alt={`May Star Malang - Photo ${num}`}
                                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                                              />
                                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                </svg>
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Dots Indicator */}
                              <div className="flex justify-center gap-2 mt-4">
                                {Array.from({ length: Math.ceil(galleryImagesMLG.length / imagesPerSlide) }).map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentSlideMLG(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      currentSlideMLG === index
                                        ? 'bg-[#D4AF37] w-6'
                                        : 'bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                        5
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

      {/* Image Modal Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          {/* Close Button */}
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/maystarsignature/${selectedImage}.png`}
              alt={`May Star Signature - Photo ${selectedImage}`}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/90 rounded-full border border-[#D4AF37]/30">
              <span className="text-sm font-mono text-[#D4AF37]">
                {selectedImage} / {galleryImages.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Image Modal Lightbox for PIK Avenue */}
      {selectedImagePIK !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeImageModalPIK}
        >
          {/* Close Button */}
          <button
            onClick={closeImageModalPIK}
            className="absolute top-4 right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImagePIK();
            }}
            className="absolute left-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/maystarpikavenue/${selectedImagePIK}.jpeg`}
              alt={`May Star PIK Avenue - Photo ${selectedImagePIK}`}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/90 rounded-full border border-[#D4AF37]/30">
              <span className="text-sm font-mono text-[#D4AF37]">
                {selectedImagePIK} / {galleryImagesPIK.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImagePIK();
            }}
            className="absolute right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Image Modal Lightbox for Mall Artha Gading */}
      {selectedImageMAG !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeImageModalMAG}
        >
          {/* Close Button */}
          <button
            onClick={closeImageModalMAG}
            className="absolute top-4 right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImageMAG();
            }}
            className="absolute left-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/maystararthagading/${selectedImageMAG}.jpg`}
              alt={`May Star Mall Artha Gading - Photo ${selectedImageMAG}`}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/90 rounded-full border border-[#D4AF37]/30">
              <span className="text-sm font-mono text-[#D4AF37]">
                {selectedImageMAG} / {galleryImagesMAG.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImageMAG();
            }}
            className="absolute right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Image Modal Lightbox for Navapark Country Club BSD */}
      {selectedImageNAV !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeImageModalNAV}
        >
          {/* Close Button */}
          <button
            onClick={closeImageModalNAV}
            className="absolute top-4 right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImageNAV();
            }}
            className="absolute left-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/maystarnavaparkbsd/${selectedImageNAV}.jpeg`}
              alt={`May Star Navapark Country Club BSD - Photo ${selectedImageNAV}`}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/90 rounded-full border border-[#D4AF37]/30">
              <span className="text-sm font-mono text-[#D4AF37]">
                {selectedImageNAV} / {galleryImagesNAV.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImageNAV();
            }}
            className="absolute right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Image Modal Lightbox for Yogyakarta */}
      {selectedImageYOG !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeImageModalYOG}
        >
          {/* Close Button */}
          <button
            onClick={closeImageModalYOG}
            className="absolute top-4 right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImageYOG();
            }}
            className="absolute left-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/maystaryogyakarta/${selectedImageYOG}.jpeg`}
              alt={`May Star Yogyakarta - Photo ${selectedImageYOG}`}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/90 rounded-full border border-[#D4AF37]/30">
              <span className="text-sm font-mono text-[#D4AF37]">
                {selectedImageYOG} / {galleryImagesYOG.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImageYOG();
            }}
            className="absolute right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Image Modal Lightbox for Surabaya */}
      {selectedImageSBY !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeImageModalSBY}
        >
          {/* Close Button */}
          <button
            onClick={closeImageModalSBY}
            className="absolute top-4 right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImageSBY();
            }}
            className="absolute left-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/maystarsurabaya/${selectedImageSBY}.jpeg`}
              alt={`May Star Surabaya - ${selectedImageSBY}`}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/90 rounded-full border border-[#D4AF37]/30">
              <span className="text-sm font-mono text-[#D4AF37]">
                {galleryImagesSBY.indexOf(selectedImageSBY) + 1} / {galleryImagesSBY.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImageSBY();
            }}
            className="absolute right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Image Modal Lightbox for Malang */}
      {selectedImageMLG !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeImageModalMLG}
        >
          {/* Close Button */}
          <button
            onClick={closeImageModalMLG}
            className="absolute top-4 right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImageMLG();
            }}
            className="absolute left-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/maystarmalang/${selectedImageMLG}.png`}
              alt={`May Star Malang - Photo ${selectedImageMLG}`}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/90 rounded-full border border-[#D4AF37]/30">
              <span className="text-sm font-mono text-[#D4AF37]">
                {selectedImageMLG} / {galleryImagesMLG.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImageMLG();
            }}
            className="absolute right-4 w-12 h-12 bg-neutral-900/80 hover:bg-neutral-900 rounded-full flex items-center justify-center border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      </main>
      <Footer />
    </>
  );
}
