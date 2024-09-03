import React, { useState } from 'react'

const BurgerMenu = ({
  onTabChange,
  onAddShareholderClick,
  onAddTransactionClick,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuClick = (tab) => {
    onTabChange(tab) // changing tab
    toggleMenu() // closing menu
  }

  return (
    <div className="burger-menu">
      {/* open/close button for menu */}
      <button className="burger-menu-button" onClick={toggleMenu}>
        {isOpen ? '×' : '☰'}
      </button>

      {/* menu which showing when push burger menu button */}
      {isOpen && (
        <div className="burger-menu-content">
          <nav>
            <ul>
              <li>
                <a href="#" onClick={() => handleMenuClick('shareholders')}>
                  Shareholders
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleMenuClick('owners')}>
                  Owners
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleMenuClick('transactions')}>
                  Transaction history
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    onAddShareholderClick()
                    toggleMenu()
                  }}
                >
                  Add new shareholder
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    onAddTransactionClick()
                    toggleMenu()
                  }}
                >
                  Add new transaction
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default BurgerMenu
