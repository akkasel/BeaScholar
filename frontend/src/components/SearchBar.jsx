import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="input-group">
        <input
          type="text"
          placeholder="Masukan kata kunci disini..."
          className="search-input"
        />
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="filter-button-container">
        <button type="filter">
          <i className="fas fa-filter"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
