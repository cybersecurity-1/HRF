import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessModal = ({ isOpen, onClose, formData }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-card rounded-lg shadow-lg max-w-md w-full p-6">
          {/* Success Icon */}
          <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-6">
            <Icon name="CheckCircle" size={32} color="var(--color-success)" strokeWidth={2} />
          </div>

          {/* Success Message */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
              Quote Request Submitted!
            </h2>
            <p className="text-base font-body text-muted-foreground">
              Thank you {formData.firstName}! We've received your quote request and will get back to you soon.
            </p>
          </div>

          {/* Reference Number */}
          <div className="bg-muted/30 rounded-lg p-4 mb-6">
            <div className="text-center">
              <p className="text-sm font-body font-medium text-muted-foreground mb-1">
                Reference Number
              </p>
              <p className="text-lg font-mono font-bold text-primary">
                IR-{Date.now().toString().slice(-8)}
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              What's Next?
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-foreground">Email Confirmation</p>
                  <p className="text-xs font-body text-muted-foreground">
                    Check your email ({formData.email}) for confirmation details
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
                    Our team will review your project within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-foreground">Personal Contact</p>
                  <p className="text-xs font-body text-muted-foreground">
                    We'll call you at {formData.phone} to discuss your project
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
            <h4 className="text-sm font-body font-semibold text-primary mb-2">
              Need Immediate Assistance?
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} color="var(--color-primary)" strokeWidth={2} />
                <span className="text-sm font-body text-foreground">(555) 123-ROOF</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} color="var(--color-primary)" strokeWidth={2} />
                <span className="text-sm font-body text-foreground">quotes@industrialroofing.com</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              size="default"
              fullWidth
              iconName="Home"
              iconPosition="left"
              onClick={() => {
                onClose();
                window.location.href = '/homepage';
              }}
            >
              Back to Home
            </Button>
            <Button
              variant="default"
              size="default"
              fullWidth
              iconName="Image"
              iconPosition="left"
              onClick={() => {
                onClose();
                window.location.href = '/project-gallery';
              }}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;