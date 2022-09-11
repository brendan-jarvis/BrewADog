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
  // Tests
  console.log('Expect a beer with SRM 10 to have EBC of 20')
  console.log('Converting SRM 10 to EBC, result: ', convertSRMToEBC(10))
  console.log('Converting EBC 20 to SRM, result: ', convertEBCToSRM(20))
  console.log(
    'Converting 20 litres to gallons, result: ',
    convertLitresToGallons(20)
  )
  console.log(
    'Converting 5 kg to pounds, result: ',
    convertKilogramsToPounds(5)
  )

  return (
    <div>
      <ErrorMessage />
      <Form />
    </div>
  )
}

export default App
