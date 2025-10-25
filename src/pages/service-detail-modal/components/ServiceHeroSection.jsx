import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceHeroSection = ({ service, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service || !service.images || service.images.length === 0) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="aspect-video bg-muted overflow-hidden">
        <Image
          src={service.images[currentImageIndex]}
          alt={`${service.title} - Professional Installation ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image Navigation Controls */}
      {service.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
            aria-label="Previous image"
          >
            <Icon name="ChevronLeft" size={24} strokeWidth={2} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
            aria-label="Next image"
          >
            <Icon name="ChevronRight" size={24} strokeWidth={2} />
          </button>
        </>
      )}

      {/* Image Indicators */}
      {service.images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {service.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Service Badge */}
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-body font-medium bg-primary text-primary-foreground">
          {service.category}
        </span>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
        aria-label="Close modal"
      >
        <Icon name="X" size={24} strokeWidth={2} />
      </button>
    </div>
  );
};

export default ServiceHeroSection;