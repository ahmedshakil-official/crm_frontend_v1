import { ImagePath } from "@/Constant";
import Image from "next/image";
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
          <Image
            width={91}
            height={27}
            className="img-fluid for-light"
            src={`${ImagePath}/logo/logo1.png`}
            alt="looginpage"
          />
          <Image
            width={91}
            height={27}
            className="img-fluid for-dark d-none"
            src={`${ImagePath}/logo/logo-dark.png`}
            alt="looginpage"
          />
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
              <NavLink href="/dashboard/organization" className="text-white">
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
