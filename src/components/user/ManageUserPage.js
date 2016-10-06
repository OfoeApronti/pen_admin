import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import UserForm from './UserForm';
import {Link} from "react-router";

class ManageUserPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      user:Object.assign({},props.user),
      errors:{}
    };
    this.saveUser=this.saveUser.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.user.email!=nextProps.user.email){
      this.setState({user:Object.assign({},nextProps.user)});
    }
  }
  saveUser(event){
    event.preventDefault();
    this.props.actions.saveUser(this.state.user);
    this.context.router.push('/users/'+this.state.user.employer);
  }
  render(){
    return(
        <UserForm 
        user={this.state.user}
        onChange={this.updateEmployeeState}
        onSave={this.saveUser}
        errors={this.state.errors}
        fundEvents={this.fundEvents}
        />
    );
  }
}

function mapStateToProps(state,ownProps){
  let user={email:"",name:"",role:"",passwordMatch:""};
  return {
    user:user
  };
}
ManageUserPage.propTypes={
    user:PropTypes.object.isRequired,
    actions:PropTypes.object.isRequired
};
ManageUserPage.contextTypes={
  router:PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(userActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageUserPage);