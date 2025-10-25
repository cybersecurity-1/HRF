import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectCard = ({ project, onProjectClick }) => {
  const handleClick = () => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  return (
    <div 
      className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer will-change-transform"
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-medium bg-primary/80 text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* View Details Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full">
            <Icon name="Eye" size={20} color="white" strokeWidth={2} />
          </div>
        </div>

        {/* Project Stats */}
        <div className="absolute bottom-4 left-4 right-4 transform transition-all duration-300 ease-out group-hover:translate-y-0 translate-y-2">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} color="white" strokeWidth={2} />
              <span className="text-sm font-body">{project.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Square" size={16} color="white" strokeWidth={2} />
              <span className="text-sm font-body">{project.area} sq ft</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Title and Category */}
          <div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Project Details */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} strokeWidth={2} />
              <span className="font-body">Completed: {project.completionDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} strokeWidth={2} />
              <span className="font-body">{project.duration} days</span>
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-body font-medium bg-muted text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;