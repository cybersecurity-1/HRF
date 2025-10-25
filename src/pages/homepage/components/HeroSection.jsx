import React, { useCallback } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import QuoteRequestCTA from '../../../components/ui/QuoteRequestCTA';

const HeroSection = ({ onQuoteRequest }) => {
  const handleQuoteClick = () => {
    if (onQuoteRequest) {
      onQuoteRequest();
    }
  };

  const handleScrollToNext = useCallback(() => {
    const nextSection = document.querySelector('#services') || document.querySelector('main > section:nth-child(2)');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
          alt="Industrial roofing construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Decorative Elements - Reduced blur for better performance */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl will-change-transform"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl will-change-transform"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Company Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Icon name="Award" size={20} color="white" strokeWidth={2} />
            <span className="text-white font-body font-medium text-sm">
              25+ Years of Excellence in Industrial Roofing
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight">
              Premium Industrial
              <span className="block text-accent">Roofing Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-body max-w-3xl mx-auto leading-relaxed">
              Transform your industrial facility with our expert roofing services. From Trafford sheets to polycarbonate installations, we deliver quality that lasts.
            </p>
          </div>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={18} color="var(--color-accent)" strokeWidth={2} />
              <span className="font-body text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={18} color="var(--color-accent)" strokeWidth={2} />
              <span className="font-body text-sm">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={18} color="var(--color-accent)" strokeWidth={2} />
              <span className="font-body text-sm">1000+ Projects Completed</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <QuoteRequestCTA
              variant="hero"
              onQuoteRequest={handleQuoteClick}
              className="shadow-lg hover:shadow-xl"
            />
            <a href="tel:+919633566333" style={{ textDecoration: 'none' }}>
              <Button
                variant="outline"
                size="xl"
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-body font-semibold text-lg px-8 py-4"
              >
                Call 9633566333
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/60 font-body text-sm mb-4">Trusted by leading industrial companies</p>
            {/* <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-body font-semibold">Manufacturing Corp</div>
              <div className="text-white font-body font-semibold">Industrial Solutions Ltd</div>
              <div className="text-white font-body font-semibold">Steel Works Inc</div>
              <div className="text-white font-body font-semibold">Factory Systems</div>
            </div> */}
          </div>

          {/* Scroll Indicator */}
          <div className="pt-0 flex justify-center">
            <button
              onClick={handleScrollToNext}
              className="group flex flex-col items-center space-y-4 hover:opacity-80 transition-opacity duration-200 cursor-pointer mx-auto"
              aria-label="Scroll to services section"
            >
              <span className="text-white/60 font-body text-xs group-hover:text-white/80 transition-colors duration-200">Scroll to explore</span>
              <Icon 
                name="ChevronDown" 
                size={24} 
                color="rgba(255,255,255,0.6)" 
                strokeWidth={2}
                className="group-hover:text-white/80 transition-colors duration-200" 
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;