import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/homepage' },
   { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact-information-page' }
  ];

  const services = [
    { label: 'Trafford Sheet Work', path: '/homepage#services' },
    { label: 'Stone Coated Sheets', path: '/homepage#services' },
    { label: 'UPVC Sheet Work', path: '/homepage#services' },
    { label: 'Tile Roofing', path: '/homepage#services' },
    { label: 'Steel Frame Jally', path: '/homepage#services' },
    { label: 'Polycarbonate Sheets', path: '/homepage#services' }
  ];

  const contactInfo = [
    {
      icon: 'Phone',
      label: '9633566333',
      href: 'tel:+919633566333'
    },
    {
      icon: 'Mail',
      label: 'hashimtrussrooffing@gmail.com',
      href: 'mailto:hashimtrussrooffing@gmail.com'
    },
    {
      icon: 'MapPin',
      label: 'H R F Industries\nolavokod , palakkad, Kerala, India',
      href: 'https://www.google.com/maps/place/HRF+INDUSTRIES/@10.7984454,76.6360693,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8718cc3f1b8ef:0x9aadafcbd7eba67a!8m2!3d10.7984454!4d76.6360693!16s%2Fg%2F11x1n1n_v8?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const socialLinks = [
    { icon: 'Facebook', href: '#', label: 'Facebook' },
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'Instagram', href: '#', label: 'Instagram' }
  ];

  const certifications = [
    'Licensed & Insured',
    'OSHA Certified',
    'BBB A+ Rating',
    'EPA Compliant'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Icon name="Building2" size={24} color="white" strokeWidth={2} />
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-white">
                  H R F Industrial Roofing
                </div>
                <div className="font-caption text-xs text-white/70">
                  Professional Construction Solutions
                </div>
              </div>
            </div>
            
            <p className="text-white/80 font-body text-sm leading-relaxed">
              With over 25 years of experience, we provide premium industrial roofing solutions that combine durability, efficiency, and aesthetic appeal for facilities across the nation.
            </p>

            {/* Certifications */}
            <div className="space-y-2">
              <h4 className="font-body font-semibold text-white text-sm">Certifications:</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-body bg-white/10 text-white/90"
                  >
                    <Icon name="Shield" size={12} color="var(--color-success)" strokeWidth={2} className="mr-1" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center space-x-2 text-white/80 hover:text-white font-body text-sm transition-colors duration-200"
                  >
                    <Icon name="ChevronRight" size={14} strokeWidth={2} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Emergency Contact */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="AlertTriangle" size={16} color="var(--color-warning)" strokeWidth={2} />
                <span className="font-body font-semibold text-warning text-sm">
                  Emergency Service
                </span>
              </div>
              <p className="text-white/80 font-body text-xs mb-3">
                24/7 emergency roofing repairs available
              </p>
              <a href="tel:9633566333" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={14}
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-body text-xs"
                >
                  Call Emergency Line
                </Button>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="flex items-center space-x-2 text-white/80 hover:text-white font-body text-sm transition-colors duration-200"
                  >
                    <Icon name="Wrench" size={14} strokeWidth={2} />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-white">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg flex-shrink-0 mt-0.5">
                    <Icon name={info.icon} size={16} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-white/80 hover:text-white font-body text-sm transition-colors duration-200"
                      >
                        {info.label}
                      </a>
                    ) : (
                      <span className="text-white/80 font-body text-sm">
                        {info.label}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-body font-semibold text-white text-sm mb-3">
                Business Hours
              </h4>
              <div className="space-y-1 text-white/80 font-body text-xs">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            {/* <div>
              <h4 className="font-body font-semibold text-white text-sm mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200"
                  >
                    <Icon name={social.icon} size={18} strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/60 font-body text-sm text-center md:text-left">
              © {currentYear} H R F Industries. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy-policy" 
                className="text-white/60 hover:text-white font-body text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-white/60 hover:text-white font-body text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <div className="flex items-center space-x-2 text-white/60 font-body text-sm">
                <Icon name="Shield" size={14} strokeWidth={2} />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;