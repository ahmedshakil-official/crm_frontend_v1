import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, SplitDropdownTitle } from "@/Constant";
import { SplitDropdownData, SplitDropdownSubTitle } from "@/Data/Uikits/Dropdown";
import { useState } from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { SplitDemo } from "./SplitDemo";

export const SplitDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Col sm="12" xl="12">
      <Card>
        <CommonCardHeader title={SplitDropdownTitle} span={SplitDropdownSubTitle} />
        <CardBody className="dropdown-basic me-0">
          <div className="common-flex">
            <SplitDemo />
            {SplitDropdownData &&
              SplitDropdownData.map((data, index) => (
                <ButtonGroup key={index}>
                  <Button outline color={data.class}>
                    {data.text}
                  </Button>
                  <Dropdown className="separated-btn" isOpen={open} toggle={toggle} direction="down">
                    <DropdownToggle color={data.class}>
                      <i className="iconly-Arrow-Down icli"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-content">
                      {data.menulist &&
                        data.menulist.map((item, index) => (
                          <DropdownItem href={Href} key={index}>
                            {item}
                          </DropdownItem>
                        ))}
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
