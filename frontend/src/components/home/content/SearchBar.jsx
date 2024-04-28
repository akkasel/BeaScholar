import React from 'react';

const SearchBar = () => {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Masukan kata kunci disini..." />
        <button type="filter">
          <i className="fas fa-filter"></i>
        </button>
      </div>
    );
  };
  
export default SearchBar;