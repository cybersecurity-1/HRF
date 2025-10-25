import React from 'react';
import Input from '../../../components/ui/Input';

const ContactInfoStep = ({ formData, updateFormData, errors }) => {
  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          Contact Information
        </h2>
        <p className="text-base font-body text-muted-foreground">
          Let us know how to reach you about your roofing project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          value={formData.firstName || ''}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
          error={errors.firstName}
          required
        />

        <Input
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          value={formData.lastName || ''}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
          error={errors.lastName}
          required
        />
      </div>

      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email address"
        description="We'll use this to send you project updates and quotes"
        value={formData.email || ''}
        onChange={(e) => handleInputChange('email', e.target.value)}
        error={errors.email}
        required
      />

      <Input
        label="Phone Number"
        type="tel"
        placeholder="(555) 123-4567"
        description="We may call to discuss your project details"
        value={formData.phone || ''}
        onChange={(e) => handleInputChange('phone', e.target.value)}
        error={errors.phone}
        required
      />

      <Input
        label="Company Name"
        type="text"
        placeholder="Enter your company name (optional)"
        description="If this is for a business or organization"
        value={formData.companyName || ''}
        onChange={(e) => handleInputChange('companyName', e.target.value)}
        error={errors.companyName}
      />
    </div>
  );
};

export default ContactInfoStep;