import React from 'react'

const LoginForm = () => {

  return (
    <div>

    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input className="input" type="text" placeholder="e.g John Smith" />
      </div>
    </div>

    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <input className="input" type="text" placeholder="e.g. johnsmith@gmail.com" />
      </div>
    </div>

    <div class="control">
      <button class="button is-success">Submit</button>
    </div>

    </div>
  )
}

export default LoginForm