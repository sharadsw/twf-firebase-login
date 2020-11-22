import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/Home'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import Profile from './pages/Profile'

import 'bulma/css/bulma.min.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/profile">
          <Profile />
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