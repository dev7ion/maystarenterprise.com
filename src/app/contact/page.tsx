import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-black"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              CONTACT US
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-500/90 font-light">
              Get in Touch with May Star Enterprise
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            Thank you for your interest in May Star Enterprise.
            For general inquiries, corporate matters, or information regarding our restaurant network, 
            please reach out to us using the contact details below. Our team will be happy to assist you.
          </p>
        </div>
      </section>

      {/* Corporate Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-2 border-yellow-600/30 rounded-lg p-8 md:p-12 bg-gradient-to-br from-yellow-900/5 to-black backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Corporate Contact Information
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-yellow-500 font-semibold mb-3 text-lg">Company Name:</h3>
                <p className="text-gray-200 text-lg">May Star Enterprise</p>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-yellow-500 font-semibold mb-3 text-lg">Headquarters:</h3>
                <p className="text-gray-200 text-lg">Jakarta, Indonesia</p>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-yellow-500 font-semibold mb-3 text-lg">Website:</h3>
                <p className="text-gray-200 text-lg">maystarenterprise.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiries Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-yellow-950/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Inquiries
          </h2>
          
          <div className="bg-black/50 border border-yellow-600/20 rounded-lg p-8 md:p-10">
            <p className="text-gray-300 text-lg mb-6">
              For inquiries related to:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">•</span>
                <span className="text-gray-200 text-lg">Corporate information</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">•</span>
                <span className="text-gray-200 text-lg">Brand and trademark matters</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">•</span>
                <span className="text-gray-200 text-lg">General restaurant information</span>
              </li>
            </ul>
            
            <p className="text-gray-300 text-lg">
              Please contact us through our official website or designated communication channels.
            </p>
          </div>
        </div>
      </section>

      {/* Visiting Our Restaurants */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-4 border-yellow-500 pl-8 py-6 bg-gradient-to-r from-yellow-900/10 to-transparent">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              Visiting Our Restaurants
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              To experience the May Star dining journey, we invite you to visit one of our official 
              trademark owner restaurants or licensed franchise locations across Indonesia.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Please refer to the{' '}
              <a 
                href="/locations" 
                className="text-yellow-500 hover:text-yellow-400 underline transition-colors font-semibold"
              >
                Locations page
              </a>
              {' '}for detailed addresses and restaurant information.
            </p>
          </div>
        </div>
      </section>

      {/* Business & Partnership */}
      <section className="py-16 px-6 bg-gradient-to-b from-yellow-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-4 border-yellow-500 pl-8 py-6 bg-gradient-to-r from-yellow-900/10 to-transparent">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              Business & Partnership Inquiries
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              For partnership-related discussions, including franchise and corporate collaboration 
              opportunities, please reach out through our official contact channels.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              All inquiries will be handled with professionalism and discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center border-2 border-yellow-600/30 rounded-lg p-10 md:p-16 bg-gradient-to-br from-yellow-900/10 via-black to-yellow-900/10">
            <div className="mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Stay Connected
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8"></div>
            </div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Follow May Star Enterprise as we continue to preserve authentic Cantonese heritage 
              while delivering refined dining experiences across Indonesia.
            </p>
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
