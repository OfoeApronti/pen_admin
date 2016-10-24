import * as types from '../actions/actionTypes';

export default function loginReducer(state={
  isAuthenticated: sessionStorage.getItem('token') ? true : false,
  name:sessionStorage.getItem('name') ? sessionStorage.getItem('name') : "",email:"",  errorMessage: ''
  },action){
  switch (action.type){
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        name:action.user.name,
        email:action.user.email,
        errorMessage: ''
      });
    case types.LOGOUT_SUCCESS:
      console.log("case types.LOGOUT_SUCCESS");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("name");
      return Object.assign({}, state, {
        isAuthenticated: false,
        name:"",
        email:"",
        errorMessage: ''
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        name:"",
        email:"",
        errorMessage: 'Login Failed'
      });
    default:
      return state;
  }
}