import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    // { label: 'Gallery', path: '/project-gallery', icon: 'Image' },
    { label: 'Services', path: '/services', icon: 'Wrench' },
   // { label: 'Gallery', path: '/gallery', icon: 'Image' },
    { label: 'Contact', path: '/contact-information-page', icon: 'Phone' },
  ];

  const isActivePath = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-sm will-change-transform">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo Section */}
          <Link to="/homepage" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="flex items-center justify-center w-14 h-14  rounded-lg">
              <img src="/public/assets/images/eagle-removebg-preview.png" alt="Eagle Logo" width={100} height={100} />
            </div>
            <div className="flex flex-col">
  <span className="font-heading font-bold text-lg text-foreground leading-tight">
    HRF Industrial Roofing
  </span>
  <span className="font-heading text-xs text-muted-foreground leading-tight">
    Professional Construction Solutions
  </span>
</div>

          </Link>

          {/* Desktop Navigation */} 
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-body font-medium transition-colors duration-200 ${
                  isActivePath(item.path)
                    ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={18} strokeWidth={2} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              size="default"
              iconName="FileText"
              iconPosition="left"
              iconSize={18}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold"
              onClick={(e) => {
                  e.preventDefault();
                  window.location.href = window.location.origin + '/homepage#contact';
              }}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? "X" : "Menu"}
              size={24}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-body font-medium transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={20} strokeWidth={2} />
                <span>{item.label}</span>
              </Link>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  size="default"
                  fullWidth
                  iconName="FileText"
                  iconPosition="left"
                  iconSize={18}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold"
                  onClick={() => {
                    closeMobileMenu();
                     window.location.href =  window.location.origin + '/homepage#contact';
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
