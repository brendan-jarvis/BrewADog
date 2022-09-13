import { RECEIVE_SEARCH } from '../actions'

function searchBeerRecipes(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_SEARCH:
      return payload
    default:
      return state
  }
}

export default searchBeerRecipes
