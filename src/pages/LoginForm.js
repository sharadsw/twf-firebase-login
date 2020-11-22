import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {

  return (
    <div className="container is-max-desktop">
      <h1 className="title">Log in to your account</h1>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g. johnsmith@gmail.com" />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" placeholder="Password" />
        </div>
      </div>

      <div class="control">
        <button class="button is-success">Log in</button>
      </div>
      <p className="help">
        Haven't registered yet? Click <Link to="/signup">here</Link> to sign up.
    </p>

    </div>
  )
}

export default LoginForm