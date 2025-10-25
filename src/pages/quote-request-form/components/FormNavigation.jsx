import React from 'react';
import Button from '../../../components/ui/Button';

const FormNavigation = ({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext, 
  onSubmit, 
  isSubmitting,
  canProceed 
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex items-center justify-between pt-6 border-t border-border">
      <div>
        {!isFirstStep && (
          <Button
            variant="outline"
            size="default"
            iconName="ChevronLeft"
            iconPosition="left"
            onClick={onPrevious}
            disabled={isSubmitting}
          >
            Previous
          </Button>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm font-body text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
        
        {isLastStep ? (
          <Button
            variant="default"
            size="default"
            iconName="Send"
            iconPosition="left"
            onClick={onSubmit}
            loading={isSubmitting}
            disabled={!canProceed || isSubmitting}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
          </Button>
        ) : (
          <Button
            variant="default"
            size="default"
            iconName="ChevronRight"
            iconPosition="right"
            onClick={onNext}
            disabled={!canProceed || isSubmitting}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormNavigation;