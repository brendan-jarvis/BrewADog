import { combineReducers } from 'redux'

import randomBeer from './randomBeer'
import errorMessage from './errorMessage'

export default combineReducers({ randomBeer, errorMessage })
