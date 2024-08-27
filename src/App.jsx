import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <header className="header">
          <div className="header-right">
            <button className="btn-new-shareholder">Add new shareholder</button>
            <button className="btn-logout">Log out</button>
          </div>
        </header>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search shareholders by name, ID, or contact"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        <div className="nav-buttons">
          <button className="nav-btn">Shareholders</button>
          <button className="nav-btn">Owners</button>
          <button className="nav-btn">Transaction History</button>
        </div>

        <h2>Shareholderlist</h2>
        <table className="shareholders-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Social security number</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <footer className="footer">
          <h2>Social media</h2>
          <div className="social-media">
            <div className="icons">
              <span>
                <a href="#">
                  <img src="/icons/linkedin.png" alt="linkedin" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src="/icons/facebook.png" alt="facebook" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src="/icons/email.png" alt="email" />
                </a>
              </span>
            </div>
          </div>

          <div className="contact-info">
            <div className="location">
              <p>HELSINKI</p>
              <p>PHZ Full Stack Oy</p>
              <p>PL 527, 00101 Helsinki</p>
            </div>
            <div className="location">
              <p>Forum Toimisto</p>
              <p>Yrjönkatu 23 B, 00100 Helsinki</p>
            </div>
            <div className="location">
              <p>TALLINNA</p>
              <p>Pärnu Mnt 130, 10141 Tallinn</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2022 PHZ Full Stack Oy. All Rights Reserved.</p>
            <p className="footer-bottom link">Login with PHZ</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
