import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Image from '../AppImage';
import Button from './Button';
import QuoteRequestCTA from './QuoteRequestCTA';

const ServiceDetailModal = ({ 
  isOpen, 
  onClose, 
  service,
  onQuoteRequest 
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  const handleQuoteClick = () => {
    if (onQuoteRequest) {
      onQuoteRequest(service);
    }
    onClose();
  };

  const handleCallUs = () => {
    window.open('tel:+919633566333', '_self');
  };

  const handleEmailUs = () => {
    window.open('mailto:info@industrialroofing.com?subject=Inquiry about ' + service.title, '_self');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="w-full p-4">
        <div className="bg-card rounded-lg shadow-lg max-w-4xl w-full max-h-[95vh] min-h-[400px] overflow-hidden flex flex-col mx-auto">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                <Icon name={service.icon} size={24} color="var(--color-primary)" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-sm font-body text-muted-foreground">
                  Professional {service.category} Solutions
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Close modal"
            >
              <Icon name="X" size={24} strokeWidth={2} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="overflow-y-auto flex-1 min-h-0">
            {/* Image Carousel */}
            {service.images && service.images.length > 0 && (
              <div className="relative">
                <div className="aspect-video bg-muted">
                  <Image
                    src={service.images[activeImageIndex]}
                    alt={`${service.title} - Image ${activeImageIndex + 1}`}
                    className={`w-full h-full ${[
                      'Trafford Sheet Work',
                      'Stone Coated Sheet Work',
                      'Steel Frame Jally Works',
                      'UPVC Sheet Work',
                      'Tile Roofing Work',
                      'Polycarbonate Sheet Work'
                    ].includes(service.title) ? 'object-contain scale-95' : 'object-cover'}`}
                  />
                </div>
                
                {service.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                    >
                      <Icon name="ChevronLeft" size={20} strokeWidth={2} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                    >
                      <Icon name="ChevronRight" size={20} strokeWidth={2} />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {service.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Service Details */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Service Overview
                </h3>
                <p className="text-base font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-muted/30 rounded-lg p-4">
                {service.projectsCompleted && (
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-primary">
                      {service.projectsCompleted}
                    </div>
                    <div className="text-sm font-body text-muted-foreground">Projects Completed</div>
                  </div>
                )}
                {service.warranty && (
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-primary">
                      {service.warranty} Years
                    </div>
                    <div className="text-sm font-body text-muted-foreground">Warranty</div>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">
                    24/7
                  </div>
                  <div className="text-sm font-body text-muted-foreground">Emergency Service</div>
                </div>
              </div>

              {/* Key Features */}
              {service.features && service.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={18} color="var(--color-success)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                        <span className="text-base font-body text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Specifications */}
              {service.specifications && (
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Technical Specifications
                  </h3>
                  <div className="bg-muted rounded-lg p-4">
                    <dl className="space-y-2">
                      {Object.entries(service.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <dt className="font-body font-medium text-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </dt>
                          <dd className="font-mono text-sm text-muted-foreground">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <h4 className="font-body font-semibold text-foreground mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-sm font-body text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Get in Touch
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Phone" size={16} color="var(--color-primary)" strokeWidth={2} />
                      <span className="text-sm font-body text-muted-foreground">Phone:</span>
                      <a 
                        href="tel:+919633566333" 
                        className="text-sm font-body font-medium text-primary hover:text-primary/80"
                      >
                        9633566333
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Mail" size={16} color="var(--color-primary)" strokeWidth={2} />
                      <span className="text-sm font-body text-muted-foreground">Email:</span>
                      <a 
                        href="mailto:info@industrialroofing.com" 
                        className="text-sm font-body font-medium text-primary hover:text-primary/80"
                      >
                        hashimtrussroofing@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} color="var(--color-primary)" strokeWidth={2} />
                      <span className="text-sm font-body text-muted-foreground">Hours:</span>
                      <span className="text-sm font-body text-muted-foreground">Mon-Fri, 8AM-6PM</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} color="var(--color-primary)" strokeWidth={2} />
                      <span className="text-sm font-body text-muted-foreground">Address:</span>
                    </div>
                    <p className="text-sm font-body text-muted-foreground ml-6">
                      H R F Industries <br />
                      Olavakod, Palakkad <br />
                      Kerala, India


                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border-t border-border bg-muted/30 flex-shrink-0 gap-4 relative z-10" style={{backgroundColor: 'rgba(0,0,0,0.05)'}}>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="text-sm font-body text-muted-foreground text-center sm:text-left">
                Need immediate assistance?
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={16}
                  className="text-primary hover:text-primary/80"
                  onClick={handleCallUs}
                >
                  <span className="hidden sm:inline">Call 9633566333</span>
                  <span className="sm:hidden">Call Us</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Mail"
                  iconPosition="left"
                  iconSize={16}
                  className="text-primary hover:text-primary/80"
                  onClick={handleEmailUs}
                >
                  <span className="hidden sm:inline">Email Us</span>
                  <span className="sm:hidden">Email</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="default"
                onClick={onClose}
              >
                Close
              </Button>
              <QuoteRequestCTA
                variant="inline"
                size="default"
                preSelectedService={service}
                onQuoteRequest={handleQuoteClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;