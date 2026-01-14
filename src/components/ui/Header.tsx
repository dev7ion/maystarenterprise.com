'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['home', 'about', 'trademark', 'branches', 'features'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Ownership', href: '#trademark', id: 'trademark' },
    { name: 'Branches', href: '#branches', id: 'branches' },
    { name: 'Culinary Excellence', href: '#features', id: 'features' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-gold/10 border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-3 group relative z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/30 group-hover:shadow-gold/60 group-hover:scale-105 transition-all duration-300">
              <span className="text-black font-bold text-xl lg:text-2xl font-serif">MS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-lg lg:text-xl font-bold tracking-wide group-hover:text-gold transition-colors duration-300">
                May Star
              </span>
              <span className="text-gold text-xs lg:text-sm tracking-widest font-medium">
                ENTERPRISE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm xl:text-base font-medium tracking-wide transition-all duration-300 group ${
                  activeSection === link.id
                    ? 'text-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Underline effect */}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-gold transition-all duration-300 ${
                    activeSection === link.id
                      ? 'w-3/4'
                      : 'w-0 group-hover:w-3/4'
                  }`}
                />
                {/* Background glow on hover */}
                <span className="absolute inset-0 bg-gold/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-4 bg-gradient-gold text-black px-6 xl:px-8 py-2.5 xl:py-3 rounded-full font-semibold text-sm xl:text-base hover:shadow-xl hover:shadow-gold/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 text-white p-2 hover:bg-gold/10 rounded-lg transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-gold transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gold transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gold transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-1 pt-4 border-t border-gold/20">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative px-4 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-gold bg-gold/10'
                    : 'text-white hover:text-gold hover:bg-gold/5'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <span className="flex items-center justify-between">
                  {link.name}
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  )}
                </span>
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-gradient-gold text-black px-6 py-3.5 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 transform hover:scale-[1.02]"
              style={{
                transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : '0ms'
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
