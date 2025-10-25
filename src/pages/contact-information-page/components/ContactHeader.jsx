import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHeader = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-6">
            <Icon name="MapPin" size={32} color="white" strokeWidth={2} />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Contact Information
          </h1>
          <p className="text-lg sm:text-xl font-body text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our industrial roofing experts. We're here to help with your construction needs and provide professional consultation for your next project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;