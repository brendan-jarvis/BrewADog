import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { SRMToRGBCSS } from './Utils'

import Hash from 'hash-string'

function RandomBeer() {
  const searchResults = useSelector((state) => state.searchBeerRecipes)

  return (
    <div className="container">
      {searchResults?.map((beer) => {
        // Remove duplicates and sort alphabetically.
        const hops = beer.ingredients.hops.map((hop) => hop.name)
        const uniqueHops = [...new Set(hops)].sort()

        // No sort as base malt tends to come first.
        const malts = beer.ingredients.malt.map((malt) => malt.name)
        const uniqueMalts = [...new Set(malts)]

        return (
          <div key={Hash(beer.id + beer.name)}>
            <div className="container-header">
              <h3>
                #{beer.id} {beer.name}
              </h3>
              <p>{beer.description}</p>
              <p>
                <b>Malt:</b>{' '}
                {uniqueMalts
                  .map((malt) => {
                    return malt
                  })
                  .join(', ') + '.'}
              </p>
              <p>
                <b>Hops:</b>{' '}
                {uniqueHops
                  .map((hop) => {
                    return hop
                  })
                  .join(', ') + '.'}
              </p>
              <p>
                <b>Yeast:</b> {beer.ingredients.yeast}.
              </p>
              {beer.srm && (
                <div className="container-row">
                  <p>
                    <b>Colour: </b>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: '45px' }}
                  >
                    <rect
                      x="20"
                      y="0"
                      width="106.960718663"
                      height="24.25"
                      stroke="black"
                      fill={SRMToRGBCSS(beer.srm)}
                    />
                  </svg>
                </div>
              )}
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
