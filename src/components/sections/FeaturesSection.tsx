export default function FeaturesSection() {
  const pillars = [
    {
      title: 'Live Seafood',
      description: 'Ensuring the freshest catches, including Mouse Grouper, Lobster, and Mud Crabs, kept in live tanks.',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800',
      icon: '🦞',
    },
    {
      title: 'Artisan Dim Sum',
      description: 'Freshly handcrafted daily, featuring favorites such as Ha Kau, Siew Mai, and Salted Egg Yolk Buns.',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800',
      icon: '🥟',
    },
    {
      title: 'BBQ & Roasts',
      description: 'Renowned for crispy Peking Duck, succulent Roast Pork Belly, and Honey Glazed Char Siew.',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800',
      icon: '🍖',
    }
  ];

  return (
    <section id="features" className="section-padding bg-black relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-responsive relative z-10">
        {/* Enhanced Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20 animate-fade-in">
          <span className="section-subtitle text-gold/90 mb-6 block">Culinary Excellence</span>
          <h2 className="section-title font-serif font-bold text-white mb-6">
            Three Pillars of <span className="text-gradient-gold">Cantonese Dining</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <p className="editorial-text text-white/70 mx-auto max-w-2xl">
            Across all locations, May Star is dedicated to delivering authentic Cantonese excellence through our signature offerings
          </p>
        </div>

        {/* 3 Enhanced Pillars */}
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative bg-gray-dark/40 backdrop-blur-sm overflow-hidden rounded-lg hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image Container - Equal Size */}
                <div className="aspect-[3/4] overflow-hidden relative responsive-image">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold/30 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-2xl">{pillar.icon}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 transform group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-3">
                      <div className="w-8 sm:w-12 h-1 bg-gradient-gold rounded-full mb-3 sm:mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                      <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-responsive-sm text-white/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Animated Bottom Border */}
                <div className="h-1 bg-gold/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-16 lg:mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-xl mx-auto">
            <p className="text-white/60 text-sm mb-6">
              Experience the finest Cantonese cuisine at any of our locations
            </p>
            <a
              href="#branches"
              className="btn-responsive group inline-flex items-center gap-3 border-2 border-gold/40 text-gold font-bold hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 tracking-wider uppercase rounded-full"
            >
              <span>Visit Our Restaurants</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
