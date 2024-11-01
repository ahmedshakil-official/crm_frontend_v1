import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HeadingDropdownTitle, Href } from "@/Constant";
import { HeadingDropdownSubTitle } from "@/Data/Uikits/Dropdown";
import { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const HeadingDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Col xl="4" sm="6">
      <Card>
        <CommonCardHeader title={HeadingDropdownTitle} span={HeadingDropdownSubTitle} />
        <CardBody>
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle} direction="down">
                <DropdownToggle caret color="success" className="rounded-pill text-white">
                  {"Party"}
                </DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem href={Href} className="border-bottom fw-bold fs-6 bg-light font-dark">
                    {"Party List"}
                  </DropdownItem>
                  <DropdownItem href={Href}>{"Balloons"}</DropdownItem>
                  <DropdownItem href={Href}>{"Cake"}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
