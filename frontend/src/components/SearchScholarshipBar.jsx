import React, { useState } from "react";

const SearchScholarshipBar = ({ value, onChange, onSearch }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(); // Call onSearch when Enter key is pressed
    }
  };

  const handleInputClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="search-bar">
      <div className="input-group">
        <input
          type="text"
          placeholder="Masukkan judul beasiswa di sini..."
          className={`search-input ${isClicked ? "glow-red" : ""}`}
          value={value}
          onChange={onChange}
          onKeyPress={handleKeyPress} // Add onKeyPress event
          onClick={handleInputClick} // Add onClick event
        />
        <div className="search-icon">
          <i onClick={onSearch} className="fas fa-search"></i>
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

export default SearchScholarshipBar;

