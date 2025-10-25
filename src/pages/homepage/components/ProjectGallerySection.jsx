import React, { useState, useMemo } from 'react';
import Icon from '../../../components/AppIcon';
import ProjectCard from './ProjectCard';
import GalleryLightbox from '../../../components/ui/GalleryLightbox';
import Button from '../../../components/ui/Button';
import { getOptimizedImageSrc } from '../../../utils/performance';

const ProjectGallerySection = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(3); // Reduced initial load

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Industrial Manufacturing Facility",
      category: "Trafford Sheet Work",
      description: "Complete roofing solution for a 50,000 sq ft manufacturing facility with advanced weather protection and energy efficiency features.",
      location: "Detroit, MI",
      area: "50,000",
      duration: "21",
      completionDate: "Dec 2024",
        thumbnail: getOptimizedImageSrc("/assets/images/WhatsApp Image 2025-07-20 at 18.13.21.jpeg", 600),
        images: [
          getOptimizedImageSrc("/assets/images/WhatsApp Image 2025-07-20 at 18.13.21.jpeg", 1200),
          getOptimizedImageSrc("/assets/images/WhatsApp Image1 2025-07-20 at 18.13.20 (1).jpeg", 1200),
          getOptimizedImageSrc("/assets/images/WhatsApp Image2 2025-07-20 at 18.13.20 (2).jpeg", 1200)
        ],
      features: ["Weather Resistant", "Energy Efficient", "Custom Design"]
    },
    {
      id: 2,
      title: "Warehouse Distribution Center",
      category: "Stone Coated Sheet Work",
      description: "Premium stone-coated roofing installation for a major distribution center requiring both durability and aesthetic appeal.",
      location: "Chicago, IL",
      area: "75,000",
      duration: "28",
      completionDate: "Nov 2024",
      thumbnail: getOptimizedImageSrc("https://images.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg", 600),
      images: [
        getOptimizedImageSrc("https://images.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg", 1200),
        getOptimizedImageSrc("https://images.unsplash.com/photo-1541888946425-d81bb19240f5", 1200),
        getOptimizedImageSrc("https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg", 1200),
        getOptimizedImageSrc("https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg", 1200)
      ],
      features: ["Premium Materials", "Aesthetic Appeal", "Long Warranty"]
    },
    {
      id: 3,
      title: "Chemical Processing Plant",
      category: "UPVC Sheet Work",
      description: "Specialized UPVC roofing system designed to withstand harsh chemical environments while providing excellent natural lighting.",
      location: "Houston, TX",
      area: "35,000",
      duration: "18",
      completionDate: "Oct 2024",
      thumbnail: getOptimizedImageSrc("https://images.unsplash.com/photo-1541888946425-d81bb19240f5", 600),
      images: [
        getOptimizedImageSrc("https://images.unsplash.com/photo-1541888946425-d81bb19240f5", 1200),
        getOptimizedImageSrc("https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg", 1200),
        getOptimizedImageSrc("https://images.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg", 1200),
        getOptimizedImageSrc("https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg", 1200)
      ],
      features: ["Chemical Resistant", "Natural Lighting", "Low Maintenance"]
    },
    {
      id: 4,
      title: "Corporate Headquarters",
      category: "Tile Roofing Work",
      description: "Traditional tile roofing installation for a prestigious corporate headquarters combining classic aesthetics with modern performance.",
      location: "Atlanta, GA",
      area: "25,000",
      duration: "35",
      completionDate: "Sep 2024",
      thumbnail: getOptimizedImageSrc("https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg", 600),
      images: [
        getOptimizedImageSrc("https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg", 1200),
        getOptimizedImageSrc("https://images.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg", 1200),
        getOptimizedImageSrc("https://images.unsplash.com/photo-1558618666-fcd25c85cd64", 1200),
        getOptimizedImageSrc("https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg", 1200)
      ],
      features: ["Traditional Design", "Premium Quality", "Fire Resistant"]
    },
    {
      id: 5,
      title: "Steel Production Facility",
      category: "Steel Frame Jally Works",
      description: "Heavy-duty steel frame jally system installation for a steel production facility requiring maximum structural support and ventilation.",
      location: "Pittsburgh, PA",
      area: "100,000",
      duration: "42",
      completionDate: "Aug 2024",
      thumbnail: getOptimizedImageSrc("https://images.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg", 600),
      images: [
        getOptimizedImageSrc("https://images.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg", 1200),
        getOptimizedImageSrc("https://images.unsplash.com/photo-1558618666-fcd25c85cd64", 1200),
        getOptimizedImageSrc("https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg", 1200),
        getOptimizedImageSrc("https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg", 1200)
      ],
      features: ["Heavy Duty", "Maximum Support", "Optimal Ventilation"]
    },
    {
      id: 6,
      title: "Greenhouse Complex",
      category: "Polycarbonate Sheet Work",
      description: "Advanced polycarbonate roofing system for a commercial greenhouse complex providing optimal light transmission and climate control.",
      location: "Phoenix, AZ",
      area: "60,000",
      duration: "25",
      completionDate: "Jul 2024",
      thumbnail: getOptimizedImageSrc("https://images.unsplash.com/photo-1558618666-fcd25c85cd64", 600),
      images: [
        getOptimizedImageSrc("https://images.unsplash.com/photo-1558618666-fcd25c85cd64", 1200),
        getOptimizedImageSrc("https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg", 1200),
        getOptimizedImageSrc("https://images.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg", 1200),
        getOptimizedImageSrc("https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg", 1200)
      ],
      features: ["Light Transmission", "Climate Control", "UV Protection"]
    }
  ], []);

  const handleProjectClick = (project) => {
    const projectIndex = projects.findIndex(p => p.id === project.id);
    setSelectedProjectIndex(projectIndex);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length)); // Load 3 at a time
  };

  const displayedProjects = projects.slice(0, visibleProjects);

  return (
    <>
      <section id="gallery" className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Icon name="Camera" size={20} color="var(--color-accent)" strokeWidth={2} />
              <span className="text-accent font-body font-medium text-sm">Project Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Our Recent
              <span className="block text-accent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of completed industrial roofing projects across India. From large-scale commercial installations to specialized industrial solutions, discover the quality and craftsmanship that set H R F Industrial Roofing apart.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onProjectClick={handleProjectClick}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < projects.length && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                iconName="Plus"
                iconPosition="left"
                iconSize={20}
                className="font-body font-semibold"
                onClick={handleLoadMore}
              >
                Load More Projects ({projects.length - visibleProjects} remaining)
              </Button>
            </div>
          )}

          {/* Gallery Stats */}
          <div className="mt-16 bg-card rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
                  500+
                </div>
                <div className="text-muted-foreground font-body">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
                  2.5M+
                </div>
                <div className="text-muted-foreground font-body">Square Feet Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
                  25+
                </div>
                <div className="text-muted-foreground font-body">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-muted-foreground font-body">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      <GalleryLightbox
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        projects={projects}
        initialProjectIndex={selectedProjectIndex}
      />
    </>
  );
};

export default ProjectGallerySection;