import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'




class Header extends React.Component {
  render() {
    
  
  


    return ( 

      <Navbar fluid={true} inverse  collapseOnSelect  >
        <Navbar.Header>
          <Navbar.Brand >
            <a href="#brand"><img width={30} height={30} alt="" src="https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2018/04/26/0426moon.jpg" /></a>
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
            
            <NavDropdown  eventKey={3} title="Profile" id="basic-nav-dropdown"  >
                    
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