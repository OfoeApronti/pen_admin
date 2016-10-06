import * as types from './actionTypes';
import userApi from '../api/userApi';
import axios from 'axios';

export function loadUsersSuccess(users){
  return {type:types.LOAD_USERS_SUCCESS,users};
}
export function updateUserSuccess(user){
  return {type:types.CREATE_USER_SUCCESS,user};
}
export function createUserSuccess(user){
  return {type:types.UPDATE_USER_SUCCESS,user};
}

export function loadUsers(){
  return function(dispatch){
    /*return userApi.getAllUsers().then(users=>{
      dispatch(loadUsersSuccess(users));
    }).catch(error=>{
      throw(error);
    });*/
    return axios.get("http://localhost:4000/users")
    .then(response=>{
      let users=[];
      users=response.data;
      console.log("u",users);
      dispatch(loadUsersSuccess(users));
    }).catch(error=>{
      console.log("error",error);
    });
  };
}
export function saveUser(user){
  console.log("action.saveUser called",user);
  return function(dispatch){
    return userApi.saveUser(user).then(user=>{
      console.log("action.saveUser success",user);
      user.id ? dispatch(updateUserSuccess(user)):dispatch(createUserSuccess(user));
    }).catch(error=>{
      console.log("action.saveUser failure",user);
      throw(error);
    });
  };
}
