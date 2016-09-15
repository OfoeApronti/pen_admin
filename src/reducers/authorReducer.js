import * as types from '../actions/actionTypes';

export default function authorReducer(state=[],action){
  console.log("authorReducer",action);
  switch (action.type){
    case types.LOAD_AUTHORS_SUCCESS:
      //return [...state,
      //Object.assign({},action.course)
      //];
      return action.authors;
       
    default:
      return state;
  }
}