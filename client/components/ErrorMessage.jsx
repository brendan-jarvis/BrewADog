import React from 'react'
import { useSelector } from 'react-redux'

function ErrorMessage() {
  const errorMessage = useSelector((state) => state.errorMessage)

  if (errorMessage) {
    return <div className="error">{errorMessage}</div>
  } else {
    return null
  }
}

export default ErrorMessage
