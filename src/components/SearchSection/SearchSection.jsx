import React from 'react'

function SearchSection({ activeTab, isMobile }) {
  return (
    <div
      className={`search-section ${isMobile ? 'search-section-mobile' : ''}`}
    >
      {activeTab !== 'owners' && (
        <>
          <input
            type="text"
            placeholder="Search shareholders by name, ID, or contact"
            className={`search-input ${isMobile ? 'search-input-mobile' : ''}`}
          />
          <button
            className={`search-button ${
              isMobile ? 'search-button-mobile' : ''
            }`}
          >
            Search
          </button>
        </>
      )}
    </div>
  )
}

export default SearchSection
