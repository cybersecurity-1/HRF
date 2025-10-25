import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProjectCard = ({ 
  project, 
  onClick, 
  className = '',
  size = 'default' 
}) => {
  const sizeClasses = {
    small: 'aspect-square',
    default: 'aspect-[4/3]',
    large: 'aspect-[3/2]',
    tall: 'aspect-[3/4]'
  };

  return (
    <div 
      className={`group relative overflow-hidden rounded-lg bg-card border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${sizeClasses[size]} ${className}`}
      onClick={() => onClick(project)}
    >
      {/* Project Image */}
      <div className="absolute inset-0">
        <Image
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>

      {/* Project Info Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {/* Category Badge */}
          <div className="mb-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-body font-medium bg-primary/80 text-white backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg font-heading font-bold mb-1 line-clamp-2">
            {project.title}
          </h3>

          {/* Project Details */}
          <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.location && (
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={14} color="white" strokeWidth={2} />
                <span className="text-sm font-body text-white/90">
                  {project.location}
                </span>
              </div>
            )}
            
            {project.completionDate && (
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={14} color="white" strokeWidth={2} />
                <span className="text-sm font-body text-white/90">
                  Completed {project.completionDate}
                </span>
              </div>
            )}

            {project.images && project.images.length > 1 && (
              <div className="flex items-center space-x-2">
                <Icon name="Image" size={14} color="white" strokeWidth={2} />
                <span className="text-sm font-body text-white/90">
                  {project.images.length} photos
                </span>
              </div>
            )}
          </div>
        </div>

        {/* View Project Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full">
            <Icon name="Eye" size={16} color="white" strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;