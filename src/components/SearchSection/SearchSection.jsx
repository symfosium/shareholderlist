import React from 'react'

function SearchSection() {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Search shareholders by name, ID, or contact"
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  )
}

export default SearchSection
