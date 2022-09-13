import { combineReducers } from 'redux'

import randomBeer from './randomBeer'
import searchBeerRecipes from './searchBeerRecipes'
import errorMessage from './errorMessage'

export default combineReducers({ randomBeer, searchBeerRecipes, errorMessage })
