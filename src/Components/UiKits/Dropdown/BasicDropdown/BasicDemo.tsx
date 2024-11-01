import { Href } from "@/Constant";
import { useState } from "react";
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const BasicDemo = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle} direction="down">
        <DropdownToggle color="primary" caret>
          {"Dashboard"}
        </DropdownToggle>
        <DropdownMenu className="dropdown-block">
          <DropdownItem href={Href}>{"Project"}</DropdownItem>
          <DropdownItem href={Href}>{"Ecommerce"}</DropdownItem>
          <DropdownItem href={Href}>{"Crypto"}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
