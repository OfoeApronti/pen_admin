import React,{PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import {Navbar, NavItem, Nav, MenuItem,NavDropdown} from 'react-bootstrap';

const Header=()=>{
  return(
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
          <Link to="/courses" activeClassName="active">Courses</Link>
        </NavItem>
        <NavDropdown eventKey={3} title="Registration" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}><Link to="/clients" activeClassName="active">Clients</Link></MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.2}>Contributor</MenuItem>
          <MenuItem divider />  
          <MenuItem eventKey={3.3}><Link to="/employees" activeClassName="active">Employees</Link></MenuItem>        
        </NavDropdown>
        <NavItem eventKey={3}>
          <Link to="/about" activeClassName="active">About
          </Link>
        </NavItem>
        
      </Nav>
        <Nav pullRight className="right-space">
          <NavItem eventKey={1} href="#">User Name </NavItem>
          <NavItem eventKey={2} href="#">LogOut</NavItem>
        </Nav>

    </Navbar.Collapse>
</Navbar>
  );
};
export default Header;