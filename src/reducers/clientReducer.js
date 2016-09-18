import * as types from '../actions/actionTypes';

export default function clientReducer(state=[],action){
  switch (action.type){
    case types.LOAD_CLIENTS_SUCCESS:
      return action.clients;
    case types.CREATE_CLIENT_SUCCESS:
      return [...state,Object.assign({},action.client)];
     case types.UPDATE_CLIENT_SUCCESS:
      return [...state.filter(client=>client.id!=action.client.id),Object.assign({},action.client)];
    default:
      return state;
  }
}