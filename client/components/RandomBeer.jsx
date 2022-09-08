import React from 'react'
import { useSelector } from 'react-redux'

import Hash from 'hash-string'

function RandomBeer() {
  const randomBeer = useSelector((state) => state.beers)

  return (
    <div className="container">
      {randomBeer?.map((beer) => {
        return (
          <div key={Hash(beer)}>
            <div className="container-header">
              <h1>
                #{beer.id} {beer.name}
              </h1>
              <h2>{beer.tagline}</h2>
              {/* {beer.image_url && (
                <div className="img-container">
                  <img src={beer.image_url} alt={`Picture of ${beer.name}`} />
                </div>
              )} */}
              <p style={{ textAlign: 'center' }}>
                {/* Remove <twitterHandle> - which is may be a broken link */}
                By {beer.contributed_by.replace(/<[a-zA-Z]+>/, '')}
              </p>
              <p>{beer.description}</p>
              <h4>Food pairing</h4>
              <table>
                {beer.food_pairing.map((food) => (
                  <td key={Hash(food)}>{food}</td>
                ))}
              </table>
            </div>
            {/* TODO Fix formatting and layout of these tables */}
            <div className="tables-container">
              <table>
                <tr>
                  <th>ABV</th>
                  <th>IBU</th>
                  <th>EBC</th>
                  <th>SRM</th>
                  <th>pH</th>
                  <th>Attenuation level</th>
                </tr>
                <tr>
                  <td>{beer.abv}%</td>
                  <td>{beer.ibu}</td>
                  <td>{beer.ebc}</td>
                  <td>{beer.srm}</td>
                  <td>{beer.ph}</td>
                  <td>{beer.attenuation_level}%</td>
                </tr>
                <tr>
                  <th>Target OG</th>
                  <th>Target FG</th>
                  <th>Boil Volume</th>
                  <th>Final Volume</th>
                </tr>
                <tr>
                  <td>{beer.target_og}</td>
                  <td>{beer.target_fg}</td>
                  <td>
                    {beer.boil_volume.value} {beer.boil_volume.unit}
                  </td>
                  <td>
                    {beer.volume.value} {beer.volume.unit}
                  </td>
                </tr>
              </table>

              <h3 style={{ textAlign: 'center' }}>Ingredients</h3>
              <p>{beer.brewers_tips}</p>
              <h4>Yeast</h4>
              <table>
                <tbody>
                  <th scope="row">Yeast</th>
                  <td>{beer.ingredients.yeast}</td>
                </tbody>
              </table>

              <h4>Malt</h4>
              <table>
                <tbody>
                  {beer.ingredients.malt.map((malt) => {
                    return (
                      <tr key={Hash(malt.name + malt.amount.value)}>
                        <th scope="col">{malt.name}</th>
                        <td>
                          {malt.amount.value} {malt.amount.unit}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              <h4>Hops</h4>
              <table>
                <thead>
                  <th>Name</th>
                  <th>Grams</th>
                  <th>Add</th>
                  <th>Attribute</th>
                </thead>
                <tbody>
                  {beer.ingredients.hops.map((hop) => {
                    return (
                      <tr key={Hash(hop.name + hop.amount.value)}>
                        <th scope="row">{hop.name}</th>
                        <td>{hop.amount.value} g</td>
                        <td>{hop.add}</td>
                        <td>{hop.attribute}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              <h4>Methods/Timings</h4>
              <table>
                <thead>Mash Temperature</thead>
                <tbody>
                  <tr>
                    <th scope="col">Temperature</th>
                    <th scope="col">Duration</th>
                  </tr>
                  {beer.method.mash_temp.map((mash) => {
                    return (
                      <tr key={Hash(mash)}>
                        <td>
                          {mash.temp.value} {mash.temp.unit}
                        </td>
                        {mash.duration ? <td>{mash.duration}</td> : <td>60</td>}
                      </tr>
                    )
                  })}
                  {beer.method.twist && (
                    <>
                      <th scope="row">Twist</th>
                      <td>{beer.method.twist}</td>
                    </>
                  )}
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
