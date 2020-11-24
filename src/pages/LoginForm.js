import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const LoginForm = ({ user, handleLogIn }) => {

  if (user) {
    return ( <Redirect to="/profile" /> )
  }

  return (
    <div className="container is-max-desktop">
      <h1 className="title">Log in to your account</h1>

      <form onSubmit={handleLogIn}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g. johnsmith@gmail.com" name="loginmail" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="Password" name="loginpass" />
          </div>
        </div>

        <div class="control">
          <button class="button is-success" type="submit">Log in</button>
        </div>
        <p className="help">
          Haven't registered yet? Click <Link to="/signup">here</Link> to sign up.
        </p>
      </form>

    </div>
  )
}

export default LoginForm