import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';




const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  

  
  return (


    <div>

      
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/Homen">FE Architect</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Registration">Registration</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Test">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About us</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
        </Nav>
           
          <NavLink href="/login">Home</NavLink>
          <NavbarText>Farok Eyada</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export {NavBar};