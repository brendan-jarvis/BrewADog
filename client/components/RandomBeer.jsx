import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import {
  SRMToRGBCSS,
  calcCalories,
  convertCToF,
  convertLitresToGallons,
  convertKilogramsToPounds,
  convertGToOz,
} from './Utils'

import Hash from 'hash-string'

function RandomBeer() {
  const randomBeer = useSelector((state) => state.randomBeer)
  const [imperialTemp, setImperialTemp] = useState(false)
  const [imperialUnits, setImperialUnits] = useState(false)
  const [ounces, setOunces] = useState(false)

  return (
    <div className="container">
      <label className="switch">
        <input
          type="checkbox"
          checked={imperialTemp}
          onChange={() => setImperialTemp(!imperialTemp)}
        />
        <span className="slider round"></span>
        Fahrenheit
      </label>
      <label className="switch">
        <input
          type="checkbox"
          checked={imperialUnits}
          onChange={() => setImperialUnits(!imperialUnits)}
        />
        <span className="slider round"></span>
        Imperial Units
      </label>
      <label className="switch">
        <input
          type="checkbox"
          checked={ounces}
          onChange={() => setOunces(!ounces)}
        />
        <span className="slider round"></span>
        Ounces
      </label>
      {randomBeer?.map((beer) => {
        const calories = calcCalories(
          beer.target_og / 1000,
          beer.target_fg / 1000
        )
        const kilojoules = calories * 4.18

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
                <tbody>
                  <tr>
                    {beer.food_pairing.map((food) => (
                      <td key={Hash(food)}>{food}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            {/* TODO Fix formatting and layout of these tables */}
            <div className="tables-container">
              <table>
                <tbody>
                  <tr>
                    <th>
                      <abbr title="Alcohol By Volume">ABV</abbr>
                    </th>

                    <th>
                      <abbr title="European Brewery Convention">EBC</abbr>
                    </th>
                    <th colSpan="2">
                      <abbr title="Standard Reference Method">SRM</abbr>
                    </th>
                    <th>
                      <abbr title="Potential of Hydrogen">pH</abbr>
                    </th>
                    <th>Attenuation level</th>
                  </tr>
                  <tr>
                    <td>{beer.abv}%</td>

                    <td>{beer.ebc}</td>
                    <td>{beer.srm}</td>
                    <td
                      style={{
                        width: '100px',
                        backgroundColor: SRMToRGBCSS(beer.srm),
                      }}
                    ></td>
                    <td>{beer.ph}</td>
                    <td>{beer.attenuation_level}%</td>
                  </tr>
                  <tr>
                    <th>
                      Target <abbr title="Original Gravity">OG</abbr>
                    </th>
                    <th>
                      Target <abbr title="Final Gravity">FG</abbr>
                    </th>
                    <th>
                      Bitterness (
                      <abbr title="International Bitterness Units">IBU</abbr>)
                    </th>
                    <th>Boil Volume</th>
                    <th>Final Volume</th>
                    <th>Energy (12 oz or 355mL)</th>
                  </tr>
                  <tr>
                    <td>{beer.target_og / 1000} SG</td>
                    <td>{beer.target_fg / 1000} SG</td>
                    <td>{beer.ibu}</td>
                    {imperialUnits ? (
                      <td>
                        {convertLitresToGallons(
                          beer.boil_volume.value
                        ).toLocaleString({ maximumFractionDigits: 2 })}{' '}
                        gallons
                      </td>
                    ) : (
                      <td>
                        {beer.boil_volume.value} {beer.boil_volume.unit}
                      </td>
                    )}
                    {imperialUnits ? (
                      <td>
                        {convertLitresToGallons(
                          beer.volume.value
                        ).toLocaleString({ maximumFractionDigits: 2 })}{' '}
                        gallons
                      </td>
                    ) : (
                      <td>
                        {beer.volume.value} {beer.volume.unit}
                      </td>
                    )}
                    <td>
                      {calories.toLocaleString({ maximumFractionDigits: 2 })}
                      {' kcal / '}
                      {kilojoules.toLocaleString({
                        maximumFractionDigits: 2,
                      })}{' '}
                      kJ
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 className="centered-text">Ingredients</h3>
              <p>{beer.brewers_tips}</p>
              <h4 className="centered-text">Yeast</h4>
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Yeast</th>
                    <td>{beer.ingredients.yeast}</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="centered-text">Malt</h4>
              <table>
                <tbody>
                  {beer.ingredients.malt.map((malt) => {
                    return (
                      <tr key={Hash(malt.name + malt.amount.value)}>
                        <th scope="col">{malt.name}</th>
                        {imperialUnits ? (
                          <td>
                            {convertKilogramsToPounds(
                              malt.amount.value
                            ).toLocaleString({
                              maximumFractionDigits: 2,
                            })}{' '}
                            pounds
                          </td>
                        ) : (
                          <td>
                            {malt.amount.value} {malt.amount.unit}
                          </td>
                        )}
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              <h4 className="centered-text">Hops</h4>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Grams</th>
                    <th>Add</th>
                    <th>Attribute</th>
                  </tr>
                </thead>
                <tbody>
                  {beer.ingredients.hops.map((hop) => {
                    return (
                      <tr
                        key={Hash(
                          hop.name + hop.amount.value + hop.add + hop.attribute
                        )}
                      >
                        <th scope="row">
                          <a
                            href={`https://beermaverick.com/hop/${hop.name
                              .replace('-extract', '')
                              .replace(/\s+/g, '-')
                              .toLowerCase()}/`}
                            style={{ color: 'black' }}
                          >
                            {hop.name}
                          </a>
                        </th>
                        {ounces ? (
                          <td>
                            {convertGToOz(hop.amount.value).toLocaleString({
                              maximumFractionDigits: 2,
                            })}{' '}
                            oz
                          </td>
                        ) : (
                          <td>{hop.amount.value} g</td>
                        )}

                        <td>{hop.add}</td>
                        <td>{hop.attribute}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              <h4 className="centered-text">Methods/Timings</h4>
              <table>
                <thead>
                  <tr>
                    <th>Mash Temperature</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">Temperature</th>
                    <th scope="col">Duration</th>
                  </tr>
                  {beer.method.mash_temp.map((mash) => {
                    return (
                      <tr
                        key={Hash(
                          mash.temp.value + mash.temp.unit + mash.duration
                        )}
                      >
                        {imperialTemp ? (
                          <td>{convertCToF(mash.temp.value)} °F</td>
                        ) : (
                          <td>{mash.temp.value} °C</td>
                        )}
                        {mash.duration ? (
                          <td>{mash.duration} min</td>
                        ) : (
                          <td>60 min</td>
                        )}
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              {beer.method.twist && (
                <table>
                  <thead>
                    <tr>
                      <th>Twist</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Twist</th>
                      <td>{beer.method.twist}</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RandomBeer
