import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceFAQSection = ({ faqs }) => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="p-6 border-t border-border">
      <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
        Frequently Asked Questions
      </h3>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors duration-200"
            >
              <span className="font-body font-medium text-foreground pr-4">
                {faq.question}
              </span>
              <Icon 
                name={expandedFAQ === index ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                strokeWidth={2}
                className="flex-shrink-0 text-muted-foreground"
              />
            </button>
            {expandedFAQ === index && (
              <div className="px-4 pb-4">
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFAQSection;