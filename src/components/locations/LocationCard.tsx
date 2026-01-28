interface LocationCardProps {
  name: string;
  mall: string;
  city: string;
  status?: 'active' | 'under-relocation' | 'coming-soon';
  googleMaps?: string;
  instagram?: string;
}

export default function LocationCard({ 
  name, 
  mall, 
  city, 
  status = 'active',
  googleMaps,
  instagram 
}: LocationCardProps) {
  return (
    <div className="group relative">
      {/* Subtle Glow on Hover */}
      <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#B8860B]/10 rounded-xl blur transition-all duration-300"></div>
      
      {/* Card */}
      <div className="relative bg-white rounded-lg border border-neutral-200 group-hover:border-[#D4AF37]/30 transition-all duration-300 p-6 h-full">
        {/* Status Badge */}
        {status !== 'active' && (
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
              status === 'under-relocation' 
                ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                : 'bg-blue-50 text-blue-700 border border-blue-200'
            }`}>
              {status === 'under-relocation' ? 'Under Relocation' : 'Coming Soon'}
            </span>
          </div>
        )}

        {/* Restaurant Name */}
        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-[#D4AF37] transition-colors">
          {name}
        </h3>

        {/* Mall/Area */}
        <p className="text-neutral-600 mb-1 font-medium">
          {mall}
        </p>

        {/* City */}
        <div className="flex items-center gap-2 text-neutral-500 mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{city}</span>
        </div>

        {/* Actions */}
        {status === 'active' && (googleMaps || instagram) && (
          <div className="flex gap-2 pt-4 border-t border-neutral-100">
            {googleMaps && (
              <a
                href={googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-[#D4AF37] text-white text-sm font-medium rounded-md transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Maps
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-neutral-50 text-neutral-900 text-sm font-medium rounded-md border border-neutral-200 hover:border-[#D4AF37] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                IG
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
