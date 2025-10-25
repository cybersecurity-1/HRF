import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import GalleryLightbox from '../../components/ui/GalleryLightbox';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import gallery components

import FilterChips from './components/FilterChips';
// import GalleryStats from './components/GalleryStats';
import ProjectGrid from './components/ProjectGrid';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';

const ProjectGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "Industrial Warehouse Complex - Phase 1",
      category: "Trafford Sheet Work",
      location: "Houston, TX",
      completionDate: "March 2024",
      description: `Complete roofing solution for a 50,000 sq ft industrial warehouse facility. This project involved installing high-grade Trafford sheets with advanced weatherproofing systems.\n\nThe installation included thermal insulation, vapor barriers, and custom drainage solutions to handle the Texas climate conditions.`,
      images: [
        "/assets/images/WhatsApp Image 2025-07-20 at 18.13.21.jpeg",
        "/assets/images/WhatsApp Image1 2025-07-20 at 18.13.20 (1).jpeg",
        "/assets/images/WhatsApp Image2 2025-07-20 at 18.13.20 (2).jpeg"
      ],
      specifications: {
        area: "50,000 sq ft",
        material: "Galvanized Trafford Sheets",
        thickness: "0.8mm",
        warranty: "15 years"
      }
    },
    {
      id: 2,
      title: "Residential Stone Coated Roofing",
      category: "Stone Coated Sheet Work",
      location: "Austin, TX",
      completionDate: "January 2024",
      description: `Premium stone coated roofing installation for luxury residential property. Features enhanced durability and aesthetic appeal with natural stone granules.\n\nThis project showcases our expertise in combining functionality with visual appeal for high-end residential applications.`,
      images: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        "https://images.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg"
      ],
      specifications: {
        area: "3,500 sq ft",
        material: "Stone Coated Steel",
        profile: "Tile Profile",
        warranty: "50 years"
      }
    },
    {
      id: 3,
      title: "Commercial UPVC Installation",
      category: "UPVC Sheet Work",
      location: "Dallas, TX",
      completionDate: "February 2024",
      description: `Large-scale UPVC roofing system for commercial building complex. Provides excellent chemical resistance and UV protection for industrial applications.\n\nThe installation features advanced fixing systems and integrated guttering solutions for optimal water management.`,
      images: [
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
        "https://images.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
      ],
      specifications: {
        area: "25,000 sq ft",
        material: "UPVC Corrugated Sheets",
        thickness: "3mm",
        warranty: "20 years"
      }
    },
    {
      id: 4,
      title: "Traditional Tile Roofing Restoration",
      category: "Tile Roofing Work",
      location: "San Antonio, TX",
      completionDate: "December 2023",
      description: `Complete restoration of traditional clay tile roofing system for historic commercial building. Preserved architectural integrity while upgrading performance.\n\nProject included structural reinforcement, waterproofing upgrades, and custom tile matching for seamless integration.`,
      images: [
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
        "https://images.pixabay.com/photo/2016/11/18/17/20/roof-tiles-1836746_1280.jpg"
      ],
      specifications: {
        area: "8,000 sq ft",
        material: "Clay Tiles",
        style: "Spanish Mission",
        warranty: "25 years"
      }
    },
    {
      id: 5,
      title: "Steel Frame Industrial Complex",
      category: "Steel Frame Jally Works",
      location: "Fort Worth, TX",
      completionDate: "November 2023",
      description: `Comprehensive steel frame and roofing system for new industrial manufacturing facility. Features heavy-duty construction for equipment loads.\n\nEngineered for maximum durability with anti-corrosion treatments and precision-welded connections throughout the structure.`,
      images: [
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
        "https://images.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
      ],
      specifications: {
        area: "75,000 sq ft",
        material: "Galvanized Steel Frame",
        loadCapacity: "500 kg/m²",
        warranty: "30 years"
      }
    },
    {
      id: 6,
      title: "Polycarbonate Skylight System",
      category: "Polycarbonate Sheet Work",
      location: "Plano, TX",
      completionDate: "October 2023",
      description: `Modern polycarbonate roofing system with integrated skylights for commercial office building. Maximizes natural light while maintaining energy efficiency.\n\nFeatures multi-wall polycarbonate panels with thermal breaks and automated ventilation systems for optimal indoor climate control.`,
      images: [
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
        "https://images.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg"
      ],
      specifications: {
        area: "12,000 sq ft",
        material: "Multi-wall Polycarbonate",
        thickness: "16mm",
        warranty: "15 years"
      }
    },
    {
      id: 7,
      title: "Mixed-Use Development Roofing",
      category: "Trafford Sheet Work",
      location: "Arlington, TX",
      completionDate: "September 2023",
      description: `Complex roofing solution for mixed-use development combining retail and residential spaces. Required multiple roofing systems and materials.\n\nProject coordination involved multiple phases with different requirements for each building type while maintaining architectural consistency.`,
      images: [
        "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg",
        "https://images.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
      ],
      specifications: {
        area: "35,000 sq ft",
        material: "Mixed Systems",
        phases: "3 Phases",
        warranty: "20 years"
      }
    },
    {
      id: 8,
      title: "Agricultural Facility Roofing",
      category: "UPVC Sheet Work",
      location: "Waco, TX",
      completionDate: "August 2023",
      description: `Specialized UPVC roofing system designed for agricultural applications with enhanced ventilation and chemical resistance properties.\n\nCustom installation includes ridge ventilation, translucent panels for natural lighting, and reinforced fixing systems for high wind loads.`,
      images: [
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
        "https://images.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg"
      ],
      specifications: {
        area: "40,000 sq ft",
        material: "UPVC Agricultural Grade",
        ventilation: "Ridge & Eave",
        warranty: "18 years"
      }
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'trafford', name: 'Trafford Sheet Work', icon: 'Building2', count: 2 },
    { id: 'stone-coated', name: 'Stone Coated', icon: 'Home', count: 1 },
    { id: 'upvc', name: 'UPVC Sheet Work', icon: 'Shield', count: 2 },
    { id: 'tile', name: 'Tile Roofing', icon: 'Grid3X3', count: 1 },
    { id: 'steel-frame', name: 'Steel Frame', icon: 'Zap', count: 1 },
    { id: 'polycarbonate', name: 'Polycarbonate', icon: 'Sun', count: 1 }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (activeCategory !== 'all') {
      const categoryMap = {
        'trafford': 'Trafford Sheet Work',
        'stone-coated': 'Stone Coated Sheet Work',
        'upvc': 'UPVC Sheet Work',
        'tile': 'Tile Roofing Work',
        'steel-frame': 'Steel Frame Jally Works',
        'polycarbonate': 'Polycarbonate Sheet Work'
      };
      filtered = filtered.filter(project => 
        project.category === categoryMap[activeCategory]
      );
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.completionDate) - new Date(a.completionDate);
        case 'oldest':
          return new Date(a.completionDate) - new Date(b.completionDate);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'location':
          return a.location.localeCompare(b.location);
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchQuery, activeCategory, sortBy]);

  const handleProjectClick = (project) => {
    const projectIndex = projects.findIndex(p => p.id === project.id);
    setSelectedProjectIndex(projectIndex);
    setIsLightboxOpen(true);
  };

  const handleQuoteRequest = (project) => {
    console.log('Quote requested for project:', project);
    // This would typically open a quote request modal or navigate to quote form
  };

  return (
    <>
      <Helmet>
        <title>Project Gallery - Industrial Roofing Solutions</title>
        <meta name="description" content="Explore our portfolio of completed industrial roofing projects. View high-quality installations across Texas including Trafford sheets, UPVC, tile roofing, and steel frame construction." />
        <meta name="keywords" content="industrial roofing gallery, roofing projects Texas, Trafford sheet installation, UPVC roofing, tile roofing, steel frame construction" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  Project Gallery
                </h1>
                <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Explore our portfolio of completed industrial roofing projects across India. From large-scale commercial installations to specialized industrial solutions, discover the quality and craftsmanship that set H R F Industrial Roofing apart.

                </p>
              </div>

              {/* Gallery Stats */}
              {/* <GalleryStats projects={projects} className="mb-8" /> */}
            </div>
          </section>

          {/* Gallery Controls */}
          <section className="py-8 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-6">
                {/* Search Bar */}
                <div className="flex-1 max-w-md">
                  <SearchBar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                  />
                </div>

                {/* Sort Dropdown */}
                {/* <div className="flex items-center space-x-4">
                  <SortDropdown
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                  />
                  
                  <div className="text-sm font-body text-muted-foreground">
                    {filteredAndSortedProjects.length} project{filteredAndSortedProjects.length !== 1 ? 's' : ''}
                  </div>
                </div> */}
              </div>

              {/* Filter Chips */}
              <div className="mt-6">
                <FilterChips
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </div>
            </div>
          </section>

          {/* Project Grid */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
              <ProjectGrid
                projects={filteredAndSortedProjects}
                onProjectClick={handleProjectClick}
                loading={loading}
              />

              {/* Load More Button (for future pagination) */}
              {!loading && filteredAndSortedProjects.length > 0 && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Plus"
                    iconPosition="left"
                    className="px-8"
                  >
                    Load More Projects
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
            <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
              <div className="mb-8">
                <Icon name="Building2" size={48} color="var(--color-primary)" strokeWidth={1.5} className="mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg font-body text-muted-foreground leading-relaxed">
                  Get inspired by our work? Let's discuss how we can bring the same level of 
                  quality and expertise to your roofing project. Request a free consultation today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <QuoteRequestCTA
                  variant="hero"
                  onQuoteRequest={handleQuoteRequest}
                />
                <a href="tel:9356566333" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outline"
                    size="xl"
                    iconName="Phone"
                    iconPosition="left"
                    iconSize={24}
                    className="px-8 py-4 text-lg font-bold"
                  >
                    Call 9356566333
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Gallery Lightbox */}
        <GalleryLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          projects={projects}
          initialProjectIndex={selectedProjectIndex}
        />

        {/* Floating Quote CTA */}
        <QuoteRequestCTA
          variant="floating"
          onQuoteRequest={handleQuoteRequest}
        />
      </div>
    </>
  );
};

export default ProjectGallery;