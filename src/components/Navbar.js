import React from 'react'

const Navbar = () => {

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
            </a>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar