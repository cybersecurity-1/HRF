import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const fieldIconMap = {
  'name': '👤',  // Person emoji
  'email': '📧', // Email emoji
  'phone': '📞', // Phone emoji
  'company': '🏢', // Building emoji
  'service': '🛠️', // Tools emoji
  'projectSize': '📏', // Ruler emoji
  'urgency': '⏱️', // Stopwatch emoji
  'message': '📝', // Memo emoji
};

const ContactSection = ({ onQuoteRequest }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectSize: '',
    message: '',
    urgency: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'trafford', label: 'Trafford Sheet Work' },
    { value: 'stone-coated', label: 'Stone Coated Sheet Work' },
    { value: 'upvc', label: 'UPVC Sheet Work' },
    { value: 'tile', label: 'Tile Roofing Work' },
    { value: 'steel-frame', label: 'Steel Frame Jally Works' },
    { value: 'polycarbonate', label: 'Polycarbonate Sheet Work' },
    { value: 'custom', label: 'Custom Solution' }
  ];

  const urgencyOptions = [
    { value: '', label: 'Select urgency...' },
    { value: 'immediate', label: 'Immediate (Within 1 week)' },
    { value: 'urgent', label: 'Urgent (Within 1 month)' },
    { value: 'planned', label: 'Planned (Within 3 months)' },
    { value: 'future', label: 'Future Planning (6+ months)' }
  ];

  const projectSizeOptions = [
    { value: '', label: 'Select project size...' },
    { value: 'small', label: 'Small (Under 5,000 sq ft)' },
    { value: 'medium', label: 'Medium (5,000 - 20,000 sq ft)' },
    { value: 'large', label: 'Large (20,000 - 50,000 sq ft)' },
    { value: 'enterprise', label: 'Enterprise (50,000+ sq ft)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project requirements';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    return;
  }

  // Build WhatsApp message
  let message = `Free Quote Request:%0A`;

  for (const field in formData) {
    if (formData.hasOwnProperty(field)) {
      const icon = fieldIconMap[field] || '❓'; // Default emoji if field is not found
      const fieldValue = formData[field];
      message += `%0A${icon} ${field}: ${fieldValue}`;
    }
  }

  const whatsappUrl = `https://wa.me/919633566333?text=${message}`;
  window.open(whatsappUrl, '_blank');
  setIsSubmitted(true);
  setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      projectSize: '',
      message: '',
      urgency: ''
    });
  };
  
  //   setIsSubmitting(true);
  //   try {
  //     const response = await fetch('http://localhost:5000/api/quote', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData)
  //     });
  //     if (response.ok) {
  //       setIsSubmitted(true);
  //       setFormData({
  //         name: '',
  //         email: '',
  //         phone: '',
  //         company: '',
  //         service: '',
  //         projectSize: '',
  //         message: '',
  //         urgency: ''
  //       });
  //     } else {
  //       alert('Failed to send quote request. Please try again.');
  //     }
  //   } catch (error) {
  //     alert('Error connecting to server. Please try again later.');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Call Us',
      details: '9633566333',
      subDetails: 'Mon-Fri 8AM-6PM EST',
      action: 'tel:9633566333'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      details: 'hashimtrussroofing@gmail.com',
      subDetails: 'We respond within 2 hours',
      action: 'mailto:hashimtrussroofing@gmail.com'
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      details: 'H R F Industries',
      subDetails: 'olavokod , palakkad',
      action: null
    },
    {
      icon: 'Clock',
      title: 'Emergency Service',
      details: '24/7 Available',
      subDetails: 'For urgent repairs',
      action: 'tel:9633566333'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-success/10 rounded-2xl p-12">
            <div className="flex items-center justify-center w-16 h-16 bg-success rounded-full mx-auto mb-6">
              <Icon name="Check" size={32} color="white" strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Thank You for Your Inquiry!
            </h2>
            <p className="text-xl text-muted-foreground font-body mb-8">
              We've received your project details and will contact you within 2 business hours with a detailed quote and consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
              >
                Call Us Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-6">
            <Icon name="MessageSquare" size={20} color="var(--color-success)" strokeWidth={2} />
            <span className="text-success font-body font-medium text-sm">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Start
            <span className="block text-success">Your Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Get a free consultation and detailed quote for your industrial roofing project. Our experts are ready to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon name={info.icon} size={20} color="var(--color-primary)" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-primary hover:text-primary/80 font-body font-medium transition-colors duration-200"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <div className="text-foreground font-body font-medium">
                          {info.details}
                        </div>
                      )}
                      <div className="text-muted-foreground font-body text-sm">
                        {info.subDetails}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-muted rounded-lg overflow-hidden h-64">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Industrial Roofing Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=10.79844374266522, 76.6360699660811&z=14&output=embed"
                className="border-0"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Request Your Free Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                    required
                  />
                  <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    placeholder="Enter company name (optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Select
                    label="Service Needed"
                    options={serviceOptions}
                    value={formData.service}
                    onChange={(value) => handleSelectChange('service', value)}
                    error={errors.service}
                    required
                  />
                  <Select
                    label="Project Size"
                    options={projectSizeOptions}
                    value={formData.projectSize}
                    onChange={(value) => handleSelectChange('projectSize', value)}
                  />
                </div>

                <Select
                  label="Project Timeline"
                  options={urgencyOptions}
                  value={formData.urgency}
                  onChange={(value) => handleSelectChange('urgency', value)}
                />

                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">
                    Project Details <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Please describe your project requirements, location, and any specific needs..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-body ${
                      errors.message ? 'border-destructive' : 'border-border'
                    }`}
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive font-body">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  iconSize={20}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Get Free Quote'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;