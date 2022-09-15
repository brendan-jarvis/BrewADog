import React from 'react'

import ErrorMessage from './ErrorMessage'
import Form from './Form'
import Favourites from './Favourites'

function App() {
  return (
    <div className="container">
      <h1>Brew!</h1>
      <ErrorMessage />
      <Favourites />
      <Form />
    </div>
  )
}

export default App
