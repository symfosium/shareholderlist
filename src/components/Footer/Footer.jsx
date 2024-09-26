import React from 'react'

function Footer({ isMobile }) {
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
      {!isMobile && (
        <div className="contact-info">
          <div className="location"></div>
        </div>
      )}

      <div className="footer-bottom">
        <p>© 2022 Sami Oy. All Rights Reserved.</p>
        <p className="footer-bottom link">Login with Sami</p>
      </div>
    </footer>
  )
}

export default Footer
