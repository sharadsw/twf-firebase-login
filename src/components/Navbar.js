import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/">
            <a className="navbar-item">
              Home
          </a>
          </Link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Link to="/signup">
              <a class="button is-primary mr-2">
                <strong>Sign up</strong>
              </a>
            </Link>
            <Link to="/login">
              <a class="button is-light">
                Log in
            </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar