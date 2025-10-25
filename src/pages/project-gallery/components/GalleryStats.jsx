import React from 'react';
import Icon from '../../../components/AppIcon';

const GalleryStats = ({ projects, className = '' }) => {
  const totalProjects = projects.length;
  const completedThisYear = projects.filter(project => 
    project.completionDate && project.completionDate.includes('2024')
  ).length;
  
  const categories = [...new Set(projects.map(project => project.category))];
  const totalCategories = categories.length;

  const stats = [
    {
      icon: 'Building2',
      label: 'Total Projects',
      value: totalProjects,
      color: 'text-primary'
    },
    {
      icon: 'Calendar',
      label: 'Completed in 2024',
      value: completedThisYear,
      color: 'text-success'
    },
    {
      icon: 'Grid3X3',
      label: 'Service Categories',
      value: totalCategories,
      color: 'text-accent'
    }
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-muted ${stat.color}`}>
              <Icon name={stat.icon} size={20} strokeWidth={2} />
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm font-body text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryStats;