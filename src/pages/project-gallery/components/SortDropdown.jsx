import React from 'react';
import Select from '../../../components/ui/Select';

const SortDropdown = ({ 
  sortBy, 
  onSortChange, 
  className = '' 
}) => {
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'title', label: 'Project Name A-Z' },
    { value: 'category', label: 'Category' },
    { value: 'location', label: 'Location' }
  ];

  return (
    <div className={className}>
      <Select
        label="Sort by"
        options={sortOptions}
        value={sortBy}
        onChange={onSortChange}
        className="min-w-[180px]"
      />
    </div>
  );
};

export default SortDropdown;