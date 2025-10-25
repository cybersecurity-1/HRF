import React from 'react';
import ProjectCard from './ProjectCard';
import Icon from '../../../components/AppIcon';


const ProjectGrid = ({ 
  projects, 
  onProjectClick, 
  loading = false,
  className = '' 
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="aspect-[4/3] bg-muted rounded-lg" />
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center py-16 ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
            <Icon name="Image" size={32} color="var(--color-muted-foreground)" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            No Projects Found
          </h3>
          <p className="text-sm font-body text-muted-foreground max-w-sm">
            No projects match your current filter criteria. Try selecting a different category or view all projects.
          </p>
        </div>
      </div>
    );
  }

  // Create a masonry-like layout with varied sizes
  const getCardSize = (index) => {
    const patterns = ['default', 'large', 'tall', 'default', 'small', 'default'];
    return patterns[index % patterns.length];
  };

  return (
    <div className={`columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 ${className}`}>
      {projects.map((project, index) => (
        <div key={project.id} className="break-inside-avoid mb-6">
          <ProjectCard
            project={project}
            onClick={onProjectClick}
            size={getCardSize(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;