import { brandData } from '../data/brandData';

const Hero = () => {
  const { hero } = brandData;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { value: '3', label: 'Bedrooms' },
    { value: '24/7', label: 'Power & Water' },
    { value: '5★', label: 'Guest Rating' },
  ];

  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <i className="fas fa-star text-accent text-sm"></i>
            <span className="text-white/90 text-sm font-medium">
              Premium Residential Lodge in Ibadan
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Perfect <span className="text-accent">Home Away</span> From Home
            in Ibadan
          </h1>

          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-accent text-white px-8 py-4 rounded-full font-semibold text-lg text-center inline-flex items-center justify-center space-x-2"
            >
              <i className="fas fa-calendar-check"></i>
              <span>{hero.ctaPrimary}</span>
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg text-center hover:bg-white/20 transition-all inline-flex items-center justify-center space-x-2"
            >
              <i className="fas fa-compass"></i>
              <span>{hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/20">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-display font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation">
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="text-white/60 hover:text-white transition-colors"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
