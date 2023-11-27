import React from 'react';
import './Searchbar.css'
const SearchBar = ({ onSearch }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const inputStyle = {
    flex: 1,
    marginRight: '10px',
    padding: '8px',
    border: 'none',
    borderRadius: '3px',
  };

  const iconStyle = {
    cursor: 'pointer',
    fontSize: '20px',
  };

  return (
    <div style={containerStyle}>
      <input type="text" placeholder="Search..Foods, Restaurants" style={inputStyle} />
      <span role="img" aria-label="search" style={iconStyle} onClick={onSearch}>
        🔍
      </span>
    </div>
  );
};

// Example usage:
const MySearch = () => {
  const handleSearch = () => {
    window.alert('SEARCH THE NEARBY RESTAURANT');
  };

  return (
    <div style={{ padding: '20px' }}> {/* Add padding after the navigation bar */}
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default MySearch;
