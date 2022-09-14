import { SHOW_RECIPES, SAVE_RECIPE, DEL_RECIPE } from '../actions'

function recipes(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SHOW_RECIPES:
      return payload
    case SAVE_RECIPE:
      return [...state, payload]
    case DEL_RECIPE:
      return state.filter((beer) => !beer.brewdog_id === payload.brewdog_id)
    default:
      return state
  }
}

export default recipes
