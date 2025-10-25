import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ 
  searchQuery, 
  onSearchChange, 
  placeholder = "Search projects by name, location, or type...",
  className = '' 
}) => {
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Icon name="Search" size={20} strokeWidth={2} />
        </div>
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Clear search"
          >
            <Icon name="X" size={18} strokeWidth={2} />
          </button>
        )}
      </div>
      
      {searchQuery && (
        <div className="mt-2 text-sm font-body text-muted-foreground">
          Search results for "{searchQuery}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;