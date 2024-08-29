import React, { Component } from 'react'

function Header({ activeTab, onTabChange }) {
  return (
    <header className="header">
      <a>
        <img src="/icons/phz logo 2.svg" alt="logo" />
      </a>
      <div className="header-right">
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
          <button className="btn-logout">Log out</button>
        </nav>
      </div>
    </header>
  )
}
export default Header
