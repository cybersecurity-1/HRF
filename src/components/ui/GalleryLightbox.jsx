import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Image from '../AppImage';


const GalleryLightbox = ({ 
  isOpen, 
  onClose, 
  projects = [],
  initialProjectIndex = 0 
}) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(initialProjectIndex);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = projects[currentProjectIndex];

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentProjectIndex]);

  // Close lightbox on escape key
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'ArrowUp':
          e.preventDefault();
          prevProject();
          break;
        case 'ArrowDown':
          e.preventDefault();
          nextProject();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentProjectIndex, currentImageIndex]);

  if (!isOpen || !currentProject) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextImage = () => {
    if (currentProject.images && currentProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (currentProject.images && currentProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      );
    }
  };

  const nextProject = () => {
    if (projects.length > 1) {
      setCurrentProjectIndex((prev) => 
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevProject = () => {
    if (projects.length > 1) {
      setCurrentProjectIndex((prev) => 
        prev === 0 ? projects.length - 1 : prev - 1
      );
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentProject.title,
          text: currentProject.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-black/50">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-heading font-semibold text-white">
              {currentProject.title}
            </h2>
            <span className="text-sm font-body text-white/70">
              {currentProjectIndex + 1} of {projects.length}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Share project"
            >
              <Icon name="Share2" size={20} strokeWidth={2} />
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <Icon name="X" size={24} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Main Image Area */}
        <div className="flex-1 flex items-center justify-center relative p-4">
          {currentProject.images && currentProject.images.length > 0 && (
            <>
              <div className="relative max-w-full max-h-full">
                <Image
                  src={currentProject.images[currentImageIndex]}
                  alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Image Navigation */}
              {currentProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                  >
                    <Icon name="ChevronLeft" size={24} strokeWidth={2} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                  >
                    <Icon name="ChevronRight" size={24} strokeWidth={2} />
                  </button>
                </>
              )}

              {/* Project Navigation */}
              {projects.length > 1 && (
                <>
                  <button
                    onClick={prevProject}
                    className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-full flex items-center justify-center w-12 h-8 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                  >
                    <Icon name="ChevronUp" size={20} strokeWidth={2} />
                  </button>
                  <button
                    onClick={nextProject}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-full flex items-center justify-center w-12 h-8 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                  >
                    <Icon name="ChevronDown" size={20} strokeWidth={2} />
                  </button>
                </>
              )}
            </>
          )}
        </div>

        {/* Footer with Project Info */}
        <div className="bg-black/50 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-body font-medium bg-primary/20 text-primary">
                    {currentProject.category}
                  </span>
                  {currentProject.completionDate && (
                    <span className="text-sm font-mono text-white/70">
                      Completed: {currentProject.completionDate}
                    </span>
                  )}
                </div>
                <p className="text-sm font-body text-white/80 leading-relaxed">
                  {currentProject.description}
                </p>
                {currentProject.location && (
                  <div className="flex items-center space-x-2 mt-2">
                    <Icon name="MapPin" size={16} color="rgba(255,255,255,0.7)" strokeWidth={2} />
                    <span className="text-sm font-body text-white/70">
                      {currentProject.location}
                    </span>
                  </div>
                )}
              </div>

              {/* Image Counter */}
              {currentProject.images && currentProject.images.length > 1 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-body text-white/70">
                    {currentImageIndex + 1} / {currentProject.images.length}
                  </span>
                  <div className="flex space-x-1">
                    {currentProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;