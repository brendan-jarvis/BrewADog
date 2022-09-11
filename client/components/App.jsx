import React from 'react'

import ErrorMessage from './ErrorMessage'
import Form from './Form'
import {
  calculateMCU,
  calculateSRM,
  convertEBCToSRM,
  convertSRMToEBC,
  convertLitresToGallons,
  convertKilogramsToPounds,
} from './Utils'

function App() {
  return (
    <div>
      <ErrorMessage />
      <Form />
    </div>
  )
}

export default App
