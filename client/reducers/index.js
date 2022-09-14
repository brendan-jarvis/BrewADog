import { combineReducers } from 'redux'

import randomBeer from './randomBeer'
import searchBeerRecipes from './searchBeerRecipes'
import errorMessage from './errorMessage'
import recipes from './recipes'

export default combineReducers({
  randomBeer,
  searchBeerRecipes,
  recipes,
  errorMessage,
})
