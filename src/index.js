import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar'
import LoginForm from './pages/LoginForm'

import 'bulma/css/bulma.min.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <LoginForm />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)