import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onServiceClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (onServiceClick) {
      onServiceClick(service);
    }
  };

  return (
    <div 
      className="group bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-border hover:border-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Service Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
        
        {/* Service Icon Overlay */}
        <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
          <Icon name={service.icon} size={24} color="var(--color-primary)" strokeWidth={2} />
        </div>

        {/* Quick Action Button */}
        <div className={`absolute bottom-4 left-4 right-4 transform transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <Button
            variant="default"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2">
            {service.description}
          </p>
        </div>

        {/* Service Features */}
        {service.features && service.features.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-body font-semibold text-foreground">Key Features:</h4>
            <div className="flex flex-wrap gap-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-body bg-muted text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Service Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          {service.duration && (
            <div className="text-center">
              <div className="text-lg font-heading font-bold text-foreground">
                {service.duration}
              </div>
              <div className="text-xs font-body text-muted-foreground">days avg</div>
            </div>
          )}
          
          {service.warranty && (
            <div className="text-center">
              <div className="text-lg font-heading font-bold text-foreground">
                {service.warranty}
              </div>
              <div className="text-xs font-body text-muted-foreground">warranty</div>
            </div>
          )}
          
          {service.price && (
            <div className="text-right">
              <div className="text-lg font-heading font-bold text-foreground">
                {service.price}
              </div>
              <div className="text-xs font-body text-muted-foreground">starting</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;