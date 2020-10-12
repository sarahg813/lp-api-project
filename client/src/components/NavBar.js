import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div role="navigation" aria-label="main navigation">
      <Navbar light expand="md">
        <NavbarBrand tag={RouterLink} to="/">
          Animals to Adopt
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RouterLink} to="/randomanimals">
                List of Random Animals
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} to="/filter" onClick={toggle}>
                Filter
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
