import React, { useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
// import ProjectGallerySection from './components/ProjectGallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';

const Homepage = () => {
  const handleQuoteRequest = useCallback((preSelectedService = null) => {
    // This would typically open a quote request modal or navigate to quote form
    console.log('Quote request initiated', { preSelectedService });
  }, []);

  useEffect(() => {
    if (window.location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }, 100); // Delay of 100 milliseconds
      }
    }
  }, []);

  const handleSmoothScroll = useCallback((targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Industrial Roofing Solutions - Premium Commercial & Industrial Roofing Services</title>
        <meta 
          name="description" 
          content="Professional industrial roofing services including Trafford sheets, stone coated roofing, UPVC, tile work, steel frame jally, and polycarbonate installations. 25+ years experience, licensed & insured." 
        />
        <meta 
          name="keywords" 
          content="industrial roofing, commercial roofing, Trafford sheet work, stone coated roofing, UPVC sheets, tile roofing, steel frame jally, polycarbonate roofing, Detroit roofing contractor" 
        />
        <meta name="author" content="Industrial Roofing Solutions" />
        <meta property="og:title" content="Industrial Roofing Solutions - Premium Commercial & Industrial Roofing Services" />
        <meta 
          property="og:description" 
          content="Professional industrial roofing services with 25+ years experience. Specializing in Trafford sheets, stone coated roofing, and custom solutions." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://industrialroofing.com" />
        <link rel="canonical" href="https://industrialroofing.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection onQuoteRequest={handleQuoteRequest} />

          {/* Services Section */}
          <ServicesSection onQuoteRequest={handleQuoteRequest} />

          {/* Project Gallery Section (commented out) */}
          {/* <ProjectGallerySection /> */}

          {/* Contact Section */}
          <ContactSection onQuoteRequest={handleQuoteRequest} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quote CTA for Mobile */}
        <QuoteRequestCTA
          variant="floating"
          onQuoteRequest={handleQuoteRequest}
        />

        {/* Scroll to Top Button */}
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 left-6 z-40 hidden md:flex items-center justify-center w-12 h-12 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-secondary/90 will-change-transform"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Homepage;
