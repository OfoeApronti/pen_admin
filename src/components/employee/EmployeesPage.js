import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EmployeeList from './EmployeeList';
import {browserHistory} from 'react-router';
import * as employeeActions from '../../actions/employeeActions';

class EmployeesPage extends React.Component{
  constructor(props,context){
    super(props,context);
    /*this.state={
      employees:Object.assign([],props.employees)
    };*/
    this.redirectToAddEmployeePage=this.redirectToAddEmployeePage.bind(this);
  }
  componentWillMount(){
    console.log("running componentWillMount" );
    console.log("this.props.employer",this.props.employer );
    this.props.actions.loadEmployees(this.props.employer);
    //this.setState({employees:Object.assign([],this.props.employees)});
  }
  redirectToAddEmployeePage(){
    browserHistory.push('/employee');
  }
  render(){
    const {employees}=this.props;
    return (
      <div>
        <h1> Staff of {this.props.employer.toUpperCase()} </h1>
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
  employees:PropTypes.array.isRequired,
  employer:PropTypes.string.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
  const employer=ownProps.params.employer;

  return {
    employer:employer,
    employees:state.employees
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(employeeActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeesPage);