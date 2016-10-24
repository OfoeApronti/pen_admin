import * as types from '../actions/actionTypes';

export default function userRegistryReducer(state={registered:false,errMsg:""},
action){
  switch (action.type){
    case types.REGISTER_USER_SUCCESS: 
      return Object.assign({},state,{registered:true,errMsg:""});

    case types.REGISTER_USER_FAILURE:
     
      return Object.assign({},state,{registered:false,errMsg:action.errMsg});
    
    default:
      return state;
    
      
  }
}

//    let ret={registered:true,errMsg:""};
// let ret1={registered:false,errMsg:action.errMsg};