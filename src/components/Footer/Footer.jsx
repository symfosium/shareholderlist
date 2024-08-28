import React from 'react'

function Footer() {
  return (
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
        <div className="logo">
          <img src="/icons/big_logo.svg" alt="logo" />
        </div>
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
  )
}

export default Footer
