import {
  POST_SIGNIN_BEGIN,
} from '../action/signinAction'

const initialState = {
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNIN_BEGIN:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state
  }
}