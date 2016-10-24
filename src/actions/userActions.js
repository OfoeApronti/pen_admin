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
    return axios.get("http://localhost/api/users")
    .then(response=>{
      let users=[];
      users=response.data;
      dispatch(loadUsersSuccess(users));
    }).catch(error=>{
      throw(error);
    });
  };
}
export function saveUser(user){
  return function(dispatch){
    return userApi.saveUser(user).then(user=>{
      user.id ? dispatch(updateUserSuccess(user)):dispatch(createUserSuccess(user));
    }).catch(error=>{
      throw(error);
    });
  };
}
