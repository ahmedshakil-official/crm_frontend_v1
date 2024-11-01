import { Href } from "@/Constant";
import { useState } from "react";
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const RoundedDemo = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle} direction="down">
        <DropdownToggle caret color="primary" className="rounded-pill">
          {"Primary"}
        </DropdownToggle>
        <DropdownMenu className="dropdown-block">
          <DropdownItem href={Href}>{"Dark"}</DropdownItem>
          <DropdownItem href={Href}>{"Light"}</DropdownItem>
          <DropdownItem href={Href}>{"Lighter"}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
