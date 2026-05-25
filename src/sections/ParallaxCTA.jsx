const ParallaxCTA = () => {
  const handleBookClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="parallax-section py-24 sm:py-32 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(27, 30, 67, 0.75), rgba(28, 27, 67, 0.9)), url(../src/assets/gate.jpg)`,
      }}
    >
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        data-aos="zoom-in"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Experience Comfort Like Never Before?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Book your stay today and enjoy the perfect blend of privacy, comfort,
          and hospitality in the heart of Ibadan.
        </p>
        <button
          onClick={handleBookClick}
          className="btn-accent text-white px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-2"
        >
          <i className="fas fa-calendar-check"></i>
          <span>Reserve Your Room Now</span>
        </button>
      </div>
    </section>
  );
};

export default ParallaxCTA;
