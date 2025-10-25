import React from 'react';
import Button from './Button';

const QuoteRequestCTA = ({ 
  variant = 'floating', 
  size = 'default',
  className = '',
  preSelectedService = null,
  onQuoteRequest 
}) => {
  const handleQuoteClick = () => {
    if (onQuoteRequest) {
      onQuoteRequest(preSelectedService);
    } else {
      // Default behavior - would trigger quote request modal
      console.log('Opening quote request modal', { preSelectedService });
    }
  };

  // Floating Action Button for Mobile
  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-6 right-6 z-40 md:hidden ${className}`}>
        <Button
          variant="default"
          size="lg"
          iconName="FileText"
          iconPosition="left"
          iconSize={20}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold shadow-lg hover:shadow-xl transition-all duration-200 rounded-full px-6"
          onClick={handleQuoteClick}
        >
          Get Quote
        </Button>
      </div>
    );
  }

  // Inline CTA Button
  if (variant === 'inline') {
    return (
      <Button
        variant="default"
        size={size}
        iconName="FileText"
        iconPosition="left"
        iconSize={size === 'lg' ? 20 : 18}
        className={`bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold transition-all duration-200 ${className}`}
        onClick={handleQuoteClick}
      >
        Get Quote
      </Button>
    );
  }

  // Hero Section CTA
  if (variant === 'hero') {
    return (
      <Button
        variant="default"
        size="xl"
        iconName="FileText"
        iconPosition="left"
        iconSize={24}
        className={`bg-accent hover:bg-accent/90 text-accent-foreground font-body font-bold text-lg px-8 py-4 shadow-md hover:shadow-lg transition-all duration-200 ${className}`}
        onClick={handleQuoteClick}
      >
        Request Free Quote
      </Button>
    );
  }

  // Secondary CTA (outline style)
  if (variant === 'secondary') {
    return (
      <Button
        variant="outline"
        size={size}
        iconName="FileText"
        iconPosition="left"
        iconSize={size === 'lg' ? 20 : 18}
        className={`border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body font-semibold transition-all duration-200 ${className}`}
        onClick={handleQuoteClick}
      >
        Get Quote
      </Button>
    );
  }

  // Default inline variant
  return (
    <Button
      variant="default"
      size={size}
      iconName="FileText"
      iconPosition="left"
      iconSize={18}
      className={`bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold transition-all duration-200 ${className}`}
      onClick={handleQuoteClick}
    >
      Get Quote
    </Button>
  );
};

export default QuoteRequestCTA;