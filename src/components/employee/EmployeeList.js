
import React, {PropTypes} from 'react';
import EmployeeListRow from './EmployeeListRow';

const EmployeeList=({employees})=> {
  return (
    <table className="table table-condensed">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Employer</th>
          <th>Next Of Kin</th>
          <th>Date Of Birth</th>
          <th>SSNIT#</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Init Date</th>
        </tr>
      </thead>
      <tbody>
      {employees.map(employee=>
        <EmployeeListRow key={employee.id} employee={employee} />
        )
      }
      </tbody>    
    </table>
  );
};
EmployeeList.propTypes={
  employees:PropTypes.array.isRequired
};
export default EmployeeList;