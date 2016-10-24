import * as types from './actionTypes';
import userApi from '../api/userApi';
import axios from 'axios';
import fetch from 'isomorphic-fetch';

export function registerUserSuccess(userRegistry){
  return {type:types.REGISTER_USER_SUCCESS,userRegistry:userRegistry};
}
export function registerUserFailure(msg){
  return {type:types.REGISTER_USER_FAILURE,msg:msg};
}

export function registerUser(){
  return function(dispatch){
    return fetch("http://localhost/api/users")
    .then(response=>{
      let users=[];
      users=response.json;
      console.log("u",users);
      dispatch(registerUserSuccess(users));
    }).catch(error=>{
      console.log("error",error);
    });
  };
}
