import React from 'react'
import './SearchSection.css'

function SearchSection({
  searchQuery,
  onSearchChange,
  onClearSearch,
  hideInput,
}) {
  return (
    <div className="search-section">
      <div className="input-container">
          {!hideInput && (
          <>
            <input
              type="text"
              placeholder="Search by name"
              className="search-input"
              value={searchQuery}
              onChange={onSearchChange}
            />
            {searchQuery && (
              <button className="clear-button" onClick={onClearSearch}>
                Clear
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default SearchSection
