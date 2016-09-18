import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EmployeeList from './EmployeeList';
import {browserHistory} from 'react-router';

class EmployeesPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.redirectToAddEmployeePage=this.redirectToAddEmployeePage.bind(this);
  }
  redirectToAddEmployeePage(){
    browserHistory.push('/employee');
  }
  render(){
    const {employees}=this.props;
    return (
      <div>
        <h1> Clients </h1>
        <input type="submit"
          value="Add Employee"
          className="btn btn-primary"
          onClick={this.redirectToAddEmployeePage} />
        <EmployeeList employees={employees} />
      </div>
    );
  }
}
EmployeesPage.propTypes={
  employees:PropTypes.array.isRequired
};
function mapStateToProps(state,ownProps){
  return {
    employees:state.employees
  };
}

export default connect(mapStateToProps)(EmployeesPage);