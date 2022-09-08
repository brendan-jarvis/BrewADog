import { clearConfigCache } from 'prettier'
import request from 'superagent'

export const REQUEST_BEER = 'REQUEST_BEER'
export const RECEIVE_BEER = 'RECEIVE_BEER'
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
