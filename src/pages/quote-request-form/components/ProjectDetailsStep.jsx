import React from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const ProjectDetailsStep = ({ formData, updateFormData, errors }) => {
  const serviceOptions = [
    { value: 'trafford-sheet', label: 'Trafford Sheet Work', description: 'Corrugated metal roofing solutions' },
    { value: 'stone-coated', label: 'Stone Coated Sheet Work', description: 'Durable stone-coated metal roofing' },
    { value: 'upvc-sheet', label: 'UPVC Sheet Work', description: 'Lightweight plastic roofing sheets' },
    { value: 'tile-roofing', label: 'Tile Roofing Work', description: 'Traditional and modern tile installations' },
    { value: 'steel-frame', label: 'Steel Frame Jally Works', description: 'Structural steel framework systems' },
    { value: 'polycarbonate', label: 'Polycarbonate Sheet Work', description: 'Transparent and translucent roofing' }
  ];

  const projectTypeOptions = [
    { value: 'new-construction', label: 'New Construction', description: 'Brand new roofing installation' },
    { value: 'replacement', label: 'Roof Replacement', description: 'Complete roof replacement' },
    { value: 'repair', label: 'Roof Repair', description: 'Repair existing roofing issues' },
    { value: 'maintenance', label: 'Maintenance', description: 'Routine maintenance and inspection' },
    { value: 'upgrade', label: 'Roof Upgrade', description: 'Improve existing roofing system' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 2 weeks)', description: 'Urgent project needs' },
    { value: '1-month', label: '1 Month', description: 'Start within 30 days' },
    { value: '2-3-months', label: '2-3 Months', description: 'Flexible timeline' },
    { value: '6-months', label: '6+ Months', description: 'Long-term planning' },
    { value: 'planning', label: 'Just Planning', description: 'Gathering information' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000', description: 'Small residential projects' },
    { value: '10k-25k', label: '$10,000 - $25,000', description: 'Medium residential projects' },
    { value: '25k-50k', label: '$25,000 - $50,000', description: 'Large residential projects' },
    { value: '50k-100k', label: '$50,000 - $100,000', description: 'Small commercial projects' },
    { value: 'over-100k', label: 'Over $100,000', description: 'Large commercial projects' },
    { value: 'not-sure', label: 'Not Sure', description: 'Need professional assessment' }
  ];

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const handleCheckboxChange = (field, checked) => {
    updateFormData({ [field]: checked });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          Project Details
        </h2>
        <p className="text-base font-body text-muted-foreground">
          Tell us about your roofing project requirements.
        </p>
      </div>

      <Select
        label="Service Type"
        description="Select the primary roofing service you need"
        options={serviceOptions}
        value={formData.serviceType || ''}
        onChange={(value) => handleInputChange('serviceType', value)}
        error={errors.serviceType}
        searchable
        required
      />

      <Select
        label="Project Type"
        description="What type of roofing project is this?"
        options={projectTypeOptions}
        value={formData.projectType || ''}
        onChange={(value) => handleInputChange('projectType', value)}
        error={errors.projectType}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Timeline"
          description="When do you need this completed?"
          options={timelineOptions}
          value={formData.timeline || ''}
          onChange={(value) => handleInputChange('timeline', value)}
          error={errors.timeline}
          required
        />

        <Select
          label="Budget Range"
          description="What's your estimated budget?"
          options={budgetOptions}
          value={formData.budget || ''}
          onChange={(value) => handleInputChange('budget', value)}
          error={errors.budget}
        />
      </div>

      <Input
        label="Project Location"
        type="text"
        placeholder="Enter the project address or city"
        description="Where is the roofing project located?"
        value={formData.location || ''}
        onChange={(e) => handleInputChange('location', e.target.value)}
        error={errors.location}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Building Size (sq ft)"
          type="number"
          placeholder="e.g., 2500"
          description="Approximate square footage"
          value={formData.buildingSize || ''}
          onChange={(e) => handleInputChange('buildingSize', e.target.value)}
          error={errors.buildingSize}
        />

        <Input
          label="Number of Stories"
          type="number"
          placeholder="e.g., 2"
          description="How many floors?"
          value={formData.stories || ''}
          onChange={(e) => handleInputChange('stories', e.target.value)}
          error={errors.stories}
        />
      </div>

      <div className="space-y-4">
        <label className="text-sm font-body font-medium text-foreground">
          Additional Requirements
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Checkbox
            label="Insulation Required"
            description="Need thermal insulation"
            checked={formData.needsInsulation || false}
            onChange={(e) => handleCheckboxChange('needsInsulation', e.target.checked)}
          />
          <Checkbox
            label="Gutter Installation"
            description="Include gutter system"
            checked={formData.needsGutters || false}
            onChange={(e) => handleCheckboxChange('needsGutters', e.target.checked)}
          />
          <Checkbox
            label="Ventilation System"
            description="Roof ventilation required"
            checked={formData.needsVentilation || false}
            onChange={(e) => handleCheckboxChange('needsVentilation', e.target.checked)}
          />
          <Checkbox
            label="Skylight Installation"
            description="Include skylights"
            checked={formData.needsSkylights || false}
            onChange={(e) => handleCheckboxChange('needsSkylights', e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsStep;