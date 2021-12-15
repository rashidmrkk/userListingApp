import {combineReducers} from 'redux'
import signin from './signinReducer'
import user from './userReducer'

export default combineReducers({
  signin,
  user
})