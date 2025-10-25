import React from 'react';
import Icon from '../../../components/AppIcon';
import { Checkbox } from '../../../components/ui/Checkbox';

const ReviewSubmitStep = ({ formData, updateFormData, errors }) => {
  const serviceTypeLabels = {
    'trafford-sheet': 'Trafford Sheet Work',
    'stone-coated': 'Stone Coated Sheet Work',
    'upvc-sheet': 'UPVC Sheet Work',
    'tile-roofing': 'Tile Roofing Work',
    'steel-frame': 'Steel Frame Jally Works',
    'polycarbonate': 'Polycarbonate Sheet Work'
  };

  const projectTypeLabels = {
    'new-construction': 'New Construction',
    'replacement': 'Roof Replacement',
    'repair': 'Roof Repair',
    'maintenance': 'Maintenance',
    'upgrade': 'Roof Upgrade'
  };

  const timelineLabels = {
    'immediate': 'Immediate (Within 2 weeks)',
    '1-month': '1 Month',
    '2-3-months': '2-3 Months',
    '6-months': '6+ Months',
    'planning': 'Just Planning'
  };

  const budgetLabels = {
    'under-10k': 'Under $10,000',
    '10k-25k': '$10,000 - $25,000',
    '25k-50k': '$25,000 - $50,000',
    '50k-100k': '$50,000 - $100,000',
    'over-100k': 'Over $100,000',
    'not-sure': 'Not Sure'
  };

  const handleCheckboxChange = (field, checked) => {
    updateFormData({ [field]: checked });
  };

  const getAdditionalRequirements = () => {
    const requirements = [];
    if (formData.needsInsulation) requirements.push('Insulation Required');
    if (formData.needsGutters) requirements.push('Gutter Installation');
    if (formData.needsVentilation) requirements.push('Ventilation System');
    if (formData.needsSkylights) requirements.push('Skylight Installation');
    return requirements;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          Review & Submit
        </h2>
        <p className="text-base font-body text-muted-foreground">
          Please review your information before submitting your quote request.
        </p>
      </div>

      {/* Contact Information Review */}
      <div className="bg-muted/30 rounded-lg p-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
          <Icon name="User" size={20} className="mr-2" />
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-body font-medium text-muted-foreground">Name</p>
            <p className="text-base font-body text-foreground">
              {formData.firstName} {formData.lastName}
            </p>
          </div>
          <div>
            <p className="text-sm font-body font-medium text-muted-foreground">Email</p>
            <p className="text-base font-body text-foreground">{formData.email}</p>
          </div>
          <div>
            <p className="text-sm font-body font-medium text-muted-foreground">Phone</p>
            <p className="text-base font-body text-foreground">{formData.phone}</p>
          </div>
          {formData.companyName && (
            <div>
              <p className="text-sm font-body font-medium text-muted-foreground">Company</p>
              <p className="text-base font-body text-foreground">{formData.companyName}</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Details Review */}
      <div className="bg-muted/30 rounded-lg p-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Building2" size={20} className="mr-2" />
          Project Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-body font-medium text-muted-foreground">Service Type</p>
            <p className="text-base font-body text-foreground">
              {serviceTypeLabels[formData.serviceType] || formData.serviceType}
            </p>
          </div>
          <div>
            <p className="text-sm font-body font-medium text-muted-foreground">Project Type</p>
            <p className="text-base font-body text-foreground">
              {projectTypeLabels[formData.projectType] || formData.projectType}
            </p>
          </div>
          <div>
            <p className="text-sm font-body font-medium text-muted-foreground">Timeline</p>
            <p className="text-base font-body text-foreground">
              {timelineLabels[formData.timeline] || formData.timeline}
            </p>
          </div>
          {formData.budget && (
            <div>
              <p className="text-sm font-body font-medium text-muted-foreground">Budget</p>
              <p className="text-base font-body text-foreground">
                {budgetLabels[formData.budget] || formData.budget}
              </p>
            </div>
          )}
          <div>
            <p className="text-sm font-body font-medium text-muted-foreground">Location</p>
            <p className="text-base font-body text-foreground">{formData.location}</p>
          </div>
          {formData.buildingSize && (
            <div>
              <p className="text-sm font-body font-medium text-muted-foreground">Building Size</p>
              <p className="text-base font-body text-foreground">{formData.buildingSize} sq ft</p>
            </div>
          )}
        </div>

        {getAdditionalRequirements().length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-body font-medium text-muted-foreground mb-2">Additional Requirements</p>
            <div className="flex flex-wrap gap-2">
              {getAdditionalRequirements().map((requirement, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-body font-medium bg-primary/10 text-primary"
                >
                  {requirement}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Description Review */}
      {formData.description && (
        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
            <Icon name="FileText" size={20} className="mr-2" />
            Project Description
          </h3>
          <p className="text-base font-body text-foreground leading-relaxed">
            {formData.description}
          </p>
          
          {formData.currentIssues && (
            <div className="mt-4">
              <p className="text-sm font-body font-medium text-muted-foreground mb-2">Current Issues</p>
              <p className="text-base font-body text-foreground">{formData.currentIssues}</p>
            </div>
          )}

          {formData.specialRequirements && (
            <div className="mt-4">
              <p className="text-sm font-body font-medium text-muted-foreground mb-2">Special Requirements</p>
              <p className="text-base font-body text-foreground">{formData.specialRequirements}</p>
            </div>
          )}

          {formData.attachments && formData.attachments.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-body font-medium text-muted-foreground mb-2">
                Uploaded Files ({formData.attachments.length})
              </p>
              <div className="space-y-2">
                {formData.attachments.map((file, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon 
                      name={file.type?.startsWith('image/') ? 'Image' : 'FileText'} 
                      size={16} 
                      color="var(--color-muted-foreground)" 
                    />
                    <span className="text-sm font-body text-foreground">{file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Terms and Conditions */}
      <div className="space-y-4">
        <Checkbox
          label="I agree to the Terms and Conditions"
          description="By submitting this form, you agree to our terms of service and privacy policy"
          checked={formData.agreeToTerms || false}
          onChange={(e) => handleCheckboxChange('agreeToTerms', e.target.checked)}
          error={errors.agreeToTerms}
          required
        />

        <Checkbox
          label="I consent to being contacted about this quote"
          description="We may contact you via phone, email, or text to discuss your project"
          checked={formData.consentToContact || false}
          onChange={(e) => handleCheckboxChange('consentToContact', e.target.checked)}
          error={errors.consentToContact}
          required
        />

        <Checkbox
          label="Send me updates about Industrial Roofing services"
          description="Receive occasional updates about our services and industry news (optional)"
          checked={formData.marketingConsent || false}
          onChange={(e) => handleCheckboxChange('marketingConsent', e.target.checked)}
        />
      </div>

      {/* What Happens Next */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h3 className="text-lg font-heading font-semibold text-primary mb-4 flex items-center">
          <Icon name="Clock" size={20} className="mr-2" />
          What Happens Next?
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold mt-0.5">
              1
            </div>
            <div>
              <p className="text-sm font-body font-semibold text-foreground">Immediate Confirmation</p>
              <p className="text-xs font-body text-muted-foreground">
                You'll receive an email confirmation within minutes
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold mt-0.5">
              2
            </div>
            <div>
              <p className="text-sm font-body font-semibold text-foreground">Expert Review</p>
              <p className="text-xs font-body text-muted-foreground">
                Our team will review your project details within 24 hours
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold mt-0.5">
              3
            </div>
            <div>
              <p className="text-sm font-body font-semibold text-foreground">Personal Consultation</p>
              <p className="text-xs font-body text-muted-foreground">
                We'll contact you to schedule a site visit and provide your detailed quote
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmitStep;