import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DropdownWithInputTitle } from "@/Constant";
import { DropdownWithInputSubTitle } from "@/Data/Uikits/Dropdown";
import { MouseEvent, useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupText } from "reactstrap";

export const DropdownWithInput = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const stopPropagation = (e: MouseEvent<HTMLInputElement>) => e.stopPropagation();
  return (
    <Col xl="4" sm="6">
      <Card className="custom-input-type">
        <CommonCardHeader title={DropdownWithInputTitle} span={DropdownWithInputSubTitle} />
        <CardBody>
          <div className="common-flex">
            <ButtonGroup> 
              <Dropdown isOpen={open} toggle={toggle} direction="down">
                <DropdownToggle color="warning">{"Inputs"}</DropdownToggle>
                <DropdownMenu className="dropdown-block dropdown-wrapper dark-input-type">
                  <DropdownItem>
                    <InputGroup className="rounded-0 border-0 shadow-none">
                      <InputGroupText>
                        <Input className="mt-0" type="checkbox" onClick={stopPropagation} />
                        <span>{"Default checkbox"}</span>
                      </InputGroupText>
                    </InputGroup>
                    <InputGroup className="rounded-0 border-0 shadow-none">
                      <InputGroupText>
                        <Input className="mt-0" type="radio" onClick={stopPropagation} />
                        <span>{"Default radio"}</span>
                      </InputGroupText>
                    </InputGroup>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
