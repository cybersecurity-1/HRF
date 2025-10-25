import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyContact = () => {
  const emergencyServices = [
    {
      title: "Roof Leak Emergency",
      description: "Immediate response for active leaks and water damage prevention",
      responseTime: "30-60 minutes",
      icon: "Droplets",
      priority: "high"
    },
    {
      title: "Storm Damage Assessment",
      description: "Post-storm inspection and emergency repairs to prevent further damage",
      responseTime: "2-4 hours",
      icon: "Cloud",
      priority: "high"
    },
    {
      title: "Structural Safety Issues",
      description: "Urgent repairs for compromised roof structures and safety hazards",
      responseTime: "1-2 hours",
      icon: "AlertTriangle",
      priority: "critical"
    },
    {
      title: "Equipment Malfunction",
      description: "HVAC and rooftop equipment emergency repairs and maintenance",
      responseTime: "4-8 hours",
      icon: "Settings",
      priority: "medium"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return 'text-error bg-error/10 border-error/20';
      case 'high':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'medium':
        return 'text-primary bg-primary/10 border-primary/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <div className="bg-gradient-to-br from-error/5 to-warning/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 bg-error/10 rounded-full mx-auto mb-6">
            <Icon name="Phone" size={32} color="var(--color-error)" strokeWidth={2} />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            24/7 Emergency Service
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When roofing emergencies strike, every minute counts. Our emergency response team is available around the clock to protect your property and minimize damage.
          </p>
        </div>

        {/* Emergency Contact Card */}
        <div className="bg-card rounded-lg border border-border shadow-lg p-8 mb-12 text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-error/10 rounded-full mx-auto mb-6">
            <Icon name="PhoneCall" size={40} color="var(--color-error)" strokeWidth={2} />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
            Emergency Hotline
          </h3>
          <a
            href="tel:+12145550199"
            className="text-4xl font-heading font-bold text-error hover:text-error/80 transition-colors duration-200 block mb-4"
          >
            
          </a>
          <p className="text-base font-body text-muted-foreground mb-6">
            Available 24 hours a day, 7 days a week, 365 days a year
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              iconSize={20}
              className="bg-error hover:bg-error/90 text-error-foreground font-body font-semibold"
              onClick={() => window.location.href = "tel:+919037297977"}
            >
              Call Emergency Line
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
              iconSize={20}
              className="border-error text-error hover:bg-error hover:text-error-foreground"
              onClick={() => window.location.href = "sms:+919633566333?body=EMERGENCY: Please describe your roofing emergency"}
            >
              Text Emergency
            </Button>
          </div>
        </div>

        {/* Emergency Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {emergencyServices.map((service, index) => (
            <div key={index} className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-muted rounded-lg flex-shrink-0">
                  <Icon name={service.icon} size={24} color="var(--color-muted-foreground)" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-body font-medium border ${getPriorityColor(service.priority)}`}>
                      {service.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm font-body text-muted-foreground mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} color="var(--color-success)" strokeWidth={2} />
                    <span className="text-sm font-body font-medium text-success">
                      Response Time: {service.responseTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Preparation Tips */}
        <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
              <Icon name="Info" size={20} color="var(--color-primary)" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Before You Call
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-base font-body font-semibold text-foreground mb-3">
                Safety First
              </h4>
              <ul className="space-y-2 text-sm font-body text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                  <span>Evacuate affected areas if water is entering</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                  <span>Turn off electricity in affected areas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                  <span>Place buckets to catch dripping water</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                  <span>Document damage with photos if safe</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-body font-semibold text-foreground mb-3">
                Information to Provide
              </h4>
              <ul className="space-y-2 text-sm font-body text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                  <span>Your exact location and contact information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                  <span>Nature and extent of the emergency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                  <span>Building type and roof material</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                  <span>Any immediate safety concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;