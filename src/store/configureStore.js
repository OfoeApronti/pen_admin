import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
//import reduxImmutableStateInvariance from 'redux-immutable-state-invariance';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState
    ,applyMiddleware(thunk
    ));
}

//,reduxImmutableStateInvariance()