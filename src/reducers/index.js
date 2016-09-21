import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import clients from './clientReducer';
import employees from './employeeReducer';
import fundEvents from './fundEventReducer';

const rootReducer=combineReducers({
  courses,
  authors,
  clients,
  employees,
  fundEvents
});
export default rootReducer;