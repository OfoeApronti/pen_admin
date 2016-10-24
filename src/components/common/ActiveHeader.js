import React,{PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import {Navbar, NavItem, Nav, MenuItem,NavDropdown} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../actions/loginActions';

class ActiveHeader extends React.Component{
  constructor(props,context){
    super(props,context);
    this.applyLogin=this.applyLogin.bind(this);
    this.logOut=this.logOut.bind(this);
  }
  logOut(){
    console.log("log me out");
    this.props.actions.logOut();
    this.context.router.push("/login");
  }
  applyLogin(){
    if (this.props.isAuthenticated){
      return (
        <Navbar >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Pen Admin</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} >
              <IndexLink to="/" activeClassName="active">
                Home
              </IndexLink>
            </NavItem>
            <NavItem eventKey={2} >
              <Link to="/clients" activeClassName="active">Client/Employers</Link>
            </NavItem>
            <NavItem eventKey={2} >
              <Link to="/users" activeClassName="active">Users</Link>
            </NavItem>
            <NavDropdown eventKey={3} title="Registration" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><Link to="/clients" activeClassName="active">Clients</Link></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2}>Contributor</MenuItem>
              <MenuItem divider />  
              <MenuItem eventKey={3.3}><Link to="/employees" activeClassName="active">Employees</Link></MenuItem>        
            </NavDropdown>
        </Nav>
          <Nav pullRight  className="right-space">
            <NavItem eventKey={1} href="#">{this.props.name}</NavItem>
            <NavItem eventKey={2} href="#" onClick={this.logOut}>
               Logout
            </NavItem>
            
          </Nav>
      </Navbar.Collapse>
    </Navbar> 
      );
    }else {
      return (
        <Navbar >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Pen Admin</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
      
          <Nav pullRight className="right-space">
            <MenuItem eventKey={4.1}>
              <Link to="/login" activeClassName="active">Login</Link>
            </MenuItem>
          </Nav>
      </Navbar.Collapse>
    </Navbar> 
      );
    }
  }
  render(){
    console.log("user name",this.props.name);
    return(
      <div>
      {this.applyLogin()}
      </div>
    );
  } 
}

function mapStateToProps(state){
  let isAuthenticated=state.login.isAuthenticated;
  let name=state.login.name;
  let email=state.login.email;

  return {
    isAuthenticated:isAuthenticated,
    name:name,
    email:email
  };
}
ActiveHeader.propTypes={
  isAuthenticated:PropTypes.bool.isRequired,
  name:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  actions:PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(loginActions,dispatch)
  };
}

ActiveHeader.contextTypes={
  router:PropTypes.object.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ActiveHeader);