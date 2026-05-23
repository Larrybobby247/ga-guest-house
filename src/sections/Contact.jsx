import { useState } from 'react';
import { brandData } from '../data/brandData';
import SectionDivider from '../components/SectionDivider';

const Contact = () => {
  const { contact } = brandData;
  const [formStatus, setFormStatus] = useState('idle');

  const contactInfo = [
    {
      icon: 'fa fa-phone',
      title: 'Phone',
      content: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: 'fa fa-envelope',
      title: 'Email',
      content: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: 'fa fa-location-dot',
      title: 'Address',
      content: contact.address,
      href: null,
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      content: 'Chat with us on WhatsApp',
      href: contact.whatsappLink,
      accent: true,
    },
  ];

  const roomOptions = [
    { value: '', label: 'Select a room' },
    { value: 'villa', label: 'Standard Single Room - ₦10,000/night' },
    { value: 'master', label: 'Family Room - ₦25,000/night' },
    { value: 'deluxe', label: 'Guest Room - ₦15,000/night' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('idle');
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <SectionDivider />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Ready to book your stay? Have questions? We are here to help you
              plan the perfect visit to Ibadan.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 ${
                      item.accent ? 'bg-accent' : 'bg-primary'
                    } rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <i className={`${item.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-lg">
                      {item.title}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-accent transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="font-semibold text-primary text-lg mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href={contact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href={contact.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl">
              <h3 className="font-display font-bold text-primary text-2xl mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-500 mb-8">
                Fill out the form below and we will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Room Preference
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                    {roomOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your stay requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'success'}
                  className={`w-full text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all ${
                    formStatus === 'success'
                      ? 'bg-green-600'
                      : 'btn-primary'
                  }`}
                >
                  {formStatus === 'success' ? (
                    <>
                      <i className="fas fa-check"></i>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
