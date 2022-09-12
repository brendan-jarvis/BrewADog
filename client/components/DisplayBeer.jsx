import React from 'react'

import { SRMToRGBCSS, calcCalories } from './Utils'

import Hash from 'hash-string'

function DisplayBeer() {
  const calories = calcCalories(props.target_og / 1000, props.target_fg / 1000)
  const kilojoules = calories * 4.18

  return (
    <div className="container">
      <div key={Hash(props)}>
        <div className="container-header">
          <h1>
            #{props.id} {props.name}
          </h1>
          <h2>{props.tagline}</h2>
          {/* {props.image_url && (
                <div className="img-container">
                  <img src={props.image_url} alt={`Picture of ${props.name}`} />
                </div>
              )} */}
          <p style={{ textAlign: 'center' }}>
            {/* Remove <twitterHandle> - which is may be a broken link */}
            By {props.contributed_by.replace(/<[a-zA-Z]+>/, '')}
          </p>
          <p>{props.description}</p>
          <h4>Food pairing</h4>
          <table>
            <tbody>
              <tr>
                {props.food_pairing.map((food) => (
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
                <td>{props.abv}%</td>

                <td>{props.ebc}</td>
                <td>{props.srm}</td>
                <td
                  style={{
                    width: '100px',
                    backgroundColor: SRMToRGBCSS(props.srm),
                  }}
                ></td>
                <td>{props.ph}</td>
                <td>{props.attenuation_level}%</td>
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
                <td>{props.target_og / 1000} SG</td>
                <td>{props.target_fg / 1000} SG</td>
                <td>{props.ibu}</td>
                <td>
                  {props.boil_volume.value} {props.boil_volume.unit}
                </td>
                <td>
                  {props.volume.value} {props.volume.unit}
                </td>
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
          <p>{props.brewers_tips}</p>
          <h4 className="centered-text">Yeast</h4>
          <table>
            <tbody>
              <tr>
                <th scope="row">Yeast</th>
                <td>{props.ingredients.yeast}</td>
              </tr>
            </tbody>
          </table>

          <h4 className="centered-text">Malt</h4>
          <table>
            <tbody>
              {props.ingredients.malt.map((malt) => {
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
              {props.ingredients.hops.map((hop) => {
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
                    <td>{hop.amount.value} g</td>
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
              {props.method.mash_temp.map((mash) => {
                return (
                  <tr
                    key={Hash(mash.temp.value + mash.temp.unit + mash.duration)}
                  >
                    <td>
                      {mash.temp.value} {mash.temp.unit}
                    </td>
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

          {props.method.twist && (
            <table>
              <thead>
                <tr>
                  <th>Twist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Twist</th>
                  <td>{props.method.twist}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default DisplayBeer
