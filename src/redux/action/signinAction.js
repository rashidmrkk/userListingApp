
export const signin = (data) => dispatch => {
  dispatch({
    type: POST_SIGNIN_BEGIN,
    payload: data
  })
  
}
export const POST_SIGNIN_BEGIN = 'POST_SIGNIN_BEGIN'
