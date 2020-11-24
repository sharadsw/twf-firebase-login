import React from 'react'
import { Link } from 'react-router-dom'

const AuthButtons = () => {
  return (
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
  )
}

const UserInfo = ({ email, signout }) => {
  return (
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
        {email}
      </a>

      <div class="navbar-dropdown">
        <Link to="/profile">
          <a class="navbar-item">
            Profile
          </a>
        </Link>
        <hr class="navbar-divider" />
        <a class="navbar-item" onClick={signout}>
          Sign Out
        </a>
      </div>
    </div>
  )
}

const Navbar = ({ user, handleSignOut }) => {

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
          {user ? (
            <UserInfo email={user.email} signout={handleSignOut} />
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar