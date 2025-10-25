import React, { useEffect, useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';

// 🔹 Reusable Counter Component
const CountUpNumber = ({ target, duration = 4000, suffix = "", start = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // don't run until visible

    let startVal = 0;
    const end = parseInt(target.replace(/\D/g, ""), 10); // extract number part
    if (isNaN(end)) return;

    const incrementTime = 30; // ms
    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      startVal += step;
      if (startVal >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(startVal));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, start]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const TrustSignals = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "25+", label: "Years Experience", icon: "Calendar" },
    { number: "1000+", label: "Projects Completed", icon: "Building" },
    { number: "98%", label: "Customer Satisfaction", icon: "Star" },
    { number: "24/7", label: "Emergency Service", icon: "Clock" }
  ];

  return (
    <div ref={sectionRef} className="bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Signals Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across kerala with proven expertise and industry-leading certifications.
          </p>
        </div>

        {/* Statistics with animated numbers */}
        <div className="bg-card rounded-lg border border-border p-8 mb-16 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const match = stat.number.match(/^(\d+)(\D*)$/);
              const value = match ? match[1] : stat.number;
              const suffix = match ? match[2] : "";

              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-3">
                    <Icon name={stat.icon} size={24} color="var(--color-accent)" strokeWidth={2} />
                  </div>
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-1">
                    {/\d/.test(stat.number) ? (
                      <CountUpNumber target={value} suffix={suffix} start={inView} />
                    ) : (
                      stat.number
                    )}
                  </div>
                  <p className="text-sm font-body text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials & Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Testimonials */}
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                <Icon name="MessageSquare" size={20} color="var(--color-primary)" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground">
                What Our Clients Say
              </h3>
            </div>

            <div className="space-y-6">
              <div className="p-4 border border-border rounded-lg bg-muted/50">
                <p className="text-sm font-body text-foreground mb-3">
                  " hrf industrial roofing did an outstanding job on our warehouse project. 
                  The team was professional, efficient, and the quality of work exceeded expectations."
                </p>
                <p className="text-xs font-body text-muted-foreground">
                  — antony, Lulu Manager
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg bg-muted/50">
                <p className="text-sm font-body text-foreground mb-3">
                  "Quick response for our emergency repair and fair pricing. 
                  We’ll definitely use them for future projects."
                </p>
                <p className="text-xs font-body text-muted-foreground">
                  — sharon, Facility Director
                </p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
                <Icon name="Download" size={20} color="var(--color-accent)" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Resources
              </h3>
            </div>
            <div className="space-y-4">
              <a href="#" className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" size={20} color="var(--color-muted-foreground)" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">Company Brochure</p>
                    <p className="text-xs font-body text-muted-foreground">PDF • 2.4 MB</p>
                  </div>
                </div>
                <Icon name="Download" size={16} color="var(--color-muted-foreground)" strokeWidth={2} />
              </a>

              <a href="#" className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={20} color="var(--color-muted-foreground)" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">Certifications</p>
                    <p className="text-xs font-body text-muted-foreground">PDF • 1.8 MB</p>
                  </div>
                </div>
                <Icon name="Download" size={16} color="var(--color-muted-foreground)" strokeWidth={2} />
              </a>

              <a href="#" className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <Icon name="Map" size={20} color="var(--color-muted-foreground)" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">Service Area Map</p>
                    <p className="text-xs font-body text-muted-foreground">PDF • 950 KB</p>
                  </div>
                </div>
                <Icon name="Download" size={16} color="var(--color-muted-foreground)" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
