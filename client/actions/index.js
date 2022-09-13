import request from 'superagent'

export const REQUEST_BEER = 'REQUEST_BEER'
export const RECEIVE_BEER = 'RECEIVE_BEER'
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_SEARCH = 'REQUEST_SEARCH'

export function requestBeer() {
  return {
    type: REQUEST_BEER,
  }
}

export function requestSearch() {
  return {
    type: REQUEST_SEARCH,
  }
}

export function receiveBeer(beer) {
  return {
    type: RECEIVE_BEER,
    payload: beer,
  }
}

export function receiveSearch(results) {
  return {
    type: RECEIVE_SEARCH,
    payload: results,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchRandomBeer() {
  return (dispatch) => {
    dispatch(requestBeer())
    return request
      .get(`https://api.punkapi.com/v2/beers/random`)
      .then((res) => {
        dispatch(receiveBeer(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function searchBeerRecipes(query) {
  let queryString = []
  // Skip queries where the maximum range is selected
  if (query.abv[0] !== 0) {
    queryString.push(`abv_gt=${query.abv[0]}`)
  }
  if (query.abv[1] !== 30) {
    queryString.push(`abv_gt=${query.abv[1]}`)
  }
  if (query.ibu[0] !== 0) {
    queryString.push(`ibu_gt=${query.ibu[0]}`)
  }
  if (query.ibu[1] !== 150) {
    queryString.push(`ibu_gt=${query.ibu[1]}`)
  }
  if (query.ebc[0] !== 0) {
    queryString.push(`ebc_gt=${query.ebc[0]}`)
  }
  if (query.ebc[1] !== 50) {
    queryString.push(`ebc_gt=${query.ebc[1]}`)
  }
  if (query.hops) {
    queryString.push(`hops=${query.hops}`)
  }
  if (query.malt) {
    queryString.push(`&malt=${query.malt}`)
  }
  if (query.yeast) {
    queryString.push(`&yeast=${query.yeast}`)
  }
  if (query.search) {
    queryString.push(`&beer_name=${query.search}`)
  }

  console.log(`https://api.punkapi.com/v2/beers?${queryString.join('&')}`)

  return (dispatch) => {
    dispatch(requestSearch())
    return request
      .get(`https://api.punkapi.com/v2/beers?${queryString.join('&')}`)
      .then((res) => {
        dispatch(receiveSearch(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
