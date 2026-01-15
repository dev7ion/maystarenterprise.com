import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(212, 175, 55) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-black"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-600"></div>
              <div className="mx-4 w-3 h-3 rotate-45 border-2 border-yellow-600"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-600"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              OUR LOCATIONS
            </h1>
            
            <p className="text-2xl md:text-3xl text-yellow-500 font-semibold mb-8 tracking-wide">
              Discover May Star Across Indonesia
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              May Star Restaurant proudly operates a growing network of premium Chinese dining destinations across Indonesia. 
              Our locations are categorized into Official Trademark Owner Restaurants and Licensed Franchise Restaurants, 
              each delivering the authentic May Star dining experience with consistent quality and service standards.
            </p>
            
            {/* Decorative Bottom Line */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Trademark Owner Locations */}
      <section className="py-24 relative">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600/20 to-yellow-800/20 border border-yellow-600/30 rounded-full mb-6">
                <span className="text-yellow-500 font-bold text-sm tracking-wider uppercase">
                  ✦ FLAGSHIP RESTAURANTS ✦
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Official Trademark Owner
                <span className="block mt-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Locations
                </span>
              </h2>
              
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                These flagship restaurants are directly owned and operated by the Trademark Holder. 
                They represent the highest standards of May Star's culinary excellence, service quality, and interior sophistication.
              </p>
            </div>

            {/* Location Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* May Star Seafood Hublife */}
              <div className="group relative">
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-500">
                  {/* Header */}
                  <div className="relative bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 p-8">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/20 rounded-full -ml-12 -mb-12"></div>
                    
                    <div className="relative">
                      <div className="inline-block px-4 py-1 bg-black/30 rounded-full mb-3">
                        <span className="text-yellow-200 text-xs font-semibold tracking-wider">FLAGSHIP LOCATION</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        May Star Seafood Hublife
                      </h3>
                      <p className="text-yellow-100 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Hublife Mall, West Jakarta
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 space-y-5">
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg flex items-center justify-center mr-4 border border-yellow-600/20 group-hover/item:border-yellow-600/40 transition-colors">
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-500 mb-2 uppercase text-sm tracking-wider">Location</p>
                        <p className="text-gray-300 leading-relaxed">Hublife Mall, Ground Floor (GF)</p>
                        <p className="text-gray-300">Units 12, 15, 16</p>
                      </div>
                    </div>
                    
                    <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent"></div>
                    
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg flex items-center justify-center mr-4 border border-yellow-600/20 group-hover/item:border-yellow-600/40 transition-colors">
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-500 mb-2 uppercase text-sm tracking-wider">Address</p>
                        <p className="text-gray-300 leading-relaxed">Jl. Tanjung Duren Timur No.2, RT.12/RW.5,</p>
                        <p className="text-gray-300">Tanjung Duren Selatan, Grogol Petamburan,</p>
                        <p className="text-gray-300">West Jakarta, Indonesia</p>
                      </div>
                    </div>
                    
                    <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent"></div>
                    
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg flex items-center justify-center mr-4 border border-yellow-600/20 group-hover/item:border-yellow-600/40 transition-colors">
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-500 mb-2 uppercase text-sm tracking-wider">Coordinates</p>
                        <p className="text-gray-300 font-mono">6°10&apos;52.2&quot;S, 106°47&apos;31.2&quot;E</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600"></div>
                </div>
              </div>

              {/* May Star Palace PIK 2 */}
              <div className="group relative">
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-500">
                  {/* Header */}
                  <div className="relative bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 p-8">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/20 rounded-full -ml-12 -mb-12"></div>
                    
                    <div className="relative">
                      <div className="inline-block px-4 py-1 bg-black/30 rounded-full mb-3">
                        <span className="text-yellow-200 text-xs font-semibold tracking-wider">FLAGSHIP LOCATION</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        May Star Palace PIK 2
                      </h3>
                      <p className="text-yellow-100 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Indonesia Design District, PIK 2
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 space-y-5">
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg flex items-center justify-center mr-4 border border-yellow-600/20 group-hover/item:border-yellow-600/40 transition-colors">
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-500 mb-2 uppercase text-sm tracking-wider">Location</p>
                        <p className="text-gray-300 leading-relaxed">Indonesia Design District (IDD), PIK 2</p>
                      </div>
                    </div>
                    
                    <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent"></div>
                    
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg flex items-center justify-center mr-4 border border-yellow-600/20 group-hover/item:border-yellow-600/40 transition-colors">
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-500 mb-2 uppercase text-sm tracking-wider">Address</p>
                        <p className="text-gray-300 leading-relaxed">Jalan HR. Rasuna Said No.32 Kav. BB-15 Unit,</p>
                        <p className="text-gray-300">Salembaran, Kosambi,</p>
                        <p className="text-gray-300">Tangerang Regency, Banten 15214</p>
                      </div>
                    </div>
                    
                    <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent"></div>
                    
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg flex items-center justify-center mr-4 border border-yellow-600/20 group-hover/item:border-yellow-600/40 transition-colors">
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-500 mb-2 uppercase text-sm tracking-wider">Coordinates</p>
                        <p className="text-gray-300 font-mono">-6.0978, 106.638</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Locations */}
      <section className="py-24 relative bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(30deg, transparent 48%, rgb(212, 175, 55) 49%, rgb(212, 175, 55) 51%, transparent 52%)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600/20 to-yellow-800/20 border border-yellow-600/30 rounded-full mb-6">
                <span className="text-yellow-500 font-bold text-sm tracking-wider uppercase">
                  ✦ NATIONWIDE NETWORK ✦
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Franchise
                <span className="block mt-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Locations
                </span>
              </h2>
              
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                All other May Star restaurants across Indonesia operate as licensed franchise outlets, 
                bringing the signature May Star culinary experience to major cities throughout the country.
              </p>
            </div>

            {/* Franchise Locations by Region */}
            <div className="space-y-6">
              {/* Jakarta Area */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-500 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-yellow-600/10 transition-colors duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-xl flex items-center justify-center mr-5 shadow-lg shadow-yellow-600/20">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Jakarta Area</h3>
                      <p className="text-yellow-500 text-sm mt-1">(Jabodetabek)</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start p-5 bg-gradient-to-br from-yellow-600/10 to-yellow-800/5 rounded-xl border border-yellow-600/20 hover:border-yellow-600/40 transition-colors group/item">
                      <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">May Star Signature – Sari Pacific Hotel, Thamrin</span>
                    </div>
                    <div className="flex items-start p-5 bg-gradient-to-br from-yellow-600/10 to-yellow-800/5 rounded-xl border border-yellow-600/20 hover:border-yellow-600/40 transition-colors group/item">
                      <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">May Star PIK Avenue – Pantai Indah Kapuk</span>
                    </div>
                    <div className="flex items-start p-5 bg-gradient-to-br from-yellow-600/10 to-yellow-800/5 rounded-xl border border-yellow-600/20 hover:border-yellow-600/40 transition-colors group/item">
                      <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">May Star Mall Artha Gading</span>
                    </div>
                    <div className="flex items-start p-5 bg-gradient-to-br from-yellow-600/10 to-yellow-800/5 rounded-xl border border-yellow-600/20 hover:border-yellow-600/40 transition-colors group/item">
                      <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">May Star Navapark BSD – Tangerang</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* West Java */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-yellow-600/10 transition-colors duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-xl flex items-center justify-center mr-5 shadow-lg shadow-yellow-600/20">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-white">West Java</h3>
                  </div>
                  
                  <div className="flex items-start p-5 bg-gradient-to-br from-yellow-600/10 to-yellow-800/5 rounded-xl border border-yellow-600/20 hover:border-yellow-600/40 transition-colors group/item">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Bandung – May Star 23 Paskal Shopping Center</span>
                  </div>
                </div>
              </div>

              {/* Central Java & Yogyakarta */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-yellow-600/10 transition-colors duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-xl flex items-center justify-center mr-5 shadow-lg shadow-yellow-600/20">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Central Java & Yogyakarta</h3>
                  </div>
                  
                  <div className="flex items-start p-5 bg-gradient-to-br from-yellow-600/10 to-yellow-800/5 rounded-xl border border-yellow-600/20 hover:border-yellow-600/40 transition-colors group/item">
                    <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">Yogyakarta – May Star Jogja City Mall</span>
                      <p className="text-sm text-gray-500 mt-1">(Connected to The Rich Jogja Hotel)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* East Java */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-yellow-600/10 transition-colors duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-xl flex items-center justify-center mr-5 shadow-lg shadow-yellow-600/20">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-white">East Java</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start p-5 bg-gradient-to-br from-yellow-600/10 to-yellow-800/5 rounded-xl border border-yellow-600/20 hover:border-yellow-600/40 transition-colors group/item">
                      <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">Surabaya – May Star Pakuwon Square</span>
                    </div>
                    <div className="flex items-start p-5 bg-gradient-to-br from-yellow-600/10 to-yellow-800/5 rounded-xl border border-yellow-600/20 hover:border-yellow-600/40 transition-colors group/item">
                      <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">Malang – May Star Elpico Mall</span>
                        <p className="text-sm text-gray-500 mt-1">(Villa Puncak Tidar)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-black to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-800 rounded-full blur-3xl"></div>
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

      <Footer />
    </div>
  );
}
