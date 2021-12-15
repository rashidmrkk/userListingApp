
export const addUser = (data) => dispatch => {
    dispatch({
      type: POST_ADD_USER_BEGIN,
      payload: data
    })
    
  }
  export const POST_ADD_USER_BEGIN = 'POST_ADD_USER_BEGIN'
  