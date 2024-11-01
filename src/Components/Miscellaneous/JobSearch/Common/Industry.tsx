import { AllIndustries, IndustryHeading } from "@/Constant";
import { IndustryData } from "@/Data/Miscellaneous/JobSearch/JobSearchData";
import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse, Input, Label } from "reactstrap";
import HeaderWithIcon from "./HeaderWithIcon";
const Industry = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon heading={IndustryHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="animate-chk">
            {IndustryData.map((data, index) => (
              <Label className="d-block" key={index} htmlFor={`industryCheckBox-${index}`} check>
                <Input className="checkbox_animated" id={`industryCheckBox-${index}`} type="checkbox" />
                {data.industryTitle}({data.industryNumber})
              </Label>
            ))}
          </CardBody>
          <Button block className="w-100 text-center" color="primary">
            {AllIndustries}
          </Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default Industry;
