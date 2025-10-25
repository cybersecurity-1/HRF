import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceInfoSection = ({ service }) => {
  if (!service) return null;

  return (
    <div className="p-6 space-y-6">
      {/* Service Header */}
      <div className="flex items-start space-x-4">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
          <Icon name={service.icon} size={28} color="var(--color-primary)" strokeWidth={2} />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
            {service.title}
          </h2>
          <p className="text-base font-body text-muted-foreground">
            Professional {service.category} Solutions for Industrial Applications
          </p>
        </div>
      </div>

      {/* Service Description */}
      <div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
          Service Overview
        </h3>
        <p className="text-base font-body text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Key Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon 
                  name="CheckCircle" 
                  size={20} 
                  color="var(--color-success)" 
                  strokeWidth={2} 
                  className="mt-0.5 flex-shrink-0" 
                />
                <span className="text-sm font-body text-muted-foreground">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Specifications */}
      {service.specifications && (
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Technical Specifications
          </h3>
          <div className="bg-muted rounded-lg p-4">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(service.specifications).map(([key, value]) => (
                <div key={key} className="flex flex-col space-y-1">
                  <dt className="font-body font-medium text-foreground text-sm">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
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

      {/* Applications */}
      {service.applications && service.applications.length > 0 && (
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Ideal Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.applications.map((application, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                <Icon name="Building2" size={16} color="var(--color-primary)" strokeWidth={2} />
                <span className="text-sm font-body text-foreground">
                  {application}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceInfoSection;