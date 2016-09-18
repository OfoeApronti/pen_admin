import * as types from './actionTypes';
import clientApi from '../api/mockClientApi';
export function loadClientsSuccess(clients){
  return {type:types.LOAD_CLIENTS_SUCCESS,clients};
}
export function updateClientSuccess(client){
  return {type:types.CREATE_CLIENT_SUCCESS,client};
}
export function createClientSuccess(client){
  return {type:types.UPDATE_CLIENT_SUCCESS,client};
}

export function loadClients(){
  return function(dispatch){
    return clientApi.getAllClients().then(clients=>{
      dispatch(loadClientsSuccess(clients));
    }).catch(error=>{
      throw(error);
    });
  };
}
export function saveClient(client){
  console.log("action.saveClient called",client);
  return function(dispatch){
    return clientApi.saveClient(client).then(client=>{
      console.log("action.saveClient success",client);
      client.id ? dispatch(updateClientSuccess(client)):dispatch(createClientSuccess(client));
    }).catch(error=>{
      console.log("action.saveClient failure",client);
      throw(error);
    });
  };
}
