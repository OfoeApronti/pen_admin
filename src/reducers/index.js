import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import clients from './clientReducer';
import employees from './employeeReducer';
import fundEvents from './fundEventReducer';
import users from './userReducer';
import login from './loginReducer';

const rootReducer=combineReducers({
  courses,
  authors,
  clients,
  employees,
  fundEvents,
  users,
  login
});
export default rootReducer;