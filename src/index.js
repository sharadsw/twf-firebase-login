import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import firebase from 'firebase/app'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import Profile from './pages/Profile'
import Notification from './components/Notification'

import 'bulma/css/bulma.min.css'

import auth from './services/authHelper'

const App = () => {

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  }

  auth.init(firebaseConfig)

  const [user, setUser] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState(true)

  firebase.auth().onAuthStateChanged(currentUser => {
    if (currentUser) {
      setUser(currentUser)
    }
    setLoadingStatus(false)
  })

  if (loadingStatus) {
    return ( 
      <div className="container is-max-desktop mt-6">
        <Notification type="alert" message="Please wait while everything loads" /> 
      </div>
    )
  }

  // let history = useHistory()

  // Eventually use a notification component instead of alert()
  // const [errorMsg, setErrorMsg] = useState(null)
  // const [alertMsg, setAlertMsg] = useState(null)

  const handleSignUp = (event) => {
    event.preventDefault()
    if (event.target.pass.value !== event.target.pass2.value) {
      alert("Passwords do not match")
    } else {
      auth.createUser(event.target.email.value, event.target.pass.value)
        .then(response => {
          alert("Account created!")
        })
        .catch(error => {
          console.log(error)
          alert(error.message)
        })
    }
  }

  const handleLogIn = (event) => {
    event.preventDefault()
    auth.login(event.target.loginmail.value, event.target.loginpass.value)
      .then(response => {
        setUser(response.user)
      })
      .catch(error => {
        console.log(error);
        alert("Invalid details")
      })
    // history.push("/profile")
  }

  const handleSignOut = (event) => {
    event.preventDefault()
    auth.signout()
      .then(() => {
        setUser(null)
      })
  }

  return (
    <Router>
      <Navbar user={user} handleSignOut={handleSignOut} />

      <Switch>
        <Route path="/signup">
          <SignupForm handleSignUp={handleSignUp} user={user} />
        </Route>
        <Route path="/login">
          <LoginForm handleLogIn={handleLogIn} user={user} />
        </Route>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)