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
    <section id="branches" className="section-padding bg-black relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <span className="section-subtitle text-gold/80 mb-6 block">Our Locations</span>
          <h2 className="section-title font-serif font-bold text-white">
            Branch <span className="text-gradient-gold">Network</span>
          </h2>
        </div>

        {/* Simple Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex border-b border-gold/20">
            <button
              onClick={() => setActiveRegion('flagship')}
              className={`px-8 py-4 text-sm font-semibold tracking-wider transition-all ${
                activeRegion === 'flagship'
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              FLAGSHIP
            </button>
            <button
              onClick={() => setActiveRegion('franchise')}
              className={`px-8 py-4 text-sm font-semibold tracking-wider transition-all ${
                activeRegion === 'franchise'
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              FRANCHISE
            </button>
          </div>
        </div>

        {/* Flagship Locations */}
        {activeRegion === 'flagship' && (
          <div className="max-w-3xl mx-auto space-y-12 animate-fade-in">
            {flagshipLocations.map((branch, index) => (
              <div
                key={index}
                className="border-l-2 border-gold/30 pl-8 py-4 hover:border-gold transition-colors"
              >
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {branch.name}
                </h3>
                <p className="text-gold text-sm mb-4">{branch.location}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-4 whitespace-pre-line">
                  {branch.address}
                </p>
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gold hover:text-gold-light transition-colors text-sm font-medium"
                >
                  View on Google Maps
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Franchise Network - Clean List Format */}
        {activeRegion === 'franchise' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {franchiseRegions.map((region, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-xl font-serif font-bold text-gold pb-3 border-b border-gold/20">
                    {region.region}
                  </h3>
                  <ul className="space-y-4">
                    {region.branches.map((branch, idx) => (
                      <li
                        key={idx}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        <div className="font-medium text-white mb-1">{branch.name}</div>
                        <div className="text-sm text-white/50">{branch.location}</div>
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
