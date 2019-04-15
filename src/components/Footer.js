import React from 'react'
import './Footer.css'

export default (title) => (
  <footer className="footer">
    <div className="container">
      <span>
        © {new Date().getFullYear()} NICOLAS ROYBAL
      </span>
    </div>
  </footer>
)
