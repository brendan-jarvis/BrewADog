import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Hash from 'hash-string'

import { getRecipes, deleteBeerRecipe } from '../actions'

function Favourites() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipes())
  }, [])

  const favourites = useSelector((state) => state.recipes)

  const handleClick = (id) => {
    dispatch(deleteBeerRecipe(id))
    dispatch(getRecipes())
  }

  return (
    <div className="container">
      <h1>Favourites</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>BrewDog ID</th>
            <th>Name</th>
            <th>Created At</th>
            <th>Brewed</th>
            <th>Delete Favourite</th>
          </tr>
        </thead>
        <tbody>
          {favourites?.map((beer) => {
            return (
              <tr key={Hash(beer.id + beer.name)}>
                <td>{beer.id}</td>
                <td>{beer.brewdog_id}</td>
                <td>{beer.name}</td>
                <td>{beer.created_at}</td>
                <td>{beer.brewed}</td>
                <td>
                  <button onClick={() => handleClick(beer.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Favourites
