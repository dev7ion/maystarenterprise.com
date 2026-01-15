'use client';

import { useState } from 'react';

export default function BranchesSection() {
  const [activeRegion, setActiveRegion] = useState('flagship');

  const flagshipLocations = [
    {
      name: 'May Star Seafood Hublife',
      location: 'Taman Anggrek, Jakarta',
      address: 'Hublife, Ground Floor (GF), Units 12, 15, 16\nJl. Tanjung Duren Timur No.2, RT.12/RW.5\nTanjung Duren Selatan, Grogol Petamburan\nWest Jakarta',
      mapLink: 'https://maps.app.goo.gl/ZKcXpPd7HK2UbdM88',
    },
    {
      name: 'May Star Palace PIK 2',
      location: 'Indonesia Design District, Tangerang',
      address: 'Jalan HR. Rasuna Said No.32 Kav. BB-15 Unit\nSalembaran, Kosambi\nTangerang Regency, Banten 15214',
      mapLink: 'https://maps.app.goo.gl/QbSK8Gxhvpqjb3F56',
    }
  ];

  const franchiseRegions = [
    {
      region: 'Jakarta & Jabodetabek',
      branches: [
        { name: 'May Star Signature', location: 'Sari Pacific Hotel, Thamrin' },
        { name: 'May Star PIK Avenue', location: 'Pantai Indah Kapuk' },
        { name: 'May Star Mall Artha Gading', location: 'North Jakarta' },
        { name: 'May Star Navapark BSD', location: 'Tangerang' }
      ]
    },
    {
      region: 'West Java',
      branches: [
        { name: 'May Star', location: '23 Paskal Shopping Center, Bandung' }
      ]
    },
    {
      region: 'Central Java & Yogyakarta',
      branches: [
        { name: 'May Star', location: 'Jogja City Mall, Yogyakarta' }
      ]
    },
    {
      region: 'East Java',
      branches: [
        { name: 'May Star', location: 'Pakuwon Square, Surabaya' },
        { name: 'May Star', location: 'Elpico Mall, Malang' }
      ]
    }
  ];

  return (
    <section id="branches" className="section-padding bg-gradient-to-b from-black via-gray-dark/20 to-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16 animate-fade-in">
          <span className="section-subtitle text-gold/90 mb-6 block">Our Locations</span>
          <h2 className="section-title font-serif font-bold text-white mb-6">
            Branch <span className="text-gradient-gold">Network</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="inline-flex gap-2 p-2 bg-gray-dark/40 backdrop-blur-sm rounded-full border border-gold/20">
            <button
              onClick={() => setActiveRegion('flagship')}
              className={`px-8 py-3 text-sm font-bold tracking-wider transition-all duration-300 rounded-full ${
                activeRegion === 'flagship'
                  ? 'bg-gradient-gold text-black shadow-lg shadow-gold/30'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              FLAGSHIP
            </button>
            <button
              onClick={() => setActiveRegion('franchise')}
              className={`px-8 py-3 text-sm font-bold tracking-wider transition-all duration-300 rounded-full ${
                activeRegion === 'franchise'
                  ? 'bg-gradient-gold text-black shadow-lg shadow-gold/30'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              FRANCHISE
            </button>
          </div>
        </div>

        {/* Flagship Locations - Enhanced */}
        {activeRegion === 'flagship' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {flagshipLocations.map((branch, index) => (
              <div
                key={index}
                className="card-luxury p-8 lg:p-10 rounded-xl hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon/Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black text-2xl font-bold shadow-lg shadow-gold/30">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">
                        {branch.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gold text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {branch.location}
                      </div>
                    </div>

                    <div className="border-l-2 border-gold/30 pl-4">
                      <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                        {branch.address}
                      </p>
                    </div>

                    <a
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-bold group/link"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <span>View on Google Maps</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Franchise Network - Enhanced Grid */}
        {activeRegion === 'franchise' && (
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {franchiseRegions.map((region, index) => (
                <div 
                  key={index} 
                  className="card-luxury p-6 lg:p-8 rounded-xl hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold/20">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gold">
                      {region.region}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {region.branches.map((branch, idx) => (
                      <li
                        key={idx}
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-gold/50 rounded-full mt-2 group-hover/item:bg-gold transition-colors flex-shrink-0" />
                        <div className="flex-1">
                          <div className="font-semibold text-white text-sm mb-1 group-hover/item:text-gold transition-colors">
                            {branch.name}
                          </div>
                          <div className="text-xs text-white/50 flex items-center gap-1.5">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            {branch.location}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
