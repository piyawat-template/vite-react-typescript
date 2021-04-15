import '../assets/scss/components/navbar-top.scss'

import React from 'react'
import { Link } from 'react-router-dom'

function NavbarTop() {
  return (
    <header className="navbar-top">
      <div className="container">
        <Link to="/" className="brand-logo">
          <img src="/images/logo.png" alt="band logo" />
        </Link>

        <div className="navbar-menu">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </div>
      </div>
    </header>
  )
}

export default NavbarTop
