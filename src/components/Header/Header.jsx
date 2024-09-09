import React, { useState, useEffect } from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

function Header({
  activeTab,
  onTabChange,
  onAddShareholderClick,
  onAddTransactionClick,
}) {
  const [isMobile, setIsMobile] = useState(false)

  // Checking width of window
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    handleResize() // Checking window's with with first rendering
    window.addEventListener('resize', handleResize) // Adding eventlistener if window width change
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="header">
      <a href="/">
        <img src="/icons/Sami.png" alt="logo" />
      </a>
      <div className="header-right">
        {/* Showing burger  */}
        {isMobile ? (
          <BurgerMenu
            onTabChange={onTabChange}
            onAddShareholderClick={onAddShareholderClick}
            onAddTransactionClick={onAddTransactionClick}
          />
        ) : (
          <nav className="button-group">
            <button
              onClick={() => onTabChange('shareholders')}
              className={activeTab === 'shareholders' ? 'active-tab' : ''}
            >
              Shareholders
            </button>
            <button
              onClick={() => onTabChange('owners')}
              className={activeTab === 'owners' ? 'active-tab' : ''}
            >
              Owners
            </button>
            <button
              onClick={() => onTabChange('transactions')}
              className={activeTab === 'transactions' ? 'active-tab' : ''}
            >
              Transaction History
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
