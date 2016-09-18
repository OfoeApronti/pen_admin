import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const EmployeeListRow=({employee})=>{
  return (
    <tr>
      <td><Link to={'/employee/'+employee.id+'/'+employee.employer}>Details</Link></td>
      <td>{employee.name}</td>
      <td>{employee.employer}</td>
      <td>{employee.nok}</td>
      <td>{employee.dob}</td>
      <td>{employee.ssnit}</td>
      <td>{employee.phone}</td>
      <td>{employee.email}</td>
      <td>{employee.initDate}</td>
    </tr>
  );
};
EmployeeListRow.propTypes={
  employee:PropTypes.object.isRequired
};
export default EmployeeListRow;