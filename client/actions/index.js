import request from 'superagent'

export const REQUEST_BEER = 'REQUEST_BEER'
export const RECEIVE_BEER = 'RECEIVE_BEER'
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export const SHOW_ERROR = 'SHOW_ERROR'

export function requestBeer() {
  return {
    type: REQUEST_BEER,
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

export function searchBeerRecipes(abv, ibu, ebc, yeast, malt, hops, name) {
  return (dispatch) => {
    dispatch(requestBeer())
    return request
      .get(
        `https://api.punkapi.com/v2/beers?abv_gt=${abv[0]}&abv_lt=${abv[1]}&ibu_gt=${ibu[0]}&ibu_lt=${ibu[1]}&ebc_gt=${ebc[0]}&ebc_lt=${ebc[1]}&yeast=${yeast}&malt=${malt}&hops=${hops}&beer_name=${name}`
      )
      .then((res) => {
        dispatch(receiveSearch(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
