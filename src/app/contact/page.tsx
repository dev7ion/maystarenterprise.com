'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for contacting May Star Enterprise! We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        inquiryType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-black">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 via-black to-black"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block mb-6">
                <span className="text-yellow-500 tracking-[0.3em] text-xs md:text-sm font-semibold uppercase block mb-4">
                  Get In Touch
                </span>
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                CONTACT US
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                We'd love to hear from you. Reach out for inquiries, reservations, or partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-6 relative bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Information - Left Side */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header Section */}
                <div className="relative">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-900 via-gray-600 to-transparent"></div>
                  <div className="pl-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight leading-tight">
                      Get In Touch
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Whether you have questions about our services, want to make a reservation, or discuss business opportunities, we're here to help.
                    </p>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-900 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-start space-x-5">
                      <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold text-lg mb-1.5 tracking-tight">Headquarters</h4>
                        <p className="text-gray-600 text-base">Jakarta, Indonesia</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-900 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-start space-x-5">
                      <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold text-lg mb-1.5 tracking-tight">Email</h4>
                        <a href="mailto:info@maystarenterprise.com" className="text-gray-700 hover:text-gray-900 font-medium transition-colors underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4">
                          info@maystarenterprise.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-900 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-start space-x-5">
                      <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold text-lg mb-1.5 tracking-tight">Phone</h4>
                        <p className="text-gray-600 text-base mb-2">Available at our restaurant locations</p>
                        <a
                          href="/locations"
                          className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm inline-flex items-center group/link"
                        >
                          View locations
                          <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-900 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-start space-x-5">
                      <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold text-lg mb-1.5 tracking-tight">Operating Hours</h4>
                        <p className="text-gray-600 text-base">Daily: 10:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <h4 className="text-gray-900 font-bold text-xl mb-5 tracking-tight">Connect With Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="group relative w-14 h-14 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <svg className="relative w-6 h-6 text-gray-700 group-hover:text-white transition-colors z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="group relative w-14 h-14 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <svg className="relative w-6 h-6 text-gray-700 group-hover:text-white transition-colors z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="group relative w-14 h-14 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <svg className="relative w-6 h-6 text-gray-700 group-hover:text-white transition-colors z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form - Right Side */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  <div className="mb-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Send Us a Message</h3>
                    <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you as soon as possible.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="group">
                      <label htmlFor="name" className="block text-gray-800 mb-3 font-medium text-sm tracking-wide">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="email" className="block text-gray-800 mb-3 font-medium text-sm tracking-wide">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="phone" className="block text-gray-800 mb-3 font-medium text-sm tracking-wide">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200"
                          placeholder="+62 xxx xxxx"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="group">
                      <label htmlFor="inquiryType" className="block text-gray-800 mb-3 font-medium text-sm tracking-wide">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 cursor-pointer"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="general">General Inquiry</option>
                        <option value="reservation">Reservation</option>
                        <option value="franchise">Franchise Opportunity</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="corporate">Corporate Information</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="group">
                      <label htmlFor="subject" className="block text-gray-800 mb-3 font-medium text-sm tracking-wide">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label htmlFor="message" className="block text-gray-800 mb-3 font-medium text-sm tracking-wide">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 resize-none"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-5 px-8 rounded-xl text-base tracking-wide transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:bg-gray-900"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Visiting Our Restaurants */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-10 hover:border-gray-600 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 inline-flex">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight">
                    Visit Our Restaurants
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    Experience the May Star dining journey at one of our official trademark owner restaurants or licensed franchise locations across Indonesia.
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Authentic Cantonese cuisine</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Multiple locations nationwide</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Premium dining experience</span>
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="/locations"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/link"
                  >
                    <span>View all locations</span>
                    <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Business & Partnership */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-10 hover:border-gray-600 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 inline-flex">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight">
                    Business Inquiries
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    For partnership discussions, franchise opportunities, and corporate collaborations, please use the contact form above or reach out through our official channels.
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Partnership opportunities</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Franchise inquiries</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Corporate collaborations</span>
                    </li>
                  </ul>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white font-medium">Professional & Discreet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA - We're Here to Help */}
        <section className="relative py-32 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
          {/* Background Pattern & Effects */}
          <div className="absolute inset-0">
            {/* Gold Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-yellow-500/50"></div>
              <div className="mx-6">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-yellow-500/50"></div>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-8">
              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent tracking-wide">
                We're Here to Help
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                Thank you for your interest in May Star Enterprise
              </p>

              {/* Divider Line */}
              <div className="pt-6 pb-12">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent mx-auto"></div>
              </div>

              {/* Features Grid - Minimal & Elegant */}
              <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                {/* Response Time */}
                <div className="group">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-yellow-500/20 bg-black/40 backdrop-blur-sm shadow-lg group-hover:border-yellow-500/50 group-hover:bg-black/60 group-hover:shadow-yellow-500/20 transition-all duration-500">
                      <svg className="w-7 h-7 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">24 Hours</h3>
                    <p className="text-gray-400 font-light">Response time</p>
                  </div>
                </div>

                {/* Professional Team */}
                <div className="group">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-yellow-500/20 bg-black/40 backdrop-blur-sm shadow-lg group-hover:border-yellow-500/50 group-hover:bg-black/60 group-hover:shadow-yellow-500/20 transition-all duration-500">
                      <svg className="w-7 h-7 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Expert Team</h3>
                    <p className="text-gray-400 font-light">Professional service</p>
                  </div>
                </div>

                {/* Excellence */}
                <div className="group">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-yellow-500/20 bg-black/40 backdrop-blur-sm shadow-lg group-hover:border-yellow-500/50 group-hover:bg-black/60 group-hover:shadow-yellow-500/20 transition-all duration-500">
                      <svg className="w-7 h-7 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Excellence</h3>
                    <p className="text-gray-400 font-light">Committed to quality</p>
                  </div>
                </div>
              </div>

              {/* Bottom Message */}
              <div className="pt-16">
                <p className="text-gray-400 font-light italic">
                  Our team is committed to providing excellent service
                </p>
              </div>
            </div>

            {/* Decorative Line */}
            <div className="flex items-center justify-center mt-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-yellow-500/50"></div>
              <div className="mx-6">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-yellow-500/50"></div>
            </div>
          </div>
        </section>

        {/* Decorative Bottom Border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      </div>
      <Footer />
    </>
  );
}
