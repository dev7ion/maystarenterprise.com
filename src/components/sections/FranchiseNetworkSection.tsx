'use client';

import { useState } from 'react';

export default function FranchiseNetworkSection() {
  const [activeTab, setActiveTab] = useState('jakarta');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Data lengkap per region
  const regions = [
    {
      id: 'jakarta',
      name: 'Jakarta & Greater Area',
      badge: 'Flagship Area',
      count: '4 Locations',
      status: 'active'
    },
    {
      id: 'central-java',
      name: 'Central Java & Yogyakarta',
      badge: 'Cultural Hub',
      count: '1 Location',
      status: 'active'
    },
    {
      id: 'east-java',
      name: 'East Java',
      badge: 'Premium Location',
      count: '2 Locations',
      status: 'active'
    },
    {
      id: 'west-java',
      name: 'West Java',
      badge: 'Premium Location',
      count: '1 Location',
      status: 'relocation'
    },
    {
      id: 'sumatra',
      name: 'Sumatra',
      badge: 'Coming Soon',
      count: '1 Location',
      status: 'coming-soon'
    }
  ];

  const franchiseData: Record<string, Array<{
    name: string;
    shortLocation: string;
    city: string;
    fullAddress: string;
    coordinates: string;
    instagram?: string;
    facebook?: string;
    maps?: string;
    gallery: string[];
    status?: string;
  }>> = {
    jakarta: [
      {
        name: 'May Star Signature',
        shortLocation: 'Sari Pacific Hotel',
        city: 'Central Jakarta',
        fullAddress: 'Sari Pacific Jakarta, Autograph Collection, Jl. M.H. Thamrin No.6, RT.2/RW.1, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, 10340',
        coordinates: '6°11\'07.5"S 106°49\'26.1"E',
        instagram: 'https://www.instagram.com/maystarsignature',
        facebook: 'https://www.facebook.com/maystarsignature',
        maps: 'https://maps.app.goo.gl/mshCDUiyAbaykG9t8',
        gallery: ['/maystarsignature/1.png', '/maystarsignature/2.png', '/maystarsignature/3.png']
      },
      {
        name: 'May Star PIK Avenue',
        shortLocation: 'PIK Avenue Mall',
        city: 'North Jakarta',
        fullAddress: 'Mall PIK Avenue Lt. 1, Jl. Pantai Indah Kapuk Boulevard, RT.6/RW.2, Kamal Muara, Kecamatan Penjaringan, Jkt Utara, 14470',
        coordinates: '6°06\'31.6"S 106°44\'24.7"E',
        instagram: 'https://www.instagram.com/maystarpikavenue',
        maps: 'https://maps.app.goo.gl/J7JGUZY8QALDf3SB6',
        gallery: ['/maystarpikavenue/1.jpeg', '/maystarpikavenue/2.jpeg', '/maystarpikavenue/3.jpeg']
      },
      {
        name: 'May Star Mall Artha Gading',
        shortLocation: 'Mall Artha Gading',
        city: 'North Jakarta',
        fullAddress: 'Mall Artha Gading Lt. 3 Blok A1 No. 224, Jl. Artha Gading Sel. No.1 Jakarta 14240',
        coordinates: '6°08\'42.5"S 106°53\'34.5"E',
        instagram: 'https://www.instagram.com/maystar.mag',
        maps: 'https://maps.app.goo.gl/ZXUf8TYn6EzgHAsP7',
        gallery: ['/maystararthagading/1.jpg', '/maystararthagading/2.jpg', '/maystararthagading/3.jpg']
      },
      {
        name: 'May Star Navapark BSD',
        shortLocation: 'Navapark Country Club',
        city: 'Tangerang, Banten',
        fullAddress: 'Jl. BSD Grand Boulevard, Tangerang, Banten, Indonesia',
        coordinates: '6°17\'28.4"S 106°39\'01.5"E',
        facebook: 'https://www.facebook.com/share/19eXQiFFfG/',
        maps: 'https://maps.app.goo.gl/zz83FKcbEvjjUZAm9',
        gallery: ['/maystarnavaparkbsd/1.jpeg', '/maystarnavaparkbsd/2.jpeg', '/maystarnavaparkbsd/3.jpeg']
      }
    ],
    'central-java': [
      {
        name: 'May Star Yogyakarta',
        shortLocation: 'Jogja City Mall',
        city: 'Sleman, Yogyakarta',
        fullAddress: 'Jl. Magelang Jl. Gito Gati No.KM 9, Denggung, Tridadi, Kec. Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55511',
        coordinates: '7°43\'13.6"S 110°21\'43.7"E',
        instagram: 'https://www.instagram.com/maystarjogja?igsh=c21wbnB1NzAydjU1',
        maps: 'https://maps.app.goo.gl/ykYa7u2TCJjcqusE8',
        gallery: ['/maystaryogyakarta/1.jpeg', '/maystaryogyakarta/2.jpeg', '/maystaryogyakarta/3.jpeg']
      }
    ],
    'east-java': [
      {
        name: 'May Star Surabaya',
        shortLocation: 'Pakuwon Square',
        city: 'Surabaya, East Java',
        fullAddress: 'Ruko Pakuwon Square Blok AK.2 No. 17-18, Jalan Mayjend Yono Soewoyo, Lidah Wetan, Lakarsantri, Kec. Lakarsantri, Kota SBY, Jawa Timur 60226',
        coordinates: '7°17\'44.3"S 112°40\'30.7"E',
        instagram: 'https://www.instagram.com/maystarsurabaya?igsh=emR1Ym5pYWxrZTM5',
        facebook: 'https://www.facebook.com/share/1VyK2PX16X/',
        maps: 'https://maps.app.goo.gl/mR6um3JPNNDpB2ED7',
        gallery: [
          '/maystarsurabaya/WhatsApp Image 2026-01-30 at 11.08.21 AM.jpeg',
          '/maystarsurabaya/WhatsApp Image 2026-01-30 at 11.08.21 AM (1).jpeg',
          '/maystarsurabaya/WhatsApp Image 2026-01-30 at 11.08.21 AM (2).jpeg'
        ]
      },
      {
        name: 'May Star Malang',
        shortLocation: 'Elpico Mall',
        city: 'Malang, East Java',
        fullAddress: 'Kristal Tee Building 2nd Floor, Elpico Mall Malang, Jl. Villa Puncak Tidar, Malang-65151',
        coordinates: '7°57\'50.7"S 112°35\'34.2"E',
        instagram: 'https://www.instagram.com/maystar.malang?igsh=azN3dDdhazdsejY3',
        maps: 'https://maps.app.goo.gl/7fxuZ8gHRz78DSGH9',
        gallery: ['/maystarmalang/1.png', '/maystarmalang/2.png', '/maystarmalang/3.png']
      }
    ],
    'west-java': [
      {
        name: 'May Star Bandung',
        shortLocation: 'Nanakam Fresh Market',
        city: 'Bandung, West Java',
        fullAddress: 'Jl. L. L. R.E. Martadinata No.20A, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115',
        coordinates: '6°54\'24.3"S 107°36\'51.5"E',
        status: 'under-relocation',
        gallery: []
      }
    ],
    sumatra: [
      {
        name: 'May Star Batam',
        shortLocation: 'Location TBA',
        city: 'Batam, Riau Islands',
        fullAddress: 'Address to be announced',
        coordinates: '-',
        status: 'coming-soon',
        gallery: []
      }
    ]
  };

  const currentLocations = franchiseData[activeTab as keyof typeof franchiseData] || [];

  return (
    <section id="franchise-network" className="relative py-20 lg:py-28 bg-[#FAFAF9] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-[#D4AF37]/30" />
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#D4AF37]/70">
              Our Network
            </span>
            <div className="h-px w-8 bg-[#D4AF37]/30" />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-5 text-neutral-900 tracking-tight leading-[1.1]">
            Franchise Network
          </h2>
          
          {/* Subtle Divider */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-[#D4AF37]/20" />
            <div className="w-1 h-1 bg-[#D4AF37]/40 rounded-full" />
            <div className="h-px w-12 bg-[#D4AF37]/20" />
          </div>
          
          {/* Description */}
          <p className="text-base lg:text-lg text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto">
            Premium culinary experiences across Indonesia&apos;s most prestigious locations
          </p>
        </div>

        {/* Tab Navigation - Horizontal Pills */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveTab(region.id)}
                className={`
                  group relative px-6 py-3 rounded-full border transition-all duration-300
                  ${activeTab === region.id
                    ? 'bg-neutral-900 border-neutral-900 text-white shadow-lg'
                    : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:shadow-md'
                  }
                `}
              >
                {/* Content */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{region.name}</span>
                  {region.status === 'coming-soon' && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeTab === region.id 
                        ? 'bg-white/20 text-white/80' 
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      Coming Soon
                    </span>
                  )}
                  {region.status === 'relocation' && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeTab === region.id 
                        ? 'bg-white/20 text-white/80' 
                        : 'bg-amber-50 text-amber-600'
                    }`}>
                      Relocation
                    </span>
                  )}
                </div>

                {/* Active Indicator */}
                {activeTab === region.id && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#D4AF37] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - Locations Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Fade-in animation wrapper */}
          <div className="animate-fadeIn">
            {currentLocations.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {currentLocations.map((location, idx) => (
                  <div 
                    key={idx}
                    className="group bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all duration-500 overflow-hidden hover:shadow-lg"
                  >
                    {/* Card Content */}
                    <div className="p-8 lg:p-10">
                      {/* Restaurant Name - Prominent */}
                      <h4 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-3 leading-tight">
                        {location.name}
                      </h4>
                      
                      {/* Location Brief */}
                      <div className="flex items-center gap-2 mb-6">
                        <p className="text-base text-neutral-600 font-medium">{location.shortLocation}</p>
                        <span className="text-neutral-300">•</span>
                        <p className="text-base text-neutral-500">{location.city}</p>
                      </div>

                      {/* Status Badge if applicable */}
                      {location.status && (
                        <div className="mb-6">
                          {location.status === 'under-relocation' && (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg">
                              <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Under Relocation</span>
                            </div>
                          )}
                          {location.status === 'coming-soon' && (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg">
                              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Coming Soon</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Divider */}
                      <div className="h-px bg-neutral-100 mb-6" />

                      {/* Address & Coordinates */}
                      {!location.status && (
                        <div className="space-y-5 mb-8">
                          <div>
                            <p className="text-xs uppercase tracking-[0.1em] text-neutral-400 mb-2 font-semibold">Address</p>
                            <p className="text-sm leading-relaxed text-neutral-700">{location.fullAddress}</p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.1em] text-neutral-400 mb-2 font-semibold">Coordinates</p>
                            <p className="text-xs text-neutral-500 font-mono tracking-tight">{location.coordinates}</p>
                          </div>
                        </div>
                      )}

                      {/* Connect Buttons */}
                      {!location.status && (
                        <div className="flex flex-wrap gap-3 mb-8">
                          {location.instagram && (
                            <a
                              href={location.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-lg transition-all duration-300"
                            >
                              <svg className="w-3.5 h-3.5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                              <span className="text-sm text-neutral-700 font-medium">Instagram</span>
                            </a>
                          )}
                          {location.facebook && (
                            <a
                              href={location.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-lg transition-all duration-300"
                            >
                              <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                              <span className="text-sm text-neutral-700 font-medium">Facebook</span>
                            </a>
                          )}
                          {location.maps && (
                            <a
                              href={location.maps}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-lg transition-all duration-300"
                            >
                              <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-sm text-neutral-700 font-medium">Maps</span>
                            </a>
                          )}
                        </div>
                      )}

                      {/* Gallery Preview - Compact */}
                      {location.gallery && location.gallery.length > 0 && (
                        <div>
                          <p className="text-xs uppercase tracking-[0.1em] text-neutral-400 mb-4 font-semibold">Restaurant Gallery</p>
                          <div className="grid grid-cols-3 gap-2">
                            {location.gallery.map((img, imgIdx) => (
                              <div
                                key={imgIdx}
                                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 cursor-pointer group/image"
                                onClick={() => setSelectedImage(img)}
                              >
                                <img
                                  src={img}
                                  alt={`${location.name} - Photo ${imgIdx + 1}`}
                                  className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                  </svg>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-neutral-500">No locations available in this region yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-neutral-200 rounded-full shadow-sm">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
            <span className="text-sm text-neutral-700 tracking-wide">
              Expanding Across Indonesia
            </span>
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 hover:border-white/30 transition-all duration-300 z-10 backdrop-blur-sm"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Fade-in animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
