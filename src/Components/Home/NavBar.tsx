import { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand className="fs-3" href="/">
          CRM
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar sticky>
            <NavItem>
              <NavLink href="/" className="text-white ">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className="text-white">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services" className="text-white">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className="text-white">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dashboard/default" className="text-white">
                Dashboard
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
