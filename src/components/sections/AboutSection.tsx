export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black via-gray-dark/30 to-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Editorial Layout - Single Column Focus */}
        <div className="max-w-6xl mx-auto">
          {/* Header with Animation */}
          <div className="mb-16 lg:mb-24 text-center">
            <div className="animate-fade-in">
              <span className="section-subtitle text-gold/90 mb-6 block">About Us</span>
              <h2 className="section-title font-serif font-bold text-white mb-6">
                A Legacy of <span className="text-gradient-gold">Culinary Excellence</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/50" />
                <div className="w-2 h-2 bg-gold rotate-45" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/50" />
              </div>
            </div>
          </div>

          {/* Main Content - Editorial Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            {/* Text Content - Takes more space */}
            <div className="lg:col-span-7 space-y-6">
              <div className="editorial-text text-white/80 space-y-6 animate-slide-in-left">
                <p className="leading-relaxed">
                  Didirikan pada tahun <span className="text-gold font-semibold">2007</span>, May Star Restaurant adalah destinasi kuliner premium di Indonesia yang diakui karena masakan China autentik dan komitmen yang tak tergoyahkan terhadap kualitas.
                </p>
                <p className="leading-relaxed">
                  Memadukan warisan <span className="text-gold font-semibold">Kanton tradisional</span> dengan konsep makan modern, brand ini telah menjadi nama besar untuk Premium Dim Sum, Live Seafood, dan Chinese BBQ.
                </p>
                <p className="leading-relaxed">
                  Dari makan keluarga santai hingga perayaan perjamuan besar, May Star menghadirkan pengalaman bersantap yang konsisten dengan memadukan <span className="text-gold font-semibold">kemewahan dengan layanan profesional</span> yang hangat.
                </p>
              </div>

              {/* Stats - Enhanced Design */}
              <div className="grid grid-cols-3 gap-6 pt-10 mt-8 border-t border-gold/20">
                <div className="group text-center hover-lift">
                  <div className="text-5xl md:text-6xl font-serif font-bold text-gradient-gold mb-3 transition-all">18+</div>
                  <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider font-medium">Tahun Pengalaman</div>
                </div>
                <div className="group text-center hover-lift">
                  <div className="text-5xl md:text-6xl font-serif font-bold text-gradient-gold mb-3 transition-all">10+</div>
                  <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider font-medium">Lokasi</div>
                </div>
                <div className="group text-center hover-lift">
                  <div className="text-5xl md:text-6xl font-serif font-bold text-gradient-gold mb-3 transition-all">1K+</div>
                  <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider font-medium">Pelanggan</div>
                </div>
              </div>
            </div>

            {/* Image - Enhanced with Frame */}
            <div className="lg:col-span-5 animate-slide-in-right">
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-lg" />
                <div className="absolute -inset-1 bg-gradient-gold opacity-20 blur-xl" />
                
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg image-overlay-gold">
                  <img
                    src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=800"
                    alt="May Star Interior"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Quality Badge */}
                  <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-2 border border-gold/30 rounded-full">
                    <span className="text-gold text-xs font-bold tracking-wider">PREMIUM QUALITY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission - Enhanced Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="card-luxury p-8 lg:p-10 space-y-6 rounded-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold/10 backdrop-blur-sm flex items-center justify-center rounded-lg">
                  <div className="w-7 h-7 bg-gradient-gold" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">Visi</h3>
              </div>
              <p className="editorial-text text-white/70 text-base leading-relaxed">
                Menjadi brand restoran China autentik terkemuka di Indonesia, memastikan warisan May Star dalam hal kualitas terbentang dari lokasi unggulan hingga setiap outlet franchise.
              </p>
              <div className="pt-4 border-t border-gold/10">
                <div className="flex items-center gap-2 text-gold/70 text-sm">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="font-medium tracking-wide">Leading the Industry</span>
                </div>
              </div>
            </div>

            <div className="card-luxury p-8 lg:p-10 space-y-6 rounded-lg animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold/10 backdrop-blur-sm flex items-center justify-center rounded-lg">
                  <div className="w-7 h-7 bg-gradient-gold rounded-full"></div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">Misi</h3>
              </div>
              <p className="editorial-text text-white/70 text-base leading-relaxed">
                Memberikan pengalaman bersantap yang berkesan di mana cita rasa autentik dan suasana elegan bertemu, baik di makan siang bisnis maupun makan malam keluarga di Jakarta.
              </p>
              <div className="pt-4 border-t border-gold/10">
                <div className="flex items-center gap-2 text-gold/70 text-sm">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="font-medium tracking-wide">Memorable Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
