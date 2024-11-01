import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CollapesAccordionTitle } from "@/Constant";
import { CollapesAccordionSubTitle } from "@/Data/Uikits/Accordion";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Collapse } from "reactstrap";

export const CollapesAccordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <Col xl="6" sm="12">
      <Card>
        <CommonCardHeader title={CollapesAccordionTitle} span={CollapesAccordionSubTitle} />
        <CardBody>
          <p className="mb-2 common-flex">
            <Button color="info" onClick={() => setOpen(!open)}>
              {"Link with href"}
            </Button>
            <Button color="info" onClick={() => setOpen(!open)}>
              {"Button with data-bs-target"}
            </Button>
          </p>
          <Collapse isOpen={open}>
            <Card>
              <CardBody className="mb-0 border">{"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."}</CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  );
};
