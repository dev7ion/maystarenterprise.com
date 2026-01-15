import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';

export default function OurHeritagePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-zinc-900 to-yellow-900/20 text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(180,83,9,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(202,138,4,0.1),transparent_50%)]"></div>
        </div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-600 to-yellow-600"></div>
              <div className="text-yellow-600 text-xl">✦</div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-yellow-600 to-yellow-600"></div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              OUR HERITAGE
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl lg:text-3xl text-yellow-100/90 font-light leading-relaxed">
              Preserving Cantonese Tradition,<br className="hidden md:block" /> Elevating the Dining Experience
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-black" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
            <path d="M0,0 Q300,40 600,20 T1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-black relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rotate-45 bg-yellow-600"></div>
              <div className="h-px w-16 bg-gradient-to-r from-yellow-600/50 to-yellow-600"></div>
              <span className="text-yellow-600 font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <div className="h-px w-16 bg-gradient-to-l from-yellow-600/50 to-yellow-600"></div>
              <div className="w-3 h-3 rotate-45 bg-yellow-600"></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-yellow-900/30 rounded-2xl p-10 md:p-16 shadow-2xl shadow-yellow-900/10">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Since its establishment in <span className="text-yellow-500 font-semibold">2007</span>, May Star Restaurant has been built upon a deep respect for authentic Cantonese culinary heritage. From the selection of ingredients to the preparation techniques used in every kitchen, May Star remains committed to preserving the essence of traditional Chinese cuisine while adapting it to modern dining expectations.
            </p>
            <div className="my-8 flex items-center justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              This heritage is not only reflected in the food, but also in the atmosphere, service standards, and overall dining philosophy across all May Star locations.
            </p>
          </div>
        </div>
      </section>

      {/* Foundation of Cuisine */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-900/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="group">
              <div className="inline-flex items-center gap-2 mb-6 text-yellow-600">
                <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
                <span className="text-sm font-semibold tracking-wider uppercase">Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                The Foundation of Our{' '}
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  Cuisine
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mb-8"></div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At the core of May Star's culinary identity lies a dedication to authentic Cantonese flavors. Each dish is crafted with precision, honoring time-honored recipes that have been passed down through generations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                By combining classical techniques with contemporary presentation, May Star creates dishes that feel both familiar and refined — maintaining authenticity without compromising on modern appeal.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square bg-gradient-to-br from-zinc-900 via-zinc-800 to-yellow-900/20 rounded-2xl border border-yellow-900/30 flex items-center justify-center p-8 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,138,4,0.1),transparent_70%)]"></div>
                <div className="text-center relative z-10">
                  <div className="text-8xl mb-6 filter drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-300">🥘</div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-3">Authentic Cantonese</p>
                  <p className="text-lg text-gray-400">Time-Honored Recipes</p>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-yellow-600/30 rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-yellow-600/30 rounded-bl-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Consistency */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-yellow-900/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square bg-gradient-to-br from-zinc-900 via-zinc-800 to-yellow-900/20 rounded-2xl border border-yellow-900/30 flex items-center justify-center p-8 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,138,4,0.1),transparent_70%)]"></div>
                <div className="text-center relative z-10">
                  <div className="text-8xl mb-6 filter drop-shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">⭐</div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-3">Premium Quality</p>
                  <p className="text-lg text-gray-400">Consistent Excellence</p>
                </div>
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-yellow-600/30 rounded-tl-2xl"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-yellow-600/30 rounded-br-2xl"></div>
              </div>
            </div>
            <div className="order-1 md:order-2 group">
              <div className="inline-flex items-center gap-2 mb-6 text-yellow-600">
                <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
                <span className="text-sm font-semibold tracking-wider uppercase">Commitment</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                A Commitment to{' '}
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  Quality and Consistency
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mb-8"></div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Quality has always been a defining pillar of the May Star brand. From premium ingredients to disciplined kitchen operations, every element is carefully managed to ensure a consistent dining experience across all locations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether dining at a flagship restaurant or a franchise outlet, guests can expect the same commitment to excellence that has defined May Star since its inception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Standards */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rotate-45 bg-yellow-300"></div>
              <div className="h-px w-16 bg-gradient-to-r from-yellow-300/50 to-yellow-300"></div>
              <span className="text-yellow-300 font-semibold tracking-wider uppercase text-sm">Excellence</span>
              <div className="h-px w-16 bg-gradient-to-l from-yellow-300/50 to-yellow-300"></div>
              <div className="w-3 h-3 rotate-45 bg-yellow-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Flagship Standards and<br />Brand Legacy
            </h2>
            <div className="w-32 h-1 bg-yellow-300 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed">
              May Star's flagship locations, directly owned and operated by the Trademark Holder, serve as the highest representation of the brand's values. These restaurants set the benchmark for:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="group bg-black/40 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-8 text-center hover:bg-black/60 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/50">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">👨‍🍳</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Culinary Excellence</h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
              <p className="text-yellow-100/80">Exceptional taste and presentation in every dish</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-8 text-center hover:bg-black/60 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/50">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🤵</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Service Professionalism</h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
              <p className="text-yellow-100/80">Attentive and refined hospitality</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-8 text-center hover:bg-black/60 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/50">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🏛️</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Interior Elegance</h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
              <p className="text-yellow-100/80">Sophisticated ambiance and design</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-8 text-center hover:bg-black/60 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/50">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Overall Experience</h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
              <p className="text-yellow-100/80">Memorable moments for every guest</p>
            </div>
          </div>

          <div className="mt-16 text-center bg-black/30 backdrop-blur-sm border border-yellow-600/20 rounded-2xl p-8">
            <p className="text-lg md:text-xl text-yellow-100/90 max-w-4xl mx-auto leading-relaxed">
              The standards established at these flagship outlets guide the operational and confirming quality of all May Star restaurants nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,138,4,0.05),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rotate-45 bg-yellow-600"></div>
              <div className="h-px w-16 bg-gradient-to-r from-yellow-600/50 to-yellow-600"></div>
              <span className="text-yellow-600 font-semibold tracking-wider uppercase text-sm">Growth</span>
              <div className="h-px w-16 bg-gradient-to-l from-yellow-600/50 to-yellow-600"></div>
              <div className="w-3 h-3 rotate-45 bg-yellow-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Expanding the Legacy<br />
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                Across Indonesia
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-10"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-yellow-900/30 rounded-2xl p-10 md:p-12 mb-16 shadow-2xl">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-8">
                Through a structured franchise model, May Star has extended its presence to major cities throughout Indonesia. Each licensed restaurant operates under strict brand guidelines, ensuring that the May Star heritage of quality, authenticity, and service excellence is preserved as the brand continues to grow.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent mb-8"></div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                This approach allows May Star to expand responsibly while maintaining the integrity of its culinary and brand identity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-zinc-900 to-zinc-800 border border-yellow-900/30 rounded-2xl p-8 text-center hover:border-yellow-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/20">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🏙️</div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-4">Nationwide Presence</h3>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
                <p className="text-gray-400">Serving major cities across Indonesia</p>
              </div>
              
              <div className="group bg-gradient-to-br from-zinc-900 to-zinc-800 border border-yellow-900/30 rounded-2xl p-8 text-center hover:border-yellow-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/20">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📋</div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-4">Strict Guidelines</h3>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
                <p className="text-gray-400">Consistent brand standards everywhere</p>
              </div>
              
              <div className="group bg-gradient-to-br from-zinc-900 to-zinc-800 border border-yellow-900/30 rounded-2xl p-8 text-center hover:border-yellow-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/20">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🔒</div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-4">Brand Integrity</h3>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-4"></div>
                <p className="text-gray-400">Preserving quality and authenticity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Heritage */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-900 via-black to-yellow-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-sm border border-yellow-600/30 rounded-3xl p-12 md:p-16 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rotate-45 bg-yellow-600"></div>
                  <div className="h-px w-16 bg-gradient-to-r from-yellow-600/50 to-yellow-600"></div>
                  <span className="text-yellow-600 font-semibold tracking-wider uppercase text-sm">Legacy</span>
                  <div className="h-px w-16 bg-gradient-to-l from-yellow-600/50 to-yellow-600"></div>
                  <div className="w-3 h-3 rotate-45 bg-yellow-600"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                    A Living Heritage
                  </span>
                </h2>
                
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-10"></div>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
                  For May Star, heritage is not static — it is continuously refined and upheld through dedication, discipline, and respect for tradition. By staying true to its roots while embracing modern dining concepts, May Star continues to deliver an experience that resonates with both long-time patrons and new generations of guests.
                </p>
                
                <div className="inline-flex items-center justify-center gap-6 bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-900 border border-yellow-600/50 text-white px-10 py-6 rounded-full shadow-xl shadow-yellow-900/30 hover:shadow-yellow-900/50 transition-all duration-300 hover:scale-105">
                  <span className="text-3xl animate-pulse">🌟</span>
                  <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
                    Since 2007 • Tradition Meets Excellence
                  </span>
                  <span className="text-3xl animate-pulse">🌟</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
