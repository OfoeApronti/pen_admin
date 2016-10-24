import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../actions/loginActions';
import LoginForm from './LoginForm.js';
import {Link} from "react-router";
import fetch from 'isomorphic-fetch';

class LoginPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      login:Object.assign({},props.login),
      errors:{}
    };
    this.loginUser=this.loginUser.bind(this);
    this.updateLoginState=this.updateLoginState.bind(this);
  }
  updateLoginState(event){
    const field=event.target.name;
    let login=this.state.login;
    login[field]=event.target.value;
    return this.setState({login:login});
  }
  loginUser(event){
    event.preventDefault();
    //this.props.actions.loginUser(this.state.login);
    let email=this.state.login.email;
    let password=this.state.login.password;
    let config = {
      method: 'POST',
      mode:'cors',
      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
      //body: `username=${this.state.login.email}&password=${this.state.login.password}`
      body:JSON.stringify({"email":email,"password":password})
    };
    fetch("http://localhost/api/login",config).
      then(response=> response.json().
      then(user=>({user,response}))).
      then(({user,response})=>{
        if (!response.ok){
          this.props.loginFailed();
          return Promise.reject(user);
        }else{
          sessionStorage.setItem("token",user.token);
          sessionStorage.setItem("name",user.name);
          this.props.actions.loginSuccess(user);
          this.context.router.push("/");
        }
      })
      .catch(err=>console.log("Error",err));

    
  }
  render(){
    return(
        <LoginForm  
        login={this.state.login}
        onChange={this.updateLoginState}
        onLogin={this.loginUser}
        errors={this.state.errors}
        />
    );
  }
}

function mapStateToProps(state,ownProps){
  let login={email:"",password:""};
  if (state.login.length>0){
    login=state.login;
  }
  return {
    login:login
  };
}
LoginPage.propTypes={
    login:PropTypes.object.isRequired,
    actions:PropTypes.object.isRequired,
    loginFailed:PropTypes.func.isRequired,
    loginSuccess:PropTypes.func.isRequired
};
LoginPage.contextTypes={
  router:PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(loginActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);