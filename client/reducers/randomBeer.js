import { RECEIVE_BEER } from '../actions'

function randomBeer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_BEER:
      return payload
    default:
      return state
  }
}

export default randomBeer
