import React from 'react'

function SearchSection({ activeTab }) {
  return (
    <div className="search-section">
      {activeTab !== 'owners' && (
        <>
          <input
            type="text"
            placeholder="Search shareholders by name, ID, or contact"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </>
      )}
    </div>
  )
}

export default SearchSection
