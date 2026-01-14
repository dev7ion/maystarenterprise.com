import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';

export default function OurHeritagePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              OUR HERITAGE
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 font-light">
              Preserving Cantonese Tradition, Elevating the Dining Experience
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-gradient-to-r from-red-800 to-amber-600 mx-auto mb-8"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Since its establishment in 2007, May Star Restaurant has been built upon a deep respect for authentic Cantonese culinary heritage. From the selection of ingredients to the preparation techniques used in every kitchen, May Star remains committed to preserving the essence of traditional Chinese cuisine while adapting it to modern dining expectations.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-8">
            This heritage is not only reflected in the food, but also in the atmosphere, service standards, and overall dining philosophy across all May Star locations.
          </p>
        </div>
      </section>

      {/* Foundation of Cuisine */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Foundation of Our Cuisine
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-800 to-amber-600 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At the core of May Star's culinary identity lies a dedication to authentic Cantonese flavors. Each dish is crafted with precision, honoring time-honored recipes that have been passed down through generations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By combining classical techniques with contemporary presentation, May Star creates dishes that feel both familiar and refined — maintaining authenticity without compromising on modern appeal.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-900/10 to-amber-900/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🥘</div>
                  <p className="text-2xl font-semibold text-red-900">Authentic Cantonese</p>
                  <p className="text-lg text-gray-600 mt-2">Time-Honored Recipes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Consistency */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square bg-gradient-to-br from-amber-900/10 to-red-900/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">⭐</div>
                  <p className="text-2xl font-semibold text-red-900">Premium Quality</p>
                  <p className="text-lg text-gray-600 mt-2">Consistent Excellence</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Commitment to Quality and Consistency
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-800 to-amber-600 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Quality has always been a defining pillar of the May Star brand. From premium ingredients to disciplined kitchen operations, every element is carefully managed to ensure a consistent dining experience across all locations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether dining at a flagship restaurant or a franchise outlet, guests can expect the same commitment to excellence that has defined May Star since its inception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Standards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flagship Standards and Brand Legacy
            </h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
              May Star's flagship locations, directly owned and operated by the Trademark Holder, serve as the highest representation of the brand's values. These restaurants set the benchmark for:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-semibold mb-3">Culinary Excellence</h3>
              <p className="text-amber-100">Exceptional taste and presentation in every dish</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🤵</div>
              <h3 className="text-2xl font-semibold mb-3">Service Professionalism</h3>
              <p className="text-amber-100">Attentive and refined hospitality</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-semibold mb-3">Interior Elegance</h3>
              <p className="text-amber-100">Sophisticated ambiance and design</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-semibold mb-3">Overall Experience</h3>
              <p className="text-amber-100">Memorable moments for every guest</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-amber-100 max-w-4xl mx-auto leading-relaxed">
              The standards established at these flagship outlets guide the operational and confirming quality of all May Star restaurants nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expanding the Legacy Across Indonesia
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-800 to-amber-600 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              Through a structured franchise model, May Star has extended its presence to major cities throughout Indonesia. Each licensed restaurant operates under strict brand guidelines, ensuring that the May Star heritage of quality, authenticity, and service excellence is preserved as the brand continues to grow.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              This approach allows May Star to expand responsibly while maintaining the integrity of its culinary and brand identity.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🏙️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Nationwide Presence</h3>
              <p className="text-gray-700">Serving major cities across Indonesia</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Strict Guidelines</h3>
              <p className="text-gray-700">Consistent brand standards everywhere</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Brand Integrity</h3>
              <p className="text-gray-700">Preserving quality and authenticity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Living Heritage */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Living Heritage
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-800 to-amber-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              For May Star, heritage is not static — it is continuously refined and upheld through dedication, discipline, and respect for tradition. By staying true to its roots while embracing modern dining concepts, May Star continues to deliver an experience that resonates with both long-time patrons and new generations of guests.
            </p>
            
            <div className="mt-12 inline-flex items-center justify-center gap-4 bg-gradient-to-r from-red-900 to-amber-900 text-white px-8 py-4 rounded-full">
              <span className="text-2xl">🌟</span>
              <span className="text-xl font-semibold">Since 2007 • Tradition Meets Excellence</span>
              <span className="text-2xl">🌟</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
