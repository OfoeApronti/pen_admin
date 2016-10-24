import React, {PropTypes} from 'react';
import UserRegistryForm from './UserRegistryForm';
//import {Link} from "react-router";
import toastr from "toastr";
import $ from "jquery";

class UserRegistryPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      registry:{name:"",email:"",password1:"",password2:""},
      errors:{}
    };
    
    this.onChange=this.onChange.bind(this);
    this.registerUser=this.registerUser.bind(this);
    this.onPwd2=this.onPwd2.bind(this);
  }
  onChange(event){
    const field=event.target.name;
    let registry=this.state.registry;
    registry[field]=event.target.value;
    return this.setState({registry:registry});
  }

  onPwd2(event){
    const field=event.target.name;
    let registry=this.state.registry;
    let passwordCheck=event.target.value;
    registry[field]=passwordCheck;
    let pwd1=this.state.registry.password1;
    this.setState({registry:registry});
    let errors=this.state.errors;
    let u=event.target;
    if (pwd1!=passwordCheck){
      
      u.setCustomValidity("Passwords don't match");
      this.state.setState({errors:errors})
    } else {
      u.setCustomValidity("");
    }

  }

  registerUser(event){
    event.preventDefault();
    if (this.state.errors.status){
       return false;
    }
    //this.props.actions.registryUser(this.state.registry);
    let e=this.state.errors;
    let email=this.state.registry.email;
    let name=this.state.registry.name;
    let password=this.state.registry.password1;
    let passwordCheck=this.state.registry.password2;
    
    let config = {
      method: 'POST',
      mode:'cors',
      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
      body:JSON.stringify({"email":email,"name":name,"password":password})
    };
    console.log("about to fetch");
    fetch("http://localhost/api/register",config).
      then(response=> response.json().
      then(registry=>({registry,response}))).
      then(({registry,response})=>{
        if (!response.ok){
          let msg=registry.msg;
          if (msg=="invalid_user"){
            console.log("invalid_user");
          } else if(msg=="duplicate") {
            console.log("duplicate");
          } else{
            console.log("internal error");
          }
          return Promise.reject(registry);
        }else{
          console.log("user registered");
          toastr.info("User registered");
          this.context.router.push('/about/');
        }
      })
      .catch(err=>console.log("Error",err));
      return false;
  }
  
  render(){
    return(
        <UserRegistryForm
        registry={this.state.registry}
        onChange={this.onChange}
        onSave={this.registerUser}
        errors={this.state.errors}
        pwd2onChange={this.onPwd2}
        />
        
    );
  }
}

UserRegistryPage.contextTypes={
  router:PropTypes.object.isRequired
};


export default UserRegistryPage;