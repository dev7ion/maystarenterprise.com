import LocationCard from './LocationCard';

interface Location {
  name: string;
  mall: string;
  city: string;
  status?: 'active' | 'under-relocation' | 'coming-soon';
  googleMaps?: string;
  instagram?: string;
}

interface Region {
  title: string;
  subtitle: string;
  locations: Location[];
}

const franchiseData: Region[] = [
  {
    title: 'Jakarta & Jabodetabek',
    subtitle: 'Greater Jakarta Region',
    locations: [
      {
        name: 'May Star Signature',
        mall: 'Sari Pacific Hotel',
        city: 'Thamrin, Central Jakarta',
        googleMaps: 'https://maps.google.com',
        instagram: 'https://instagram.com'
      },
      {
        name: 'May Star PIK Avenue',
        mall: 'PIK Avenue Mall',
        city: 'Pantai Indah Kapuk',
        googleMaps: 'https://maps.google.com'
      },
      {
        name: 'May Star Artha Gading',
        mall: 'Mall Artha Gading',
        city: 'North Jakarta',
        googleMaps: 'https://maps.google.com'
      },
      {
        name: 'May Star Navapark',
        mall: 'Navapark BSD',
        city: 'Tangerang Selatan',
        googleMaps: 'https://maps.google.com'
      }
    ]
  },
  {
    title: 'West Java',
    subtitle: 'West Java Region',
    locations: [
      {
        name: 'May Star Bandung',
        mall: '23 Paskal Shopping Center',
        city: 'Bandung',
        status: 'under-relocation'
      }
    ]
  },
  {
    title: 'Central Java & Yogyakarta',
    subtitle: 'Central Java Region',
    locations: [
      {
        name: 'May Star Jogja',
        mall: 'Jogja City Mall',
        city: 'Yogyakarta',
        googleMaps: 'https://maps.google.com'
      }
    ]
  },
  {
    title: 'East Java',
    subtitle: 'East Java Region',
    locations: [
      {
        name: 'May Star Surabaya',
        mall: 'Pakuwon Square',
        city: 'Surabaya',
        googleMaps: 'https://maps.google.com'
      },
      {
        name: 'May Star Malang',
        mall: 'Elpico Mall',
        city: 'Malang',
        googleMaps: 'https://maps.google.com'
      }
    ]
  },
  {
    title: 'Sumatra',
    subtitle: 'Sumatra Region',
    locations: [
      {
        name: 'May Star Batam',
        mall: 'Coming Soon',
        city: 'Batam',
        status: 'coming-soon'
      }
    ]
  }
];

export default function FranchiseRegions() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Label */}
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-600 bg-white px-4 py-2 rounded-full border border-neutral-200">
              Licensed Franchise Locations
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Franchise Network
          </h2>

          {/* Description */}
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Operated by trusted partners, delivering the authentic May Star experience across Indonesia
          </p>
        </div>

        {/* Regions */}
        <div className="space-y-16">
          {franchiseData.map((region, index) => (
            <div key={index}>
              {/* Region Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#D4AF37] to-[#B8860B] rounded-full"></div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
                      {region.title}
                    </h3>
                    <p className="text-sm text-neutral-500 uppercase tracking-wider font-medium">
                      {region.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Locations Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.locations.map((location, locIndex) => (
                  <LocationCard
                    key={locIndex}
                    name={location.name}
                    mall={location.mall}
                    city={location.city}
                    status={location.status}
                    googleMaps={location.googleMaps}
                    instagram={location.instagram}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-12 border-t border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif font-bold text-[#D4AF37] mb-2">8</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wider font-medium">
                Franchise Locations
              </div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-[#D4AF37] mb-2">5</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wider font-medium">
                Regions Covered
              </div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-[#D4AF37] mb-2">7+</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wider font-medium">
                Major Cities
              </div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-[#D4AF37] mb-2">100%</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wider font-medium">
                Quality Standard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
