import { brandData } from '../data/brandData';
import SectionDivider from '../components/SectionDivider';

const Testimonials = () => {
  const { testimonials } = brandData;

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <SectionDivider centered />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real experiences from real guests who have stayed with us
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-secondary rounded-2xl p-8 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star star-rating text-sm"></i>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
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

export default Testimonials;
