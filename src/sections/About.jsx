import { brandData } from '../data/brandData';
import SectionDivider from '../components/SectionDivider';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const About = () => {
  const { about } = brandData;

  const images = [
    { src: img1, alt: 'Guest House Exterior' },
    { src: img2, alt: 'Living Room' },
    { src: img3, alt: 'Bedroom' },
    { src: img4, alt: 'Kitchen' },
  ];

  const valueIcons = {
    'Secure Privacy': 'fa-shield-halved',
    'Homely Comfort': 'fa-heart',
    'Reliable Utilities': 'fa-bolt',
    'Exceptional Service': 'fa-award',
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative" data-aos="fade-right" data-aos-duration="1000">
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <div
                  key={img.alt}
                  className={`image-zoom rounded-2xl overflow-hidden shadow-xl h-64 ${
                    index % 2 === 1 ? 'mt-8' : ''
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="text-4xl font-display font-bold">5+</div>
              <div className="text-sm opacity-90">
                Years of
                <br />
                Excellence
              </div>
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <SectionDivider />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Welcome to GA Guest House
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {about.shortDescription}
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border-l-4 border-accent">
              <h3 className="font-display font-bold text-primary text-xl mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600">{about.mission}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {about.values.map((value) => (
                <div key={value} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className={`fas ${valueIcons[value]} text-primary`}></i>
                  </div>
                  <span className="font-medium text-gray-700">{value}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-lightbulb text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary text-lg mb-1">
                    Why Choose Us?
                  </h4>
                  <p className="text-gray-600">{about.whyUs}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
