import { Href } from "@/Constant";
import { useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const SplitDemo = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <ButtonGroup>
      <Button outline color="primary">
        {"Widgets"}
      </Button>
      <Dropdown className="separated-btn" isOpen={open} toggle={toggle} direction="down">
        <DropdownToggle color="primary">
          <i className="iconly-Arrow-Down icli"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-content">
          <DropdownItem href={Href}>{"General"}</DropdownItem>
          <DropdownItem href={Href}>{"Chart"}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
