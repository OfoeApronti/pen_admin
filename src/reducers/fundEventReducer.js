import * as types from '../actions/actionTypes';

export default function fundEventReducer(state=[],action){
  switch (action.type){
    case types.LOAD_FUND_EVENTS_SUCCESS:
      return action.fundEvents;
    case types.CREATE_FUND_EVENT_SUCCESS:
      return [...state,Object.assign({},action.fundEvent)];
     case types.UPDATE_FUND_EVENT_SUCCESS:
      return [...state.filter(fundEvent=>fundEvent.id!=action.fundEvent.id && fundEvent.employer!=action.fundEvent.employer
       && fundEvent.event!=action.fundEvent.event),Object.assign({},action.fundEvent)];
    default:
      return state;
  }
}