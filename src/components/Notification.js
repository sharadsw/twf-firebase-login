import React from 'react'

const Notification = ({ type, message }) => {

  if (!message) {
    return null
  }

  return (
    <div className="notification is-success" >
      {message}
    </div>
  )
}

export default Notification