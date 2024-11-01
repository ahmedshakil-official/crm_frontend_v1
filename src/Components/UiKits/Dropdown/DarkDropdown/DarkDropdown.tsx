import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DarkDropdownTitle, Href } from "@/Constant";
import { DarkDropdownSubTitle } from "@/Data/Uikits/Dropdown";
import { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const DarkDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <Col xl="4" sm="6">
      <Card className="custom-dark-dropdown">
        <CommonCardHeader title={DarkDropdownTitle} span={DarkDropdownSubTitle} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex dark-dropdown">
            <Dropdown isOpen={open} toggle={toggle} direction="down">
              <DropdownToggle caret color="dark" className="text-white">
                {"Dark Night"}
              </DropdownToggle>
              <DropdownMenu className="dropdown-block" dark>
                <DropdownItem href={Href} active>
                  {"Dark moon"}
                </DropdownItem>
                <DropdownItem href={Href}>{"Dark owl"}</DropdownItem>
                <DropdownItem href={Href}>{"Nightfall"}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
