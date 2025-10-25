import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

import FormStepIndicator from './components/FormStepIndicator';
import ContactInfoStep from './components/ContactInfoStep';
import ProjectDetailsStep from './components/ProjectDetailsStep';
import ProjectDescriptionStep from './components/ProjectDescriptionStep';
import ReviewSubmitStep from './components/ReviewSubmitStep';
import FormNavigation from './components/FormNavigation';
import SuccessModal from './components/SuccessModal';

const QuoteRequestForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    
    // Project Details
    serviceType: '',
    projectType: '',
    timeline: '',
    budget: '',
    location: '',
    buildingSize: '',
    stories: '',
    needsInsulation: false,
    needsGutters: false,
    needsVentilation: false,
    needsSkylights: false,
    
    // Project Description
    description: '',
    currentIssues: '',
    specialRequirements: '',
    attachments: [],
    referralSource: '',
    
    // Review & Submit
    agreeToTerms: false,
    consentToContact: false,
    marketingConsent: false
  });

  const steps = [
    { id: 'contact', title: 'Contact Info', component: ContactInfoStep },
    { id: 'project', title: 'Project Details', component: ProjectDetailsStep },
    { id: 'description', title: 'Description', component: ProjectDescriptionStep },
    { id: 'review', title: 'Review & Submit', component: ReviewSubmitStep }
  ];

  // Pre-populate service type if coming from a specific service page
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const preSelectedService = searchParams.get('service');
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, serviceType: preSelectedService }));
    }
  }, [location]);

  // Auto-save form data to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('quoteFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(prev => ({ ...prev, ...parsedData }));
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quoteFormData', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
    // Clear related errors when data is updated
    const updatedFields = Object.keys(updates);
    setErrors(prev => {
      const newErrors = { ...prev };
      updatedFields.forEach(field => {
        delete newErrors[field];
      });
      return newErrors;
    });
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1: // Contact Information
        if (!formData.firstName?.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName?.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email?.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone?.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!/^[\d\s\-\(\)\+]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
          newErrors.phone = 'Please enter a valid phone number';
        }
        break;

      case 2: // Project Details
        if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
        if (!formData.projectType) newErrors.projectType = 'Please select a project type';
        if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
        if (!formData.location?.trim()) newErrors.location = 'Project location is required';
        break;

      case 3: // Project Description
        if (!formData.description?.trim()) {
          newErrors.description = 'Project description is required';
        } else if (formData.description.trim().length < 50) {
          newErrors.description = 'Please provide at least 50 characters in your description';
        }
        break;

      case 4: // Review & Submit
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        if (!formData.consentToContact) newErrors.consentToContact = 'You must consent to being contacted about this quote';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear saved form data on successful submission
      localStorage.removeItem('quoteFormData');
      
      // Show success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'There was an error submitting your request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate('/homepage');
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.serviceType && formData.projectType && formData.timeline && formData.location;
      case 3:
        return formData.description && formData.description.length >= 50;
      case 4:
        return formData.agreeToTerms && formData.consentToContact;
      default:
        return false;
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
              <Icon name="FileText" size={32} color="var(--color-accent)" strokeWidth={2} />
            </div>
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Request Your Free Quote
            </h1>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Get a detailed quote for your industrial roofing project. Our experts will review your requirements and provide a comprehensive proposal within 24 hours.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-card rounded-lg shadow-lg border border-border overflow-hidden">
            <div className="p-6 lg:p-8">
              {/* Step Indicator */}
              <FormStepIndicator
                currentStep={currentStep}
                totalSteps={steps.length}
                steps={steps}
              />

              {/* Form Content */}
              <div className="min-h-[500px]">
                <CurrentStepComponent
                  formData={formData}
                  updateFormData={updateFormData}
                  errors={errors}
                />
              </div>

              {/* Form Navigation */}
              <FormNavigation
                currentStep={currentStep}
                totalSteps={steps.length}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                canProceed={canProceed()}
              />

              {/* Submit Error */}
              {errors.submit && (
                <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="AlertCircle" size={20} color="var(--color-destructive)" strokeWidth={2} />
                    <p className="text-sm font-body text-destructive">{errors.submit}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm font-body text-muted-foreground mb-4">
              Need help with your quote request?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} color="var(--color-primary)" strokeWidth={2} />
                <span className="text-sm font-body text-foreground">Call us: (555) 123-ROOF</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} color="var(--color-primary)" strokeWidth={2} />
                <span className="text-sm font-body text-foreground">Email: quotes@industrialroofing.com</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccessModal}
        formData={formData}
      />
    </div>
  );
};

export default QuoteRequestForm;