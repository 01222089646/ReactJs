import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'




class Header extends React.Component {
  render() {
    const header = {
      backgroundColor: 'blue'
      
  };
  
  


    return ( 

      <Navbar fluid={true} inverse  collapseOnSelect  style={header} >
        <Navbar.Header>
          <Navbar.Brand >
            <a href="#brand">Hình nền</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Mua sắm 1
            </NavItem>
            <NavItem eventKey={2} href="#">
              Mua sắm 2
            </NavItem>

          </Nav>
          <Nav pullRight >
            <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown"  >
              
              <MenuItem eventKey={3.1}>Logout</MenuItem>
              <MenuItem eventKey={3.2} href="/profile">Profile</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

  }
}
export default Header;