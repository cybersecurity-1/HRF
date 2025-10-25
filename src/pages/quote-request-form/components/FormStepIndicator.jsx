import React from 'react';
import Icon from '../../../components/AppIcon';

const FormStepIndicator = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    isCompleted
                      ? 'bg-success border-success text-success-foreground'
                      : isActive
                      ? 'bg-primary border-primary text-primary-foreground'
                      : 'bg-card border-border text-muted-foreground'
                  }`}
                >
                  {isCompleted ? (
                    <Icon name="Check" size={20} strokeWidth={2} />
                  ) : (
                    <span className="text-sm font-body font-semibold">{stepNumber}</span>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={`text-xs font-body font-medium ${
                      isActive ? 'text-primary' : isCompleted ? 'text-success' : 'text-muted-foreground'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
              {!isLast && (
                <div
                  className={`flex-1 h-0.5 mx-2 transition-all duration-200 ${
                    isCompleted ? 'bg-success' : 'bg-border'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FormStepIndicator;