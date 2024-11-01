import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OutlineAccordionTitle } from "@/Constant";
import { OutlineAccordionSubTitle, OutlineData } from "@/Data/Uikits/Accordion";
import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col } from "reactstrap";

export const OutlineAccordion = () => {
  const [open, setOpen] = useState("");
  const toggle = (id: string) => {
    open === id ? setOpen("") : setOpen(id);
  };

  return (
    <Col xl="6" sm="12">
      <Card>
        <CommonCardHeader title={OutlineAccordionTitle} span={OutlineAccordionSubTitle} />
        <CardBody>
          <Accordion open={open} toggle={toggle} className="dark-accordion">
            {OutlineData &&
              OutlineData.map((item, index) => (
                <AccordionItem className="accordion-wrapper accordion-left-border" key={index}>
                  <AccordionHeader color="light-primary" className="text-info" targetId={item.id}>
                    {item.head}
                    {open === item.id ? <i className="iconly-Arrow-Up-2 icli ms-auto icon" /> : <i className="iconly-Arrow-Down-2 icli ms-auto icon" />}
                  </AccordionHeader>
                  <AccordionBody accordionId={item.id}>{item.text}</AccordionBody>
                </AccordionItem>
              ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};
