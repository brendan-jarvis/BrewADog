import React from 'react'
import { useDispatch } from 'react-redux'

import { fetchRandomBeer } from '../actions'
import RandomBeer from './RandomBeer'

function Form() {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(fetchRandomBeer())
  }

  return (
    <div className="container">
      <form>
        <button onClick={handleSubmit}>Fetch Random Beer</button>
      </form>
      {<RandomBeer />}
    </div>
  )
}

export default Form
