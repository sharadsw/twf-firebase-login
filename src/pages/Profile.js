import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {

  return (
    <div className="container is-max-desktop">
      <h1 className="title">Profile details</h1>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Your first name" />
        </div>
      </div>

      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Your last name" />
        </div>
      </div>

      <div className="field">
        <label className="label">Place of Birth</label>
        <div className="control">
          <input className="input" type="text" placeholder="Place you were born in" />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Save</button>
        </div>
        <div className="control">
          <Link to="/">
            <button className="button is-link is-light">Take me home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile