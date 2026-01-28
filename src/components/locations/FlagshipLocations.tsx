import Image from 'next/image';

interface FlagshipLocation {
  name: string;
  area: string;
  address: string;
  image: string;
  googleMaps?: string;
  instagram?: string;
}

const flagshipLocations: FlagshipLocation[] = [
  {
    name: 'May Star Seafood Hublife',
    area: 'West Jakarta',
    address: 'Hublife Mall, Ground Floor Units 12, 15, 16 • Jl. Tanjung Duren Timur No.2, Jakarta Barat',
    image: '/hublife.jpg',
    googleMaps: 'https://maps.google.com/?q=-6.182278,106.792000',
    instagram: 'https://instagram.com/maystarseafood'
  },
  {
    name: 'May Star Palace PIK 2',
    area: 'Tangerang',
    address: 'Indonesia Design District (IDD), PIK 2 • Jl. HR. Rasuna Said No.32, Tangerang Regency, Banten',
    image: '/pik.jpg',
    googleMaps: 'https://maps.google.com/?q=-6.0978,106.638',
    instagram: 'https://instagram.com/maystarpalace'
  }
];

export default function FlagshipLocations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Label */}
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-2 rounded-full">
              Trademark Holder Locations
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Flagship Restaurants
          </h2>

          {/* Description */}
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            These flagship restaurants represent the highest standard of the May Star brand in design, service, and culinary excellence.
          </p>
        </div>

        {/* Flagship Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {flagshipLocations.map((location, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#B8860B]/20 rounded-2xl blur-xl transition-all duration-500"></div>

              {/* Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-neutral-200 group-hover:border-[#D4AF37]/50 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-neutral-100">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Flagship Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-4 py-2 bg-[#D4AF37] text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-lg flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Flagship
                    </div>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Name & Area */}
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {location.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{location.area}</span>
                  </div>

                  {/* Address */}
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {location.address}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-neutral-200 mb-6"></div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {location.googleMaps && (
                      <a
                        href={location.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-[#D4AF37] text-white font-semibold rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        View Map
                      </a>
                    )}
                    {location.instagram && (
                      <a
                        href={location.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold rounded-lg border-2 border-neutral-200 hover:border-[#D4AF37] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Instagram
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom Gold Accent */}
                <div className="h-1 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
