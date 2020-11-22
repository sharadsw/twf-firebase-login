import React from 'react'

const SignupForm = () => {

  return (
    <div className="container is-max-desktop">
      <h1 className="title">Register an account</h1>

      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input className="input" type="text" placeholder="Username" />
        </div>
      </div>

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

      <div className="field">
        <label className="label">Confirm Password</label>
        <div className="control">
          <input className="input" type="password" placeholder="Confirm Password" />
        </div>
      </div>

      <div className="control">
        <button className="button is-link">Sign up</button>
      </div>

    </div>
  )
}

export default SignupForm