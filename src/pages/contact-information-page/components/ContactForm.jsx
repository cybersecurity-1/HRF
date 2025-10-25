import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'career', label: 'Career Interest' },
    { value: 'emergency', label: 'Emergency Service' },
    { value: 'warranty', label: 'Warranty Claim' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const whatsappNumber = "919633566333"; // your WhatsApp number without +

      const whatsappMessage = `
*New Inquiry via Website Contact Form*%0A
👤 Name: ${formData.name}%0A
📧 Email: ${formData.email}%0A
📞 Phone: ${formData.phone}%0A
🏢 Company: ${formData.company}%0A
📌 Inquiry Type: ${formData.inquiryType}%0A
📝 Message: ${formData.message}
      `;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

      // Open WhatsApp chat in new tab
      window.open(whatsappURL, "_blank");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "",
        message: ""
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="bg-background py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Have a question or need more information? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border shadow-sm p-6 lg:p-8">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} color="var(--color-success)" strokeWidth={2} />
                <p className="text-sm font-body font-medium text-success">
                  Thank you! Your message has been sent successfully. We'll respond within 24 hours.
                </p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="AlertCircle" size={20} color="var(--color-error)" strokeWidth={2} />
                <p className="text-sm font-body font-medium text-error">
                  Sorry, there was an error sending your message. Please try again or call us directly.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+91123456789"
                value={formData.phone}
                onChange={handleInputChange}
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

            <Select
              label="Inquiry Type"
              placeholder="Select inquiry type"
              options={inquiryTypes}
              value={formData.inquiryType}
              onChange={handleSelectChange}
              required
            />

            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your project or inquiry..."
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent bg-input text-foreground placeholder-muted-foreground resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
                iconSize={20}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold flex-1"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.location.href = "tel:+919633566333"}
              >
                Call Instead
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
