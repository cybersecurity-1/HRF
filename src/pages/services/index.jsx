
import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';

const ServicesPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20 pb-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 text-center">
          Our Services
        </h1>
        <ul className="space-y-6">
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">Trafford Sheet Work</h2>
            <p>Durable, cost-effective roofing for industrial and commercial buildings. Weather-resistant and energy-efficient.</p>
          </li>
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">Stone Coated Sheet Work</h2>
            <p>Premium stone-coated steel roofing for a blend of durability and aesthetics. Ideal for commercial and residential projects.</p>
          </li>
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">UPVC Sheet Work</h2>
            <p>Chemical-resistant UPVC roofing systems for factories, warehouses, and agricultural facilities.</p>
          </li>
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">Tile Roofing Work</h2>
            <p>Traditional and modern tile roofing solutions for commercial and institutional buildings.</p>
          </li>
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">Steel Frame Jally Works</h2>
            <p>Heavy-duty steel frame and jally fabrication for industrial structures. Engineered for strength and reliability.</p>
          </li>
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">Polycarbonate Sheet Work</h2>
            <p>Lightweight, UV-resistant polycarbonate roofing for skylights, canopies, and energy-efficient spaces.</p>
          </li>
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">Custom Solutions</h2>
            <p>Tailored roofing and structural solutions for unique industrial requirements. Consult with our experts for a custom project assessment.</p>
          </li>
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">Gate</h2>
            <p>Custom-designed and fabricated gates for industrial and commercial properties. Secure, durable, and aesthetically pleasing.</p>
          </li>
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">Grills</h2>
            <p>Security grills and decorative grills for windows and entryways. Enhancing security without compromising style.</p>
          </li>
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">Handrails</h2>
            <p>Safe and sturdy handrails for stairways, walkways, and ramps. Meeting safety standards with quality craftsmanship.</p>
          </li>
          <li className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold mb-2">Doors</h2>
            <p>Durable and secure door solutions for industrial and commercial buildings. Customizable to meet specific security and access requirements.</p>
          </li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
);

export default ServicesPage;
