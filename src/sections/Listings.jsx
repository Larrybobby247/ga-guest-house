import { brandData } from '../data/brandData';
import SectionDivider from '../components/SectionDivider';

const Listings = () => {
  const { listings } = brandData;

  const handleBookClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="listings" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <SectionDivider centered />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Accommodations
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from our range of comfortable and well-appointed rooms
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing, index) => (
            <div
              key={listing.id}
              className="listing-card bg-white rounded-2xl overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="image-zoom relative h-56">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {listing.popular && (
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <div className="listing-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={handleBookClick}
                    className="btn-accent text-white px-6 py-2 rounded-full font-semibold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-accent font-bold uppercase tracking-wider mb-2">
                  {listing.type}
                </div>
                <h3 className="font-display font-bold text-primary text-lg mb-2">
                  {listing.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-display font-bold text-primary">
                      {listing.price.split(' /')[0]}
                    </span>
                    <span className="text-gray-500 text-sm"> / night</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;
