import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import ServiceCard from './ServiceCard';
import ServiceDetailModal from '../../../components/ui/ServiceDetailModal';
import Button from '../../../components/ui/Button';


const ServicesSection = ({ onQuoteRequest }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Trafford Sheet Work",
      category: "Metal Roofing",
      description: "High-quality Trafford sheet installations providing excellent durability and weather resistance for industrial facilities. Our expert team ensures precise fitting and long-lasting performance with premium materials and advanced installation techniques.",
      image: "/assets/images/WhatsApp Image 2025-07-20 at 18.13.21.jpeg",
      icon: "Layers",
      features: [
        "Corrosion-resistant galvanized steel construction",
        "Superior weather sealing and waterproofing",
        "Custom fabrication for perfect fit",
        "Energy-efficient thermal properties",
        "Low maintenance requirements"
      ],
      specifications: {
        material: "Alu zinc sheet",
        thickness: "0.3mm - 0.5mm",
        coverage: "Up to 10,000 sq ft",
        warranty: "15 Years"
      },
      projectsCompleted: "120+",
      warranty: "15",
        images: [
          "/assets/images/WhatsApp Image 2025-07-20 at 18.13.21.jpeg",
          "/assets/images/WhatsApp Image1 2025-07-20 at 18.13.20 (1).jpeg",
          "/assets/images/WhatsApp Image2 2025-07-20 at 18.13.20 (2).jpeg",
        ],
      faqs: [
        {
          question: "How long does Trafford sheet installation take?",
          answer: "Typical installation takes 3-7 days depending on the size and complexity of the project."
        },
        {
          question: "What maintenance is required?",
          answer: "Annual inspections and cleaning are recommended to maintain optimal performance and warranty coverage."
        }
      ]
    },
    {
      id: 2,
      title: "Stone Coated Sheet Work",
      category: "Premium Roofing",
      description: "Premium stone-coated steel roofing systems combining the strength of metal with the aesthetic appeal of traditional roofing materials. Perfect for industrial buildings requiring both functionality and visual appeal.",
  image: "/assets/images/stone coated sheet1 (1).jpeg",
      icon: "Mountain",
      features: [
        "Natural stone granule coating",
        "Enhanced aesthetic appeal",
        "Superior impact resistance",
        "Fade-resistant color technology",
        "Noise reduction properties"
      ],
      specifications: {
        material: "Stone Coated Steel",
        thickness: "0.4mm - 0.8mm",
        coverage: "Up to 8,000 sq ft",
        warranty: "20 Years"
      },
      projectsCompleted: "85+",
      warranty: "20",
      images: [
        "/assets/images/stone coated sheet1 (1).jpeg",
        "/assets/images/stone coated sheet1 (2).jpeg",
        "/assets/images/stone coated sheet1 (3).jpeg"
      ],
      faqs: [
        {
          question: "How does stone coating improve performance?",
          answer: "Stone coating provides additional protection against UV rays, impact damage, and reduces thermal expansion."
        }
      ]
    },
    {
      id: 3,
      title: "UPVC Sheet Work",
      category: "Plastic Roofing",
      description: "Lightweight and durable UPVC roofing solutions ideal for industrial applications requiring chemical resistance and translucent lighting options. Cost-effective and environmentally friendly roofing choice.",
      image: "/assets/images/upvc1.jpeg",
      icon: "Shield",
      features: [
        "Chemical and corrosion resistance",
        "Lightweight construction",
        "UV stabilized materials",
        "Translucent options available",
        "Easy installation and maintenance"
      ],
      specifications: {
        material: "UPVC Plastic",
        thickness: "2mm - 6mm",
        coverage: "Up to 12,000 sq ft",
        warranty: "12 Years"
      },
      projectsCompleted: "95+",
      warranty: "12",
      images: [
        "/assets/images/upvc1.jpeg",
        "/assets/images/upvc2.jpeg",
      ],
      faqs: [
        {
          question: "Is UPVC suitable for extreme weather?",
          answer: "Yes, our UPVC sheets are designed to withstand extreme temperatures and weather conditions."
        }
      ]
    },
    {
      id: 4,
      title: "Tile Roofing Work",
      category: "Traditional Roofing",
      description: "Classic tile roofing installations providing timeless aesthetics and proven performance for industrial and commercial buildings. Available in various materials and styles to match architectural requirements.",
      image: "/assets/images/tile roof1.jpeg",
      icon: "Grid3x3",
      features: [
        "Multiple material options",
        "Excellent thermal insulation",
        "Fire resistant properties",
        "Long-lasting durability",
        "Traditional aesthetic appeal"
      ],
      specifications: {
        material: "Clay/Concrete Tiles",
        weight: "2.5 - 4.5 kg/sq ft",
        coverage: "Up to 6,000 sq ft",
        warranty: "25 Years"
      },
      projectsCompleted: "65+",
      warranty: "25",
      images: [
        "/assets/images/tile roof1.jpeg",
        "/assets/images/tile roof2 (1).jpeg",
      ],
      faqs: [
        {
          question: "What types of tiles do you install?",
          answer: "We install clay tiles, concrete tiles, and specialty architectural tiles based on project requirements."
        }
      ]
    },
    {
      id: 5,
      title: "Steel Frame Jally Works",
      category: "Structural Systems",
      description: "Robust steel frame jally systems providing excellent structural support and ventilation for industrial roofing applications. Engineered for maximum strength and optimal airflow management.",
      image: "/assets/images/jally1.jpeg",
      icon: "Building",
      features: [
        "High-strength steel construction",
        "Optimal ventilation design",
        "Custom engineering solutions",
        "Corrosion-resistant coating",
        "Modular installation system"
      ],
      specifications: {
        material: "Galvanized Steel Frame",
        loadCapacity: "Up to 150 kg/sq m",
        coverage: "Up to 15,000 sq ft",
        warranty: "18 Years"
      },
      projectsCompleted: "75+",
      warranty: "18",
      images: [
        "/assets/images/jally1.jpeg",
        "/assets/images/jally2.jpeg",
      ],
      faqs: [
        {
          question: "What is the load capacity of steel frame jally?",
          answer: "Our steel frame jally systems can support up to 150 kg per square meter with proper installation."
        }
      ]
    },
    {
      id: 6,
      title: "Polycarbonate Sheet Work",
      category: "Transparent Roofing",
      description: "Advanced polycarbonate roofing systems offering excellent light transmission while maintaining structural integrity. Perfect for industrial facilities requiring natural lighting solutions.",
      image: "/assets/images/polycarbon1 (2).jpeg",
      icon: "Sun",
      features: [
        "Excellent light transmission",
        "Impact resistant material",
        "UV protection coating",
        "Thermal insulation properties",
        "Flexible design options"
      ],
      specifications: {
        material: "U V coated polycarbonate sheet",
        thickness: "2 mm - 4 mm",
        coverage: "Up to 10,000 sq ft",
        warranty: "10 Years"
      },
      projectsCompleted: "110+",
      warranty: "10",
      images: [
        "/assets/images/polycarbon1 (2).jpeg",
        "/assets/images/polycarbon1 (1).jpeg",
        "/assets/images/polycarbon1 (3).jpeg",
        "/assets/images/polycarbon2.jpeg"
      ],
      faqs: [
        {
          question: "How much light does polycarbonate transmit?",
          answer: "Our polycarbonate sheets provide up to 90% light transmission while blocking harmful UV rays."
        }
      ]
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleQuoteRequest = (service) => {
    if (onQuoteRequest) {
      onQuoteRequest(service);
    }
  };

  return (
    <>
      <section id="services" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Icon name="Wrench" size={20} color="var(--color-primary)" strokeWidth={2} />
              <span className="text-primary font-body font-medium text-sm">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Professional Roofing
              <span className="block text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              From traditional tile work to modern polycarbonate installations, we provide comprehensive roofing solutions tailored to your industrial needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onServiceClick={handleServiceClick}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
                Every project is unique. Let our experts design a roofing solution that perfectly matches your specific requirements and budget.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageSquare"
                  iconPosition="left"
                  iconSize={20}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
                  onClick={() => handleQuoteRequest(null)}
                >
                  Discuss Your Project
                </Button>
                <a href="tel:9633566333" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    iconSize={20}
                    className="font-body font-semibold"
                  >
                    Call 9633566333
                    
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
        onQuoteRequest={handleQuoteRequest}
      />
    </>
  );
};

export default ServicesSection;