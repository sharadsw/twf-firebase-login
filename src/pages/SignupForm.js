import React from 'react'
import { Redirect } from 'react-router-dom'

const SignupForm = ({ user, handleSignUp }) => {

  if (user) {
    return ( <Redirect to="/profile" /> )
  }

  return (
    <div className="container is-max-desktop">
      <h1 className="title">Register an account</h1>

      <form onSubmit={handleSignUp}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g. johnsmith@gmail.com" name="email" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="Password" name="pass" />
          </div>
        </div>

        <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="Confirm Password" name="pass2" />
          </div>
        </div>

        <div className="control">
          <button className="button is-link" type="submit">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm