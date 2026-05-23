import { brandData } from '../data/brandData';

const Footer = () => {
  const { contact, brandName, logo } = brandData;

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#listings', label: 'Rooms' },
    { href: '#testimonials', label: 'Reviews' },
  ];

  const services = [
    { icon: 'fa-house-user', label: 'Full House Booking' },
    { icon: 'fa-utensils', label: 'Self-Catering Kitchen' },
    { icon: 'fa-car', label: 'Airport Shuttles' },
    { icon: 'fa-bolt', label: '24/7 Utilities' },
    { icon: 'fa-wifi', label: 'High-Speed Wi-Fi' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">{logo}</span>
              </div>
              <span className="font-display font-bold text-xl">{brandName}</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              {contact.footerDescription}
            </p>
            <div className="flex space-x-3">
              <a
                href={contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label} className="text-white/70">
                  <i className={`fas ${service.icon} mr-2 text-accent`}></i>
                  {service.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fas fa-phone text-accent mt-1"></i>
                <span className="text-white/70">{contact.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-envelope text-accent mt-1"></i>
                <span className="text-white/70">{contact.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-location-dot text-accent mt-1"></i>
                <span className="text-white/70">{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2 sm:mt-0">
            Designed with <i className="fas fa-heart text-accent mx-1"></i> in Ibadan, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
