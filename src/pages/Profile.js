import React, { useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import auth from '../services/authHelper'

const Profile = ({ user }) => {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [place, setPlace] = useState('')
  let history = useHistory()

  useEffect(() => {
    if (!user) {
      return
    }
    auth.readUserData(user.uid)
      .then(userData => {
        setFname(userData.fname)
        setLname(userData.lname)
        setPlace(userData.place)
      })
  }, [])

  if (!user) {
    return ( <Redirect to="/" /> )
  }

  const handleSave = (event) => {
    console.log(place);
    auth.writeUserData(user.uid, fname, lname, place)
    alert("Data saved!")
    history.push("/")
  }

  return (
    <div className="container is-max-desktop">
      <h1 className="title">Profile details</h1>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Your first name"
            onChange={(event) => setFname(event.target.value)}
            value={fname} />
        </div>
      </div>

      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Your last name"
            onChange={(event) => setLname(event.target.value)}
            value={lname} />
        </div>
      </div>

      <div className="field">
        <label className="label">Place of Birth</label>
        <div className="control">
          <input className="input" type="text" placeholder="Place you were born in"
            onChange={(event) => setPlace(event.target.value)}
            value={place} />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={handleSave}>Save</button>
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