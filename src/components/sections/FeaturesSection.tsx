export default function FeaturesSection() {
  const pillars = [
    {
      title: 'Live Seafood',
      description: 'Ensuring the freshest catches, including Mouse Grouper, Lobster, and Mud Crabs, kept in live tanks.',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800',
    },
    {
      title: 'Artisan Dim Sum',
      description: 'Freshly handcrafted daily, featuring favorites such as Ha Kau, Siew Mai, and Salted Egg Yolk Buns.',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800',
    },
    {
      title: 'BBQ & Roasts',
      description: 'Renowned for crispy Peking Duck, succulent Roast Pork Belly, and Honey Glazed Char Siew.',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800',
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-black via-gray-dark to-black relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Hero-style Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
          <span className="section-subtitle text-gold/80 mb-6 block">Culinary Excellence</span>
          <h2 className="section-title font-serif font-bold text-white mb-8">
            Three Pillars of <span className="text-gradient-gold">Cantonese Dining</span>
          </h2>
          <p className="editorial-text text-white/60 mx-auto">
            Across all locations, May Star is dedicated to delivering authentic Cantonese excellence through our signature offerings
          </p>
        </div>

        {/* 3 Equal Pillars */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative bg-black overflow-hidden"
              >
                {/* Image Container - Equal Size */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-serif font-bold text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Top Border */}
                <div className="h-1 bg-gold/20 group-hover:bg-gradient-gold transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Minimal CTA */}
        <div className="text-center mt-20 lg:mt-32">
          <a
            href="#branches"
            className="inline-block border border-gold/40 text-gold px-10 py-4 hover:bg-gold hover:text-black transition-all duration-300 font-semibold text-sm tracking-wider uppercase"
          >
            Visit Our Restaurants
          </a>
        </div>
      </div>
    </section>
  );
}
