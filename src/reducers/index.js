import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import clients from './clientReducer';
import employees from './employeeReducer';

const rootReducer=combineReducers({
  courses,
  authors,
  clients,
  employees
});
export default rootReducer;