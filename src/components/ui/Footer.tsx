export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Heritage', href: '/our-heritage' },
    { name: 'Locations', href: '/locations' },
    { name: 'Contact', href: '/contact' },
  ];

  const flagshipLocations = [
    { name: 'Hublife Taman Anggrek', city: 'Jakarta' },
    { name: 'Palace PIK 2', city: 'Tangerang' },
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '10:00 AM - 10:00 PM' },
    { day: 'Saturday - Sunday', time: '09:00 AM - 11:00 PM' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gold/10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1E] to-[#0F0F10]" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="container-responsive relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center shadow-xl shadow-gold/20">
                  <span className="text-black font-bold text-2xl font-serif">MS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-serif text-xl font-bold tracking-tight">
                    May Star
                  </span>
                  <span className="text-gold text-xs tracking-[0.3em] font-semibold">
                    ENTERPRISE
                  </span>
                </div>
              </div>
              
              <p className="text-responsive-sm text-white/50 leading-relaxed mb-6 sm:mb-8 max-w-sm">
                Premier Authentic Chinese Cuisine since 2007, blending traditional Cantonese heritage with modern dining excellence across Indonesia.
              </p>

              {/* Social Media */}
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-gold/5 border border-gold/20 rounded-xl flex items-center justify-center hover:bg-gradient-gold hover:border-gold transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-gold group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-gold/5 border border-gold/20 rounded-xl flex items-center justify-center hover:bg-gradient-gold hover:border-gold transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-gold group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-gold/5 border border-gold/20 rounded-xl flex items-center justify-center hover:bg-gradient-gold hover:border-gold transition-all duration-300 group"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 text-gold group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-serif text-sm sm:text-base font-bold mb-4 sm:mb-6 tracking-tight">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-gold text-sm transition-all duration-300 inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-serif text-sm sm:text-base font-bold mb-4 sm:mb-6 tracking-tight">Flagship Locations</h4>
              <ul className="space-y-4">
                {flagshipLocations.map((location, index) => (
                  <li key={index} className="group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/80 font-semibold text-sm">{location.name}</div>
                        <div className="text-white/40 text-xs mt-0.5">{location.city}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-serif text-sm sm:text-base font-bold mb-4 sm:mb-6 tracking-tight">Business Hours</h4>
              <ul className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white/80 text-sm font-semibold">{schedule.day}</div>
                      <div className="text-white/50 text-xs mt-0.5">{schedule.time}</div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Contact */}
              <div className="mt-6 pt-6 border-t border-gold/10">
                <a 
                  href="mailto:info@maystarenterprise.com"
                  className="flex items-center gap-2 text-white/50 hover:text-gold text-sm transition-colors group"
                >
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover:underline">info@maystarenterprise.com</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-responsive-sm text-white/40">
                © {currentYear} May Star Enterprise. All rights reserved.
              </p>
              <p className="text-responsive-sm text-white/30 mt-1">
                Trademark owned by May Star Group & Franchise Partners
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-gold transition-colors text-xs">
                Privacy Policy
              </a>
              <span className="text-white/20">•</span>
              <a href="#" className="text-white/40 hover:text-gold transition-colors text-xs">
                Terms of Service
              </a>
              <span className="text-white/20">•</span>
              <a href="#" className="text-white/40 hover:text-gold transition-colors text-xs">
                Franchise Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-2xl shadow-gold/30 hover:shadow-gold/50 transition-all hover:scale-110 hover:-translate-y-1 z-50 group"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5 text-black group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </footer>
  );
}
