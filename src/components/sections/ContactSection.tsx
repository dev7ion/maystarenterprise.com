'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your reservation request! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-black via-gray-dark to-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold tracking-widest text-sm font-semibold uppercase block mb-4">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact
            <span className="block text-gradient-gold mt-2">May Star</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-white/70 text-lg leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-dark to-black border border-gold/20 rounded-2xl p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">Make a Reservation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white/80 mb-2 font-medium">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="+62 xxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-white/80 mb-2 font-medium">
                  Preferred Location *
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Select a location</option>
                  <option value="hublife">May Star Hublife Taman Anggrek</option>
                  <option value="pik2">May Star Palace PIK 2</option>
                  <option value="signature">May Star Signature Thamrin</option>
                  <option value="other">Other Location</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-white/80 mb-2 font-medium">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-white/80 mb-2 font-medium">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="2"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Any special requirements or requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-gold text-black py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300 transform hover:scale-105"
              >
                Submit Reservation
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-gray-dark to-black border border-gold/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Email</h4>
                  <a href="mailto:info@maystarenterprise.com" className="text-gold hover:text-gold-light transition-colors">
                    info@maystarenterprise.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-dark to-black border border-gold/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Phone</h4>
                  <p className="text-white/70 mb-2">Hublife: +62 21 xxxx xxxx</p>
                  <p className="text-white/70">PIK 2: +62 21 xxxx xxxx</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-dark to-black border border-gold/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Headquarters</h4>
                  <p className="text-white/70">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-dark to-black border border-gold/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Operating Hours</h4>
                  <p className="text-white/70">Daily: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-dark to-black border border-gold/20 rounded-2xl p-8">
              <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gradient-gold hover:border-gold transition-all group">
                  <svg className="w-5 h-5 text-gold group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gradient-gold hover:border-gold transition-all group">
                  <svg className="w-5 h-5 text-gold group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gradient-gold hover:border-gold transition-all group">
                  <svg className="w-5 h-5 text-gold group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
