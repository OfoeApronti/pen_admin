import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';
import EmployeeForm from './EmployeeForm';
import {Link} from "react-router";

class ManageEmployeePage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      employee:Object.assign({},props.employee),
      errors:{}
    };
    this.updateEmployeeState=this.updateEmployeeState.bind(this);
    this.saveEmployee=this.saveEmployee.bind(this);
    this.fundEvents=this.fundEvents.bind(this);
    
  }
  componentWillReceiveProps(nextProps){
    if(this.props.employee.id!=nextProps.employee.id){
      this.setState({employee:Object.assign({},nextProps.employee)});
    }
  }
  updateEmployeeState(event){
    const field=event.target.name;
    let employee=this.state.employee;
    employee[field]=event.target.value;
    return this.setState({employee:employee});
  }
  saveEmployee(event){
    event.preventDefault();
    this.props.actions.saveEmployee(this.state.employee);
    this.context.router.push('/employees/'+this.state.employee.employer);
  }
  fundEvents(){
    let id=this.state.employee.id;
    let name=this.state.employee.name;
    let employer=this.state.employee.employer;
    this.context.router.push('/fundevents/'+id+'/'+employer+'/'+name);
  }
  render(){
    let id=this.state.employee.id;
    let name=this.state.employee.name;
    let employer=this.state.employee.employer;
    return(
      <div>
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to={"/employees/"+this.state.employee.employer}>Employees</Link></li>
          <li className="active">Employee Details</li>
        </ol>

        <EmployeeForm 
        employee={this.state.employee}
        onChange={this.updateEmployeeState}
        onSave={this.saveEmployee}
        errors={this.state.errors}
        fundEvents={this.fundEvents}
        />
      </div>
    );
  }
}

function getEmployeeById(employees,employeeId,employer){
  const employee=employees.filter(employee=>employee.id==employeeId && employee.employer==employer);
  if (employee){
    return employee[0];
  }
  return null;
  
}

function mapStateToProps(state,ownProps){
  const employeeId=ownProps.params.id;
  const employer=ownProps.params.employer;
  let employee={id:"",name:"",address:"",email:"",phone:"",rm:"",initDate:"",fundType:""};
  if (employeeId && state.employees.length>0){
    employee=getEmployeeById(state.employees,employeeId,employer);
  }
  return {
    employee:employee,
    employer:employer
  };
}
ManageEmployeePage.propTypes={
    employee:PropTypes.object.isRequired,
    employer:PropTypes.string.isRequired,
    actions:PropTypes.object.isRequired

};
ManageEmployeePage.contextTypes={
  router:PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(employeeActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageEmployeePage);