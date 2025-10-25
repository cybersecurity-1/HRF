import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceNavigationControls = ({ 
  currentService, 
  allServices, 
  onServiceChange, 
  onViewProjects,
  onRequestQuote 
}) => {
  if (!allServices || allServices.length <= 1) return null;

  const currentIndex = allServices.findIndex(service => service.id === currentService.id);
  const prevService = allServices[currentIndex - 1];
  const nextService = allServices[currentIndex + 1];

  return (
    <div className="flex items-center justify-between p-4 border-t border-border bg-muted/30">
      {/* Previous/Next Service Navigation */}
      <div className="flex items-center space-x-2">
        {prevService && (
          <button
            onClick={() => onServiceChange(prevService)}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
          >
            <Icon name="ChevronLeft" size={16} strokeWidth={2} />
            <span className="hidden sm:inline">Previous Service</span>
          </button>
        )}
        
        {nextService && (
          <button
            onClick={() => onServiceChange(nextService)}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
          >
            <span className="hidden sm:inline">Next Service</span>
            <Icon name="ChevronRight" size={16} strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="default"
          iconName="Image"
          iconPosition="left"
          iconSize={16}
          onClick={onViewProjects}
          className="hidden sm:flex"
        >
          View Projects
        </Button>
        
        <Button
          variant="default"
          size="default"
          iconName="FileText"
          iconPosition="left"
          iconSize={16}
          onClick={onRequestQuote}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          Request Quote
        </Button>
      </div>
    </div>
  );
};

export default ServiceNavigationControls;