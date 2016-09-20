import * as types from './actionTypes';
import employeeApi from '../api/mockEmployeeApi';
export function loadEmployeesSuccess(employees){
  return {type:types.LOAD_EMPLOYEES_SUCCESS,employees};
}
export function updateEmployeeSuccess(employee){
  return {type:types.CREATE_EMPLOYEE_SUCCESS,employee};
}
export function createEmployeeSuccess(employee){
  return {type:types.UPDATE_EMPLOYEE_SUCCESS,employee};
}

export function loadEmployees(employer){
  console.log("loadEmployees(employer)",employer);
  return function(dispatch){
    return employeeApi.getAllEmployees(employer).then(employees=>{
      dispatch(loadEmployeesSuccess(employees));
    }).catch(error=>{
      throw(error);
    });
  };
}
export function saveEmployee(employee){
  return function(dispatch){
    return employeeApi.saveEmployee(employee).then(employee=>{
      employee.id ? dispatch(updateEmployeeSuccess(employee)):dispatch(createEmployeeSuccess(employee));
    }).catch(error=>{
      throw(error);
    });
  };
}
