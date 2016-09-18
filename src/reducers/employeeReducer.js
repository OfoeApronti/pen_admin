import * as types from '../actions/actionTypes';

export default function employeeReducer(state=[],action){
  switch (action.type){
    case types.LOAD_EMPLOYEES_SUCCESS:
      return action.employees;
    case types.CREATE_EMPLOYEE_SUCCESS:
      return [...state,Object.assign({},action.employee)];
     case types.UPDATE_EMPLOYEE_SUCCESS:
      return [...state.filter(employee=>employee.id!=action.employee.id && employee.employer!=action.employee.employer),Object.assign({},action.employee)];
    default:
      return state;
  }
}