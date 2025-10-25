import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  return (
    <div className="bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Find Our Location
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Visit our Industries in the heart of the industrial district, easily accessible from major highways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Industrial Roofing Solutions Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.669234624741!2d76.6360693!3d10.7984454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8718cc3f1b8ef%3A0x9aadafcbd7eba67a!2sHRF%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1692192000000!5m2!1sen!2sin"
                  className="border-0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {/* <div className="bg-card rounded-lg border border-border p-6 shadow-sm"> */}
              {/* <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                  <Icon name="Navigation" size={20} color="var(--color-primary)" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Directions
                </h3>
              </div> */}
              {/* <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Car" size={16} color="var(--color-muted-foreground)" strokeWidth={2} className="mt-1" />
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">By Car</p>
                    <p className="text-xs font-body text-muted-foreground">Exit 15B from I-35, follow signs to Industrial District</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={16} color="var(--color-muted-foreground)" strokeWidth={2} className="mt-1" />
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">Parking</p>
                    <p className="text-xs font-body text-muted-foreground">Free on-site parking available for clients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={16} color="var(--color-muted-foreground)" strokeWidth={2} className="mt-1" />
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">Landmarks</p>
                    <p className="text-xs font-body text-muted-foreground">Next to Industrial Supply Center</p>
                  </div>
                </div>
              </div> */}
            {/* </div> */}

            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-success/10 rounded-lg">
                  <Icon name="MapPin" size={20} color="var(--color-success)" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Service Area
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-body text-muted-foreground">
                  We are proud to serve clients across Palakkad, Coimbatore, and the surrounding industrial and commercial regions.

                </p>
                <ul className="text-xs font-body text-muted-foreground space-y-1 p-2">
                  <li>•<b> Palakkad District</b></li>
                  <li>•<b> Coimbatore District</b></li>
                  <li>•<b> Nearby industrial hubs and business centers</b></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;