import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RelatedServicesSection = ({ currentService, allServices, onServiceChange }) => {
  if (!allServices || allServices.length <= 1) return null;

  const relatedServices = allServices
    .filter(service => service.id !== currentService.id)
    .slice(0, 3);

  if (relatedServices.length === 0) return null;

  return (
    <div className="p-6 border-t border-border bg-muted/20">
      <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
        Related Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedServices.map((service) => (
          <button
            key={service.id}
            onClick={() => onServiceChange(service)}
            className="flex flex-col p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 text-left group"
          >
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-3">
              <Image
                src={service.images?.[0] || "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Icon 
                name={service.icon} 
                size={16} 
                color="var(--color-primary)" 
                strokeWidth={2} 
              />
              <h4 className="font-body font-medium text-foreground text-sm">
                {service.title}
              </h4>
            </div>
            <p className="text-xs font-body text-muted-foreground line-clamp-2">
              {service.shortDescription || service.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RelatedServicesSection;