import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ServiceModalOverlay from './components/ServiceModalOverlay';
import ServiceHeroSection from './components/ServiceHeroSection';
import ServiceInfoSection from './components/ServiceInfoSection';
import ServiceFAQSection from './components/ServiceFAQSection';
import ServiceNavigationControls from './components/ServiceNavigationControls';
import RelatedServicesSection from './components/RelatedServicesSection';

const ServiceDetailModal = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentService, setCurrentService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock services data
  const services = [
    {
      id: "trafford-sheet",
      title: "Trafford Sheet Work",
      category: "Metal Roofing",
      icon: "Layers",
      shortDescription: "Durable corrugated metal roofing solutions for industrial applications.",
      description: `Professional Trafford sheet installation provides exceptional durability and weather resistance for industrial facilities. Our corrugated metal roofing systems are engineered to withstand extreme weather conditions while maintaining structural integrity for decades.\n\nOur expert installation team ensures proper alignment, secure fastening, and optimal drainage to prevent water accumulation and extend roof lifespan. Each project includes comprehensive site assessment, material selection guidance, and post-installation maintenance recommendations.`,
      images: [
        "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
        "https://images.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
      ],
      benefits: [
        "Superior weather resistance and longevity",
        "Cost-effective installation and maintenance",
        "Excellent thermal performance",
        "Fire-resistant properties",
        "Recyclable and environmentally friendly",
        "Quick installation process"
      ],
      specifications: {
        material: "Galvanized Steel",
        thickness: "0.5mm - 1.2mm",
        profile: "Corrugated",
        coverage: "750mm effective width",
        warranty: "25 years structural",
        fireRating: "Class A"
      },
      applications: [
        "Industrial Warehouses",
        "Manufacturing Facilities",
        "Agricultural Buildings",
        "Commercial Structures",
        "Storage Facilities",
        "Workshop Buildings"
      ],
      faqs: [
        {
          question: "What is the expected lifespan of Trafford sheet roofing?",
          answer: "With proper installation and maintenance, Trafford sheet roofing typically lasts 25-30 years. The galvanized coating provides excellent corrosion resistance, and regular inspections can extend this lifespan significantly."
        },
        {
          question: "How does Trafford sheet perform in extreme weather?",
          answer: "Trafford sheets are designed to withstand high winds, heavy rain, and temperature fluctuations. The corrugated profile provides structural strength while allowing for thermal expansion and contraction."
        },
        {
          question: "What maintenance is required for Trafford sheet roofing?",
          answer: "Minimal maintenance is required - typically annual inspections, gutter cleaning, and occasional washing. Any damaged sheets should be replaced promptly to maintain weather integrity."
        }
      ]
    },
    {
      id: "stone-coated-sheet",
      title: "Stone Coated Sheet Work",
      category: "Premium Roofing",
      icon: "Mountain",
      shortDescription: "Premium stone-coated metal roofing with superior aesthetics and performance.",
      description: `Stone coated sheet roofing combines the durability of metal with the aesthetic appeal of traditional roofing materials. Our premium stone-coated systems feature multiple layers of protection including galvanized steel base, aluminum-zinc alloy coating, and natural stone granules.\n\nThis advanced roofing solution provides exceptional weather resistance, noise reduction, and thermal efficiency while maintaining an attractive appearance that complements any architectural style. Perfect for commercial and high-end industrial applications requiring both performance and visual appeal.`,
      images: [
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
        "https://images.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
      ],
      benefits: [
        "Superior aesthetic appeal with natural stone finish",
        "Excellent noise reduction properties",
        "Enhanced thermal efficiency",
        "Fade-resistant color retention",
        "Impact resistance from hail and debris",
        "50+ year lifespan with warranty"
      ],
      specifications: {
        material: "Steel with Stone Coating",
        thickness: "0.45mm base steel",
        coating: "Aluminum-Zinc Alloy",
        stoneGranules: "Natural Basalt",
        warranty: "50 years material",
        windRating: "180 mph"
      },
      applications: [
        "Premium Commercial Buildings",
        "Corporate Headquarters",
        "Hospitality Facilities",
        "Educational Institutions",
        "Healthcare Facilities",
        "Residential Complexes"
      ],
      faqs: [
        {
          question: "How does stone coating improve roof performance?",
          answer: "Stone coating provides multiple benefits: noise reduction, UV protection, thermal efficiency, and aesthetic appeal. The natural stone granules also help with fire resistance and impact protection."
        },
        {
          question: "Is stone coated roofing suitable for all climates?",
          answer: "Yes, stone coated roofing performs excellently in all climates. It handles extreme temperatures, high winds, heavy rain, and snow loads while maintaining its appearance and structural integrity."
        },
        {
          question: "What colors and styles are available?",
          answer: "We offer a wide range of colors and profiles including tile, shake, and shingle appearances. The stone coating allows for natural color variations that won't fade over time."
        }
      ]
    },
    {
      id: "upvc-sheet",
      title: "UPVC Sheet Work",
      category: "Plastic Roofing",
      icon: "Shield",
      shortDescription: "Lightweight, corrosion-resistant UPVC roofing for chemical and coastal environments.",
      description: `UPVC (Unplasticized Polyvinyl Chloride) sheet roofing offers exceptional chemical resistance and durability in harsh environments. Our UPVC systems are ideal for facilities exposed to corrosive chemicals, salt air, or extreme pH conditions where traditional metal roofing may deteriorate.\n\nThese lightweight yet strong roofing sheets provide excellent light transmission options, UV stability, and require minimal maintenance. Perfect for chemical processing plants, coastal facilities, and agricultural applications where corrosion resistance is paramount.`,
      images: [
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
        "https://images.pixabay.com/photo/2016/11/18/17/20/roof-1836562_1280.jpg",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
      ],
      benefits: [
        "Complete corrosion and chemical resistance",
        "Lightweight reducing structural load",
        "Excellent light transmission options",
        "UV stabilized for long-term durability",
        "Easy installation and maintenance",
        "Cost-effective for specialized applications"
      ],
      specifications: {
        material: "Unplasticized PVC",
        thickness: "1.5mm - 3.0mm",
        profile: "Corrugated/Trapezoidal",
        lightTransmission: "Up to 90%",
        temperatureRange: "-40°C to +70°C",
        warranty: "15 years UV stability"
      },
      applications: [
        "Chemical Processing Plants",
        "Coastal Industrial Facilities",
        "Agricultural Greenhouses",
        "Swimming Pool Enclosures",
        "Food Processing Facilities",
        "Pharmaceutical Plants"
      ],
      faqs: [
        {
          question: "How does UPVC compare to metal roofing in corrosive environments?",
          answer: "UPVC is completely immune to corrosion, rust, and most chemical attacks, making it superior to metal roofing in harsh chemical environments or coastal areas with salt exposure."
        },
        {
          question: "Can UPVC sheets handle structural loads?",
          answer: "Yes, despite being lightweight, UPVC sheets are engineered to handle standard roof loads including wind, snow, and maintenance access when properly supported."
        },
        {
          question: "What maintenance is required for UPVC roofing?",
          answer: "UPVC requires minimal maintenance - occasional cleaning with mild detergent and water. The material doesn't rust, rot, or require painting, making it very low-maintenance."
        }
      ]
    },
    {
      id: "tile-roofing",
      title: "Tile Roofing Work",
      category: "Traditional Roofing",
      icon: "Grid3x3",
      shortDescription: "Classic tile roofing solutions combining traditional aesthetics with modern performance.",
      description: `Professional tile roofing installation combines timeless aesthetic appeal with modern performance standards. Our tile roofing systems utilize high-quality clay or concrete tiles engineered for durability, weather resistance, and thermal efficiency.\n\nEach installation includes proper underlayment, ventilation systems, and precision tile placement to ensure optimal performance and longevity. Our experienced craftsmen understand the intricacies of tile installation, from proper overlap to ridge and hip detailing.`,
      images: [
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        "https://images.pixabay.com/photo/2016/11/29/09/38/roof-1868819_1280.jpg",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"
      ],
      benefits: [
        "Timeless aesthetic appeal and character",
        "Excellent thermal mass and insulation",
        "Fire resistant and non-combustible",
        "Long lifespan with minimal maintenance",
        "Environmentally sustainable materials",
        "Superior weather resistance"
      ],
      specifications: {
        material: "Clay/Concrete Tiles",
        weight: "2.5-4.5 kg per tile",
        profile: "Various traditional profiles",
        coverage: "10-12 tiles per m²",
        warranty: "30+ years material",
        fireRating: "Class A non-combustible"
      },
      applications: [
        "Heritage Buildings",
        "Residential Complexes",
        "Hospitality Facilities",
        "Educational Institutions",
        "Religious Buildings",
        "Cultural Centers"
      ],
      faqs: [
        {
          question: "How long does tile roofing typically last?",
          answer: "Quality tile roofing can last 50-100 years with proper installation and maintenance. Clay tiles often outlast the structure they're installed on, making them an excellent long-term investment."
        },
        {
          question: "Are tile roofs suitable for all climates?",
          answer: "Tile roofs perform well in most climates but require special consideration in freeze-thaw regions. Proper installation with appropriate underlayment is crucial for cold climate performance."
        },
        {
          question: "What structural requirements are needed for tile roofing?",
          answer: "Tile roofing is heavier than other materials, requiring adequate structural support. Our engineers assess each project to ensure proper load-bearing capacity before installation."
        }
      ]
    },
    {
      id: "steel-frame-jally",
      title: "Steel Frame Jally Works",
      category: "Structural Systems",
      icon: "Building",
      shortDescription: "Robust steel frame structures providing superior support for industrial roofing systems.",
      description: `Steel frame jally works provide the essential structural foundation for industrial roofing systems. Our engineered steel frameworks are designed to support various roofing materials while withstanding extreme loads, weather conditions, and seismic forces.\n\nEach steel frame system is custom-designed using advanced engineering software to optimize material usage while ensuring structural integrity. Our fabrication and installation teams work with precision to deliver frameworks that exceed industry standards for safety and performance.`,
      images: [
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
        "https://images.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
      ],
      benefits: [
        "Superior structural strength and stability",
        "Custom engineering for specific loads",
        "Rapid installation and assembly",
        "Excellent seismic and wind resistance",
        "Long-term durability with proper coating",
        "Adaptable to various roofing systems"
      ],
      specifications: {
        material: "Structural Grade Steel",
        coating: "Hot-Dip Galvanized",
        beamSizes: "Various IPE/HEA sections",
        connections: "Bolted/Welded",
        loadCapacity: "As per engineering design",
        warranty: "25 years structural"
      },
      applications: [
        "Large Span Industrial Buildings",
        "Manufacturing Facilities",
        "Warehouse Complexes",
        "Aircraft Hangars",
        "Sports Facilities",
        "Exhibition Centers"
      ],
      faqs: [
        {
          question: "How are steel frame systems designed for specific projects?",
          answer: "Each steel frame system is custom-engineered based on site conditions, load requirements, local building codes, and roofing system specifications. We use advanced structural analysis software for optimal design."
        },
        {
          question: "What protection is provided against corrosion?",
          answer: "All steel components receive hot-dip galvanizing or appropriate protective coatings based on environmental conditions. This provides decades of corrosion protection with minimal maintenance."
        },
        {
          question: "How quickly can steel frame systems be installed?",
          answer: "Steel frame installation is typically faster than other structural systems due to prefabrication. Most projects can be erected within days to weeks depending on size and complexity."
        }
      ]
    },
    {
      id: "polycarbonate-sheet",
      title: "Polycarbonate Sheet Work",
      category: "Translucent Roofing",
      icon: "Sun",
      shortDescription: "High-performance translucent roofing providing natural light with weather protection.",
      description: `Polycarbonate sheet roofing systems provide exceptional light transmission while maintaining superior impact resistance and weather protection. Our polycarbonate solutions are ideal for applications requiring natural lighting without compromising structural integrity or thermal performance.\n\nThese advanced polymer sheets offer excellent UV protection, thermal insulation properties, and virtually unbreakable durability. Perfect for skylights, canopies, and full roofing systems where natural light is desired while maintaining weather protection.`,
      images: [
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
        "https://images.pixabay.com/photo/2016/11/29/13/14/greenhouse-1869958_1280.jpg",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
      ],
      benefits: [
        "Excellent light transmission up to 90%",
        "Superior impact resistance - virtually unbreakable",
        "Outstanding thermal insulation properties",
        "UV protection preventing yellowing",
        "Lightweight reducing structural requirements",
        "Easy installation and maintenance"
      ],
      specifications: {
        material: "Polycarbonate Polymer",
        thickness: "4mm - 25mm",
        structure: "Solid/Twin-wall/Multi-wall",
        lightTransmission: "Up to 90%",
        impactStrength: "250x stronger than glass",
        warranty: "10 years UV protection"
      },
      applications: [
        "Skylights and Roof Lights",
        "Canopies and Walkway Covers",
        "Greenhouse Structures",
        "Swimming Pool Enclosures",
        "Atrium Roofing",
        "Commercial Facades"
      ],
      faqs: [
        {
          question: "How does polycarbonate compare to glass for roofing applications?",
          answer: "Polycarbonate is much lighter, virtually unbreakable, provides better thermal insulation, and is easier to install than glass while offering similar light transmission properties."
        },
        {
          question: "Will polycarbonate sheets yellow or degrade over time?",
          answer: "Quality polycarbonate sheets with UV protection maintain their clarity and properties for many years. Our sheets come with warranties against yellowing and degradation."
        },
        {
          question: "What thermal performance can be expected?",
          answer: "Multi-wall polycarbonate sheets provide excellent thermal insulation, significantly better than single glazing and comparable to double glazing in many applications."
        }
      ]
    }
  ];

  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setCurrentService(service);
        setIsModalOpen(true);
      }
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/homepage');
  };

  const handleServiceChange = (newService) => {
    setCurrentService(newService);
    navigate(`/service-detail-modal?service=${newService.id}`, { replace: true });
  };

  const handleViewProjects = () => {
    navigate('/project-gallery');
  };

  const handleRequestQuote = () => {
    navigate(`/quote-request-form?service=${currentService?.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceModalOverlay isOpen={isModalOpen} onClose={handleCloseModal}>
        {currentService && (
          <>
            <ServiceHeroSection 
              service={currentService} 
              onClose={handleCloseModal}
            />
            
            <ServiceInfoSection service={currentService} />
            
            <ServiceFAQSection faqs={currentService.faqs} />
            
            <RelatedServicesSection 
              currentService={currentService}
              allServices={services}
              onServiceChange={handleServiceChange}
            />
            
            <ServiceNavigationControls
              currentService={currentService}
              allServices={services}
              onServiceChange={handleServiceChange}
              onViewProjects={handleViewProjects}
              onRequestQuote={handleRequestQuote}
            />
          </>
        )}
      </ServiceModalOverlay>

      {/* Fallback content when modal is not open */}
      {!isModalOpen && (
        <div className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
              Service Details
            </h1>
            <p className="text-base font-body text-muted-foreground mb-6">
              Please select a service to view detailed information.
            </p>
            <button
              onClick={() => navigate('/homepage')}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailModal;