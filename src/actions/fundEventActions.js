import * as types from './actionTypes';
import fundEventApi from '../api/mockFundEventApi';
export function loadFundEventsSuccess(fundEvents){
  console.log("loadFundEventsSuccess",loadFundEventsSuccess)
  return {type:types.LOAD_FUND_EVENTS_SUCCESS,fundEvents};
}
export function updateFundEventSuccess(fundEvents){
  return {type:types.CREATE_FUND_EVENT_SUCCESS,fundEvents};
}
export function createFundEventSuccess(fundEvents){
  return {type:types.UPDATE_FUND_EVENT_SUCCESS,fundEvents};
}

export function loadFundEvents(id,name){
  console.log("loadFundEvents actions",id,name);
  return function(dispatch){
    return fundEventApi.getAllFundEvents(id,name).then(fundEvents=>{
      dispatch(loadFundEventsSuccess(fundEvents));
    }).catch(error=>{
      throw(error);
    });
  };
}
export function saveFundEvent(fundEvent){
  return function(dispatch){
    return fundEventApi.saveFundEvent(fundEvent).then(fundEvent=>{
      fundEvent.id ? dispatch(updateFundEventSuccess(fundEvent)):dispatch(createFundEventSuccess(fundEvent));
    }).catch(error=>{
      throw(error);
    });
  };
}
