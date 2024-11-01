import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FlushAccordionTitle } from "@/Constant";
import { FlushAccordionSubTitle, FlushData } from "@/Data/Uikits/Accordion";
import React, { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col } from "reactstrap";

export const FlushAccordion = () => {
  const [open, setOpen] = useState("flush1");
  const toggle = (id: string) => (open === id ? setOpen("") : setOpen(id));
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={FlushAccordionTitle} span={FlushAccordionSubTitle} />
        <CardBody>
          <Accordion open={open} toggle={toggle} className="dark-accordion" flush={true}>
            {FlushData &&
              FlushData.map((data, index) => (
                <AccordionItem key={index}>
                  <AccordionHeader color="light-success" className="text-success" targetId={data.id}>
                    {data.head}
                  </AccordionHeader>
                  <AccordionBody accordionId={data.id}>
                    <ul className="d-flex flex-column gap-1 accordions-content">
                      {data.child.map((item, index) => (
                        <li key={index}>{item.text}</li>
                      ))}
                    </ul>
                  </AccordionBody>
                </AccordionItem>
              ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};
