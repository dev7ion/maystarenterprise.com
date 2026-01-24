'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Heritage', href: '/our-heritage' },
    { name: 'Locations', href: '/locations' },
    { name: 'Contact', href: '/contact' },
  ];

  // Fungsi untuk mengecek apakah menu item aktif
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/98 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="border-b border-[#D4AF37]/5">
        <nav className="container-responsive">
          <div className="flex items-center justify-between h-[60px] sm:h-[72px] gap-4 sm:gap-8">
            {/* KIRI - Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center gap-3 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative w-11 h-11 bg-gradient-to-br from-[#D4AF37] via-[#F4E4C1] to-[#D4AF37] rounded-full flex items-center justify-center shadow-md shadow-[#D4AF37]/20 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/40 transition-all duration-300">
                  <span className="text-black font-bold text-lg font-serif">MS</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-white font-serif text-[17px] font-bold tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                    May Star
                  </span>
                  <span className="text-[#D4AF37] text-[9px] tracking-[0.25em] font-semibold mt-0.5">
                    ENTERPRISE
                  </span>
                </div>
              </Link>
            </div>

            {/* TENGAH - Menu Desktop */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10 flex-1 justify-center">
              {menuItems.map((item) => {
                const isExternal = item.href.startsWith('#');
                const active = isActive(item.href);
                
                if (isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="relative text-white text-[13px] xl:text-[15px] font-medium tracking-wide hover:text-[#D4AF37] transition-all duration-300 group py-2 whitespace-nowrap"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-300 ease-out" />
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-[13px] xl:text-[15px] font-medium tracking-wide transition-all duration-300 group py-2 whitespace-nowrap ${
                      active ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ease-out ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* KANAN - CTA Button */}
            <div className="hidden lg:flex flex-shrink-0">
              <Link
                href="/locations"
                className="btn-responsive inline-flex items-center justify-center bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] text-black font-bold tracking-wide rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300"
              >
                View Locations
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 hover:bg-white/5 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-[2px] w-full bg-[#D4AF37] rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-[#D4AF37] rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-[#D4AF37] rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black/98 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="container-responsive py-6 sm:py-8 space-y-2 border-t border-[#D4AF37]/10">
          {menuItems.map((item, index) => {
            const isExternal = item.href.startsWith('#');
            const active = isActive(item.href);
            
            if (isExternal) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/90 text-[15px] font-medium py-3.5 px-4 rounded-lg hover:text-[#D4AF37] hover:bg-white/5 transition-all duration-200"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 30}ms` : '0ms'
                  }}
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-[15px] font-medium py-3.5 px-4 rounded-lg transition-all duration-200 ${
                  active 
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20' 
                    : 'text-white/90 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 30}ms` : '0ms'
                }}
              >
                {item.name}
              </Link>
            );
          })}
          
          {/* Mobile CTA */}
          <div className="pt-4">
            <Link
              href="/locations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-responsive block text-center bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] text-black font-bold tracking-wide rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
            >
              View Locations
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
