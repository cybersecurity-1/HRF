import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import QuoteRequestCTA from '../../components/ui/QuoteRequestCTA';
import ContactHeader from './components/ContactHeader';
import ContactDetails from './components/ContactDetails';
import LocationMap from './components/LocationMap';
import ContactForm from './components/ContactForm';
import TrustSignals from './components/TrustSignals';
import EmergencyContact from './components/EmergencyContact';
import Footer from '../homepage/components/Footer';

const ContactInformationPage = () => {
  const handleQuoteRequest = (preSelectedService = null) => {
    // This would typically open a quote request modal or navigate to quote form
    console.log('Opening quote request modal', { preSelectedService });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Information - Industrial Roofing Solutions | Professional Construction Services</title>
        <meta 
          name="description" 
          content="Contact Industrial Roofing Solutions for professional roofing services. Get directions, business hours, emergency service, and request quotes. Serving Dallas-Fort Worth metroplex." 
        />
        <meta name="keywords" content="industrial roofing contact, roofing contractor Dallas, emergency roofing service, construction company contact" />
        <meta property="og:title" content="Contact Information - Industrial Roofing Solutions" />
        <meta property="og:description" content="Professional industrial roofing services in Dallas-Fort Worth. Contact us for quotes, emergency service, and expert consultation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-information-page" />
      </Helmet>

      <Header />
      
      <main className="pt-16">
        <ContactHeader />
        <ContactDetails />
        <LocationMap />
        <EmergencyContact />
        <ContactForm />
        <TrustSignals />
        <Footer />
      </main>

      <QuoteRequestCTA 
        variant="floating"
        onQuoteRequest={handleQuoteRequest}
      />

      {/* Footer */}
      {/* <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">
                Industrial Roofing Solutions
              </h3>
              <p className="text-sm font-body text-background/80 leading-relaxed">
                Professional industrial roofing and construction services serving the Dallas-Fort Worth metroplex since 2009.
              </p>
            </div>
            <div>
              <h4 className="text-base font-heading font-semibold mb-4">
                Quick Contact
              </h4>
              <div className="space-y-2 text-sm font-body text-background/80">
                <p>Phone: (214) 555-0123</p>
                <p>Emergency: (214) 555-0199</p>
                <p>Email: info@industrialroofing.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-base font-heading font-semibold mb-4">
                Service Hours
              </h4>
              <div className="space-y-2 text-sm font-body text-background/80">
                <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Emergency: 24/7 Available</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm font-body text-background/60">
              © {new Date().getFullYear()} Industrial Roofing Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default ContactInformationPage;