import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Slider } from '@material-ui/core'

// Actions
import { fetchRandomBeer, searchBeerRecipes } from '../actions'

// Components
import RandomBeer from './RandomBeer'

function Form() {
  const dispatch = useDispatch()

  const [abv, setAbv] = useState([0, 56])
  const [ibu, setIbu] = useState([0, 1158])
  const [ebc, setEbc] = useState([0, 601])
  const [yeast, setYeast] = useState('')
  const [malt, setMalt] = useState('')
  const [hops, setHops] = useState('')
  const [name, setName] = useState('')

  function abvText(abv) {
    return `${abv}%`
  }

  function ibuText(ibu) {
    return `${ibu}`
  }

  function ebcText(ebc) {
    return `${ebc}`
  }

  const abvMarks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 5,
      label: '5%',
    },
    {
      value: 10,
      label: '10%',
    },
    {
      value: 15,
      label: '15%',
    },
    {
      value: 20,
      label: '20%',
    },
    {
      value: 25,
      label: '25%',
    },
    {
      value: 30,
      label: '30%',
    },
  ]

  const ibuMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 25,
      label: '25',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 75,
      label: '75',
    },
    {
      value: 100,
      label: '100',
    },
    {
      value: 125,
      label: '125',
    },
    {
      value: 150,
      label: '150',
    },
  ]

  const ebcMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 10,
      label: '10',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 50,
      label: '50',
    },
  ]

  const handleChangeAbv = (event, newValue) => {
    setAbv(newValue)
  }

  const handleChangeIbu = (event, newValue) => {
    setIbu(newValue)
  }

  const handleChangeEbc = (event, newValue) => {
    setEbc(newValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(fetchRandomBeer())
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    dispatch(searchBeerRecipes(abv, ibu, ebc, yeast, malt, hops, name))
  }

  return (
    <div className="container">
      <form>
        <fieldset>
          <label>
            ABV:
            <Slider
              getAriaLabel={() => 'ABV range'}
              value={abv}
              min={0}
              step={1}
              max={30}
              marks={abvMarks}
              valueLabelDisplay="auto"
              onChange={handleChangeAbv}
              getAriaValueText={abvText}
            />
          </label>
          <label>
            IBU:
            <Slider
              getAriaLabel={() => 'IBU range'}
              value={ibu}
              min={0}
              step={1}
              max={150}
              marks={ibuMarks}
              valueLabelDisplay="auto"
              onChange={handleChangeIbu}
              getAriaValueText={ibuText}
            />
          </label>
          <label>
            EBC:
            <Slider
              getAriaLabel={() => 'EBC range'}
              value={ebc}
              min={0}
              step={1}
              max={50}
              marks={ebcMarks}
              valueLabelDisplay="auto"
              onChange={handleChangeEbc}
              getAriaValueText={ebcText}
            />
          </label>
          <label>
            Name:{' '}
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Malt:{' '}
            <input
              type="text"
              name="malt"
              id="malt"
              value={malt}
              onChange={(e) => setMalt(e.target.value)}
            />
          </label>
          <label>
            Hops:{' '}
            <input
              type="text"
              name="hops"
              id="hops"
              value={hops}
              onChange={(e) => setHops(e.target.value)}
            />
          </label>
          <label>
            Yeast:{' '}
            <input
              type="text"
              name="yeast"
              id="yeast"
              value={yeast}
              onChange={(e) => setYeast(e.target.value)}
            />
          </label>
          <input
            type="submit"
            value="Search for Recipes"
            onClick={handleSearchSubmit}
          />
        </fieldset>
      </form>
      <form>
        <button onClick={handleSubmit}>Fetch Random Recipe</button>
      </form>
      {<RandomBeer />}
    </div>
  )
}

export default Form
