import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterChips = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  className = '' 
}) => {
  return (
    <div className={`flex items-center space-x-2 overflow-x-auto pb-2 ${className}`}>
      {/* All Projects Filter */}
      <button
        onClick={() => onCategoryChange('all')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all duration-200 ${
          activeCategory === 'all' ?'bg-primary text-primary-foreground shadow-md' :'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
        }`}
      >
        <Icon name="Grid3X3" size={16} strokeWidth={2} />
        <span>All Projects</span>
      </button>

      {/* Category Filters */}
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all duration-200 ${
            activeCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
          }`}
        >
          <Icon name={category.icon} size={16} strokeWidth={2} />
          <span>{category.name}</span>
          <span className="text-xs opacity-75">({category.count})</span>
        </button>
      ))}
    </div>
  );
};

export default FilterChips;