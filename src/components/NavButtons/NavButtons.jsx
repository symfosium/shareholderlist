import React from 'react'

function NavButtons({
  onAddShareholderClick,
  onAddTransactionClick,
  activeButton,
}) {
  return (
    <div className="nav-buttons">
      <button
        className={`nav-btn ${activeButton === 'shareholder' ? 'active' : ''}`}
        onClick={onAddShareholderClick}
      >
        Add new shareholder
      </button>
      <button
        className={`nav-btn ${activeButton === 'transaction' ? 'active' : ''}`}
        onClick={onAddTransactionClick}
      >
        Add new transaction
      </button>
    </div>
  )
}

export default NavButtons
