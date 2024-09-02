import React, { useState } from 'react';

const DropdownFilter = ({ options, onFilterChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter By Expansion: </label>
      <select id="filter" value={selectedOption} onChange={handleChange}>
        <option value="all"> All </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
