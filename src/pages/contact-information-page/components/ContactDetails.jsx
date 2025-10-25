import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactDetails = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Business Address",
      details: [
        "H R F Industries",
        "Olavokod, Palakkad",
        "Kerala, India"
      ],
      action: {
        label: "Get Directions",
        onClick: () => window.open("https://www.google.com/maps/place/HRF+INDUSTRIES/@10.7984454,76.6360693,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8718cc3f1b8ef:0x9aadafcbd7eba67a!8m2!3d10.7984454!4d76.6360693!16s%2Fg%2F11x1n1n_v8?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D", "_blank")
      }
    },
    {
      icon: "Phone",
      title: "Phone Numbers",
      details: [
        "Main Office: 9633566333",
        "Emergency: 9633566333",
       ,
      ],
      action: {
        label: "Call Now",
        onClick: () => window.location.href = "tel:+919633566333"
      }
    },
    {
      icon: "Mail",
      title: "Email Addresses",
      details: [
        "hashimtrussroofing@gmail.com",
        
      ],
      action: {
        label: "Send Email",
        onClick: () => window.location.href = "mailto:hashimtrussroofing@gmail.com?subject=Inquiry from Website"
      }
    },
    {
      icon: "Clock",
      title: "Business Hours",
      details: [
        "Monday - Friday: 7:00 AM - 6:00 PM",
        "Saturday: 8:00 AM - 4:00 PM",
        "Sunday: Emergency Only"
      
      ],
      action: {
        label: "Emergency Service",
        onClick: () => window.location.href = "tel:+919633566333"
      }
    }
  ];

  return (
    <div className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            How to Reach Us
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to connect with our professional team for all your industrial roofing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Icon name={info.icon} size={24} color="var(--color-primary)" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                {info.title}
              </h3>
              <div className="space-y-2 mb-6 flex-1">
                {info.details.map((detail, detailIndex) => (
                  <p
                    key={detailIndex}
                    className="text-sm font-body text-muted-foreground leading-relaxed"
                  >
                    {detail}
                  </p>
                ))}
              </div>
              <div className="mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName={info.icon}
                  iconPosition="left"
                  iconSize={16}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={info.action.onClick}
                >
                  {info.action.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;