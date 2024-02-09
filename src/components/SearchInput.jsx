import React from "react";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder=" Chercher un produit..."
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
