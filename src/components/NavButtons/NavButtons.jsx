import React from 'react'

function NavButtons({ onAddShareholderClick, onAddTransactionClick }) {
  return (
    <div className="nav-buttons">
      <button className="nav-btn" onClick={onAddShareholderClick}>
        Add new shareholder
      </button>
      <button className="nav-btn" onClick={onAddTransactionClick}>
        Add new transaction
      </button>
    </div>
  )
}

export default NavButtons
