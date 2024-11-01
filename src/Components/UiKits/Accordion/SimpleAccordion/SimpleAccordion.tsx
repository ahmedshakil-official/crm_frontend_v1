import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col } from "reactstrap";
import { SimpleAccordionTitle } from "@/Constant";
import { SimpleAccordionSubTitle, AccordionList } from "@/Data/Uikits/Accordion";
import { useState } from "react";

export const SimpleAccordion = () => {
  const [open, setOpen] = useState<string>("1");
  const toggle = (id: string) => (open === id ? setOpen("") : setOpen(id));
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={SimpleAccordionTitle} span={SimpleAccordionSubTitle} />
        <CardBody>
          <Accordion open={open} toggle={toggle}>
            {AccordionList.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionHeader targetId={item.id} className={item.accordionHeaderClass}>
                  <span className={item.spanClass}>{item.accordionHeading}</span>
                  {open === item.id ? <i className="iconly-Arrow-Up-2 icli ms-auto icon" /> : <i className="iconly-Arrow-Down-2 icli ms-auto icon" />}
                </AccordionHeader>
                <AccordionBody accordionId={item.id}>{item.bodyText}</AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};
