import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

export function loginUserSuccess(user){
  return {type:types.LOGIN_SUCCESS,user:user};
}
export function logoutSuccess(){
  return {type:types.LOGOUT_SUCCESS};
}
export function loginUserFailure(){
  return {type:types.LOGIN_FAILURE};
}


export function loginSuccess(user){
  return function(dispatch){
    dispatch(loginUserSuccess(user));
  };
}

export function loginFailed(){
  return function(dispatch){
    dispatch(loginUserFailure());
  };
}
export function logOut(){
  console.log("export function logOut()");
  return function(dispatch){
    dispatch(logoutSuccess());
  };
}
