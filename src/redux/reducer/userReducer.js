import {
    POST_ADD_USER_BEGIN,
  } from '../action/userActions'
  
  const initialState = {
    users: []
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case POST_ADD_USER_BEGIN:
        const data = JSON.parse(localStorage.getItem('users'))
        if(data){
            const newUsers = [...data,action.payload]
            localStorage.setItem("users",JSON.stringify(newUsers))
        }
  
      default:
        return state
    }
  }