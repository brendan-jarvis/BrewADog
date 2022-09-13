import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { SRMToRGBCSS } from './Utils'

import Hash from 'hash-string'

function RandomBeer() {
  const searchResults = useSelector((state) => state.searchBeerRecipes)

  return (
    <div className="container">
      {searchResults?.map((beer) => {
        return (
          <div key={Hash(beer.id + beer.name)}>
            <div className="container-header">
              <h3>
                #{beer.id} {beer.name}
              </h3>
              <p>{beer.description}</p>
              <p>
                <b>Malt:</b>{' '}
                {beer.ingredients.malt.map((malt) => {
                  return malt.name + ', '
                })}
              </p>
              <p>
                <b>Hops:</b>{' '}
                {beer.ingredients.hops.map((hop) => {
                  return hop.name + ', '
                })}
              </p>
              <p>
                <b>Yeast:</b> {beer.ingredients.yeast}
              </p>
              <table>
                <thead>
                  <tr>
                    <th>
                      <abbr title="European Brewery Convention">EBC</abbr>
                    </th>
                    <th>
                      <abbr title="Standard Reference Method">SRM</abbr>
                    </th>
                    <th>
                      <abbr title="Alcohol By Volume">ABV</abbr>
                    </th>
                    <th>
                      <abbr title="International Bitterness Units">IBU</abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{beer.ebc}</td>
                    <td>{beer.srm}</td>
                    <td>{beer.abv}%</td>
                    <td>{beer.ibu}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RandomBeer
