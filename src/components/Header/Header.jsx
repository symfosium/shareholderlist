import React, { Component } from 'react'

function Header() {
  return (
    <header className="header">
      <a>
        <img src="/icons/phz logo 2.svg" alt="logo" />
      </a>
      <div className="header-right">
        <button className="btn-new-shareholder">Add new shareholder</button>
        <button className="btn-logout">Log out</button>
      </div>
    </header>
  )
}
export default Header
