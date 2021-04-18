import '../assets/scss/components/navbar-top.scss'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavbarTop() {
  return (
    <header className="navbar-top">
      <div className="container">
        <Link to="/" className="brand-logo">
          <img src="/images/logo.png" alt="band logo" />
        </Link>

        <div className="navbar-menu">
          <NavLink
            to="/"
            className="nav-item"
            isActive={(match, location) => {
              if (!match) {
                return false
              }
              return location.pathname === '/'
            }}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item" activeClassName="active">
            About
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default NavbarTop
