import { brandData } from '../data/brandData';
import SectionDivider from '../components/SectionDivider';

const Services = () => {
  const { services } = brandData;

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <SectionDivider centered />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Premium Services
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need for a comfortable and memorable stay in Ibadan
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card bg-secondary rounded-2xl p-8 border border-gray-100 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 feature-icon rounded-2xl flex items-center justify-center mb-6">
                <i className={`fas ${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-display font-bold text-primary text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
