import React, { useEffect } from 'react';

const ServiceModalOverlay = ({ isOpen, onClose, children }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

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
        <div className="bg-card rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="overflow-y-auto max-h-[90vh]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModalOverlay;