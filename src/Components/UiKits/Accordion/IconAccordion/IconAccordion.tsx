import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { IconAccordionTitle } from "@/Constant";
import { IconAccordionSubTitle, IconDemoData } from "@/Data/Uikits/Accordion";
import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col } from "reactstrap";
export const IconAccordion = () => {
  const [open, setOpen] = useState("");
  const toggle = (id: string) => (id !== open ? setOpen(id) : setOpen(""));
  return (
    <Col xl="6" sm="12">
      <Card className="custom-icon-accordion">
        <CommonCardHeader title={IconAccordionTitle} span={IconAccordionSubTitle} />
        <CardBody className="accordion-border">
          <Accordion open={open} toggle={toggle}>
            {IconDemoData &&
              IconDemoData.map((item, index) => ( 
                <AccordionItem key={index}>
                  <AccordionHeader color="light-secondary" className="gap-2 text-secondary" targetId={item.id}>
                    {item.icon} {item.head}
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
